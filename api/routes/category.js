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

module.exports = router;