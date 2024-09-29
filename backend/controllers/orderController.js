const Order = require('../models/orderModel');
const mongoose = require('mongoose');

// Create a new order
const addOrder = async (req, res) => {
    try {
        const { userId, cart, paymentMethod, status } = req.body;

        // Validate if required fields are present
        if (!userId || !cart || cart.length === 0 || !paymentMethod || !status) {
            return res.status(400).json({ error: "Missing required fields" });
        }

        // Calculate the grand total from the cart items
        let grandTotal = 0;
        const items = cart.map(item => {
            grandTotal += parseFloat(item.price) * item.itemCount; // Calculate total for each item
            return {
                name: item.name,
                price: parseFloat(item.price), // Ensure price is a number
                itemCount: item.itemCount
            };
        });

        // Create a new order instance
        const newOrder = new Order({
            userId,
            items,
            grandTotal,
            paymentMethod,
            status
        });

        // Save the order to the database
        const savedOrder = await newOrder.save();
        res.status(201).json(savedOrder);

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while creating the order" });
    }
};

// Get all orders
const getOrders = async (req, res) => {
    try {
        const orders = await Order.find();
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while retrieving all orders" });
    }
};

// Get orders of a particular user
const getUserOrders = async (req, res) => {
    const userId = req.params.userid;
    try {
        const orders = await Order.find({ userId });
        res.status(200).json(orders);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while retrieving orders of the user" });
    }
};
// Update the status of an order
const updateOrderStatus = async (req, res) => {
    const { id, status } = req.body;
    try {
        const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
        res.status(200).json(order);
    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while updating the order status" });
    }
};

// Export the controller functions
module.exports = {
    addOrder,
    getOrders,
    getUserOrders,
    updateOrderStatus
};
