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
const predictNextSales = async (req, res) => {
    try {
        // Retrieve all orders from the database
        const orders = await Order.find();

        // Step 1: Group orders by week
        const weeklySales = {};
        orders.forEach(order => {
            const orderDate = new Date(order.orderDate);
            const year = orderDate.getFullYear();

            // Calculate the week number
            const startOfYear = new Date(year, 0, 1);
            const daysSinceStartOfYear = Math.floor((orderDate - startOfYear) / 86400000);
            const weekNumber = Math.ceil((daysSinceStartOfYear + startOfYear.getDay() + 1) / 7);

            // Create a key in the format 'Year-WeekNumber' for weekly aggregation
            const weekKey = `${year}-${weekNumber}`;
            weeklySales[weekKey] = (weeklySales[weekKey] || 0) + order.grandTotal;
        });

        // Step 2: Prepare data for linear regression (x = week number, y = total sales)
        const salesData = Object.entries(weeklySales).map(([week, totalSales], index) => {
            return { weekNumber: index + 1, totalSales };
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

        // Step 4: Predict sales for the next week (weekNumber = n + 1)
        const nextWeekNumber = n + 1;
        const predictedSales = slope * nextWeekNumber + intercept;

        // Prepare response data to include grouped weekly sales and prediction
        const responseData = {
            message: "Prediction successful",
            weeklySales, // Include weekly sales in the response
            predictedSales
        };

        // Return the weekly sales data along with the predicted sales
        res.status(200).json(responseData);
    } catch (error) {
        console.error("Error while predicting sales:", error);
        res.status(500).json({ error: "An error occurred while predicting sales" });
    }
};

// Function to get the week number for a given date
function getWeekNumber(date) {
    const d = new Date(Date.UTC(date.getFullYear(), date.getMonth(), date.getDate()));
    const dayNum = d.getUTCDay() || 7; // Make Sunday=7
    d.setUTCDate(d.getUTCDate() + 4 - dayNum);
    const yearStart = new Date(Date.UTC(d.getUTCFullYear(),0,1));
    const weekNo = Math.ceil((((d - yearStart) / 86400000) + 1)/7);
    return weekNo;
  }
  
  // Function to group orders by week
function groupOrdersByWeek(orders) {
    const grouped = {};

    orders.forEach(order => {
        const orderDate = new Date(order.orderDate);
        const weekNumber = getWeekNumber(orderDate);
        const year = orderDate.getFullYear();
        const weekKey = `${year}-W${weekNumber}`;

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
function prepareDataForRegression(groupedData) {
    const weeks = [];
    const totalItemsSold = [];
    const totalRevenue = [];
  
    // Sorting weeks to maintain chronological order
    const sortedWeeks = Object.keys(groupedData).sort();
  
    sortedWeeks.forEach((week, index) => {
      weeks.push(index + 1); // Assigning a sequential number to each week
      totalItemsSold.push(groupedData[week].totalItemsSold);
      totalRevenue.push(groupedData[week].totalRevenue);
    });
  
    return { weeks, totalItemsSold, totalRevenue };
  }
  

// Export the controller functions
module.exports = {
    addOrder,
    getOrders,
    getUserOrders,
    updateOrderStatus,
    predictNextSales
};
