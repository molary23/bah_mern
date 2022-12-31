"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const { Sequelize } = require("sequelize");
const config_1 = require("./config");
let db;
if (process.env.NODE_ENV === "production") {
    db = config_1.config.production;
}
else {
    db = config_1.config.development;
}
const { DBUSER, DBPASS, DBNAME, DBHOST } = db;
// Passing parameters separately (other dialects)
exports.sequelize = new Sequelize(DBNAME, DBUSER, DBPASS, {
    host: DBHOST,
    dialect: "postgres",
});
