import React, { useState, useEffect } from "react";
import { FiMenu } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-32 py-6 transition-all duration-300 ${
        isScrolled ? "bg-black shadow-lg" : ""
      }`}
    >
      <div className="flex justify-between items-center">
        <div className="text-3xl font-bold text-white font-sans">Fizm</div>
        <div className="md:hidden cursor-pointer text-white text-2xl" onClick={toggleMenu}>
          <FiMenu />
        </div>
        <ul
          className={`absolute md:static top-16 left-0 w-full text-white md:w-auto bg-black md:bg-transparent flex flex-col md:flex-row space-y-6 md:space-y-0 md:space-x-20 text-lg font-semibold transition-all duration-300 ${
            isOpen ? "block" : "hidden md:flex"
          }`}
        >
          {navItems.map((item) => (
            <li key={item.name} className="relative group text-center md:text-left">
              <Link
                to={item.path}
                className={`block transition duration-300 ${
                  location.pathname === item.path ? "text-white-500" : ""
                }`}
              >
                {item.name}
              </Link>
              <span
                className={`absolute left-0 bottom-[-4px] h-[2px] w-full bg-purple-500 transition-all duration-300 ${
                  location.pathname === item.path
                    ? "opacity-100"
                    : "opacity-0 group-hover:opacity-100"
                }`}
              ></span>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
