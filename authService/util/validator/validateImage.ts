import isEmpty from "./isEmpty";
import path from "path";
import { RegularObject, NestedRegularObject } from "../Types";

const allowedExtArray = [".jpg", ".png", ".jpeg"],
  FILE_SIZE_LIMIT = 10 * 1024 * 1024;
export default function validateImage(files: NestedRegularObject) {
  let errors: RegularObject = {},
    fileExtension = path.extname(files.file.name as string);

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
}
