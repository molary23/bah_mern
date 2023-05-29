import Link from "next/link";
import { RegularObject } from "../util/Types";

export default function NavMobileSubLink(props: RegularObject) {
  return (
    <Link
      href="/products/equipments"
      className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
    >
      {props?.title}
    </Link>
  );
}
