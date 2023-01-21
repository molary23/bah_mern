"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Products = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class Product extends sequelize_1.Model {
}
exports.Products = Product.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    productName: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    productModel: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
    },
    productDescription: sequelize_1.DataTypes.TEXT,
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
    updatedAt: false,
    // Other model options go here
    sequelize: db_1.sequelize,
    modelName: "Product", // We need to choose the model name
});
