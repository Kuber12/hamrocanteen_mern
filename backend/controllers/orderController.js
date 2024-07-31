const mongoose = require('mongoose');
const Item = require('../models/itemModel');
const asyncHandler = require('express-async-handler');
const Order = require('../models/orderModel');

const addOrder = asyncHandler(async (req, res) => {
    const { userId, items, grandTotal, paymentMethod, status, orderDate } = req.body;

    // Fetch items based on item IDs
    const itemIds = items.map(item => item.item);
    const orderItems = await Item.find({ _id: { $in: itemIds } });

    // Create a mapping from item ID to item data
    const itemMap = new Map(orderItems.map(item => [item._id.toString(), item]));

    // Calculate the total price based on quantities
    let calculatedTotal = 0;
    for (const orderItem of items) {
        const item = itemMap.get(orderItem.item);
        if (!item) {
            return res.status(400).send({ message: `Item with ID ${orderItem.item} not found` });
        }
        calculatedTotal += item.price * orderItem.quantity;
    }

    // Validate the grand total
    if (calculatedTotal !== grandTotal) {
        return res.status(400).send({ message: "Invalid order: Grand total does not match calculated total" });
    }

    // Create the order
    const order = await Order.create({ 
        userId, 
        items,
        grandTotal, 
        paymentMethod, 
        status, 
        orderDate 
    });

    res.json(order);
});


const getAllOrders = asyncHandler(async (req, res) => {
    const orders = await Order.find();
    res.json(orders);
});

const getOrderById = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const order = await Order.findById(id);
    if (!order) {
        return res.status(404).send({ message: "Order not found" });
    }
    res.json(order);
});

const updateOrder = asyncHandler(async (req, res) => {
    const { id } = req.params;
    const { status } = req.body;
    const order = await Order.findByIdAndUpdate(id, { status }, { new: true });
    if (!order) {
        return res.status(404).send({ message: "Order not found" });
    }
    res.json(order);
});

module.exports = { addOrder, getAllOrders, getOrderById, updateOrder };
