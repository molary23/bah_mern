import { Request, Response } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
import { Users } from "../models/User";
import {
  CookieObject,
  Err as err,
  Message as message,
  ACCESS_SECRET_KEY,
  REFRESH_SECRET_KEY,
} from "../util/Types";
import validateUserLogin from "../util/validator/userLogin";
import { myEmit } from "../logger/emit";

const cookieOptions: CookieObject = {
  httpOnly: true,
  sameSite: "none",
  secure: process.env.NODE_ENV === "production",
};

const handleLogin = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  const { errors, isValid } = validateUserLogin(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const username: string = req.body.username,
    password: string = req.body.password;

  try {
    const user = await Users.findOne({
      where: {
        [Op.and]: { status: "a", [Op.or]: [{ email: username }, { username }] },
      },
      attributes: ["id", "username", "password", "token", "level"],
    });
    if (!user) {
      err.auth = "User not found.";
      return res.status(404).json(err);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      err.auth = "Incorrect password.";
      return res.status(404).json(err);
    }
    const accessToken = jwt.sign(
        { userInfo: { username: username, level: user.level, id: user.id } },
        ACCESS_SECRET_KEY,
        { expiresIn: "30m" }
      ),
      newRefreshToken = jwt.sign(
        {
          username: user.username,
        },
        REFRESH_SECRET_KEY,
        { expiresIn: "1d" }
      );

    let newRefreshTokenArray: string[] = !cookies.jwt
      ? user?.token
      : user?.token.filter((rt) => rt !== cookies.jwt);

    if (cookies?.jwt) {
      res.clearCookie("jwt", cookieOptions);
      const refreshToken: string = cookies.jwt;
      const foundToken = await Users.findOne({
        where: {
          token: { [Op.contains]: refreshToken },
        },
      });

      if (!foundToken) {
        newRefreshTokenArray = [];
      }
    }
    const token = [...newRefreshTokenArray, newRefreshToken];
    const saveToken = await Users.update(
      { token },
      {
        where: {
          id: user.id,
        },
      }
    );
    if (saveToken) {
      res.cookie("jwt", newRefreshToken, {
        ...cookieOptions,
        maxAge: 86400000,
      });
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Successful Login`,
        "auth.success.log"
      );
      return res.status(200).json(accessToken);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Login failed`,
      "auth.error.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const handleRefresh = async (req: Request, res: Response) => {
  const cookies = req.cookies;

  if (!cookies.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  res.clearCookie("jwt", cookieOptions);
  try {
    const foundUser = await Users.findOne({
      where: {
        token: { [Op.contains]: refreshToken },
      },
      attributes: ["token", "id", "username", "level"],
    });

    if (!foundUser) {
      jwt.verify(
        refreshToken,
        REFRESH_SECRET_KEY,
        async (err: any, decoded: any) => {
          if (err) return res.sendStatus(401);
          const hackedUser = await Users.update(
            { token: [] },
            {
              where: {
                username: decoded.username,
              },
            }
          );
        }
      );
    }

    const newRefreshTokenArray = foundUser?.token.filter(
      (rt) => rt !== refreshToken
    );
    jwt.verify(
      refreshToken,
      REFRESH_SECRET_KEY,
      async (err: any, decoded: any) => {
        if (err) {
          const saveOldToken = await Users.update(
            {
              token: newRefreshTokenArray!,
            },
            {
              where: {
                id: foundUser?.id,
              },
            }
          );
        }
        if (err || foundUser?.username !== decoded.username)
          return res.sendStatus(401);

        const accessToken = jwt.sign(
            {
              userInfo: {
                username: decoded.username,
                level: foundUser?.level,
                id: foundUser?.id,
              },
            },
            ACCESS_SECRET_KEY,
            { expiresIn: "30m" }
          ),
          newRefreshToken = jwt.sign(
            { username: foundUser?.username },
            REFRESH_SECRET_KEY,
            { expiresIn: "1d" }
          );

        const token = [...newRefreshTokenArray!, newRefreshToken];
        const saveToken = await Users.update(
          { token },
          {
            where: {
              id: foundUser?.id,
            },
          }
        );
        if (saveToken) {
          res.cookie("jwt", newRefreshToken, {
            ...cookieOptions,
            maxAge: 86400000,
          });
          myEmit.emit(
            "log",
            `${req.url}\t${req.headers.origin}\t Refresh Rotation Successful`,
            "refresh.roate.log"
          );
          return res.status(200).json(accessToken);
        }
      }
    );
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Refresh Rotation failed`,
      "refresh.error.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const handleLogout = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;
  const foundUser = await Users.findOne({
    where: { token: { [Op.contains]: refreshToken } },
    attributes: ["id", "token"],
  });

  if (!foundUser) {
    res.clearCookie("jwt", cookieOptions);
    return res.sendStatus(204);
  }
  let token = foundUser.token.filter((rt) => rt !== refreshToken);

  const saveToken = await Users.update(
    { token },
    {
      where: { id: foundUser.id },
    }
  );
  if (saveToken) {
    res.clearCookie("jwt", cookieOptions);
    message.status = "You have been logged out successfully.";
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Log out`,
      "log.out.log"
    );
    return res.status(200).json(message);
  }
};

export { handleLogin, handleLogout, handleRefresh };
