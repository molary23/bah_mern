import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser = require("cookie-parser");

dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());

// Sync Database Relationsship
require("./util/DBRelationships");

const auth = require("./router/api/authRoute"),
  user = require("./router/api/userRoute");

// Use apis
// Apis that doesn't require JWT Authentication
app.use("/api/auth", auth);
app.use("/api/user", user);

const PORT: string | number = process.env.PORT || 6000;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
