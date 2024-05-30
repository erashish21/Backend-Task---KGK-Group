const express = require("express");
const router = express.Router();
const { getAllBidsForItem, placeBid } = require("../controllers/bidController");
const auth = require("../middleware/auth");

router.get("/items/:itemId/bids", getAllBidsForItem);
router.post("/items/:itemId/bids", auth, placeBid);

module.exports = router;
