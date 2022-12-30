import express, { Express, Request, Response } from "express";
import { handleLogin } from "../../controller/authController";

const router = express.Router();

/*
@route POST api/auth/
@desc Login
@access public
*/

router.route("/").post(handleLogin);

module.exports = router;
