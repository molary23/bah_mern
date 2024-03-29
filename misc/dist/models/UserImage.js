"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserImages = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class UserImage extends sequelize_1.Model {
}
exports.UserImages = UserImage.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    image: {
        type: sequelize_1.DataTypes.STRING(55),
        allowNull: false,
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
    modelName: "UserImage", // We need to choose the model name
});
