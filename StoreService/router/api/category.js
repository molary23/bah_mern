"use strict";

const express = require("express"),
  router = express.Router(),
  categoryController = require("../controller/categoryController"),
  verifyLevels = require("../middleware/verifyLevels"),
  levelsList = require("../../../general/levelsList");

router
  .route("/add")
  .post(verifyLevels(levelsList.admin), categoryController.addCategory);

module.exports = router;
