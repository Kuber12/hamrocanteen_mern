const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: String, required: true },
    items: [itemSchema],
    grandTotal: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    orderDate: { type: Date, required: true },
    status: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
