import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";

function NavBar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <header>
      <div className="flex items-center justify-between px-4 py-2">
        <Link className="flex items-center" to="/">
          <span className="font-logo text-4xl md:text-5xl lg:text-5xl">M</span>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 md:w-8 md:h-8 lg:w-8 lg:h-8 mx-2"
            aria-label="Logo"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 6.375c0 2.278-3.694 4.125-8.25 4.125S3.75 8.653 3.75 6.375m16.5 0c0-2.278-3.694-4.125-8.25-4.125S3.75 4.097 3.75 6.375m16.5 0v11.25c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125V6.375m16.5 0v3.75m-16.5-3.75v3.75m16.5 0v3.75C20.25 16.153 16.556 18 12 18s-8.25-1.847-8.25-4.125v-3.75m16.5 0c0 2.278-3.694 4.125-8.25 4.125s-8.25-1.847-8.25-4.125"
            />
          </svg>
          <span className="font-logo text-4xl md:text-5xl lg:text-5xl">G</span>
        </Link>
        <button
          className="menu flex flex-col justify-center items-center md:hidden lg:hidden"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black mb-1"></span>
          <span className="block w-6 h-1 bg-black"></span>
        </button>
        <ul
          className={`${
            menuOpen ? "block" : "hidden"
          } absolute top-16 left-0 w-full bg-white text-center md:flex md:static md:bg-transparent md:flex-row md:w-auto`}
        >
          <li className="md:ml-4">
            <NavLink
              to="/about"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              onClick={() => setMenuOpen(false)}
            >
              About
            </NavLink>
          </li>
          <li className="md:ml-4">
            <NavLink
              to="/services"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              onClick={() => setMenuOpen(false)}
            >
              Services
            </NavLink>
          </li>
          <li className="md:ml-4">
            <NavLink
              to="/contact"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              onClick={() => setMenuOpen(false)}
            >
              Contact
            </NavLink>
          </li>
          <li className="md:ml-4">
            <NavLink
              to="/blog"
              className={({ isActive }) =>
                isActive ? "text-blue-500" : "text-black"
              }
              onClick={() => setMenuOpen(false)}
            >
              Blog
            </NavLink>
          </li>
        </ul>
      </div>
    </header>
  );
}

export default NavBar;
