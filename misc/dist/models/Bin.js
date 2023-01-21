"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Bins = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class Bin extends sequelize_1.Model {
}
exports.Bins = Bin.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    itemId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
    },
    itemTable: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["c", "p", "u"],
    },
}, {
    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I don't want updatedAt
    updatedAt: false,
    // Other model options go here
    sequelize: db_1.sequelize,
    modelName: "Bin", // We need to choose the model name
});
