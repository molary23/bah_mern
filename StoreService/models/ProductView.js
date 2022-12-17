"use strict";

const { DataTypes, Model } = require("sequelize"),
  sequelize = require("../config/dbCon");

class ProductView extends Model {}

ProductView.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      primaryKey: true,
    },
    categoryId: DataTypes.INTEGER.UNSIGNED,
    categoryName: DataTypes.STRING,
    productName: DataTypes.STRING,
    productModel: DataTypes.STRING,
    productImage: DataTypes.STRING,
    productQuantity: DataTypes.INTEGER.UNSIGNED,
    productDescription: DataTypes.TEXT,
    productStatus: DataTypes.STRING,
    userId: DataTypes.INTEGER.UNSIGNED,
    username: DataTypes.STRING,
  },
  {
    // don't forget to enable timestamps!
    timestamps: false,

    // I want createdAt
    createdAt: false,

    // I dont want updatedAt
    updatedAt: false,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "ProductView", // We need to choose the model name
  }
);
ProductView.sync = () => Promise.resolve();
module.exports = ProductView;
