"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const authController_1 = require("../../controller/authController");
const verifyJWT_1 = require("../../middleware/verifyJWT");
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
router.use(verifyJWT_1.verifyJWT);
router.route("/refresh").get(authController_1.handleRefresh);
/*
@route GET api/auth/logout
@desc Logout
@access private
*/
router.use(verifyJWT_1.verifyJWT);
router.route("/logout").get(authController_1.handleLogout);
module.exports = router;
