"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ProductImages = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class ProductImage extends sequelize_1.Model {
}
exports.ProductImages = ProductImage.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    imageName: {
        type: sequelize_1.DataTypes.STRING(50),
        allowNull: false,
        unique: true,
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
    modelName: "ProductImage", // We need to choose the model name
});
