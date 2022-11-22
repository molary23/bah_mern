"use strict";

const express = require("express"),
  cors = require("cors"),
  corsOptions = require("./util/cors"),
  sequelize = require("./config/dbCon");
require("dotenv").config();

const app = express();

app.use(cors(corsOptions));

// Sync Database Relationsship
require("./util/DBRelationships");
const port = process.env.PORT || 6000;

app.listen(port, () => console.log("Server running on port : ", port));
