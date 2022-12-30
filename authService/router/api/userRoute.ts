import express, { Express, Request, Response } from "express";
import { createUser } from "../../controller/userController";

const router = express.Router();

/*
@route POST api/user/add
@desc Add new user
@access private
*/

router.route("/add").post(createUser);

module.exports = router;
