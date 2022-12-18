"use strict";

const { DataTypes, Model } = require("sequelize"),
  sequelize = require("../config/db");

class AuditLog extends Model {}

AuditLog.init(
  {
    // Model attributes are defined here
    AuditId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    Table: {
      type: DataTypes.STRING(1), // C: create, D: delete, S: Update Password, U: Update Info, E: Edit Image, T: Update Telephone
      allowNull: false,
    },
    Action: {
      type: DataTypes.STRING(1),
      allowNull: false,
    },
    ItemId: {
      type: DataTypes.INTEGER.UNSIGNED,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER.UNSIGNED,
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
    modelName: "AuditLog", // We need to choose the model name
  }
);
module.exports = AuditLog;
