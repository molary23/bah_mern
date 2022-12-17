"use strict";

const { DataTypes, Model } = require("sequelize"),
  sequelize = require("../config/dbCon");

class Trash extends Model {}

Trash.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    itemId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    itemTable: {
      type: DataTypes.ENUM("c", "p", "u"), // c: category, p: product, u: user
      allowNull: false,
    },
  },
  {
    // don't forget to enable timestamps!
    timestamps: true,

    // I want createdAt
    createdAt: true,

    // I don't want updatedAt
    updatedAt: false,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Trash", // We need to choose the model name
  }
);
module.exports = Trash;
