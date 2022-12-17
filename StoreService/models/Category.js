"use strict";

const { DataTypes, Model } = require("sequelize"),
  sequelize = require("../config/dbCon");

class Category extends Model {}

Category.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM("a", "d"), // a: active, d: deleted
      defaultValue: "a",
    },
  },
  {
    // don't forget to enable timestamps!
    timestamps: true,

    // I want createdAt
    createdAt: true,

    // I dont want updatedAt
    updatedAt: true,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Category", // We need to choose the model name
  }
);
module.exports = Category;
