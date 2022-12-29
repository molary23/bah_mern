"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.connection = void 0;
const config_1 = require("./config");
const mysql = require("mysql2");
let db;
if (process.env.NODE_ENV === "production") {
    db = config_1.config.production;
}
else {
    db = config_1.config.development;
}
const { DBUSER, DBPASS, DBNAME, DBHOST } = db;
exports.connection = mysql.createConnection({
    host: db.DBHOST,
    user: db.DBUSER,
    database: db.DBNAME,
    password: db.DBPASS,
});
