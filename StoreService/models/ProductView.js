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
    categoryId: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    categoryName: {
      type: DataTypes.STRING(50),
    },
    productName: {
      type: DataTypes.STRING(50),
    },
    productModel: {
      type: DataTypes.STRING(50),
    },
    productImage: {
      type: DataTypes.STRING(50),
    },
    productQuantity: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    userId: {
      type: DataTypes.INTEGER.UNSIGNED,
    },
    username: {
      type: DataTypes.STRING(50),
    },
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
