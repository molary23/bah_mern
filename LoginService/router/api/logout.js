"use strict";

const express = require("express"),
  router = express.Router(),
  logoutController = require("../controller/logoutController");

/*
@route GET api/logout/
@desc Logout user
@access private
*/

router.get("/", logoutController.handleLogOut);

module.exports = router;
