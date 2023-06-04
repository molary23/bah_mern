import { RegularObject } from "../util/Types";
import useEmptyCheck from "./useEmptyCheck";
import useTypeCheck from "./useTypeCheck";

export default function useInputValidate(
  object: RegularObject,
  value: string,
  type: string = "string"
): boolean {
  const emptyCheck = useEmptyCheck(object?.[value]),
    typeCheck = useTypeCheck(object?.[value], type);

  return !Object.keys(object).includes(value) || emptyCheck || !typeCheck;
}
