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
exports.verifyJWT = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const Types_1 = require("../util/Types");
const verifyJWT = (req, res, next) => __awaiter(void 0, void 0, void 0, function* () {
    const authHeader = req.headers.authorization || req.headers.Authorization;
    if (!authHeader)
        return res.sendStatus(401);
    const authHeaderValue = authHeader;
    if (!(authHeaderValue === null || authHeaderValue === void 0 ? void 0 : authHeaderValue.startsWith("Bearer ")))
        return res.sendStatus(401);
    const token = authHeaderValue.split(" ")[1];
    jsonwebtoken_1.default.verify(token, Types_1.ACCESS_SECRET_KEY, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
        var _a, _b, _c;
        if (err)
            return res.sendStatus(403);
        req.username = (_a = decoded === null || decoded === void 0 ? void 0 : decoded.userInfo) === null || _a === void 0 ? void 0 : _a.username;
        req.level = (_b = decoded === null || decoded === void 0 ? void 0 : decoded.userInfo) === null || _b === void 0 ? void 0 : _b.level;
        req.id = (_c = decoded === null || decoded === void 0 ? void 0 : decoded.userInfo) === null || _c === void 0 ? void 0 : _c.id;
        next();
    }));
});
exports.verifyJWT = verifyJWT;
