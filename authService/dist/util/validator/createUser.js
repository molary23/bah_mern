"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const validator = require("validator");
const isEmpty_1 = __importDefault(require("./isEmpty"));
function validateAddUserInput(data) {
    let errors = {};
    data.email = !(0, isEmpty_1.default)(data.email) ? data.email.toLowerCase() : "";
    data.password = !(0, isEmpty_1.default)(data.password) ? data.password.toLowerCase() : "";
    data.username = !(0, isEmpty_1.default)(data.username) ? data.username.toLowerCase() : "";
    data.phone = !(0, isEmpty_1.default)(data.phone) ? data.phone : "";
    if (validator.isEmpty(data.email)) {
        errors.email = "Email Field can't be Empty";
    }
    if (!validator.isEmail(data.email)) {
        errors.email = "Email is invalid";
    }
    if (validator.isEmpty(data.phone)) {
        errors.phone = "Phone number Field can't be Empty";
    }
    if (validator.isEmpty(data.username)) {
        errors.username = "Username Field can't be Empty";
    }
    if (data.username.length < 4) {
        errors.username = "Username should be at least 4 characters";
    }
    if (data.username === "username" ||
        data.username === "usernames" ||
        data.username === "users" ||
        data.username === "support" ||
        data.username === "supports") {
        errors.username =
            "Username can't be USERNAME/USERNAMES/USERS/SUPPORT/SUPPORTS";
    }
    if (validator.isEmail(data.username)) {
        errors.username = "Username can't be an Email Address";
    }
    if (validator.isEmpty(data.password)) {
        errors.password = "Password Field can't be Empty";
    }
    return {
        errors,
        isValid: (0, isEmpty_1.default)(errors),
    };
}
exports.default = validateAddUserInput;
