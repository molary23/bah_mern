import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class CustomerImage extends Model {
  declare id: number;
  declare image: string;
}

export const CustomerImages = CustomerImage.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    image: {
      type: DataTypes.STRING(55),
      allowNull: false,
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
    modelName: "CustomerImage", // We need to choose the model name
  }
);
