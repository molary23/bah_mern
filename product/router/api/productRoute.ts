import express, { Express } from "express";
import { verifyLevels } from "../../middleware/verifyLevels";
import LEVEL_LIST from "../../util/level";
import {
  createProduct,
  deleteProduct,
  updateProduct,
  restoreProduct,
  getProduct,
  getAllProducts,
  updateImage,
  restockProduct,
} from "../../controller/productController";
import { verifyJWT } from "../../middleware/verifyJWT";

const router = express.Router();

/*
@route GET api/product/all
@desc get all Products
@access private
*/

router.route("/all").get(getAllProducts);

/*
@route GET api/product/id
@desc get a Product
@access private
*/

router.route("/:id").get(getProduct);

/*
@route POST api/product/add
@desc get a Product
@access private
*/

router
  .route("/add")
  .post(
    verifyJWT,
    verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]),
    createProduct
  );

/*
@route PUT api/product/update
@desc update a Product
@access private
*/

router
  .route("/:id")
  .put(
    verifyJWT,
    verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]),
    updateProduct
  );

/*
@route DELETE api/product/:id
@desc delete a Product
@access private
*/

router
  .route("/:id")
  .delete(verifyJWT, verifyLevels([LEVEL_LIST.admin]), deleteProduct);

/*
@route PATCH api/product/id
@desc Restore a Product
@access private - Admin
*/

router
  .route("/:id")
  .patch(verifyJWT, verifyLevels([LEVEL_LIST.admin]), restoreProduct);

/*
@route PUT api/product/image/id
@desc Upload Product Image
@access private - Admin
*/

router
  .route("/image/:id")
  .put(
    verifyJWT,
    verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]),
    updateImage
  );

/*
@route POST api/product/restock
@desc Upload Product Image
@access private - Admin
*/

router
  .route("/restock")
  .post(verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]), restockProduct);

export { router as product };
