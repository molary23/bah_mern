"use strict";

const express = require("express"),
  cors = require("cors"),
  corsOptions = require("./util/cors"),
  bodyParser = require("body-parser"),
  sequelize = require("./config/dbCon");
require("dotenv").config();

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());
app.use(cors(corsOptions));

// Sync Database Relationsship
require("./util/DBRelationships");

// Import Apis
const user = require("./router/api/user");

// Use apis
app.use("/api/user", user);

const port = process.env.PORT || 6000;

app.listen(port, () => console.log("Server running on port : ", port));
