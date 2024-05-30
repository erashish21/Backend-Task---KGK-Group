const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");
const { getAllBidsForItem, placeBid } = require('../controllers/bidController');
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", auth, upload.single("image"), createItem);
router.put("/:id", auth, upload.single("image"), updateItem);
router.put("/:id", auth, updateItem);
router.delete("/:id", auth, deleteItem);

router.get('/:itemId/bids', getAllBidsForItem);
router.post('/:itemId/bids', auth, placeBid);

module.exports = router;
