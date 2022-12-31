import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class Verify extends Model {
  declare id: number;
  declare code: string;
  declare type: string;
}

export const Verifies = Verify.init(
  {
    // Model attributes are defined here
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    code: {
      type: DataTypes.STRING(10),
      allowNull: false,
    },
    type: {
      type: DataTypes.ENUM,
      values: ["c", "v"], // c: Confirm, v:Verify
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
    modelName: "Verify", // We need to choose the model name
  }
);
