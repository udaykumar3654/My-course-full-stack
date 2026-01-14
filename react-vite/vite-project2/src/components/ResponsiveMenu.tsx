import React from "react";
import { NavLinks } from "../constant/NavLink";
import { Logo } from "../image";

type ResponsiveMenuProps = {
  showMenu: boolean;
};
const ResponsiveMenu = ({ showMenu }: ResponsiveMenuProps) => {
  return (
    <div
      className={`${showMenu ? "left-0" : "left-[-100%]"}
    fixed top-0 flex-col w-[75%] dark: bg-gray-900 h-screen px-8 pt-18 gap-3
    `}
    >
      <div>
        <img src={Logo} alt="logo" className="w-16" />
      </div>
      <div>
        <ul className="flex-col gap-3">
          {NavLinks.map((item) => (
            <li key={item.id}>
              <a href={item.link} className="captalize  hover:text-primary">
                {item.name}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default ResponsiveMenu;
