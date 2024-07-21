const express = require("express");
const router = express.Router();
const { addItem, deleteItem, updateItem, getItemById, getAllItems } = require("../controllers/itemController");
const validateToken = require("../middleware/validateTokenHandler");

router.post("/add", addItem);
// router.delete("/:id", validateToken, deleteItem);
// router.put("/:id", validateToken, updateItem);
router.get("/:id", getItemById);
router.get("/", getAllItems);

module.exports = router;

