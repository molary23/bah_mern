"use strict";

const express = require("express"),
  router = express.Router(),
  categoryController = require("../controller/categoryController"),
  verifyLevels = require("../middleware/verifyLevels"),
  levelsList = require("../../../general/levelsList");

/*
@route POST api/category/add
@desc Add new category
@access private - All Admins
*/

router
  .route("/add")
  .post(
    verifyLevels(levelsList.admin, levelsList.store),
    categoryController.addCategory
  );

/*
@route GET api/category/all
@desc View All Category
@access private - All Admins
*/

router
  .route("/all")
  .get(
    verifyLevels(levelsList.admin, levelsList.store),
    categoryController.getAllCategory
  );

/*
@route GET api/category/:id
@desc View a Category
@access private - All Admins
*/

router
  .route("/:id")
  .get(
    verifyLevels(levelsList.admin, levelsList.store),
    categoryController.getCategory
  );

/*
@route DELETE api/category/:id
@desc Delete a Category
@access private - Only Main Admin
*/

router
  .route("/:id")
  .delete(verifyLevels(levelsList.admin), categoryController.deleteCategory);

/*
@route PUT api/category/:id
@desc Edit a Category
@access private - All Admin
*/

router
  .route("/update")
  .put(
    verifyLevels(levelsList.admin, levelsList.store),
    categoryController.updateCategory
  );

module.exports = router;
