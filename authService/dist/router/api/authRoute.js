"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.auth = void 0;
const express_1 = __importDefault(require("express"));
const authController_1 = require("../../controller/authController");
const verifyJWT_1 = require("../../middleware/verifyJWT");
const rateLimit_1 = require("../../middleware/rateLimit");
const router = express_1.default.Router();
exports.auth = router;
/*
@route POST api/auth/
@desc Login
@access public
*/
router.route("/").post(rateLimit_1.loginLimiter, authController_1.handleLogin);
/*
@route GET api/auth/refresh
@desc Refresh Token Rotation
@access private
*/
router.route("/refresh").get(authController_1.handleRefresh);
/*
@route GET api/auth/logout
@desc Logout
@access private
*/
router.use(verifyJWT_1.verifyJWT);
router.route("/logout").get(authController_1.handleLogout);
