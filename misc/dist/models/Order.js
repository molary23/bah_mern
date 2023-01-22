"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Orders = void 0;
const db_1 = require("../config/db");
const sequelize_1 = require("sequelize");
var statusEnum;
(function (statusEnum) {
    statusEnum[statusEnum["a"] = 0] = "a";
    statusEnum[statusEnum["d"] = 1] = "d";
    statusEnum[statusEnum["p"] = 2] = "p";
})(statusEnum || (statusEnum = {}));
class Order extends sequelize_1.Model {
}
exports.Orders = Order.init({
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
    status: {
        type: sequelize_1.DataTypes.ENUM,
        values: ["a", "d", "p"],
        defaultValue: "p",
    },
    UserId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    CustomerId: {
        type: sequelize_1.DataTypes.INTEGER,
    },
    comment: {
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
    modelName: "Order", // We need to choose the model name
});
