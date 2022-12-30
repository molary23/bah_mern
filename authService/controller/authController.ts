import { Request, Response } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { OkPacket } from "mysql2";
import { connection } from "../config/db";
import isEmpty from "../util/validator/isEmpty";
import { ResponseMessage, DBStatus, DBUser, IUser } from "../util/Types";
import validateUserLogin from "../util/validator/userLogin";
import { stringify } from "querystring";

const error: ResponseMessage = {},
  message: ResponseMessage = {},
  salt: number = 10;

export const handleLogin = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  const { errors, isValid } = validateUserLogin(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Email: string = req.body.email,
    Username: string = req.body.username,
    password: string = req.body.password;

  const sql =
      "SELECT UserId, Password, Level, Username FROM Users WHERE Username = ? OR Email = ? AND Status = 'a'",
    values = [Username, Email];

  try {
    const user = connection.query(
      sql,
      values,
      async function (err: never, results: IUser) {
        if (err) throw err;
        if (!results.length) {
          error.user = "No User with the supplied username or email";
          return res.status(404).json(error);
        }
        const isMatch: boolean = await bcrypt.compare(
          password,
          results[0].Password as string
        );
        if (!isMatch) {
          error.password = "Password is incorrect";
          return res.status(404).json(error);
        }

        const accessToken = jwt.sign(
          {
            userInfo: {
              username: results[0].Username,
              level: results[0].Level,
              id: results[0].UserId,
            },
          },
          process.env.ACCESS_TOKEN_SECRET_KEY!,
          { expiresIn: "30m" }
        );

        const newRefreshToken = jwt.sign(
          { username: results[0].Username },
          process.env.REFRESH_TOKEN_SECRET_KEY!,
          { expiresIn: "1d" }
        );

        //todo  TODO Check if RefreshToken exist and push to DB
        return res.status(200).json({ at: accessToken, rt: newRefreshToken });
      }
    );
  } catch (err) {
    return res.sendStatus(400);
  }
  /*
   readById(Email: string, Username: string): Promise<IUser | undefined> {
    return new Promise((resolve, reject) => {
      connection.query<IUser[]>(
        "SELECT * FROM users WHERE Email = ? OR Username = ? AND Status = 'a'",
        [Email, Username],
        (err, res) => {
          if (err) reject(err)
          else resolve(res?.[0])
        }
      )
    })
  }*/
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
