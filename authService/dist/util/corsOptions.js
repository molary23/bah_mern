"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.corsOptions = void 0;
const allowedOrigins_1 = require("./allowedOrigins");
exports.corsOptions = {
    origin: (origin, callback) => {
        console.log("Cors Options", origin);
        if (allowedOrigins_1.allowedOrigins.indexOf(origin) !==
            -1 /* Remove this part before Production*/ ||
            !origin) {
            callback(null, true);
        }
        else {
            callback(new Error("Not allowed by CORS"));
        }
    },
    optionsSuccessStatus: 200,
};
