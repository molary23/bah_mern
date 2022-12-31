"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.createUser = void 0;
const User_1 = require("../model/User");
const bcrypt_1 = __importDefault(require("bcrypt"));
const createUser_1 = __importDefault(require("../util/validator/createUser"));
const error = {}, message = {}, salt = 10;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { errors, isValid } = (0, createUser_1.default)(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email, username = req.body.username, phone = req.body.phone, Password = req.body.password, status = req.body.status, level = req.body.level;
    try {
        const password = yield bcrypt_1.default.hash(Password, 10);
        const checkEmail = yield User_1.Users.findOne({
            where: {
                email,
            },
        });
        if (checkEmail) {
            error.add = "Email address is already taken.";
            return res.status(419).json(error);
        }
        const checkUser = yield User_1.Users.findOne({
            where: {
                username,
            },
        });
        if (checkUser) {
            error.add = "Username is already taken.";
            return res.status(419).json(error);
        }
        const user = yield User_1.Users.create({
            username,
            email,
            password,
            status,
            level,
            phone,
        });
        if (user) {
            return res.status(200).json(user);
        }
    }
    catch (err) {
        res.sendStatus(400);
    }
});
exports.createUser = createUser;
