import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class Bin extends Model {
  declare id: number;
  declare itemId: number;
  declare itemTable: string;
}

export const Bins = Bin.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    itemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    itemTable: {
      type: DataTypes.ENUM,
      values: ["c", "p", "u"],
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
    modelName: "Bin", // We need to choose the model name
  }
);
