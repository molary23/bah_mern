import { useReducer } from "react";
import { NavSubLink } from "./NavSubLink";
import { MdLightbulbOutline, MdOutlineWaterDrop } from "react-icons/md";
import { BsBookshelf, BsTools } from "react-icons/bs";
import { GiCartwheel, GiForklift, GiDiscussion } from "react-icons/gi";
import { FaPallet } from "react-icons/fa";
import { BiCabinet } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { RegularObject } from "../util/Types";
import { SITE_CONSTANTS } from "../util/constants";
import Link from "next/link";
import NavMobileSubLink from "./NavMobileSubLink";
import { RiArrowDropDownFill } from "react-icons/ri";
import { IoSearchOutline } from "react-icons/io5";
import InputGroup from "./InputGroup";

const initialMenu = [
  { name: "mobile", active: false },
  { name: "products", active: false },
  { name: "services", active: false },
];

const reducer = (state: any, action: RegularObject) => {
  switch (action.type) {
    case "ACTIVATE":
      return state.map((menu: RegularObject) => {
        if (menu.name === action.name) {
          return { ...menu, active: !menu.active };
        } else {
          return menu;
        }
      });
    default:
      return state;
  }
};

const Nav = () => {
  const [menus, dispatch] = useReducer(reducer, initialMenu);

  const handleActivate = (menu: string) => {
    dispatch({ type: "ACTIVATE", name: menu });
  };
  return (
    <nav className="bg-gray-800 sticky top-0 z-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-between">
            <div className="flex-shrink-0 w-[30%] lg:w-[10%] sm:w-[20%]">
              <Link href="/">
                <img
                  className="sm:w-[80%] brand"
                  src={`${SITE_CONSTANTS.image}/logo_name.png`}
                  alt="BAH Engineering Consultant"
                />
              </Link>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <Link
                  href="/"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </Link>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 menu__menu">
                  <div className="relative">
                    <div>
                      <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium flex">
                        Categories <RiArrowDropDownFill />
                      </button>
                    </div>
                    {/* Add sm:hidden here and activate on hover */}
                    <div
                      className="absolute right-0 z-10 mt-2 w-max h-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4 lg:p-8 dropdown theme__nav"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <div className="flex flex-wrap justify-around nav__submenu">
                        <NavSubLink
                          title="Equipments"
                          more="We have warehouse equipments such as Forklifts, Stackers and Pickers for sale"
                          icon={<GiForklift />}
                          link="/products/equipments"
                        />
                        <NavSubLink
                          title="Pallets"
                          more="We produce and sell woodeen, plastic, steel and foldable pallets"
                          icon={<FaPallet />}
                          link="/products/pallets"
                        />
                        <NavSubLink
                          title="Power"
                          more="Explore a new source of power with us"
                          icon={<MdLightbulbOutline />}
                          link="/products/power"
                        />
                        <NavSubLink
                          title="Racking"
                          more="We sell warehouse racking such as Selective, Flow through, Gravity, mezzanine racking"
                          icon={<BsBookshelf />}
                          link="/products/racking"
                        />
                        <NavSubLink
                          title="Shelves"
                          more="We are into the production of shelves ranging from light duty, middle duty and cabinets."
                          icon={<BiCabinet />}
                          link="/products/shelves"
                        />
                        <NavSubLink
                          title="Spares"
                          more="Spare parts are an important feature of supply chain management"
                          icon={<GiCartwheel />}
                          link="/products/spares"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <Link
                  href="https://www.bahengineeringconsultant.com/about"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  About Us
                </Link>
                <Link
                  href="https://www.bahengineeringconsultant.com/contact"
                  className="text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Contact Us
                </Link>
              </div>
            </div>
            <div className="w-96 flex items-center justify-end">
              <InputGroup />
              {true ? (
                <Link
                  href="/home/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                  as={"/contact"}
                >
                  Login
                </Link>
              ) : (
                <Link
                  href="/"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Register
                </Link>
              )}
            </div>
          </div>

          <div className="-mr-2 flex md:hidden">
            <button
              type="button"
              className="inline-flex items-center justify-center rounded-md bg-gray-800 p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
              aria-controls="mobile-menu"
              aria-expanded="false"
              onClick={() => handleActivate("mobile")}
            >
              {/*<span className="sr-only">Open main menu</span>*/}

              <svg
                className="block h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5"
                />
              </svg>

              <svg
                className="hidden h-6 w-6"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth="1.5"
                stroke="currentColor"
                aria-hidden="true"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M6 18L18 6M6 6l12 12"
                />
              </svg>
            </button>
          </div>
        </div>
      </div>

      <div
        className={`md:hidden ${!menus[0].active && "hidden"}`}
        id="mobile-menu"
      >
        <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
          <Link
            href="/"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Home
          </Link>
          <button
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium flex"
            onClick={() => handleActivate("products")}
          >
            Categories <RiArrowDropDownFill />
          </button>
          <div className={`md:hidden ${!menus[1].active && "hidden"}`}>
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <NavMobileSubLink title="Equipments" />
              <NavMobileSubLink title="Equipments" />
              <NavMobileSubLink title="Equipments" />
              <NavMobileSubLink title="Equipments" />
              <NavMobileSubLink title="Equipments" />
              <NavMobileSubLink title="Equipments" />
              <NavMobileSubLink title="Equipments" />
            </div>
          </div>
          <Link
            href="https://www.bahengineeringconsultant.com/about"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            About Us
          </Link>
          <Link
            href="https://www.bahengineeringconsultant.com/contact"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Contact Us
          </Link>

          <Link
            href="/home/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            as={"/contact"}
          >
            Login
          </Link>

          <Link
            href="/showroom"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Register
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
