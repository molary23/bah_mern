import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class CustomerProfile extends Model {
  declare id: number;
  declare firstName: string;
  declare lastName: string;
  declare phone: string;
  declare street: string;
  declare city: string;
  declare state: string;
  declare country: string;
}

export const CustomerProfiles = CustomerProfile.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    firstName: {
      type: DataTypes.STRING(50),
    },
    lastName: {
      type: DataTypes.STRING(50),
    },
    phone: {
      type: DataTypes.STRING(15),
    },
    street: {
      type: DataTypes.STRING,
    },
    city: {
      type: DataTypes.STRING,
    },
    state: {
      type: DataTypes.STRING,
    },
    country: {
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
    modelName: "CustomerProfile", // We need to choose the model name
  }
);
