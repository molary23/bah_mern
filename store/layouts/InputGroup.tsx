import { IoSearchOutline } from "react-icons/io5";

export default function InputGroup() {
  return (
    <div className="flex items-center">
      <div className="relative rounded-md shadow-sm">
        <input
          type="search"
          name="search"
          id="search"
          className="block w-1 rounded-md border-0 py-1.5 pl-2 pr-20 text-gray-900 ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset focus:ring-indigo-600 sm:text-sm sm:leading-6 focus:w-full"
          placeholder="Search for products..."
        />
        <div className="absolute inset-y-0 right-3 flex items-center">
          <IoSearchOutline />
        </div>
      </div>
    </div>
  );
}
