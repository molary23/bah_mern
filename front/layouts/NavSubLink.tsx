import { NavSub } from "../util/Types";

export const NavSubLink = (props: NavSub) => {
  const { title, more, icon, link } = props;
  return (
    <div className="basis-1/3 mb-4">
      <a
        href={link}
        className="block px-4 py-2 text-sm text-gray-700"
        role="menuitem"
        tabIndex={-1}
      >
        <div className="flex items-center gap-3">
          <div className="nav__submenu--icon">{icon}</div>
          <div className="nav__submenu--title">
            <h2 className="text-1xl font-bold mt-4">{title}</h2>
            <p>{more}</p>
          </div>
        </div>
      </a>
    </div>
  );
};
