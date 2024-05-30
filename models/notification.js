const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/database"); // Ensure correct import
const User = require("./user");

class Notification extends Model {}

Notification.init(
  {
    userId: { type: DataTypes.INTEGER, references: { model: User, key: "id" } },
    message: { type: DataTypes.STRING, allowNull: false },
    isRead: { type: DataTypes.BOOLEAN, defaultValue: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: "notification" }
);

module.exports = Notification;
