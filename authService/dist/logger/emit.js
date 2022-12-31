"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.myEmit = void 0;
const log_1 = require("./log");
const EventEmitter = require("events");
class MyEmmitter extends EventEmitter {
}
const myEmmitter = new MyEmmitter();
exports.myEmit = myEmmitter.on("log", (msg, fileName) => (0, log_1.logEvent)(msg, fileName));
