const router = require('express').Router();
const Product = require('../models/Product');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// CREER UN PRODUIT
router.post('/', async (req, res) => {
    try {
        const newProduct = new Product(req.body);
        const savedProduct = await newProduct.save();
        res.status(200).json(savedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TROUVER  UN PRODUIT
router.get('/find/:id', async (req, res) => {
    try {
        const product = await Product.findById(req.params.id)
        res.status(200).json(product);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TROUVER PLUSIEURS PRODUITS
router.get('/find', async (req, res) => {
    const queryNew = req.query.new;
    const queryCategory = req.query.category;
    try {
        let products;

        if(queryNew) {
            products = await Product.find().sort({createdAt: -1}).limit(parseInt(queryNew));
        } else if(queryCategory) {
            products = await Product.find({categories:{
                $in: [queryCategory],
            },
        });
        } else {
            products = await Product.find();
        }

        res.status(200).json(products);
    } catch (err) {
        res.status(500).json(err);
    }
});

// MODIFIER UN PRODUIT
router.put('/:id', async (req, res) => {
    try {
        const updatedProduct = await Product.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedProduct);
    } catch (err) {
        res.status(500).json(err);
    }
});

// SUPPRIMER UN PRODUIT
router.delete('/:id', async (req, res) => {
    try {
        await Product.findByIdAndDelete(req.params.id)
        res.status(200).json("Le produit a été supprimé.")
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;