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
        required: [false, "Please provide item image URL"]
    },
    availableDays: {
        type: [String],
        required: [true, "Please specify the days item is available"]
    },
    unit: {
        type: String,
        required: [false, "Please specify the name of unit"]
    },
    quantitySold: {
        type: Number,
        default: 0
    }
})
module.exports =  mongoose.model('Item', itemSchema);