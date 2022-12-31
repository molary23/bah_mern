"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.developmentLogger = void 0;
const winston_1 = require("winston");
const path_1 = __importDefault(require("path"));
const { combine, timestamp, printf } = winston_1.format;
const myFormat = printf(({ level, message, timestamp }) => {
    return `[${level}]\t${timestamp}\t${message} `;
});
const developmentLogger = (filepath = "error.log") => {
    const filename = path_1.default.join(__dirname, "/../logs", filepath);
    return (0, winston_1.createLogger)({
        level: "debug",
        format: combine(winston_1.format.colorize(), timestamp({
            format: "HH:mm:ss",
        }), myFormat),
        transports: [
            new winston_1.transports.Console(),
            new winston_1.transports.File({
                filename,
            }),
        ],
    });
};
exports.developmentLogger = developmentLogger;
