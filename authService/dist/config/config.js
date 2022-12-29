"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.config = void 0;
exports.config = {
    development: {
        DBUSER: "molary",
        DBPASS: "mcWVaYd@M6b6Q",
        DBNAME: "bahengine",
        DBHOST: "127.0.0.1",
    },
    test: {
        DBUSER: "molary",
        DBPASS: "mcWVaYd@M6b6Q",
        DBNAME: "bahengine",
        DBHOST: "127.0.0.1",
    },
    production: {
        DBUSER: process.env.DBUSER,
        DBPASS: process.env.DBPASS,
        DBNAME: process.env.DBNAME,
        DBHOST: process.env.DBHOST,
    },
};
