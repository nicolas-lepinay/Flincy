const router = require('express').Router();
const User = require('../models/User');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// TROUVER  UN UTILISATEUR
router.get('/find/:id', async (req, res) => {
    try {
        const user = await User.findById(req.params.id)
        const { password, ...rest } = user._doc;
        res.status(200).json({...rest});
    } catch (err) {
        res.status(500).json(err);
    }
});

// TROUVER TOUS LES UTILISATEURS
router.get('/findAll', async (req, res) => {
    try {
        const users = await User.find()
        res.status(200).json(users);
    } catch (err) {
        res.status(500).json(err);
    }
});

// MODIFIER UN UTILISATEUR
router.put('/:id', verifyTokenAndAuthorization, async (req, res) => {
    // Si l'utilisateur veut modifier son mot de passe :
    if (req.body.password) {
        try {
            req.body.password = bcrypt.hashSync(req.body.password, 10);
        } catch (err) {
            return res.status(500).json(err);
        }
    }
    // Sinon, on modifie les autres champs :
    try {
        const updatedUser = await User.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedUser);
    } catch (err) {
        return res.status(500).json(err);
    }
});

// SUPPRIMER UN UTILISATEUR
router.delete('/:id', verifyTokenAndAuthorization, async (req, res) => {
    try {
        await User.findByIdAndDelete(req.params.id)
        res.status(200).json("L'utilisateur a été supprimé.")
    } catch (err) {
        res.status(500).json(err);
    }
});

// TROUVER LES STATS UTILISATEURS
router.get('/stats', verifyTokenAndAdmin, async (req, res) => {
    const date = new Date();
    const lastYear = new Date(date.setFullYear(date.getFullYear() - 1));
    try {
        const data = await User.aggregate([
            { $match: { createdAt: { $gte: lastYear } } },
            {
                $project:{
                    month: { $month: "$createdAt" },
                },
            },
            {
                $group:{
                    _id: "$month",
                    total: { $sum: 1 }
                }
            }
        ]);
        res.status(200).json(data);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;