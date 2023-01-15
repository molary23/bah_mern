import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class Stock extends Model {
  declare id: number;
  declare quantity: number;
  declare type: string;
}

export const Stocks = Stock.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    quantity: {
      type: DataTypes.INTEGER,
      allowNull: false,
      unique: true,
    },
    type: {
      type: DataTypes.ENUM,
      values: ["n", "r", "s"], // n: new product, r: restock, s: sold
      defaultValue: "n",
    },
  },
  {
    // don't forget to enable timestamps!
    timestamps: true,

    // I want createdAt
    createdAt: true,

    // I want updatedAt
    updatedAt: false,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Stock", // We need to choose the model name
  }
);
