import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser = require("cookie-parser");
import { connection } from "./config/db";
import {
  userTable,
  categoryTable,
  productTable,
  tokenTable,
} from "./model/tables";

dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
const PORT: string | number = process.env.PORT || 6000;

app.get("/", (req: Request, res: Response) => {
  res.send("Express + TypeScript Server");
});

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
