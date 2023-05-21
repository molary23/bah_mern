import { RegularObject } from "../util/Types";
import useEmptyCheck from "./useEmptyCheck";
import useTypeCheck from "./useTypeCheck";

export default function useInputValidate(
  object: RegularObject,
  value: string,
  type: string = "string"
): boolean {
  return (
    !Object.keys(object).includes(value) ||
    useEmptyCheck(object?.[value]) ||
    !useTypeCheck(object?.[value], type)
  );
}
