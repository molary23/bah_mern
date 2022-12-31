const validator = require("validator");
import isEmpty from "./isEmpty";
import { DBUser, RegularObject } from "../Types";

export default function validateUserLogin(
  data: Pick<DBUser, "username" | "email" | "password">
) {
  let errors: RegularObject = {};

  data.password = !isEmpty(data.password) ? data.password.toLowerCase() : "";
  data.username = !isEmpty(data.username) ? data.username.toLowerCase() : "";

  if (validator.isEmpty(data.username)) {
    errors.username = "Username or Email Field can't be Empty";
  }
  if (validator.isEmpty(data.password)) {
    errors.password = "Password Field can't be Empty";
  }

  return {
    errors,
    isValid: isEmpty(errors),
  };
}
