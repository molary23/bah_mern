"use strict";

const express = require("express"),
  router = express.Router(),
  refreshController = require("../controller/refreshController");

/*
@route GET api/refresh/
@desc Get a new Access Token
@access private
*/

router.get("/", refreshController.handleRefreshToken);

module.exports = router;
