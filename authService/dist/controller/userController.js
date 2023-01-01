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
exports.uploadPhoto = exports.updatePassword = exports.updatePhone = exports.restoreUser = exports.deleteUser = exports.createUser = void 0;
const User_1 = require("../model/User");
const UserImage_1 = require("../model/UserImage");
const bcrypt_1 = __importDefault(require("bcrypt"));
const fs_1 = __importDefault(require("fs"));
const path_1 = __importDefault(require("path"));
const isEmpty_1 = __importDefault(require("../util/validator/isEmpty"));
const createUser_1 = __importDefault(require("../util/validator/createUser"));
const Bin_1 = require("../model/Bin");
const validateImage_1 = __importDefault(require("../util/validator/validateImage"));
const error = {}, message = {}, salt = 10;
const createUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { errors, isValid } = (0, createUser_1.default)(req.body);
    if (!isValid) {
        return res.status(400).json(errors);
    }
    const email = req.body.email, username = req.body.username, phone = req.body.phone, Password = req.body.password, status = req.body.status, level = req.body.level;
    try {
        const password = yield bcrypt_1.default.hash(Password, salt);
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
const deleteUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _a;
    const id = Number((_a = req === null || req === void 0 ? void 0 : req.params) === null || _a === void 0 ? void 0 : _a.id);
    try {
        const deleteUser = yield User_1.Users.update({
            status: "d",
        }, {
            where: { id },
        });
        if (deleteUser) {
            const newTrash = {
                itemTable: "u",
                itemId: id,
                UserId: req.id,
            };
            const trashed = yield Bin_1.Bins.create(newTrash);
            if (trashed) {
                message.delete = "User successfully deleted.";
                return res.status(200).json(message);
            }
        }
    }
    catch (err) {
        res.status(400).json(`Error: ${err}`);
    }
});
exports.deleteUser = deleteUser;
const restoreUser = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    var _b;
    const id = Number((_b = req === null || req === void 0 ? void 0 : req.params) === null || _b === void 0 ? void 0 : _b.id);
    try {
        const updateUser = yield User_1.Users.update({
            status: "a",
        }, {
            where: { id },
        });
        if (updateUser) {
            const restored = yield Bin_1.Bins.destroy({
                where: {
                    itemId: id,
                    itemTable: "u",
                },
            });
            if (restored) {
                message.restore = "User successfully restored.";
                return res.status(200).json(message);
            }
        }
    }
    catch (err) {
        res.status(400).json(`Error: ${err}`);
    }
});
exports.restoreUser = restoreUser;
const updatePhone = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id), phone = req.body.phone;
    if ((0, isEmpty_1.default)(id)) {
        error.phone = "ID is required";
        return res.status(400).json(error);
    }
    if ((0, isEmpty_1.default)(phone)) {
        error.phone = "Phone Number is required";
        return res.status(400).json(error);
    }
    try {
        const updateUser = yield User_1.Users.update({ phone }, {
            where: { id },
        });
        if (updateUser) {
            message.phone = "User Phone Number updated successfully";
            return res.status(200).json(message);
        }
    }
    catch (err) {
        res.status(400).json(`Error: ${err}`);
    }
});
exports.updatePhone = updatePhone;
const updatePassword = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const id = Number(req.params.id), Password = req.body.password;
    if ((0, isEmpty_1.default)(id)) {
        error.password = "ID is required";
        return res.status(400).json(error);
    }
    if ((0, isEmpty_1.default)(Password)) {
        error.password = "Password is required";
        return res.status(400).json(error);
    }
    try {
        const password = yield bcrypt_1.default.hash(Password, salt);
        const updateUser = yield User_1.Users.update({ password }, {
            where: { id },
        });
        if (updateUser) {
            message.password = "Password changed successfully";
            return res.status(200).json(message);
        }
    }
    catch (err) {
        res.status(400).json(`Error: ${err}`);
    }
});
exports.updatePassword = updatePassword;
const uploadPhoto = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const uploadDirectory = "/../../../uploads/user/", dirPath = path_1.default.join(__dirname, uploadDirectory), files = req.files, UserId = Number(req.params.id), username = req.body.username, validate = (0, validateImage_1.default)(files);
    if ((0, isEmpty_1.default)(UserId)) {
        error.photo = "ID is required";
        return res.status(400).json(error);
    }
    if ((0, isEmpty_1.default)(username)) {
        error.username = "Username is required";
        return res.status(400).json(error);
    }
    if (!validate.isValid) {
        return res.status(400).json(validate.errors);
    }
    if (!fs_1.default.existsSync(dirPath)) {
        fs_1.default.mkdir(dirPath, (err) => {
            if (err)
                return res.sendStatus(500);
        });
    }
    const fileExtension = path_1.default.extname(files.file.name), image = `${username}${fileExtension}`, filePath = path_1.default.join(dirPath, image);
    try {
        const [fresh, upload] = yield UserImage_1.UserImages.findOrCreate({
            where: { UserId },
            defaults: {
                image,
                UserId,
            },
        });
        if (upload || fresh) {
            files.file.mv(filePath, (err) => {
                error.upload = "Error uploading";
                if (err)
                    return res.status(500).json(error.upload);
                message.image = "User image uploaded successfully.";
                return res.status(200).json(message);
            });
        }
    }
    catch (err) {
        res.status(400).json(`Error: ${err}`);
    }
});
exports.uploadPhoto = uploadPhoto;
