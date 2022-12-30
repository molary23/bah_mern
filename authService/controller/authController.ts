import { Request, Response } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { connection } from "../config/db";
import isEmpty from "../util/validator/isEmpty";
import { ReqError, DBStatus } from "../util/Types";
import validateAddUserInput from "../util/validator/createUser";

const error: ReqError = {},
  salt: number = 10;

const createUser = async (req: Request, res: Response) => {
  const { errors, isValid } = validateAddUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  let Email: string = req.body.email,
    Username: string = req.body.username,
    Phone: number | string = req.body.phone,
    password: string = req.body.password,
    status: DBStatus = req.body.status,
    level: number = req.body.level ?? 1;
  const Password = await bcrypt.hash(password, 10);
};

/*
const handleLogin = async (req, res) => {
  const cookies = req.cookies,
    { username, password } = req.body;

  if (isEmpty(username)) {
    error.username = "Username is required";
    return res.status(400).json(error.username);
  }

  if (isEmpty(password)) {
    error.password = "Password is required";
    return res.status(400).json(error.password);
  }

  const user = await User.findOne({
    where: { username },
    attributes: ["level", "id", "password"],
  });

  if (!user) {
    error.username = "User not found";
    return res.status(400).json(error.username);
  }
  const isMatch = await bcrypt.compare(password, user.password);
  if (!isMatch) {
    error.password = "Password is incorrect";
    return res.status(400).json(error.password);
  }

  const accessToken = jwt.sign(
    { userInfo: { username: username, level: user.level, id: user.id } },
    process.env.ACCESS_TOKEN_SECRET_KEY,
    { expiresIn: "30m" }
  );

  const newRefreshToken = jwt.sign(
    { username: username },
    process.env.REFRESH_TOKEN_SECRET_KEY,
    { expiresIn: "1d" }
  );

  if (cookies?.jwt) {
    const refreshToken = cookies.jwt;
    const foundToken = await RefreshToken.findOne({
      where: { token: refreshToken },
    });
    if (!foundToken) {
      // Delete all refresh token related to user
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET_KEY,
        async (err, decoded) => {
          if (err) return res.sendStatus(403);
          const hackedUser = await User.findOne({
            where: { username: decoded.username },
            attributes: ["id"],
          });

          await RefreshToken.destroy({
            where: { UserId: hackedUser.id },
          });

          return res.sendStatus(403);
        }
      );
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: process.env.NODE_ENV === "production",
      });
    } else {
      await RefreshToken.destroy({
        where: { token: refreshToken },
      });
      res.clearCookie("jwt", {
        httpOnly: true,
        sameSite: "None",
        secure: process.env.NODE_ENV === "production",
      });
    }
  }

  const refresh = await RefreshToken.create({
    UserId: user.id,
    token: newRefreshToken,
  });

  if (refresh) {
    res.cookie("jwt", newRefreshToken, {
      httpOnly: true,
      sameSite: "none",
      secure: process.env.NODE_ENV === "production",
      maxAge: 86400000,
    });
    res.status(200).json({
      accessToken,
    });
  }
};

module.exports = { handleLogin };
*/
