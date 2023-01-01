"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const userController_1 = require("../../controller/userController");
const verifyJWT_1 = require("../../middleware/verifyJWT");
const router = express_1.default.Router();
/*
@route POST api/user/add
@desc Add new user
@access private
*/
router.route("/add").post(userController_1.createUser);
/*
@route POST api/user/:id
@desc Delete user
@access private
*/
router.route("/:id").delete(verifyJWT_1.verifyJWT, userController_1.deleteUser);
/*
@route POST api/user/:id
@desc Restore user
@access private
*/
router.route("/:id").put(verifyJWT_1.verifyJWT, userController_1.restoreUser);
/*
@route POST api/user/phone/:id
@desc update user's phone
@access private
*/
router.route("/phone/:id").patch(verifyJWT_1.verifyJWT, userController_1.updatePhone);
/*
@route POST api/user/password/:id
@desc update user's password
@access private
*/
router.route("/password/:id").patch(verifyJWT_1.verifyJWT, userController_1.updatePassword);
/*
@route POST api/user/photo/:id
@desc upload user's photo
@access private
*/
router.route("/photo/:id").patch(verifyJWT_1.verifyJWT, userController_1.uploadPhoto);
module.exports = router;
