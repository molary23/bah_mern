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
exports.handleLogout = exports.handleRefresh = exports.handleLogin = void 0;
const jsonwebtoken_1 = __importDefault(require("jsonwebtoken"));
const bcrypt_1 = __importDefault(require("bcrypt"));
const sequelize_1 = require("sequelize");
const User_1 = require("../model/User");
const Types_1 = require("../util/Types");
const userLogin_1 = __importDefault(require("../util/validator/userLogin"));
const error = {}, message = {}, cookieOptions = {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
};
const handleLogin = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cookies = req.cookies;
    const { errors, isValid } = (0, userLogin_1.default)(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const username = req.body.username, password = req.body.password;
    try {
        const user = yield User_1.Users.findOne({
            where: {
                [sequelize_1.Op.and]: { status: "a", [sequelize_1.Op.or]: { email: username, username } },
            },
            attributes: ["id", "username", "password", "token", "level"],
        });
        if (!user) {
            error.user = "User not found.";
            return res.status(404).json(error);
        }
        const isMatch = bcrypt_1.default.compare(password, user.password);
        if (!isMatch) {
            error.password = "Incorrect password.";
            return res.status(404).json(error);
        }
        const accessToken = jsonwebtoken_1.default.sign({ userInfo: { username: username, level: user.level, id: user.id } }, Types_1.ACCESS_SECRET_KEY, { expiresIn: "30m" }), newRefreshToken = jsonwebtoken_1.default.sign({
            username: user.username,
        }, Types_1.REFRESH_SECRET_KEY, { expiresIn: "1d" });
        let newRefreshTokenArray = !cookies.jwt
            ? user === null || user === void 0 ? void 0 : user.token
            : user === null || user === void 0 ? void 0 : user.token.filter((rt) => rt !== cookies.jwt);
        if (cookies === null || cookies === void 0 ? void 0 : cookies.jwt) {
            res.clearCookie("jwt", cookieOptions);
            const refreshToken = cookies.jwt;
            const foundToken = yield User_1.Users.findOne({
                where: {
                    token: { [sequelize_1.Op.contains]: refreshToken },
                },
            });
            if (!foundToken) {
                newRefreshTokenArray = [];
            }
        }
        const token = [...newRefreshTokenArray, newRefreshToken];
        const saveToken = yield User_1.Users.update({ token }, {
            where: {
                id: user.id,
            },
        });
        if (saveToken) {
            res.cookie("jwt", newRefreshToken, Object.assign(Object.assign({}, cookieOptions), { maxAge: 86400000 }));
            res.status(200).json(accessToken);
        }
    }
    catch (err) {
        return res.status(400).json(`Error: ${err}`);
    }
});
exports.handleLogin = handleLogin;
const handleRefresh = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cookies = req.cookies;
    if (!cookies.jwt)
        return res.sendStatus(401);
    const refreshToken = cookies.jwt;
    res.clearCookie("jwt", cookieOptions);
    try {
        const foundUser = yield User_1.Users.findOne({
            where: {
                token: { [sequelize_1.Op.contains]: refreshToken },
            },
            attributes: ["token", "id", "username", "level"],
        });
        if (!foundUser) {
            jsonwebtoken_1.default.verify(refreshToken, Types_1.REFRESH_SECRET_KEY, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
                if (err)
                    return res.sendStatus(401);
                const hackedUser = yield User_1.Users.update({ token: [] }, {
                    where: {
                        username: decoded.username,
                    },
                });
            }));
        }
        const newRefreshTokenArray = foundUser === null || foundUser === void 0 ? void 0 : foundUser.token.filter((rt) => rt !== refreshToken);
        jsonwebtoken_1.default.verify(refreshToken, Types_1.REFRESH_SECRET_KEY, (err, decoded) => __awaiter(void 0, void 0, void 0, function* () {
            if (err) {
                const saveOldToken = yield User_1.Users.update({
                    token: newRefreshTokenArray,
                }, {
                    where: {
                        id: foundUser === null || foundUser === void 0 ? void 0 : foundUser.id,
                    },
                });
            }
            if (err || (foundUser === null || foundUser === void 0 ? void 0 : foundUser.username) !== decoded.username)
                return res.sendStatus(401);
            const accessToken = jsonwebtoken_1.default.sign({
                userInfo: {
                    username: decoded.username,
                    level: foundUser === null || foundUser === void 0 ? void 0 : foundUser.level,
                    id: foundUser === null || foundUser === void 0 ? void 0 : foundUser.id,
                },
            }, Types_1.ACCESS_SECRET_KEY, { expiresIn: "30m" }), newRefreshToken = jsonwebtoken_1.default.sign({ username: foundUser === null || foundUser === void 0 ? void 0 : foundUser.username }, Types_1.REFRESH_SECRET_KEY, { expiresIn: "1d" });
            const token = [...newRefreshTokenArray, newRefreshToken];
            const saveToken = yield User_1.Users.update({ token }, {
                where: {
                    id: foundUser === null || foundUser === void 0 ? void 0 : foundUser.id,
                },
            });
            if (saveToken) {
                res.cookie("jwt", newRefreshToken, Object.assign(Object.assign({}, cookieOptions), { maxAge: 86400000 }));
                res.status(200).json(accessToken);
            }
        }));
    }
    catch (err) {
        res.status(400).json(`Error: ${err}`);
    }
});
exports.handleRefresh = handleRefresh;
const handleLogout = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const cookies = req.cookies;
    if (!(cookies === null || cookies === void 0 ? void 0 : cookies.jwt))
        return res.sendStatus(204);
    const refreshToken = cookies.jwt;
    const foundUser = yield User_1.Users.findOne({
        where: { token: { [sequelize_1.Op.contains]: refreshToken } },
        attributes: ["id", "token"],
    });
    if (!foundUser) {
        res.clearCookie("jwt", cookieOptions);
        return res.sendStatus(204);
    }
    let token = foundUser.token.filter((rt) => rt !== refreshToken);
    const saveToken = yield User_1.Users.update({ token }, {
        where: { id: foundUser.id },
    });
    if (saveToken) {
        res.clearCookie("jwt", cookieOptions);
        message.status = "You have been logged out successfully.";
        return res.status(200).json(message);
    }
});
exports.handleLogout = handleLogout;
