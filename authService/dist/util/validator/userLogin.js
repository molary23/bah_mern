"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const isEmpty_1 = __importDefault(require("./isEmpty"));
function validateUserLogin(data) {
    let errors = {};
    data.password = !(0, isEmpty_1.default)(data.password) ? data.password.toLowerCase() : "";
    data.username = !(0, isEmpty_1.default)(data.username) ? data.username.toLowerCase() : "";
    if (validator.isEmpty(data.username)) {
        errors.username = "Username or Email Field can't be Empty";
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Password Field can't be Empty";
    }
    return {
        errors,
        isValid: (0, isEmpty_1.default)(errors),
    };
}
exports.default = validateUserLogin;
