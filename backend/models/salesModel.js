/*************  ✨ Codeium Command ⭐  *************/
const mongoose = require("mongoose");

const salesSchema = new mongoose.Schema({
    date: { type: Date, default: Date.now },
    totalSales: { type: Number, required: true },
});

module.exports = mongoose.model("Sales", salesSchema);
/******  5decb6ef-b9e7-4124-ad81-322d56603cc6  *******/