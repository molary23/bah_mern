import { InputProps } from "../util/Types";

export default function InputElement(props: InputProps) {
  return (
    <div className="sm:col-span-3 col-span-6">
      <label
        htmlFor={props?.id}
        className="block text-sm font-medium leading-6 text-gray-900"
      >
        {props?.name}
      </label>
      <input
        type={props?.type || "text"}
        name={props?.name}
        id={props?.id}
        autoComplete={props?.autoComplete || "on"}
        value={props?.value}
        onChange={props?.onChange}
        aria-label={`Enter your ${props?.name}`}
        placeholder={`Enter your ${props?.name}`}
        className="mt-2 block w-full rounded-md border-0 py-1.5 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 p-2"
      />
    </div>
  );
}
