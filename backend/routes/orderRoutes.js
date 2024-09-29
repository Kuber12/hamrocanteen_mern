const express = require("express");
const router = express.Router();
const {validateToken} = require("../middleware/validateTokenHandler");
const {addOrder, getOrders, getUserOrders, updateOrderStatus} = require("../controllers/orderController");

router.post("/", addOrder);
router.get("/", getOrders);
router.get("/:userid", getUserOrders);
router.put("/", updateOrderStatus);

module.exports = router;

