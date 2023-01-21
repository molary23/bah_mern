import express, { Express, Request, Response } from "express";
import {
  createUser,
  deleteUser,
  restoreUser,
  updatePassword,
  updatePhone,
  uploadPhoto,
} from "../../controller/userController";
import { verifyJWT } from "../../middleware/verifyJWT";

const router = express.Router();

/*
@route POST api/user/add
@desc Add new user
@access private
*/

router.route("/add").post(createUser);

/*
@route POST api/user/:id
@desc Delete user
@access private
*/

router.route("/:id").delete(verifyJWT, deleteUser);

/*
@route POST api/user/:id
@desc Restore user
@access private
*/

router.route("/:id").put(verifyJWT, restoreUser);

/*
@route POST api/user/phone/:id
@desc update user's phone
@access private
*/

router.route("/phone/:id").patch(verifyJWT, updatePhone);

/*
@route POST api/user/password/:id
@desc update user's password
@access private
*/

router.route("/password/:id").patch(verifyJWT, updatePassword);

/*
@route POST api/user/photo/:id
@desc upload user's photo
@access private
*/

router.route("/photo/:id").patch(verifyJWT, uploadPhoto);

export { router as user };
