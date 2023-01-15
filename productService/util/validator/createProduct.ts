const validator = require("validator");
import isEmpty from "./isEmpty";
import { RegularObject, ProductObject } from "../Types";

export default function validateAddProductInput(data: ProductObject) {
  let errors: RegularObject = {};

  data.productName = !isEmpty(data.productName)
    ? data.productName.toLowerCase()
    : "";
  data.productQuantity = !isEmpty(data.productQuantity)
    ? data.productQuantity
    : 0;
  data.productModel = !isEmpty(data.productModel)
    ? data.productModel.toLowerCase()
    : "";
  data.CategoryId = !isEmpty(data.CategoryId)
    ? data.CategoryId.toLowerCase()
    : "";

  if (validator.isEmpty(data.productName)) {
    errors.productName = "Product Name Field can't be Empty";
  }
  if (validator.isEmpty(data.productModel)) {
    errors.productModel = "Product Model Field can't be Empty";
  }
  if (validator.isEmpty(data.CategoryId)) {
    errors.CategoryId = "Category Id can't be Empty";
  }
  if (data.productQuantity === 0) {
    errors.productQuantity = "Product Quantity Field can't be Empty";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
