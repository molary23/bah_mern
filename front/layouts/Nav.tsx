import { useReducer } from "react";
import { NavSubLink } from "./NavSubLink";
import { MdLightbulbOutline, MdOutlineWaterDrop } from "react-icons/md";
import { BsBookshelf, BsTools } from "react-icons/bs";
import { GiCartwheel, GiForklift, GiDiscussion } from "react-icons/gi";
import { FaPallet } from "react-icons/fa";
import { BiCabinet } from "react-icons/bi";
import { TbTruckDelivery } from "react-icons/tb";
import { RegularObject } from "../util/Types";

const initialMenu = [
  { name: "mobile", active: false },
  { name: "products", active: false },
  { name: "services", active: false },
];

const reducer = (state: RegularObject, action: RegularObject) => {
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
            <div className="flex-shrink-0">
              <a href="/">
                <img
                  className="h-8 w-8"
                  src="https://tailwindui.com/img/logos/mark.svg?color=indigo&shade=500"
                  alt="BAH Engineering Consultant"
                />
              </a>
            </div>
            <div className="hidden md:block">
              <div className="ml-10 flex items-baseline space-x-4">
                <a
                  href="/"
                  className="bg-gray-900 text-white px-3 py-2 rounded-md text-sm font-medium"
                  aria-current="page"
                >
                  Home
                </a>

                <a
                  href="/about"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  About Us
                </a>
                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 menu__menu">
                  <div className="relative">
                    <div>
                      <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Product
                      </button>
                    </div>
                    {/* Add sm:hidden here and activate on hover */}
                    <div
                      className="absolute right-0 z-10 mt-2 w-max h-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4 lg:p-8 dropdown"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <div className="flex flex-wrap justify-around nav__submenu">
                        <NavSubLink
                          title="Equipments"
                          more="More details about Profile"
                          icon={<GiForklift />}
                          link="/products/equipments"
                        />
                        <NavSubLink
                          title="Pallets"
                          more="More details about Profile"
                          icon={<FaPallet />}
                          link="/products/pallets"
                        />
                        <NavSubLink
                          title="Power"
                          more="More details about Profile"
                          icon={<MdLightbulbOutline />}
                          link="/products/power"
                        />
                        <NavSubLink
                          title="Racking"
                          more="More details about Profile"
                          icon={<BsBookshelf />}
                          link="/products/racking"
                        />
                        <NavSubLink
                          title="Shelves"
                          more="More details about Profile"
                          icon={<BiCabinet />}
                          link="/products/shelves"
                        />
                        <NavSubLink
                          title="Spares"
                          more="More details about Profile"
                          icon={<GiCartwheel />}
                          link="/products/spares"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0 menu__menu">
                  <div className="relative">
                    <div>
                      <button className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium">
                        Services
                      </button>
                    </div>
                    {/* Add sm:hidden here and activate on hover */}
                    <div
                      className="absolute right-0 z-10 mt-2 w-max h-max origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none p-4 lg:p-8 dropdown"
                      role="menu"
                      aria-orientation="vertical"
                      aria-labelledby="user-menu-button"
                      tabIndex={-1}
                    >
                      <div className="flex flex-wrap justify-start nav__submenu">
                        <NavSubLink
                          title="Consultancy"
                          more="More details about Profile"
                          icon={<GiDiscussion />}
                          link="/services/consultancy"
                        />
                        <NavSubLink
                          title="Distilled Water"
                          more="More details about Profile"
                          icon={<MdOutlineWaterDrop />}
                          link="/services/distilled-water"
                        />
                        <NavSubLink
                          title="Logistics"
                          more="More details about Profile"
                          icon={<TbTruckDelivery />}
                          link="/services/logistics"
                        />
                        <NavSubLink
                          title="Maintenance & Repair"
                          more="More details about Profile"
                          icon={<BsTools />}
                          link="/services/maintenance"
                        />
                      </div>
                    </div>
                  </div>
                </div>

                <a
                  href="/contact"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  Contact Us
                </a>

                <a
                  href="/showroom"
                  className="text-gray-300 hover:bg-gray-700 hover:text-white px-3 py-2 rounded-md text-sm font-medium"
                >
                  eShowroom
                </a>
              </div>
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
          <a
            href="/"
            className="bg-gray-900 text-white block px-3 py-2 rounded-md text-base font-medium"
            aria-current="page"
          >
            Home
          </a>

          <a
            href="/about"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            About Us
          </a>
          <button
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => handleActivate("products")}
          >
            Products
          </button>
          <div className={`md:hidden ${!menus[1].active && "hidden"}`}>
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <a
                href="/products/equipments"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Equipments
              </a>
              <a
                href="/products/pallets"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Pallets
              </a>
              <a
                href="/products/power"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Power
              </a>
              <a
                href="/products/racking"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Racking
              </a>
              <a
                href="/products/shelves"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Shelves
              </a>
              <a
                href="/products/spares"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Spares
              </a>
            </div>
          </div>

          <button
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
            onClick={() => handleActivate("services")}
          >
            Services
          </button>
          <div className={`md:hidden ${!menus[2].active && "hidden"}`}>
            <div className="space-y-1 px-2 pt-2 pb-3 sm:px-3">
              <a
                href="/services/consultancy"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Consultancy
              </a>
              <a
                href="/services/distilled-water"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Distilled Water
              </a>
              <a
                href="/services/logistics"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Logistics
              </a>
              <a
                href="/services/maintenance"
                className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
              >
                Maintenance & Repair
              </a>
            </div>
          </div>

          <a
            href="/contact"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            Contact Us
          </a>

          <a
            href="/showroom"
            className="text-gray-300 hover:bg-gray-700 hover:text-white block px-3 py-2 rounded-md text-base font-medium"
          >
            eShowroom
          </a>
        </div>
      </div>
    </nav>
  );
};

export default Nav;
