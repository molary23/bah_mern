"use strict";

const express = require("express"),
  cors = require("cors"),
  cookieParser = require("cookie-parser"),
  corsOptions = require("../general/corsOptions"),
  credentials = require("../general/credentials"),
  verifyJWT = require("./router/middleware/verifyJWT");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(credentials);
app.use(cors(corsOptions));
app.use(cookieParser());

// Sync Database Relationsship
require("./util/DBRelationships");

// Import Apis

const category = require("./router/api/category");
/*,
  user = require("./router/api/user"),
  refresh = require("./router/api/refresh"),
  logout = require("./router/api/logout");

// Use apis
// Apis that doesn't require JWT Authentication
app.use("/api/auth", auth);
app.use("/api/refresh", refresh);
app.use("/api/logout", logout);
*/

app.use(verifyJWT);
// Apis that require JWT Authentication
app.use("/api/category", category);

const port = process.env.PORT || 6001;

app.listen(port, () => console.log("Server running on port : ", port));
