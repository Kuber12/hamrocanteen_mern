const mongoose = require("mongoose");
const itemSchema = mongoose.Schema({
    name: {
        type: String,
        required: [true, "Please enter item name"]
    },
    price: {
        type: Number,
        required: [true, "Please enter item price"]
    },
    itemImg: {
        type: String,
        required: [true, "Please provide item image URL"]
    },
    availableDays: {
        type: [String],
        required: [true, "Please specify the days item is available"]
    },
    unit: {
        type: String,
        required: [true, "Please specify the name of unit"]
    }
})

module.exports = mongoose.model("Item",itemSchema);