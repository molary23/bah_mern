import express, { Express, Request, Response } from "express";
import { handleLogin, handleRefresh } from "../../controller/authController";

const router = express.Router();

/*
@route POST api/auth/
@desc Login
@access public
*/

router.route("/").post(handleLogin);

/*
@route GET api/auth/refresh
@desc Refresh Token Rotation
@access private
*/

router.route("/refresh").get(handleRefresh);

module.exports = router;
