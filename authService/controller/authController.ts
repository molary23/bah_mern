import { Request, response, Response } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
import { Users } from "../model/User";
import isEmpty from "../util/validator/isEmpty";
import {
  RegularObject,
  CookieObject,
  ACCESS_SECRET_KEY,
  REFRESH_SECRET_KEY,
} from "../util/Types";
import validateUserLogin from "../util/validator/userLogin";
import { userInfo } from "os";

const error: RegularObject = {},
  message: RegularObject = {},
  cookieOptions: CookieObject = {
    httpOnly: true,
    sameSite: "none",
    secure: process.env.NODE_ENV === "production",
  };

export const handleLogin = async (req: Request, res: Response) => {
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
        [Op.or]: { email: username, username },
      },
      attributes: ["id", "username", "password", "token"],
    });
    if (!user) {
      error.user = "User not found.";
      return res.status(404).json(error);
    }
    const isMatch = bcrypt.compare(password, user.password);
    if (!isMatch) {
      error.password = "Incorrect password.";
      return res.status(404).json(error);
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
      res.status(200).json({
        accessToken,
      });
    }
  } catch (err) {
    return res.status(400).json(`Error: ${err}`);
  }
};

export const handleRefresh = async (req: Request, res: Response) => {
  const cookies = req.cookies;

  if (!cookies.jwt) return res.sendStatus(401);
  const refreshToken = cookies.jwt;
  res.clearCookie("jwt", cookieOptions);
  try {
    const foundUser = await Users.findOne({
      where: {
        token: { [Op.contains]: refreshToken },
      },
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
          res.status(200).json(accessToken);
        }
      }
      //todo  TODO Delete Token from Database once used.
    );
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};
