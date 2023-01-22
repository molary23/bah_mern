import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";
enum statusEnum {
  "a",
  "d",
  "p",
}

class Order extends Model {
  declare id: number;
  declare quantity: number;
  declare type: statusEnum;
  declare comment: string;
}

export const Orders = Order.init(
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
    status: {
      type: DataTypes.ENUM,
      values: ["a", "d", "p"], // a: approved, d: declined, p: pending
      defaultValue: "p",
    },
    UserId: {
      type: DataTypes.INTEGER,
    },
    CustomerId: {
      type: DataTypes.INTEGER,
    },
    comment: {
      type: DataTypes.STRING,
    },
  },
  {
    // don't forget to enable timestamps!
    timestamps: true,

    // I want createdAt
    createdAt: true,

    // I want updatedAt
    updatedAt: true,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Order", // We need to choose the model name
  }
);
