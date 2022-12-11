"use strict";
const isEmpty = require("../../../general/validator/isEmpty");
const path = require("path"),
  allowedExtArray = [".jpg", ".png", ".jpeg"],
  FILE_SIZE_LIMIT = 10 * 1024 * 1024;
module.exports = function validateImage(files) {
  let errors = {},
    fileExtension = path.extname(files.file.name);

  if (!files) {
    errors.file = "Missing File";
  }

  if (!allowedExtArray.includes(fileExtension.toLowerCase())) {
    errors.extension = "File extension not allowed";
  }

  if (files.file.size > FILE_SIZE_LIMIT) {
    errors.size = "File size limit exceeded";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
};
