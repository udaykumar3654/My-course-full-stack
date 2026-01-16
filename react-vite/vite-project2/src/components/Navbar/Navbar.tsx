import React, { useState } from "react";
import { FaPhoneAlt } from "react-icons/fa";
import { NavLinks } from "../../constant/NavLink";
import Darkmode from "../../constant/Darkmode";
import { IoMdClose } from "react-icons/io";
import { CiMenuBurger } from "react-icons/ci";
import ResponsiveMenu from "../ResponsiveMenu";
import { Logo } from "../../image";

const Navbar = () => {
  const [showMenu, setMenu] = useState(false);
  const handleMenuToggle = () => setMenu(!showMenu);
  return (
    <div className="bg-gray-300 dark:bg-black dark:text-white hover:bg-red-500 relative z-1">
      <div className="container">
        <div className="flex justify-between items-center">
          <div className=" hidden md:flex items-center gap-3">
            <FaPhoneAlt className="text-primary" />
            <span>+977 90769933666</span>
          </div>
          <div>
            <img src={Logo} alt="logo" className="w-16" />
          </div>
          <nav>
            <ul className="hidden md:flex items-center gap-5 h-full">
              {NavLinks.map((item) => (
                <li key={item.id}>
                  <a
                    href={item.link}
                    className="font-semibold text-lg hover:text-primary"
                  >
                    {item.name}
                  </a>
                </li>
              ))}
              <Darkmode />
            </ul>
          </nav>
          <div className="md:hidden flex gap-5 px-5 items-center">
            <Darkmode />
            {showMenu ? (
              <IoMdClose onClick={handleMenuToggle} className="text-2xl" />
            ) : (
              <CiMenuBurger onClick={handleMenuToggle} className="text-2xl" />
            )}
          </div>
        </div>
      </div>
      <ResponsiveMenu showMenu={showMenu} />
    </div>
  );
};

export default Navbar;
