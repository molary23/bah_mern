"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.loginLimiter = void 0;
const express_rate_limit_1 = require("express-rate-limit");
const emit_1 = require("../logger/emit");
exports.loginLimiter = (0, express_rate_limit_1.rateLimit)({
    windowMs: 60 * 1000,
    max: 5,
    message: {
        message: "Too many Login attempts from this IP address, please try again later.",
    },
    handler: (req, res, next, options) => {
        emit_1.myEmit.emit("log", `Too many Requests: ${options.message.message}\t${req.method}\t${req.url}\t${req.headers.origin}`, "loginRate.log");
        res.status(options.statusCode).send(options.message);
    },
    standardHeaders: true,
    legacyHeaders: true,
});
