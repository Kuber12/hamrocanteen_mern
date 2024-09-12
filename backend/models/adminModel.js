const mongoose = require("mongoose");

const adminSchema = mongoose.Schema({
  username: {
    type: String,
    required: [true, "Please enter a username"],
    unique: [true, "Username already used"],
  },
  password: {
    type: String,
    required: [true, "Please enter a password"],
  },
  email: {
    type: String,
    required: [true, "Please enter an email"],
    unique: [true, "Email already used"],
  },
});

module.exports = mongoose.model("Admin", adminSchema);
