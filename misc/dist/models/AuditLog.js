"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.AuditLogs = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class AuditLog extends sequelize_1.Model {
}
exports.AuditLogs = AuditLog.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    table: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false,
    },
    Action: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false,
    },
    ItemId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    UserId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
}, {
    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: false,
    // I want updatedAt
    updatedAt: true,
    // Other model options go here
    sequelize: db_1.sequelize,
    modelName: "AuditLog", // We need to choose the model name
});
