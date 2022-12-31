"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.UserSchema = void 0;
class User extends Model {
}
exports.UserSchema = User.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    categoryName: {
        type: DataTypes.STRING(50),
        allowNull: false,
        unique: true,
    },
    username: {
        type: DataTypes.STRING(30),
        allowNull: false,
        unique: true,
    },
    phone: {
        type: DataTypes.STRING(15),
        allowNull: false,
    },
    password: {
        type: DataTypes.STRING,
        allowNull: false,
    },
    level: {
        type: DataTypes.ENUM,
        values: ["a", "m"],
        defaultValue: "m",
    },
    status: {
        type: DataTypes.ENUM,
        values: ["a", "d"],
        defaultValue: "a",
    },
    token: {
        type: DataTypes.ARRAY(DataTypes.JSON),
    },
}, {
    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I dont want updatedAt
    updatedAt: true,
    // Other model options go here
    sequelize,
    modelName: "User", // We need to choose the model name
});
("use strict");
const { DataTypes, Model } = require("sequelize"), sequelize = require("../config/db");
class Trash extends Model {
}
Trash.init({
    // Model attributes are defined here
    id: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    itemId: {
        type: DataTypes.INTEGER.UNSIGNED,
        allowNull: false,
    },
    itemTable: {
        type: DataTypes.ENUM("c", "p", "u"),
        allowNull: false,
    },
}, {
    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: true,
    // I don't want updatedAt
    updatedAt: false,
    // Other model options go here
    sequelize,
    modelName: "Trash", // We need to choose the model name
});
module.exports = Trash;
