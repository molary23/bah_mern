import { Request, Response } from "express";
import bcrypt from "bcrypt";
import { connection } from "../config/db";
import isEmpty from "../util/validator/isEmpty";
import { ResponseMessage, DBStatus } from "../util/Types";
import validateAddUserInput from "../util/validator/createUser";

const error: ResponseMessage = {},
  message: ResponseMessage = {},
  salt: number = 10;

export const createUser = async (req: Request, res: Response) => {
  const { errors, isValid } = validateAddUserInput(req.body);

  if (!isValid) {
    return res.status(400).json(errors);
  }

  const Email: string = req.body.email,
    Username: string = req.body.username,
    Phone: number | string = req.body.phone,
    password: string = req.body.password,
    Status: DBStatus = req.body.status,
    Level: number = req.body.level ?? 1;

  const Password = await bcrypt.hash(password, 10);

  const sql =
      "INSERT INTO Users (Email, Username, Phone, Password, Status, Level) VALUES (?)",
    values = [Email, Username, Phone, Password, Status, Level];
  try {
    await connection.query(
      sql,
      [values],
      function (err: never, results: string) {
        if (err) throw err;
        message.user = "User created successfully";
        return res.status(200).json(message);
      }
    );
  } catch (err) {
    res.sendStatus(400);
  }
};
