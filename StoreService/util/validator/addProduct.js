"use strict";
const validator = require("validator"),
  isEmpty = require("../../../general/validator/isEmpty");

module.exports = function validateAddProductInput(data) {
  let errors = {};

  data.productName = !isEmpty(data.productName) ? data.productName : "";
  data.productModel = !isEmpty(data.productModel) ? data.productModel : "";
  data.productQuantity = !isEmpty(data.productQuantity)
    ? data.productQuantity
    : "";
  data.CategoryId = !isEmpty(data.CategoryId) ? data.CategoryId : "";

  if (validator.isEmpty(data.productName)) {
    errors.productName = "Product Name Field can't be Empty";
  }
  if (validator.isEmpty(data.productModel)) {
    errors.productModel = "Product Model Field can't be Empty";
  }
  if (validator.isEmpty(data.productQuantity)) {
    errors.productQuantity = "Product Quantity Field can't be Empty";
  }
  if (!validator.isNumeric(data.productQuantity)) {
    errors.productQuantity = "Product Quantity Field must be a number";
  }
  if (validator.isEmpty(data.CategoryId)) {
    errors.category = "Category of Product is compulsory";
  }
  if (!validator.isNumeric(data.CategoryId)) {
    errors.category = "Product Category Field must be a number";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
