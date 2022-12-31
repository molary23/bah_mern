"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Verifies = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
class Verify extends sequelize_1.Model {
}
exports.Verifies = Verify.init({
    // Model attributes are defined here
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
    },
    code: {
        type: sequelize_1.DataTypes.STRING(10),
        allowNull: false,
    },
    type: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["c", "v"], // c: Confirm, v:Verify
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
    modelName: "Verify", // We need to choose the model name
});
