const router = require('express').Router();
const Category = require('../models/Category');

const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// CREER UNE CATEGORIE
router.post('/', async (req, res) => {
    try {
        const newCategory = new Category(req.body);
        const savedCategory = await newCategory.save();
        res.status(200).json(savedCategory);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TROUVER UNE CATEGORIE
router.get('/find/:id', async (req, res) => {
    try {
        const category = await Category.findById(req.params.id)
        res.status(200).json(category);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TROUVER LES SOUS-CATEGORIES D'UNE CATEGORIE
router.get('/subcategories/:categoryId', async (req, res) => {
    try {
        // La catégorie parente :
        const category = await Category.findById(req.params.categoryId);
        // Les sous-catégories (enfants) :
        const subcategories = await Promise.all(
            category.subcategories.map(id=> {
                return Category.findById(id)
            })
        );
        res.status(200).json(subcategories);
        
    } catch (err) {
        res.status(500).json(err);
    }
});

module.exports = router;