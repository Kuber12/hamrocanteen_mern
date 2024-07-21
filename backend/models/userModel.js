const mongoose = require("mongoose");

const userSchema = mongoose.Schema({
    username: {
        type: String,
        required: [true,"Please enter a username"],
        unique: [true, "Username already used"]
    },
    password: {
        type: String,
        required: [true,"Please enter a password"]
    },
    name: {
        type: String,
        required: [true,"Please enter your name"]
    },
    address: {
        type: String,
        required: [false,"Please enter your address"]
    },
    phone: {
        type: String,
        required: [false,"Please enter your phone number"]
    }
})

module.exports = mongoose.model("User",userSchema);