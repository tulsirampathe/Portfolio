import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { FiDownload } from "react-icons/fi"; // Import the icon

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [toggle, setToggle] = useState(false);

  return (
    <nav
      className={`
        ${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary
      `}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => {
            setActive("");
            window.scrollTo(0, 0);
          }}
        >
          <img src={logo} alt="logo" className="w-12 h-12 object-contain" />
          <p className="text-white text-[18px] font-bold cursor-pointer flex">
            Tulsiram &nbsp;
            <span className="sm:block hidden">| MERN Developer</span>
          </p>
        </Link>

        <ul className="list-none hidden sm:flex flex-row gap-10 items-center">
          {navLinks.map((link) => (
            <li
              key={link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}

          {/* Add the "Download My Resume" button */}
          <a
            href="/resume/Resume.pdf"
            download="Tulsiram_Pathe_Resume"
            className="green-pink-gradient bg-tertiary text-white py-2 px-6 rounded-full flex items-center gap-2 font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"
          >
            <FiDownload className="text-[20px]" />
            Resume
          </a>
        </ul>

        {/* Mobile Menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center">
          <img
            src={toggle ? close : menu}
            alt="menu"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setToggle(!toggle)}
          />

          <div
            className={`${
              !toggle ? "hidden" : "flex"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex flex-col justify-center items-center gap-10">
              {navLinks.map((link) => (
                <li
                  key={link.id}
                  className={`${
                    active === link.title ? "text-white" : "text-secondary"
                  } hover:text-white text-[18px] font-medium cursor-pointer`}
                  onClick={() => {
                    setActive(link.title);
                    setToggle(!toggle);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}

              {/* Add the "Download My Resume" button in the mobile menu */}
              <li>
                <a
                  href="/Resume.pdf"
                  download="Tulsiram_Pathe_Resume"
                  className="green-pink-gradient bg-tertiary text-white py-2 px-4 rounded-full flex items-center gap-2 font-semibold shadow-lg hover:shadow-2xl hover:scale-105 transition-transform duration-300 ease-in-out"

                >
                  <FiDownload className="text-[20px]" /> Resume
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
