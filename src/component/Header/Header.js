import React, { useState } from "react";
import { Bars3Icon } from "@heroicons/react/24/solid";
import { Link } from "react-router-dom";
import "../../images/logo.png";
const Header = () => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  return (
    <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 bg-pink-500 mb-3">
      <div className="container px-4 mx-auto flex flex-wrap items-center justify-between">
        <div className="w-full relative flex justify-between lg:w-auto lg:static lg:block lg:justify-start">
          <Link
            to="/Home"
            className="text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase text-white"
          >
            ClickZone Quzi
          </Link>
          <button
            className="text-white cursor-pointer text-xl leading-none px-3 py-1 border border-solid border-transparent rounded bg-transparent block lg:hidden outline-none focus:outline-none"
            type="button"
            onClick={() => setNavbarOpen(!navbarOpen)}
          >
            <Bars3Icon className="h-6 w-6 ml-3 text-blue-500" />
          </button>
        </div>
        <div
          className={
            "lg:flex flex-grow items-center" +
            (navbarOpen ? " flex" : " hidden")
          }
          id="example-navbar-danger"
        >
          <ul className="flex flex-col lg:flex-row list-none lg:ml-auto">
            <Link
              to="/Home"
              className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              Home
            </Link>
            <Link
              to="/"
              className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              Topics
            </Link>

            <Link
              to="/Statistics"
              className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              Statistics
            </Link>

            <Link
              to="/Blog"
              className="ml-2 px-3 py-2 flex items-center text-xs uppercase font-bold leading-snug text-white hover:opacity-75"
            >
              Blog
            </Link>
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Header;
