"use strict";

const Category = require("../../models/Category"),
  Trash = require("../../models/Trash"),
  { Op } = require("sequelize"),
  validator = require("validator"),
  isEmpty = require("../../../general/validator/isEmpty");

const error = {};

const addCategory = async (req, res) => {
  const newCategory = {};

  if (req.body.categoryName) newCategory.categoryName = req.body.categoryName;
  newCategory.UserId = req.id;

  if (isEmpty(newCategory.categoryName)) {
    error.category = "Category Name is required.";
    res.status(400).json(error.category);
  }

  try {
    const [category, created] = await Category.findOrCreate({
      where: { categoryName: newCategory.categoryName },
      defaults: {
        categoryName: newCategory.categoryName,
        UserId: newCategory.UserId,
      },
    });

    if (created) {
      res.status(200).json(category);
    } else {
      error.add = "Category already exists";
      return res.status(419).json(error.add);
    }
  } catch (err) {
    error.add = "Error adding Category";
    res.status(400).json(`${error.add}, ${error}`);
  }
};

const getAllCategory = async (req, res) => {
  let where = { status: "a" };

  if (req.body.search) {
    const search = req.body.search,
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
      let searchTerms = searchArray[0];
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
    const allCategory = await Category.findAndCountAll({
      where,
      attributes: ["categoryName", "id", "UserId"],
    });
    res.status(200).json(allCategory);
  } catch (err) {
    res.sendStatus(400);
  }
};

const getCategory = async (req, res) => {
  const id = parseInt(req.params.id);
  try {
    const category = await Category.findOne({
      where: {
        id,
      },
      attributes: ["categoryName", "id", "UserId"],
    });
    res.status(200).json(category);
  } catch (err) {
    error.user = "No category found";
    res.status(400).json(error);
  }
};

const deleteCategory = async (req, res) => {
  const id = parseInt(req.params.id);

  try {
    const category = await Category.update(
      {
        status: "d",
      },
      {
        where: {
          id,
        },
      }
    );

    if (category) {
      const item = {
        itemId: id,
        itemTable: "c",
      };

      const trashed = Trash.create(item);
      if (trashed) {
        res.sendStatus(202);
      }
    }
  } catch (err) {
    error.delete = "Error deleting Category";
    res.status(400).json(error);
  }
};

module.exports = { addCategory, getAllCategory, getCategory, deleteCategory };
