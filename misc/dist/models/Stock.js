"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Stocks = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class Stock extends sequelize_1.Model {
}
exports.Stocks = Stock.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    quantity: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        unique: true,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["n", "r"],
        defaultValue: "n",
    },
    ProductId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    OrderId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
}, {
    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I want updatedAt
    updatedAt: false,
    // Other model options go here
    sequelize: db_1.sequelize,
    modelName: "Stock", // We need to choose the model name
});
