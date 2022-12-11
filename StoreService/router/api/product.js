"use strict";

const express = require("express"),
  router = express.Router(),
  productController = require("../controller/productController"),
  verifyLevels = require("../middleware/verifyLevels"),
  levelList = require("../../../general/levelsList");

/*
@route POST api/product/add
@desc Add new product
@access private
*/

router
  .route("/add")
  .post(
    verifyLevels(levelList.admin, levelList.store),
    productController.addProduct
  );

/*
@route GET api/product/all
@desc view all products
@access private
*/

router
  .route("/all")
  .get(
    verifyLevels(levelList.admin, levelList.store),
    productController.getAllProducts
  );

/*
@route GET api/product/:id
@desc view a product
@access private
*/

router
  .route("/:id")
  .get(
    verifyLevels(levelList.admin, levelList.store),
    productController.getProduct
  );

module.exports = router;
