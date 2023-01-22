import fs from "fs";
import path from "path";
import { Customers } from "../models/Customer";
import { Bins } from "../models/Bin";
import { Request, Response } from "express";
import { Op } from "sequelize";
import isEmpty from "../util/validator/isEmpty";
import {
  Err as err,
  Message as message,
  IGetUserAuthInfoRequest,
  RegularObject,
  ProductObject,
  NestedRegularObject,
} from "../util/Types";
import validator from "validator";
import { myEmit } from "../logger/emit";
import paginate from "../util/pagination";
import CustomerView from "../models/CustomerView";

const deleteCustomer = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const id: number = Number(req?.params?.id);

  try {
    const check = await Customers.findOne({
      where: {
        id,
        status: "d",
      },
    });
    if (check) {
      err.message = "Customer has already been deleted.";
      return res.status(202).json(err);
    }
    const deleteCustomer = await Customers.update(
      {
        status: "d",
      },
      {
        where: { id },
      }
    );

    if (deleteCustomer) {
      const newTrash: RegularObject | any = {
        itemTable: "b",
        itemId: id,
        UserId: req.id,
      };
      const trashed = await Bins.create(newTrash);
      if (trashed) {
        myEmit.emit(
          "log",
          `${req.url}\t${req.headers.origin}\t Deleted a Customer`,
          "admin.customer.log"
        );
        message.delete = "Customer successfully deleted.";

        return res.status(200).json(message);
      }
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Deleting a Customer failed`,
      "admin.customer.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const restoreCustomer = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const id: number = Number(req?.params?.id);

  try {
    const updateCustomer = await Customers.update(
      {
        status: "a",
      },
      {
        where: { id },
      }
    );

    if (updateCustomer) {
      const restored = await Bins.destroy({
        where: {
          itemId: id,
          itemTable: "b",
        },
      });
      if (restored) {
        myEmit.emit(
          "log",
          `${req.url}\t${req.headers.origin}\t Restore a Customer`,
          "customer.log"
        );
        message.restore = "Customer successfully restored.";
        return res.status(200).json(message);
      }
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Restoring a Customer failed`,
      "customer.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const upgradeCustomer = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const id: number = Number(req?.params?.id);

  try {
    const updateCustomer = await Customers.update(
      {
        level: "p",
      },
      {
        where: { id },
      }
    );

    if (updateCustomer) {
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Upgrade a Customer`,
        "customer.log"
      );
      message.restore = "Customer successfully restored.";
      return res.status(200).json(message);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Upgrading a Customer failed`,
      "customer.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const getAllCustomers = async (req: Request, res: Response) => {
  const pageNumber = Number(req.params.pageNumber);
  const { offset, limit } = paginate(pageNumber, 5),
    status = req.body.status ?? "a";

  let where: RegularObject | any = { status };

  if (req.body.level) {
    where = { ...where, level: req.body.level };
  }

  if (req.body.search) {
    const search: string = req.body.search,
      searchArray = search.split("+");
    if (searchArray.length > 1) {
      let newSearchArray = [],
        newSearchObj = {};
      for (let i = 0; i < searchArray.length; i++) {
        if (validator.isAlphanumeric(searchArray[i])) {
          newSearchObj = {
            [Op.or]: [
              { username: { [Op.substring]: searchArray[i] } },
              { email: { [Op.substring]: searchArray[i] } },
              { city: { [Op.substring]: searchArray[i] } },
              { state: { [Op.substring]: searchArray[i] } },
              { country: { [Op.substring]: searchArray[i] } },
              { firstName: { [Op.substring]: searchArray[i] } },
              { lastName: { [Op.substring]: searchArray[i] } },
              { phone: { [Op.substring]: searchArray[i] } },
              { street: { [Op.substring]: searchArray[i] } },
            ],
          };
        }
        newSearchArray.push(newSearchObj);
      }
      where = { ...where, ...{ [Op.and]: newSearchArray } };
    } else {
      let searchTerms: string = searchArray[0];
      if (validator.isAlphanumeric(searchTerms)) {
        where = {
          ...where,
          ...{
            [Op.or]: [
              { username: { [Op.substring]: searchTerms } },
              { email: { [Op.substring]: searchTerms } },
              { city: { [Op.substring]: searchTerms } },
              { state: { [Op.substring]: searchTerms } },
              { country: { [Op.substring]: searchTerms } },
              { firstName: { [Op.substring]: searchTerms } },
              { lastName: { [Op.substring]: searchTerms } },
              { phone: { [Op.substring]: searchTerms } },
              { street: { [Op.substring]: searchTerms } },
            ],
          },
        };
      }
    }
  }

  try {
    const allCustomers = await CustomerView.findAndCountAll({
      where,
      offset,
      limit,
    });
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t All Customer selected successfully.`,
      "customer.success.log"
    );
    return res.status(200).json(allCustomers);
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t All Customer selection failed.`,
      "customer.error.log"
    );
    return res.status(400).json(error);
  }
};

const getCustomer = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const customer = await CustomerView.findOne({
      where: {
        id,
      },
    });
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Customer restored successfully.`,
      "customer.success.log"
    );
    return res.status(200).json(customer);
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Customer restoration failed.`,
      "customer.error.log"
    );
    return res.status(400).json(error);
  }
};

export {
  deleteCustomer,
  restoreCustomer,
  upgradeCustomer,
  getAllCustomers,
  getCustomer,
};
