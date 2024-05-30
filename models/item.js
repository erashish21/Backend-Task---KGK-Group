const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

class Item extends Model {}

Item.init(
  {
    name: { type: DataTypes.STRING, allowNull: false },
    description: { type: DataTypes.TEXT, allowNull: false },
    startingPrice: {
      type: DataTypes.DECIMAL,
      allowNull: false,
      field: "starting_price",
    },
    currentPrice: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      field: "current_price",
    }, 
    imageUrl: { type: DataTypes.STRING, allowNull: true, field: "image_url" },
    endTime: { type: DataTypes.DATE, allowNull: false, field: "end_time" }, 
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
  { sequelize, modelName: "item", timestamps: false }
);

module.exports = Item;
