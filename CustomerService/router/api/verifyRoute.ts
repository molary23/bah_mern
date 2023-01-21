import express, { Express, Request, Response } from "express";
import {
  handleLogin,
  handleRefresh,
  handleLogout,
} from "../../controller/authController";
import { verifyJWT } from "../../middleware/verifyJWT";
import { loginLimiter } from "../../middleware/rateLimit";

const router = express.Router();

/*
@route POST api/auth/
@desc Login
@access public
*/

router.route("/").post(loginLimiter, handleLogin);

/*
@route GET api/auth/refresh
@desc Refresh Token Rotation
@access private
*/
router.route("/refresh").get(handleRefresh);

/*
@route GET api/auth/logout
@desc Logout
@access private
*/
router.use(verifyJWT);
router.route("/logout").get(handleLogout);

export { router as auth };
