
const Item = require("../models/item");

const getAllItems = async (req, res) => {
  try {
    const items = await Item.findAll();
    res.json(items);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const getItemById = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    res.json(item);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const createItem = async (req, res) => {
  try {
    const { name, description, startingPrice, endTime } = req.body;
    let imageUrl = null;

    if (req.file) {
      imageUrl = `/uploads/${req.file.filename}`;
    }

    const newItem = await Item.create({
      name,
      description,
      startingPrice,
      currentPrice: startingPrice,
      imageUrl,
      endTime,
    });

    res.status(201).json(newItem);
  } catch (error) {
    console.error("Error creating item:", error);
    res.status(500).json({ error: "Internal Server Error" });
  }
};

const updateItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      await item.update(req.body);
      res.json(item);
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const deleteItem = async (req, res) => {
  try {
    const item = await Item.findByPk(req.params.id);
    if (item) {
      await item.destroy();
      res.json({ message: "Item deleted" });
    } else {
      res.status(404).json({ error: "Item not found" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  createItem,
  getAllItems,
  getItemById,
  updateItem,
  deleteItem,
};