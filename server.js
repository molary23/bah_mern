"use strict";

const express = require("express"),
  sequelize = require("./config/dbCon");
require("dotenv").config();

const app = express();

// Sync Database Relationsship
require("./util/DBRelationships");
const port = process.env.PORT || 3000;

app.listen(port, () => console.log(process.env.DB_USERNAME, port));
