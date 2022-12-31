"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../controller/userController");
const router = express_1.default.Router();
/*
@route POST api/user/add
@desc Add new user
@access private
*/
router.route("/add").post(userController_1.createUser);
module.exports = router;