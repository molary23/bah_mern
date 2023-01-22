import { Request, Response } from "express";
import jwt, { Secret, JwtPayload } from "jsonwebtoken";
import bcrypt from "bcrypt";
import { Op } from "sequelize";
import { Customers } from "../models/Customer";
import isEmpty from "../util/validator/isEmpty";
import {
  CookieObject,
  ACCESS_SECRET_KEY,
  REFRESH_SECRET_KEY,
  Err as err,
  Message as message,
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
    const user = await Customers.findOne({
      where: {
        [Op.and]: { status: "a", [Op.or]: { email: username, username } },
      },
      attributes: ["id", "username", "password", "token", "level"],
    });
    if (!user) {
      err.user = "User not found.";
      return res.status(404).json(err);
    }
    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) {
      err.password = "Incorrect password.";
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
      const foundToken = await Customers.findOne({
        where: {
          token: { [Op.contains]: refreshToken },
        },
      });

      if (!foundToken) {
        newRefreshTokenArray = [];
      }
    }
    const token = [...newRefreshTokenArray, newRefreshToken];
    const saveToken = await Customers.update(
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
        `${req.url}\t${req.headers.origin}\t Customer Log in successfully.`,
        "customer.success.log"
      );
      return res.status(200).json(accessToken);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Customer Log in failed.`,
      "customer.error.log"
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
    const foundUser = await Customers.findOne({
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
          const hackedUser = await Customers.update(
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
          const saveOldToken = await Customers.update(
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
        const saveToken = await Customers.update(
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
            `${req.url}\t${req.headers.origin}\t Customer Refresh Token.`,
            "customer.refresh.log"
          );
          return res.status(200).json(accessToken);
        }
      }
    );
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Customer Refresh Token failed.`,
      "customer.error.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const handleLogout = async (req: Request, res: Response) => {
  const cookies = req.cookies;
  if (!cookies?.jwt) return res.sendStatus(204);
  const refreshToken = cookies.jwt;
  const foundUser = await Customers.findOne({
    where: { token: { [Op.contains]: refreshToken } },
    attributes: ["id", "token"],
  });

  if (!foundUser) {
    res.clearCookie("jwt", cookieOptions);
    return res.sendStatus(204);
  }
  let token = foundUser.token.filter((rt) => rt !== refreshToken);

  const saveToken = await Customers.update(
    { token },
    {
      where: { id: foundUser.id },
    }
  );
  if (saveToken) {
    res.clearCookie("jwt", cookieOptions);
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Customer Logs out successfully.`,
      "customer.success.log"
    );
    message.status = "You have been logged out successfully.";
    return res.status(200).json(message);
  }
};

export { handleLogin, handleLogout, handleRefresh };
