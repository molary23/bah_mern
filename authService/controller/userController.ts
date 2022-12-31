import { Request, Response } from "express";
import { Users } from "../model/User";
import bcrypt from "bcrypt";
import { sequelize } from "../config/db";
import { Op } from "sequelize";
import isEmpty from "../util/validator/isEmpty";
import { RegularObject, DBStatus } from "../util/Types";
import validateAddUserInput from "../util/validator/createUser";

const error: RegularObject = {},
  message: RegularObject = {},
  salt: number = 10;

export const createUser = async (req: Request, res: Response) => {
  const { errors, isValid } = validateAddUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const email: string = req.body.email,
    username: string = req.body.username,
    phone: number | string = req.body.phone,
    Password: string = req.body.password,
    status: DBStatus = req.body.status,
    level: number = req.body.level;

  try {
    const password = await bcrypt.hash(Password, 10);
    const checkEmail = await Users.findOne({
      where: {
        email,
      },
    });
    if (checkEmail) {
      error.add = "Email address is already taken.";
      return res.status(419).json(error);
    }
    const checkUser = await Users.findOne({
      where: {
        username,
      },
    });
    if (checkUser) {
      error.add = "Username is already taken.";
      return res.status(419).json(error);
    }
    const user = await Users.create({
      username,
      email,
      password,
      status,
      level,
      phone,
    });

    if (user) {
      return res.status(200).json(user);
    }
  } catch (err) {
    res.sendStatus(400);
  }
};
