import React, { useState } from "react";
import { FiMenu } from "react-icons/fi";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-black text-white px-6 md:px-32 py-8 flex justify-between items-center relative">
      <div className="text-3xl font-bold text-white font-sans">Fizm</div>

      {/* Hamburger Menu */}
      <div className="md:hidden cursor-pointer text-2xl" onClick={toggleMenu}>
        <FiMenu />
      </div>

      {/* Navbar Links */}
      <ul
        className={`absolute md:static top-16 left-0 w-full md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 text-lg font-semibold transition-all duration-300 ${
          isOpen ? "block" : "hidden md:flex"
        }`}
      >
        <li className="relative group text-center md:text-left">
          <Link to="/" className="block transition duration-300">
            Home
          </Link>
          <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </li>
        <li className="relative group text-center md:text-left">
          <Link to="/about" className="block transition duration-300">
            About
          </Link>
          <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </li>
        <li className="relative group text-center md:text-left">
          <Link to="/projects" className="block transition duration-300">
            Projects
          </Link>
          <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </li>
        <li className="relative group text-center md:text-left">
          <Link to="/contact" className="block transition duration-300">
            Contact
          </Link>
          <span className="absolute left-0 bottom-[-4px] h-[2px] w-full bg-purple-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
