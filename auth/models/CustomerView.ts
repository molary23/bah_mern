import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class CustomerView extends Model {
  declare id: number;
  declare email: string;
  declare username: string;
  declare firstName: string;
  declare lastName: string;
  declare street: string;
  declare city: string;
  declare state: string;
  declare country: string;
  declare level: string;
  declare status: string;
  declare phone: string;
}

export default CustomerView.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    email: {
      type: DataTypes.STRING(50),
      allowNull: false,
      unique: true,
    },
    username: {
      type: DataTypes.STRING(30),
      allowNull: false,
      unique: true,
    },
    level: {
      type: DataTypes.ENUM,
      values: ["r", "p"], // a: admin, m: manager
      defaultValue: "r",
    },
    status: {
      type: DataTypes.ENUM,
      values: ["a", "d"], // a: active, d: deleted
      defaultValue: "a",
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
    timestamps: false,

    // I want createdAt
    createdAt: false,

    // I want updatedAt
    updatedAt: true,
    // Other model options go here
    sequelize, // We need to pass the connection instance
    modelName: "CustomerView", // We need to choose the model name
  }
);
