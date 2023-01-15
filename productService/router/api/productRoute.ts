import express, { Express } from "express";
import { verifyJWT } from "../../middleware/verifyJWT";
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
} from "../../controller/productController";

const router = express.Router();

/*
@route GET api/product/all
@desc get all Categories
@access private
*/

router
  .route("/all")
  .get(verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]), getAllProducts);

/*
@route GET api/product/id
@desc get a Product
@access private
*/

router
  .route("/:id")
  .get(verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]), getProduct);

/*
@route POST api/product/add
@desc get a Product
@access private
*/

router
  .route("/add")
  .post(verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]), createProduct);

/*
@route PUT api/product/update
@desc update a Product
@access private
*/

router
  .route("/:id")
  .put(verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]), updateProduct);

/*
@route DELETE api/product/:id
@desc delete a Product
@access private
*/

router.route("/:id").delete(verifyLevels([LEVEL_LIST.admin]), deleteProduct);

/*
@route GET api/product/id
@desc Restore a Product
@access private - Admin
*/

router.route("/:id").patch(verifyLevels([LEVEL_LIST.admin]), restoreProduct);

/*
@route GET api/product/image/id
@desc Upload Product Image
@access private - Admin
*/

router
  .route("/image/:id")
  .put(verifyLevels([LEVEL_LIST.admin, , LEVEL_LIST.manager]), updateImage);

export { router as product };
