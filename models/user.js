const { Model, DataTypes } = require("sequelize");
const { sequelize } = require("../config/database");

class User extends Model {}

User.init(
  {
    username: { type: DataTypes.STRING, unique: true, allowNull: false },
    password: { type: DataTypes.STRING, allowNull: false },
    email: { type: DataTypes.STRING, unique: true, allowNull: false },
    role: { type: DataTypes.STRING, defaultValue: "user" },
  },
  {
    sequelize,
    modelName: "user",
    timestamps: true, 
  }
);

module.exports = User;
