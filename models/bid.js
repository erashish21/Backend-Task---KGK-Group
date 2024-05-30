const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

class Bid extends Model {}

Bid.init(
  {
    bidAmount: { type: DataTypes.DECIMAL, allowNull: false },
    itemId: { type: DataTypes.INTEGER, allowNull: false },
    userId: { type: DataTypes.INTEGER, allowNull: false },
    createdAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
    updatedAt: { type: DataTypes.DATE, defaultValue: DataTypes.NOW },
  },
  { sequelize, modelName: "bid" }
);

module.exports = Bid;
