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
    country:{
        type: String,
    },
    isAdmin:{
        type: Boolean,
        default: false,
    },
}, {timestamps: true});

module.exports = mongoose.model('User', UserSchema)