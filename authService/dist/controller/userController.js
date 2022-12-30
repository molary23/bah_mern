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
const bcrypt_1 = __importDefault(require("bcrypt"));
const db_1 = require("../config/db");
const createUser_1 = __importDefault(require("../util/validator/createUser"));
const error = {}, message = {}, salt = 10;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const { errors, isValid } = (0, createUser_1.default)(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const Email = req.body.email, Username = req.body.username, Phone = req.body.phone, password = req.body.password, Status = req.body.status, Level = (_a = req.body.level) !== null && _a !== void 0 ? _a : 1;
    const Password = yield bcrypt_1.default.hash(password, 10);
    const sql = "INSERT INTO Users (Email, Username, Phone, Password, Status, Level) VALUES (?)", values = [Email, Username, Phone, Password, Status, Level];
    try {
        yield db_1.connection.query(sql, [values], function (err, results) {
            if (err)
                throw err;
            message.user = "User created successfully";
            return res.status(200).json(message);
        });
    }
    catch (err) {
        res.sendStatus(400);
    }
});
exports.createUser = createUser;
