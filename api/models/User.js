const mongoose = require("mongoose");

const UserSchema = new mongoose.Schema({
    email:{
        type: String,
        required: true,
        unique: true,
    },
    password:{
        type: String,
        required: true,
    },
    mobile:{
        type: String,
        required: true,
        unique: true,
    },
    firstName:{
        type: String,
        required: true,
    },
    lastName:{
        type: String,
        required: true,
    },
    address_home:{
        type: String,
        required: true,
    },
    address_work:{
        type: String,
    },
    zipcode:{
        type: Number,
    },
    city:{
        type: String,
    },
    country:{
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
    favorites:{
        type: Array,
        default: [],
    },
    avatar:{
        type: String,
    }
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema)