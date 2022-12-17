"use strict";

const express = require("express"),
  router = express.Router(),
  productController = require("../controller/productController"),
  verifyLevels = require("../middleware/verifyLevels"),
  levelList = require("../../../general/levelsList");

/*
@route POST api/product/add
@desc Add new product
@access private - All Admins
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
@access private - All Admins
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
@access private - All Admins
*/

router
  .route("/:id")
  .get(
    verifyLevels(levelList.admin, levelList.store),
    productController.getProduct
  );

/*
@route DELETE api/product/:id
@desc view a product
@access private - Only Main Admin
*/

router
  .route("/:id")
  .delete(verifyLevels(levelList.admin), productController.deleteProduct);

/*
@route PUT api/product/:id
@desc Edit a product
@access private - All Admin
*/

router
  .route("/update")
  .put(
    verifyLevels(levelList.admin, levelList.store),
    productController.updateProduct
  );

/*
@route PUT api/product/edit-image
@desc Edit a product Image
@access private - All Admin
*/

router
  .route("/edit-image")
  .put(
    verifyLevels(levelList.admin, levelList.store),
    productController.updateImage
  );

module.exports = router;
