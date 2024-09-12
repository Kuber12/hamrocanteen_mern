const express = require("express");
const router = express.Router();
const {addOrder, getOrders, updateOrderStatus} = require("../controllers/orderController");

router.post("/", addOrder);
router.get("/", getOrders);
router.put("/", updateOrderStatus);

module.exports = router;

