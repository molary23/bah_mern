"use strict";

const { DataTypes, Model } = require("sequelize"),
  sequelize = require("../config/db");

class RefreshToken extends Model {}

RefreshToken.init(
  {
    // Model attributes are defined here
    tokenId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    token: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
  },
  {
    // don't forget to enable timestamps!
    timestamps: true,

    // I want createdAt
    createdAt: true,

    // I dont want updatedAt
    updatedAt: false,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "RefreshToken", // We need to choose the model name
  }
);
module.exports = RefreshToken;
