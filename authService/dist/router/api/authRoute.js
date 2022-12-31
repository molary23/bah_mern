"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../../controller/authController");
const router = express_1.default.Router();
/*
@route POST api/auth/
@desc Login
@access public
*/
router.route("/").post(authController_1.handleLogin);
/*
@route GET api/auth/refresh
@desc Refresh Token Rotation
@access private
*/
router.route("/refresh").get(authController_1.handleRefresh);
module.exports = router;
