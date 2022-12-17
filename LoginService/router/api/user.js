"use strict";

const express = require("express"),
  router = express.Router(),
  userController = require("../controller/userController"),
  verifyLevels = require("../middleware/verifyLevels"),
  levelsList = require("../../util/levelsList");

/*
@route GET api/user/all
@desc View all users
@access private
*/

router
  .route("/all")
  .get(verifyLevels(levelsList.admin), userController.getAllUsers);

/*
@route GET api/user/:id
@desc View a user
@access private
*/
router
  .route("/:id")
  .get(verifyLevels(levelsList.admin), userController.getUser);

/*
@route POST api/user/add
@desc Add a new user
@access private
*/

router
  .route("/add")
  .post(verifyLevels(levelsList.admin), userController.addUser);

/*
@route PUT api/user/phone
@desc Edit user phone
@access private
*/

router
  .route("/phone")
  .put(
    verifyLevels(levelsList.admin, levelsList.store),
    userController.updatePhone
  );

/*
@route PUT api/user/password
@desc Edit user password
@access private
*/

router
  .route("/password")
  .put(
    verifyLevels(levelsList.admin, levelsList.store),
    userController.updatePassword
  );

/*
@route DELETE api/user/password
@desc Delete user 
@access private
*/

router
  .route("/:id")
  .delete(verifyLevels(levelsList.admin), userController.deleteUser);

module.exports = router;
