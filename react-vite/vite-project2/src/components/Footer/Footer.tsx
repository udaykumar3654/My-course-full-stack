import React from "react";
import { FaFacebook, FaInstagram, FaLinkedin } from "react-icons/fa";
import { NavLinks } from "../../constant/NavLink";
import { Logo } from "../../image";
const Footer = () => {
  return (
    <div className="container">
      <div className="w-full bg-gray-100 dark:bg-gray-500 dark:text-white">
        <div className="grid md:grid-cols-3 grid-cols-1 items-center">
          <div className="flex items-center gap-3">
            <img src={Logo} alt="logo" className="w-16" />
            <a href="#">
              <FaFacebook className="text-3xl" />
            </a>
            <a href="#">
              <FaInstagram className="text-3xl" />
            </a>
            <a href="#">
              <FaLinkedin className="text-3xl" />
            </a>
          </div>
          <div className="hidden md:block font-semibold">
            Contact us: +977 9807699366
          </div>
          <div className="hidden md:flex items-center">
            <ul className="flex gap-3 items-center font-semibold ">
              {NavLinks.map((item) => (
                <li key={item.id}>
                  <a href={item.link} className="hover:text-primary">
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
