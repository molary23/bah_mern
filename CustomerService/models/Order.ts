import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class Order extends Model {
  declare id: number;
  declare quantity: string;
  declare status: string;
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
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    status: {
      type: DataTypes.ENUM,
      values: ["c", "f", "p"], // c: cancelled, f: fulfilled
      defaultValue: "p",
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
