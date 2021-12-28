const router = require('express').Router();
const User = require('../models/User');
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

// REGISTER
router.post('/register', async (req, res) => {
    try {
        // Hashage du mot de passe :
        const hashedPassword = bcrypt.hashSync(req.body.password, 10);

        // Création d'un nouvel utilisateur :
        const newUser = new User({
            email: req.body.email,
            firstName: req.body.firstName,
            lastName: req.body.lastName,
            mobile: req.body.mobile,
            address_home: req.body.address_home,
            city: req.body.city,
            zipcode: req.body.zipcode,
            password: hashedPassword,
        })
        // Sauvegarde de l'utilisateur dans la base de données :
        const user = await newUser.save()
        res.status(201).json(user)
    } catch (err) {
        console.log(err);
        res.status(400).json(err);
    }
});

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne(
            { email: req.body.email });

        // Si la requête ne renvoit aucun utilisateur :
        !user && res.status(404).json("Cet email n'est pas enregistré."); 
    
        // Comparaison du mot de passe saisi avec le mot de passe hashé stocké dans la DB :
        const validPassword = bcrypt.compareSync(req.body.password, user.password);
    
        // Si le mot de passe saisi est faux :
        !validPassword && res.status(400).json("Le mot de passe est incorrect.");
    
        const accessToken = jwt.sign({
            id: user._id, 
            isAdmin: user.isAdmin,
        }, process.env.JWT_SECRET, 
        {expiresIn: "1d"}
        )
    
        // ✔️ Requête valide :
        const { password, ...rest } = user._doc;
        res.status(200).json({...rest, accessToken}); // On renvoit tous les champs sauf le mot de passe (par sécurité)
    
      } catch (err) {
        res.status(500).json(err);
        }
});


module.exports = router;