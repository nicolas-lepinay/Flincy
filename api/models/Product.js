const mongoose = require("mongoose");

const ProductSchema = new mongoose.Schema({
    name:{
        type: String,
        required: true,
    },
    image:{
        type: String,
        default: "",
    },
    country:{
        type: String,
    },
    price:{
        type: Number,
    },
    weight:{
        type: String,
    },
    shop:{
        type: String,
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
    categories:{
        type: Array,
        required: true,
    },
    ingredients:{
        type: Array,
        default: [],
    },
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema)