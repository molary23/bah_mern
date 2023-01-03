import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class ProductImage extends Model {
  declare id: number;
  declare imageName: string;
}

export const ProductImages = ProductImage.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    imageName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
  },
  {
    // don't forget to enable timestamps!
    timestamps: true,

    // I want createdAt
    createdAt: false,

    // I want updatedAt
    updatedAt: true,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "ProductImage", // We need to choose the model name
  }
);
