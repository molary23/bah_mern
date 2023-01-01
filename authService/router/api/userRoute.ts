import express, { Express, Request, Response } from "express";
import {
  createUser,
  deleteUser,
  restoreUser,
  updatePhone,
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

module.exports = router;
