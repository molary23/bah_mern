import express, { Express, Request, Response } from "express";
import {
  upgradeCustomer,
  deleteCustomer,
  restoreCustomer,
} from "../../controller/customerController";
import { verifyJWT } from "../../middleware/verifyJWT";

const router = express.Router();

/*
@route POST api/customer/:id
@desc Delete customer
@access private
*/

router.route("/:id").delete(verifyJWT, deleteCustomer);

/*
@route POST api/customer/:id
@desc Restore customer
@access private
*/

router.route("/:id").put(verifyJWT, restoreCustomer);

/*
@route POST api/customer/:id
@desc update customer's phone
@access private
*/

router.route("/:id").patch(verifyJWT, upgradeCustomer);

/*
@route POST api/customer/all
@desc update customer's password
@access private
*/

router.route("/all").get(verifyJWT);

/*
@route POST api/customer/:id
@desc upload customer's photo
@access private
*/

router.route("/:id").get(verifyJWT);

export { router as customer };
