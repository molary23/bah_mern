"use strict";

const express = require("express");

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

// Sync Database Relationsship
require("./util/DBRelationships");

require("./controllers/act");
require("./controllers/cron");

const port = process.env.PORT || 6002;

app.listen(port, () => console.log("Server running on port : ", port));
