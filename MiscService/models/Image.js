"use strict";

const { DataTypes, Model } = require("sequelize"),
  sequelize = require("../config/db");

class Image extends Model {}

Image.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    imageName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
  },
  {
    // don't forget to enable timestamps!
    timestamps: true,

    // I want createdAt
    createdAt: false,

    // I dont want updatedAt
    updatedAt: true,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Image", // We need to choose the model name
  }
);
module.exports = Image;
