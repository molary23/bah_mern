import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class Category extends Model {
  declare id: number;
  declare categoryName: string;
  declare status: string;
}

export const Categories = Category.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    categoryName: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
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
    updatedAt: true,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "Category", // We need to choose the model name
  }
);
