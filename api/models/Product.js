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
    categories:{
        type: Array,
        required: true,
    },
}, {timestamps: true});

module.exports = mongoose.model('Product', ProductSchema)