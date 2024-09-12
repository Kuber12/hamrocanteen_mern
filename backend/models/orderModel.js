const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        item: { type: mongoose.Schema.Types.ObjectId, ref: 'Item', required:true },
        quantity: { type: Number, required: true }
    }],
    grandTotal: { type: Number, required: true },
    paymentMethod: { type: String, required: true },
    orderDate: { type: Date, default: Date.now},
    status: { type: String, required: true }
});

module.exports = mongoose.model('Order', orderSchema);
