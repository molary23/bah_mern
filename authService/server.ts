import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser = require("cookie-parser");
import cors from "cors";
import { CorsOptions } from "cors";
import { credentials } from "./middleware/credentials";
import { corsOptions as options } from "./util/corsOptions";
import { myEmit } from "./logger/emit";

dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
app.use(credentials);
app.use(cors(options as CorsOptions));

// Sync Database Relationsship
require("./util/DBRelationships");

const auth = require("./router/api/authRoute"),
  user = require("./router/api/userRoute");

// Use apis
// Apis that doesn't require JWT Authentication
app.use("/api/auth", auth);
app.use("/api/user", user);

myEmit.emit(
  "log",
  "log event emmitted on my short code are you rotating",
  "error.log"
);

const PORT: string | number = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
