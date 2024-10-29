const Order = require('../models/orderModel');
const mongoose = require('mongoose');
const addOrder = async (req, res) => {
    try {
        const { userId, cart, paymentMethod, status } = req.body;

        if (!userId || !cart || cart.length === 0 || !paymentMethod || !status) {
            return res.status(400).json({ error: "Missing required fields" });
        }

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
const predictNextSales = async (req, res) => {
    try {
        // Retrieve all orders from the database
        const orders = await Order.find();

        // Step 1: Group orders by continuous weeks of the year using getContinuousWeekNumber
        const weeklySales = {};
        orders.forEach(order => {
            const orderDate = new Date(order.orderDate);
            const weekNumber = getContinuousWeekNumber(orderDate);

            // Use the continuous week number as the key
            const weekKey = `Week${weekNumber}`;

            // Aggregate sales for each week
            weeklySales[weekKey] = (weeklySales[weekKey] || 0) + order.grandTotal;
        });

        // Step 2: Prepare data for linear regression (x = continuous week number, y = total sales)
        const salesData = Object.entries(weeklySales).map(([week, totalSales], index) => {
            const weekNumber = parseInt(week.replace("Week", ""));
            return { weekNumber, totalSales };
        });

        // Step 3: Calculate linear regression coefficients (slope and intercept)
        const n = salesData.length;
        if (n < 2) {
            return res.status(400).json({ message: "Not enough data to perform prediction" });
        }

        let sumX = 0, sumY = 0, sumXY = 0, sumX2 = 0;
        salesData.forEach(data => {
            sumX += data.weekNumber;
            sumY += data.totalSales;
            sumXY += data.weekNumber * data.totalSales;
            sumX2 += data.weekNumber * data.weekNumber;
        });

        const slope = (n * sumXY - sumX * sumY) / (n * sumX2 - sumX * sumX);
        const intercept = (sumY - slope * sumX) / n;

        const nextWeekNumber = Math.max(...salesData.map(data => data.weekNumber)) + 1;
        const predictedSales = slope * nextWeekNumber + intercept;

        // Group orders by continuous weeks for additional data display
        const groupedWeeklyData = groupOrdersByContinuousWeek(orders);

        // Return the weekly sales, grouped data, and the predicted sales for the next week
        res.status(200).json({ 
            message: "Prediction successful", 
            weeklySales, 
            groupedWeeklyData, 
            predictedSales 
        });
    } catch (error) {
        console.error("Error while predicting sales:", error);
        res.status(500).json({ error: "An error occurred while predicting sales" });
    }
};

// Function to get the continuous week number for a given date (based on year start)
function getContinuousWeekNumber(date) {
    const startOfYear = new Date(date.getFullYear(), 0, 1);
    
    // Adjust startOfYear to the previous Sunday if it doesn't start on a Sunday
    const startDay = startOfYear.getUTCDay();
    if (startDay !== 0) {
        startOfYear.setUTCDate(startOfYear.getUTCDate() - startDay);
    }
    
    // Calculate past days in the year relative to this adjusted starting Sunday
    const pastDaysOfYear = (date - startOfYear) / 86400000; // 86400000 = milliseconds in a day
    
    // Return the continuous week number (each week starts from Sunday)
    return Math.ceil((pastDaysOfYear + 1) / 7);
}


// Function to group orders by continuous week of the year
function groupOrdersByContinuousWeek(orders) {
    const grouped = {};

    orders.forEach(order => {
        const orderDate = new Date(order.orderDate);
        const weekNumber = getContinuousWeekNumber(orderDate);
        const year = orderDate.getFullYear();
        const weekKey = `${year}-Week${weekNumber}`; // Year + Continuous Week Number

        if (!grouped[weekKey]) {
            grouped[weekKey] = {
                totalItemsSold: 0,
                totalRevenue: 0,
                orderCount: 0
            };
        }

        grouped[weekKey].orderCount += 1;
        grouped[weekKey].totalRevenue += order.grandTotal;

        order.items.forEach(item => {
            grouped[weekKey].totalItemsSold += item.itemCount;
        });
    });
    return grouped;
}


// Export the controller functions
module.exports = {
    addOrder,
    getOrders,
    getUserOrders,
    updateOrderStatus,
    predictNextSales
};
