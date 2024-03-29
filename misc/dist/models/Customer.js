"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Customers = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class Customer extends sequelize_1.Model {
}
exports.Customers = Customer.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    email: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    username: {
        type: sequelize_1.DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(15),
    },
    password: {
        type: sequelize_1.DataTypes.STRING,
        allowNull: false,
    },
    level: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["r", "p"],
        defaultValue: "r",
    },
    status: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["a", "d"],
        defaultValue: "a",
    },
    token: {
        type: sequelize_1.DataTypes.JSONB(),
        defaultValue: [],
    },
}, {
    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I want updatedAt
    updatedAt: true,
    // Other model options go here
    sequelize: db_1.sequelize,
    modelName: "Customer", // We need to choose the model name
});
