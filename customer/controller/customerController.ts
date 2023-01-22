import { Request, Response } from "express";
import { Customers } from "../models/Customer";
import bcrypt from "bcrypt";
import isEmpty from "../util/validator/isEmpty";
import { DBStatus, Err as err, Message as message } from "../util/Types";
import validateAddUserInput from "../util/validator/registerUser";
import { myEmit } from "../logger/emit";

const salt: number = 10;

const registerUser = async (req: Request, res: Response) => {
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
    const checkEmail = await Customers.findOne({
      where: {
        email,
      },
    });
    if (checkEmail) {
      err.add = "Email address is already taken.";
      return res.status(419).json(err);
    }
    const checkUser = await Customers.findOne({
      where: {
        username,
      },
    });
    if (checkUser) {
      err.add = "Username is already taken.";
      return res.status(419).json(err);
    }
    const user = await Customers.create({
      username,
      email,
      password,
      status,
      level,
      phone,
    });

    if (user) {
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Customer registration successful`,
        "customer.success.log"
      );
      return res.status(200).json(user);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Customer registrations failed`,
      "customer.error.log"
    );
    return res.status(400).json(error);
  }
};

const updatePhone = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id),
    phone: string = req.body.phone;

  if (isEmpty(id)) {
    err.phone = "ID is required";
    return res.status(400).json(err);
  }

  if (isEmpty(phone)) {
    err.phone = "Phone Number is required";
    return res.status(400).json(err);
  }

  try {
    const updateUser = await Customers.update(
      { phone },
      {
        where: { id },
      }
    );
    if (updateUser) {
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Customer update phone number successful`,
        "customer.success.log"
      );
      message.phone = "User Phone Number updated successfully";
      return res.status(200).json(message);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Customer update phone number failed`,
      "customer.error.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const updatePassword = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id),
    Password: string = req.body.password;

  if (isEmpty(id)) {
    err.password = "ID is required";
    return res.status(400).json(err);
  }

  if (isEmpty(Password)) {
    err.password = "Password is required";
    return res.status(400).json(err);
  }

  try {
    const password = await bcrypt.hash(Password, salt);
    const updateUser = await Customers.update(
      { password },
      {
        where: { id },
      }
    );
    if (updateUser) {
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Customer update password successful`,
        "customer.success.log"
      );
      message.password = "Password changed successfully";
      return res.status(200).json(message);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Customer update password failed`,
      "customer.error.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

export { registerUser, updatePassword, updatePhone };
