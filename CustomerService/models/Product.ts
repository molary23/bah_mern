import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class Product extends Model {
  declare id: number;
  declare productName: string;
  declare productModel: string;
  declare productQuantity: number;
  declare productDescription: string;
  declare status: string;
}

export const Products = Product.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    productName: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    productModel: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    productDescription: DataTypes.TEXT,
    status: {
      type: DataTypes.ENUM,
      values: ["a", "d"], // a: active, d: deleted
      defaultValue: "a",
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
    modelName: "Product", // We need to choose the model name
  }
);
