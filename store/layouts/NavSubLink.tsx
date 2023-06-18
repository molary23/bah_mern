import { NavSub } from "../util/Types";

export const NavSubLink = (props: NavSub) => {
  const { title, link, count } = props;
  return (
    <div className="cursor-pointer">
      <a
        href={link}
        className="block px-8 py-2 text-sm text-gray-700 hover:bg-slate-200"
        role="menuitem"
        tabIndex={-1}
      >
        <div className="flex justify-between">
          <div className="category_name">{title}</div>
          <span className="inline-flex items-center rounded-md bg-purple-50 px-2 py-1 text-xs font-medium text-purple-700 ring-1 ring-inset ring-purple-700/10">
            {count ? count : 0}
          </span>
        </div>
      </a>
    </div>
  );
};
