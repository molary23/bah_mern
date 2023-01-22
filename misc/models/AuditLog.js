"use strict";
var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
exports.__esModule = true;
exports.AuditLogs = void 0;
var db_1 = require("../config/db");
var sequelize_1 = require("sequelize");
var AuditLog = /** @class */ (function (_super) {
    __extends(AuditLog, _super);
    function AuditLog() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    return AuditLog;
}(sequelize_1.Model));
exports.AuditLogs = AuditLog.init({
    id: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false,
        autoIncrement: true,
        primaryKey: true
    },
    table: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    Action: {
        type: sequelize_1.DataTypes.STRING(1),
        allowNull: false
    },
    ItemId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    },
    UserId: {
        type: sequelize_1.DataTypes.INTEGER,
        allowNull: false
    }
}, {
    // don't forget to enable timestamps!
    timestamps: true,
    // I want createdAt
    createdAt: false,
    // I want updatedAt
    updatedAt: true,
    // Other model options go here
    sequelize: db_1.sequelize,
    modelName: "AuditLog"
});
