import { sequelize } from "../config/db";
import { Model, DataTypes } from "sequelize";

class AuditLog extends Model {
  declare id: number;
  declare table: string;
  declare action: string;
  declare itemId: string;
  declare UserId: string;
}

export const AuditLogs = AuditLog.init(
  {
    id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      autoIncrement: true,
      primaryKey: true,
    },
    table: {
      type: DataTypes.STRING(1), // B: Customer, U: User, P: Product, C: Categroy
      allowNull: false,
    },
    Action: {
      type: DataTypes.STRING(1), // A: create/Add, D: delete, P: Update Password, E: Edit Image
      allowNull: false,
    },
    ItemId: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
    UserId: {
      type: DataTypes.INTEGER,
      allowNull: false,
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
    modelName: "AuditLog", // We need to choose the model name
  }
);
