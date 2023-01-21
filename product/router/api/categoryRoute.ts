import express, { Express } from "express";
import { verifyJWT } from "../../middleware/verifyJWT";
import { verifyLevels } from "../../middleware/verifyLevels";
import LEVEL_LIST from "../../util/level";
import {
  createCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  updateCategory,
  restoreCategory,
} from "../../controller/categoryController";

const router = express.Router();

/*
@route GET api/category/all
@desc get all Categories
@access private
*/

router
  .route("/all")
  .get(verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]), getAllCategories);

/*
@route GET api/category/id
@desc get a Category
@access private
*/

router
  .route("/:id")
  .get(verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]), getCategory);

/*
@route POST api/category/add
@desc get a Category
@access private
*/

router
  .route("/add")
  .post(verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]), createCategory);

/*
@route PUT api/category/update
@desc update a Category
@access private
*/

router
  .route("/:id")
  .put(verifyLevels([LEVEL_LIST.admin, LEVEL_LIST.manager]), updateCategory);

/*
@route DELETE api/category/:id
@desc delete a Category
@access private
*/

router.route("/:id").delete(verifyLevels([LEVEL_LIST.admin]), deleteCategory);

/*
@route GET api/category/id
@desc Restore a Category
@access private
*/

router.route("/:id").patch(verifyLevels([LEVEL_LIST.admin]), restoreCategory);

export { router as category };
