const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
    },
    mobile:{
        type: String,
        required: true,
    },
    country:{
        type: String,
        required: true,
    },
    price:{
        type: Number,
        required: true,
    },
    weight:{
        type: String,
        required: true,
    },
    shop:{
        type: String,
        required: true,
    },
    description:{
        type: String,
    },
    rating:{
        type: Number,
    },
    feedback:{
        type: Number,
    },
    categoryId:{
        type: String,
        required: true,
    },
    subcategoryId:{
        type: String,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema)