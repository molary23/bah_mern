import express, { Express, Request, Response } from "express";
import dotenv from "dotenv";
import cookieParser from "cookie-parser";
import cors from "cors";
import { CorsOptions } from "cors";
//import { credentials } from "./middleware/credentials";
//import { corsOptions as options } from "./util/corsOptions";
//import { myEmit } from "./logger/emit";
import fileUpload from "express-fileupload";

dotenv.config();

const app: Express = express();
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.json());
//app.use(credentials);
//app.use(cors(options as CorsOptions));
app.use(fileUpload());

// Sync Database Relationsship
//require("./util/DBRelationships");

// Require Api

// Use apis
// Apis that doesn't require JWT Authentication

/*myEmit.emit(
  "log",
  "log event emmitted on my short code are you rotating",
  "error.log"
);*/

app.get("/", (req, res) => {
  res.send("Server functional");
});

const PORT: string | number = process.env.PORT || 6001;

app.listen(PORT, () => {
  console.log(`⚡️[server]: Server is running at http://localhost:${PORT}`);
});
