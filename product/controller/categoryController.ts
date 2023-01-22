import { Categories } from "../models/Category";
import { Bins } from "../models/Bin";
import { Request, Response } from "express";
import { Op } from "sequelize";
import isEmpty from "../util/validator/isEmpty";
import {
  Err as err,
  Message as message,
  IGetUserAuthInfoRequest,
  RegularObject,
} from "../util/Types";
import validator from "validator";
import { myEmit } from "../logger/emit";
import paginate from "../util/pagination";

const createCategory = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const { categoryName } = req.body,
    UserId = req.id;

  if (isEmpty(categoryName)) {
    err.category = "Category Field is required.";
    return res.status(400).json(err);
  }

  try {
    const [check, category] = await Categories.findOrCreate({
      where: { categoryName },
      defaults: {
        categoryName,
        UserId,
      },
    });

    if (category) {
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Category created successfully.`,
        "category.success.log"
      );
      message.category = "Category created successfully.";
      return res.status(200).json(message);
    } else {
      err.category = "Category name already exists";
      return res.status(419).json(err);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Category creation failed.`,
      "category.error.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const updateCategory = async (req: Request, res: Response) => {
  const id: number = Number(req.params.id),
    categoryName: string = req.body.categoryName;

  if (isEmpty(id)) {
    err.category = "ID is required";
    return res.status(400).json(err);
  }

  if (isEmpty(categoryName)) {
    err.update = "Category Name is required";
    return res.status(400).json(err);
  }

  try {
    const checkCategory = await Categories.findOne({
      where: { categoryName },
    });
    if (checkCategory) {
      err.update = "Category Name already exists";
      return res.status(419).json(err);
    }
    const updateCategory = await Categories.update(
      { categoryName },
      {
        where: {
          id,
        },
      }
    );
    if (updateCategory) {
      myEmit.emit(
        "log",
        `${req.url}\t${req.headers.origin}\t Category updated successfully.`,
        "category.success.log"
      );
      message.update = "Category updated successfully";
      return res.status(200).json(message);
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Category updated failed.`,
      "category.error.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const deleteCategory = async (
  req: IGetUserAuthInfoRequest | any,
  res: Response
) => {
  const id: number = Number(req.params.id);
  if (isEmpty(id)) {
    err.category = "ID is required";
    return res.status(400).json(err);
  }

  try {
    const check = await Categories.findOne({
      where: {
        id,
        status: "d",
      },
    });
    if (check) {
      err.message = "Category has already been deleted.";
      return res.status(202).json(err);
    }

    const deleteCategory = await Categories.update(
      { status: "d" },
      {
        where: { id },
      }
    );

    if (deleteCategory) {
      const newTrash: RegularObject | any = {
        itemId: id,
        itemTable: "c",
        UserId: req.id,
      };
      const trash = await Bins.create(newTrash);
      if (trash) {
        myEmit.emit(
          "log",
          `${req.url}\t${req.headers.origin}\t Category deleted successfully.`,
          "category.success.log"
        );
        message.delete = "Category deleted successfully";
        return res.status(202).json(message);
      }
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t Category detion failed.`,
      "category.error.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

const getAllCategories = async (req: Request, res: Response) => {
  const pageNumber = Number(req.params.pageNumber);
  const { offset, limit } = paginate(pageNumber, 5),
    status = req.body.status ?? "a";

  let where: RegularObject | any = { status };

  if (req.body.search) {
    const search: string = req.body.search,
      searchArray = search.split("+");

    if (searchArray.length > 1) {
      let newSearchArray = [],
        newSearchObj = {};
      for (let i = 0; i < searchArray.length; i++) {
        if (validator.isAlphanumeric(searchArray[i])) {
          newSearchObj = {
            categoryName: { [Op.substring]: searchArray[i] },
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
            categoryName: { [Op.substring]: searchTerms },
          },
        };
      }
    }
  }

  try {
    const allCategory = await Categories.findAndCountAll({
      where,
      offset,
      limit,
      attributes: ["categoryName", "id", "UserId"],
    });
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t All Category Selected.`,
      "category.success.log"
    );
    return res.status(200).json(allCategory);
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t All Category selection failed.`,
      "category.error.log"
    );
    return res.sendStatus(400);
  }
};

const getCategory = async (req: Request, res: Response) => {
  const id = parseInt(req.params.id);
  try {
    const category = await Categories.findOne({
      where: {
        id,
      },
      attributes: ["categoryName", "id", "UserId"],
    });
    res.status(200).json(category);
  } catch (error) {
    res.status(400).json(error);
  }
};

const restoreCategory = async (req: Request, res: Response) => {
  const id: number = Number(req?.params?.id);

  try {
    const updateProduct = await Categories.update(
      {
        status: "a",
      },
      {
        where: { id },
      }
    );

    if (updateProduct) {
      const restored = await Bins.destroy({
        where: {
          itemId: id,
          itemTable: "c",
        },
      });
      if (restored) {
        myEmit.emit(
          "log",
          `${req.url}\t${req.headers.origin}\t A Category selected successfully.`,
          "category.success.log"
        );
        message.restore = "Category successfully restored.";
        return res.status(200).json(message);
      }
    }
  } catch (error) {
    myEmit.emit(
      "log",
      `${req.url}\t${req.headers.origin}\t A Category selection failed.`,
      "category.error.log"
    );
    return res.status(400).json(`Error: ${error}`);
  }
};

export {
  createCategory,
  updateCategory,
  deleteCategory,
  getAllCategories,
  getCategory,
  restoreCategory,
};
