import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class User extends Model {
  declare id: number;
  declare email: string;
  declare username: string;
  declare phone: number;
  declare password: string;
  declare level: string;
  declare status: string;
  declare token: [string];
}

export const Users = User.init(
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
    phone: {
      type: DataTypes.STRING(15),
      allowNull: false,
    },
    password: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    level: {
      type: DataTypes.ENUM,
      values: ["a", "m"], // a: admin, m: manager
      defaultValue: "m",
    },
    status: {
      type: DataTypes.ENUM,
      values: ["a", "d"], // a: active, d: deleted
      defaultValue: "a",
    },
    token: {
      type: DataTypes.JSONB(),
      defaultValue: [],
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
    modelName: "User", // We need to choose the model name
  }
);
