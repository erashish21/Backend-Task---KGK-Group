const Notification = require("../models/notification");

const getNotifications = async (req, res) => {
  try {
    const notifications = await Notification.findAll({
      where: { userId: req.user.id, isRead: false },
    });
    res.json(notifications);
  } catch (error) {
    console.error("Error retrieving notifications:", error);
    res.status(500).json({ error: "Failed to retrieve notifications" });
  }
};

const markAsRead = async (req, res) => {
  try {
    await Notification.update(
      { isRead: true },
      { where: { userId: req.user.id } }
    );
    res.json({ message: "Notifications marked as read" });
  } catch (error) {
    console.error("Error marking notifications as read:", error);
    res.status(500).json({ error: "Failed to mark notifications as read" });
  }
};

module.exports = {
  getNotifications,
  markAsRead,
};
