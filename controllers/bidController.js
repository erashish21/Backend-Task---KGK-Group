const Bid = require("../models/bid");
const Item = require("../models/item");

const getAllBidsForItem = async (req, res) => {
  try {
    const bids = await Bid.findAll({ where: { itemId: req.params.itemId } });
    res.json(bids);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

const placeBid = async (req, res) => {
  try {
    const { itemId } = req.params;
    const { bidAmount } = req.body;
    const item = await Item.findByPk(itemId);

    if (!item) {
      return res.status(404).json({ error: "Item not found" });
    }

    if (item.currentPrice < bidAmount) {
      const bid = await Bid.create({ itemId, userId: req.user.id, bidAmount });
      await item.update({ currentPrice: bidAmount });
      res.status(201).json(bid);
    } else {
      res
        .status(400)
        .json({ error: "Bid amount must be higher than current price" });
    }
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

module.exports = {
  getAllBidsForItem,
  placeBid,
};
