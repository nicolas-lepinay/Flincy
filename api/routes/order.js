const router = require('express').Router();
const Order = require('../models/Order');
const { verifyToken, verifyTokenAndAuthorization, verifyTokenAndAdmin } = require('./verifyToken');

// CREER UNE COMMANDE
router.post("/", async (req, res) => {
    try {
        const order = new Order(req.body);
        const savedOrder = await order.save();
        res.status(200).json(savedOrder);
    } catch(err) {
        res.status(500).json(err);
    }
});

// TROUVER LES COMMANDES D'UN UTILISATEUR
router.get('/find/:userId', async (req, res) => {
    try {
        const orders = await Order.find({ userId: req.params.userId })
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// MODIFIER UNE COMMANDE
router.put("/:id", verifyTokenAndAdmin, async (req, res) => {
    try {
        const updatedOrder = await Order.findByIdAndUpdate(req.params.id, {
            $set: req.body,
        }, {new: true});
        res.status(200).json(updatedOrder);
    } catch(err) {
        res.status(500).json(err);
    }
});

// SUPPRIMER UNE COMMANDE
router.delete('/:id', verifyTokenAndAdmin, async (req, res) => {
    try {
        await Order.findByIdAndDelete(req.params.id)
        res.status(200).json("La commande a été supprimée.")
    } catch (err) {
        res.status(500).json(err);
    }
});

// TROUVER TOUTES LES COMMANDES
router.get('/findAll', async (req, res) => {
    try {
        const orders = await Order.find()
        res.status(200).json(orders);
    } catch (err) {
        res.status(500).json(err);
    }
});

// TROUVER LE REVENU MENSUEL
router.get("/income", async (req, res) => {
    const date = new Date();
    const lastMonth = new Date(date.setMonth(date.getMonth() - 1));
    const previousMonth = new Date(new Date().setMonth(lastMonth.getMonth() - 1));
  
    try {
      const income = await Order.aggregate([
        { $match: { createdAt: { $gte: previousMonth } } },
        {
          $project: {
            month: { $month: "$createdAt" },
            sales: "$amount",
          },
        },
        {
          $group: {
            _id: "$month",
            total: { $sum: "$sales" },
          },
        },
      ]);
      res.status(200).json(income);
    } catch (err) {
      res.status(500).json(err);
    }
  });

module.exports = router;