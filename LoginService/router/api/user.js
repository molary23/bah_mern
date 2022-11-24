"use strict";

const express = require("express"),
  router = express.Router(),
  userController = require("../controller/userController"),
  User = require("../../models/User");

/*
@route GET api/
@desc View all users
@access private
*/

router.route("/all").get(userController.getAllUsers);

/*
@route GET api/:id
@desc View a user
@access private
*/
router.route("/:id").get(userController.getUser);

/*
@route POST api/
@desc Add a new user
@access private
*/

router.route("/add").post(userController.addUser);

module.exports = router;
