"use strict";

const express = require("express"),
  router = express.Router(),
  userController = require("../controller/userController");

/*
@route GET api/user/all
@desc View all users
@access private
*/

router.route("/all").get(userController.getAllUsers);

/*
@route GET api/user/:id
@desc View a user
@access private
*/
router.route("/:id").get(userController.getUser);

/*
@route POST api/user/add
@desc Add a new user
@access private
*/

router.route("/add").post(userController.addUser);

/*
@route PUT api/user/phone
@desc Edit user phone
@access private
*/

router.route("/phone").put(userController.updatePhone);

/*
@route PUT api/user/password
@desc Edit user password
@access private
*/

router.route("/password").put(userController.updatePassword);

module.exports = router;
