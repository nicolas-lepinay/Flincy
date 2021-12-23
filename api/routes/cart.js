const router = require('express').Router();
const Cart = require('../models/Cart');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// CREER UN PANIER
router.post("/", async (req, res) => {
    try {
        const cart = new Cart(req.body);
        const savedCart = await cart.save();
        res.status(200).json(savedCart);
    } catch(err) {
        res.status(500).json(err);
    }
});

// TROUVER LE PANIER D'UN UTILISATEUR
router.get('/find/:userId', async (req, res) => {
    try {
        const cart = await Cart.findOne({ userId: req.params.userId })
        res.status(200).json(cart);
    } catch (err) {
        res.status(500).json(err);
    }
});

// MODIFIER UN PANIER
router.put("/:id", async (req, res) => {
    try {
        const updatedCart = await Cart.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedCart);
    } catch(err) {
        res.status(500).json(err);
    }
});

// SUPPRIMER UN PANIER
router.delete('/:id', async (req, res) => {
    try {
        await Cart.findByIdAndDelete(req.params.id)
        res.status(200).json("Le panier a été supprimé.")
    } catch (err) {
        res.status(500).json(err);
    }
});

// TROUVER TOUS LES PANIERS
router.get('/findAll', async (req, res) => {
    try {
        const carts = await Cart.find()
        res.status(200).json(carts);
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;