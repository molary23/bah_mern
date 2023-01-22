import dotenv from "dotenv";
dotenv.config();
import express, { Express, Request, Response } from "express";
import cookieParser = require("cookie-parser");
import cors from "cors";
import { CorsOptions } from "cors";
import { credentials } from "./middleware/credentials";
import { corsOptions as options } from "./util/corsOptions";
import fileUpload = require("express-fileupload");
import { user } from "./router/api/userRoute";
import { auth } from "./router/api/authRoute";
import { customer } from "./router/api/customerRoute";

const app: Express = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(credentials);
app.use(cors(options as CorsOptions));
app.use(fileUpload());

// Sync Database Relationsship
require("./util/DBRelationships");

// Require Api

// Use apis
// Apis that doesn't require JWT Authentication
app.use("/api/auth", auth);
app.use("/api/user", user);
app.use("/api/customer", customer);

const PORT: string | number = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
