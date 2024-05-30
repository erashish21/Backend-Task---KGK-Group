const express = require("express");
const router = express.Router();
const {
  getAllItems,
  getItemById,
  createItem,
  updateItem,
  deleteItem,
} = require("../controllers/itemController");
const auth = require("../middleware/auth");
const upload = require("../middleware/upload");

router.get("/", getAllItems);
router.get("/:id", getItemById);
router.post("/", auth, upload.single("image"), createItem);
router.put("/:id", auth, updateItem);
router.delete("/:id", auth, deleteItem);

module.exports = router;
