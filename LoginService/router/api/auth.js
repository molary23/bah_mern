"use strict";

const express = require("express"),
  router = express.Router(),
  authController = require("../controller/authController"),
  User = require("../../models/User");

/*
@route POST api/login
@desc Login user
@access private
*/

router.route("/").post(authController.handleLogin);

module.exports = router;
