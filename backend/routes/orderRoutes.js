const express = require("express");
const router = express.Router();
const { addItem, deleteItem, updateItem, getItemById, getAllItems } = require("../controllers/itemController");
const validateToken = require("../middleware/validateTokenHandler");

router.post("/", addItem);
router.get("/", getAllItems);

module.exports = router;

