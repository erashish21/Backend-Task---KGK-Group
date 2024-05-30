const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

class Bid extends Model {}

Bid.init(
  {
    bidAmount: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: "bid_amount",
    },
    itemId: { type: DataTypes.INTEGER, allowNull: false, field: "item_id" },
    userId: { type: DataTypes.INTEGER, allowNull: false, field: "user_id" },
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    },
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updated_at",
    },
  },
  { sequelize, modelName: "bid", timestamps: false }
);

module.exports = Bid;
