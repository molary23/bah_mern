import { Request, Response } from "express";
import { Users } from "../model/User";
import bcrypt from "bcrypt";
import { sequelize } from "../config/db";
import { Op } from "sequelize";
import isEmpty from "../util/validator/isEmpty";
import {
  RegularObject,
  DBStatus,
  IGetUserAuthInfoRequest,
} from "../util/Types";
import validateAddUserInput from "../util/validator/createUser";
import { Bins } from "../model/Bin";

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
    const password = await bcrypt.hash(Password, salt);
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

export const deleteUser = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const id: number = Number(req?.params?.id);

  try {
    const deleteUser = await Users.update(
      {
        status: "d",
      },
      {
        where: { id },
      }
    );

    if (deleteUser) {
      const newTrash: RegularObject | any = {
        itemTable: "u",
        itemId: id,
        UserId: req.id,
      };
      const trashed = await Bins.create(newTrash);
      if (trashed) {
        message.delete = "User successfully deleted.";
        return res.status(200).json(message);
      }
    }
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};

export const restoreUser = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const id: number = Number(req?.params?.id);

  try {
    const updateUser = await Users.update(
      {
        status: "a",
      },
      {
        where: { id },
      }
    );

    if (updateUser) {
      const restored = await Bins.destroy({
        where: {
          itemId: id,
          itemTable: "u",
        },
      });
      if (restored) {
        message.restore = "User successfully restored.";
        return res.status(200).json(message);
      }
    }
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};

export const updatePhone = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id),
    phone: string = req.body.phone;

  if (isEmpty(id)) {
    error.phone = "ID is required";
    return res.status(400).json(error);
  }

  if (isEmpty(phone)) {
    error.phone = "Phone Number is required";
    return res.status(400).json(error);
  }

  try {
    const updateUser = await Users.update(
      { phone },
      {
        where: { id },
      }
    );
    if (updateUser) {
      message.phone = "User Phone Number updated successfully";
      return res.status(200).json(message);
    }
  } catch (err) {
    res.status(400).json(`Error: ${err}`);
  }
};
