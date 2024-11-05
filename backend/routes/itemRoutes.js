const express = require("express");
const router = express.Router();
const { addItem, deleteItem, updateItem, getItemById, getAllItems, countItems} = require("../controllers/itemController");
const validateToken = require("../middleware/validateTokenHandler");

router.post("/add", addItem);
router.delete("/:id", deleteItem);
// router.put("/:id", validateToken, updateItem);
router.get("/count",countItems);
router.get("/:id", getItemById);
router.get("/", getAllItems);

module.exports = router;

