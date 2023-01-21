"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CustomerProfiles = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class CustomerProfile extends sequelize_1.Model {
}
exports.CustomerProfiles = CustomerProfile.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    firstName: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    lastName: {
        type: sequelize_1.DataTypes.STRING(50),
    },
    phone: {
        type: sequelize_1.DataTypes.STRING(15),
    },
    street: {
        type: sequelize_1.DataTypes.STRING,
    },
    city: {
        type: sequelize_1.DataTypes.STRING,
    },
    state: {
        type: sequelize_1.DataTypes.STRING,
    },
    country: {
        type: sequelize_1.DataTypes.STRING,
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
    modelName: "CustomerProfile", // We need to choose the model name
});
