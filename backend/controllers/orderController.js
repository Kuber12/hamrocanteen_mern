const mongoose = require('mongoose');
const Item = require('../models/itemModel');
const Order = require('../models/orderModel');
const User = require('../models/userModel');
const asyncHandler = require('express-async-handler');

const addOrder = asyncHandler(async (req, res) => {
    const { userId, items, paymentMethod, status, orderDate } = req.body;

    if (!mongoose.Types.ObjectId.isValid(userId)) {
        return res.status(400).send({ message: "Invalid user ID format" });
    }

    // Check if the user exists
    const user = await User.findById(userId);
    if (!user) {
        return res.status(400).send({ message: `User with ID ${userId} not found` });
    }

    // Fetch items based on item IDs
    const itemIds = items.map(item => item.id);
    const orderItems = await Item.find({ _id: { $in: itemIds } });
    console.log("Fetched order items:", orderItems); // Debugging line

    if (orderItems.length !== items.length) {
        return res.status(400).send({ message: "Some items are not found" });
    }

    // Create a mapping from item ID to quantity
    const quantityMap = new Map(items.map(item => [item.id, item.quantity]));

    // Calculate the total price based on quantities
    let calculatedTotal = 0;
    const orderItemsData = orderItems.map(orderItem => {
        const quantity = quantityMap.get(orderItem._id.toString());

        if (!quantity) {
            throw new Error(`Quantity for item with ID ${orderItem._id} not provided`);
        }

        calculatedTotal += orderItem.price * quantity;

        return {
            item: orderItem._id,
            name: orderItem.name,  // Include name
            price: orderItem.price,  // Include price
            itemImg: orderItem.itemImg,  // Include item image
            availableDays: orderItem.availableDays,  // Include available days
            unit: orderItem.unit,  // Include unit
            quantity: quantity  // Include quantity
        };
    });

    console.log("Order items data:", orderItemsData); // Debugging line

    // Calculate the grandTotal
    const grandTotal = calculatedTotal;

    // Convert orderDate to a valid Date object, if necessary
    const orderDateObj = isNaN(Date.parse(orderDate)) ? new Date() : new Date(orderDate);

    // Create the order
    const order = await Order.create({
        userId: user._id,  // Use user's ObjectId
        items: orderItemsData,  // Store the items with full details
        grandTotal,
        paymentMethod,
        status,
        orderDate: orderDateObj
    });

    res.json(order);
});

module.exports = { addOrder };

// get all orders
const getOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find().populate('userId', 'name');
    res.json(orders);
});

// update order status to paid
const updateOrderStatus = asyncHandler(async (req, res) => {
    const { id, status } = req.body;
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) {
        return res.status(404).send({ message: "Order not found" });
    }
    res.json({ message: "Order status updated successfully" });
});

module.exports = { addOrder, getOrders, updateOrderStatus};
