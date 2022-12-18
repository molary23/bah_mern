"use strict";

const { DataTypes, Model } = require("sequelize"),
  sequelize = require("../config/db");

class Product extends Model {}

Product.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    productModel: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    productQuantity: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      defaultValue: 0,
    },
    productStatus: {
      type: DataTypes.ENUM("a", "d"), // a: active, d: deleted
      defaultValue: "a",
    },
    productDescription: DataTypes.TEXT,
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
    modelName: "Product", // We need to choose the model name
  }
);
module.exports = Product;
