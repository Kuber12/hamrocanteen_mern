const Item = require("../models/itemModel");
const asyncHandler = require("express-async-handler");

const addItem = asyncHandler(async (req, res) => {
  const { name, price, itemImg, availableDays, unit } = req.body;

  if (!name || !price) {
    return res.status(400).send({ message: "Please fill all fields!" });
  } else {
    const newItem = await Item.create({
      name,
      price,
      itemImg,
      availableDays,
      unit
    });
  }

  res.json({ message: "Item added successfully" });
});

const deleteItem = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const item = await Item.findByIdAndDelete(id);

  if (!item) {
    return res.status(404).send({ message: "Item not found" });
  }

  res.json({ message: "Item deleted successfully" });
});

const updateItem = asyncHandler(async (req, res) => {
  const { id } = req.params;
  const { name, price, itemImg, availableDays, unit } = req.body;

  const item = await Item.findByIdAndUpdate(
    id,
    { name, price, itemImg, availableDays, unit },
    { new: true }
  );

  if (!item) {
    return res.status(404).send({ message: "Item not found" });
  }

  res.json({ message: "Item updated successfully" });
});

const getItemById = asyncHandler(async (req, res) => {
  const { id } = req.params;

  const item = await Item.findById(id);

  if (!item) {
    return res.status(404).send({ message: "Item not found" });
  }

  res.json(item);
});

const getAllItems = asyncHandler(async (req, res) => {
  const items = await Item.find();
  res.json(items);
});

const countItems = asyncHandler(async (req, res) => {
  const count = await Item.countDocuments();
  res.json({ count });
});

module.exports = { addItem, deleteItem, updateItem, getItemById, getAllItems, countItems };

