const mongoose = require('mongoose');

const orderSchema = new mongoose.Schema({
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    items: [{
        name: { type: String, required: true }, // Changed from `itemName`
        price: { type: Number, required: true },
        itemCount: { type: Number, required: true, min: 1 } // Changed from `units`
    }],
    grandTotal: { type: Number, required: true },
    paymentMethod: { 
        type: String, 
        required: true
    },
    orderDate: { type: Date, default: Date.now },
    status: { 
        type: String, 
        required: true
    }
}, { timestamps: true });

module.exports = mongoose.model('Order', orderSchema);

