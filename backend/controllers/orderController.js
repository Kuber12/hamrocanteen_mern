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
const predictNextSales = async (req,res) => {
    try {
        const orders = await Order.find();
        const prediction = predictNextWeekSale(orders);
        console.log(prediction.message);
        res.json({ message: prediction.message, predictedSale: prediction.predictedSale });

    } catch (error) {
        console.error(error);
        res.status(500).json({ error: "An error occurred while retrieving all orders" });
    }
}
function getWeekNumber(date) {
    const d = new Date(date);
    d.setUTCHours(0, 0, 0, 0);
    d.setUTCDate(d.getUTCDate() + 4 - (d.getUTCDay() || 7)); // Thursday of current week
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(), 0, 1));
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1) / 7);
    return `${d.getUTCFullYear()}-W${weekNo}`;
}

// Function to group orders by week and predict next week's sale using linear regression
function predictNextWeekSale(orders) {

    // Group orders by week
    const weeklySales = orders.reduce((acc, order) => {
        const week = getWeekNumber(order.orderDate);
        if (!acc[week]) acc[week] = 0;
        acc[week] += order.grandTotal;
        return acc;
    }, {});

    // Convert weekly sales data into an array for regression [weekIndex, sales]
    const weeklySalesArray = Object.values(weeklySales).map((sales, index) => [index + 1, sales]);

    // Calculate linear regression coefficients (m and b)
    const n = weeklySalesArray.length;
    const sumX = weeklySalesArray.reduce((acc, curr) => acc + curr[0], 0);
    const sumY = weeklySalesArray.reduce((acc, curr) => acc + curr[1], 0);
    const sumXY = weeklySalesArray.reduce((acc, curr) => acc + (curr[0] * curr[1]), 0);
    const sumX2 = weeklySalesArray.reduce((acc, curr) => acc + (curr[0] ** 2), 0);

    // Calculate slope (m)
    const m = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX ** 2);

    // Calculate intercept (b)
    const b = (sumY - m * sumX) / n;

    // Predict next week's sale using the regression line equation y = mx + b
    const nextWeekIndex = n + 1;
    const predictedSale = m * nextWeekIndex + b;

    return {
        predictedSale: Math.round(predictedSale),
        message: `The predicted sales for week ${nextWeekIndex} is $${Math.round(predictedSale)}.`
    };
}

// Export the controller functions
module.exports = {
    addOrder,
    getOrders,
    getUserOrders,
    updateOrderStatus,
    predictNextSales
};
