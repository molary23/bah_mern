"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Categories = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class Category extends sequelize_1.Model {
}
exports.Categories = Category.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    categoryName: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    status: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["a", "d"],
        defaultValue: "a",
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
    modelName: "Category", // We need to choose the model name
});
