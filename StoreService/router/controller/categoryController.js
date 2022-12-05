"use strict";

const Category = require("../../models/Category"),
  isEmpty = require("../../../general/validator/isEmpty");

const error = {};

const addCategory = async (req, res) => {
  const newCategory = {};

  if (req.body.categoryName) newCategory.category_name = req.body.categoryName;
  newCategory.UserId = req.id;

  if (isEmpty(newCategory.category_name)) {
    error.category = "Category Name is required.";
    res.status(400).json(error.category);
  }

  try {
    const [category, created] = await Category.findOrCreate({
      where: { category_name: newCategory.category_name },
      defaults: {
        category_name: newCategory.category_name,
        UserId: newCategory.UserId,
      },
    });

    if (created) {
      res.status(200).json(category);
    } else {
      error.add = "Category already exists";
      return res.status(419).json(error.add);
    }
  } catch (error) {
    error.add = "Error adding Category";
    res.status(400).json(`${error.add}, ${error}`);
  }
};

module.exports = { addCategory };
