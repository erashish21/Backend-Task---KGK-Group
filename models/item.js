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
    }, // Adjusting field to match the column name in the database
    currentPrice: {
      type: DataTypes.DECIMAL,
      defaultValue: 0,
      field: "current_price",
    }, // Adjusting field to match the column name in the database
    imageUrl: { type: DataTypes.STRING, allowNull: true, field: "image_url" }, // Adjusting field to match the column name in the database
    endTime: { type: DataTypes.DATE, allowNull: false, field: "end_time" }, // Adjusting field to match the column name in the database
    createdAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "created_at",
    }, // Adjusting field to match the column name in the database
    updatedAt: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      field: "updated_at",
    }, // Adjusting field to match the column name in the database
  },
  { sequelize, modelName: "item", timestamps: false }
);

module.exports = Item;
