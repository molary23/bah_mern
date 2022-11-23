"use strict";

const express = require("express"),
  router = express.Router(),
  userController = require("../controller/userController"),
  User = require("../../models/User");

/*
@route GET api/all
@desc View all users
@access private
*/

router.route("/").get(userController.getAllUsers);
router.route("/:id").get(userController.getUser);

module.exports = router;
