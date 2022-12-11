"use strict";

const express = require("express"),
  cors = require("cors"),
  cookieParser = require("cookie-parser"),
  fileUpload = require("express-fileupload"),
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
app.use(fileUpload());

// Sync Database Relationsship
require("./util/DBRelationships");

// Import Apis

const category = require("./router/api/category"),
  product = require("./router/api/product");
/*,
  user = require("./router/api/user"),
  refresh = require("./router/api/refresh"),
  logout = require("./router/api/logout");

  app.use(fileUpload({
    createParentPath: true
}));



// Use apis
// Apis that doesn't require JWT Authentication
app.use("/api/auth", auth);
app.use("/api/refresh", refresh);
app.use("/api/logout", logout);
*/

app.use(verifyJWT);
// Apis that require JWT Authentication
app.use("/api/category", category);
app.use("/api/product", product);

const port = process.env.PORT || 6001;

app.listen(port, () => console.log("Server running on port : ", port));
