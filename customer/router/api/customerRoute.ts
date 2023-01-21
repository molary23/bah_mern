import express, { Express, Request, Response } from "express";
import {
  registerUser,
  updatePassword,
  updatePhone,
} from "../../controller/userController";
import { verifyJWT } from "../../middleware/verifyJWT";

const router = express.Router();

/*
@route POST api/customer/add
@desc Add new user
@access private
*/

router.route("/add").post(registerUser);

/*
@route POST api/customer/phone/:id
@desc update user's phone
@access private
*/

router.route("/phone/:id").patch(verifyJWT, updatePhone);

/*
@route POST api/customer/password/:id
@desc update user's password
@access private
*/

router.route("/password/:id").patch(verifyJWT, updatePassword);

export { router as user };
