import { useState, useEffect } from "react";
import { FiMenu, FiX } from "react-icons/fi";
import { Link, useLocation } from "react-router-dom";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const location = useLocation();

  const toggleMenu = (e) => {
    e.stopPropagation();
    setIsOpen(!isOpen);
  };

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);

    const closeMenuOnOutsideClick = () => {
      if (isOpen) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", closeMenuOnOutsideClick);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("click", closeMenuOnOutsideClick);
    };
  }, [isOpen]);

  const navItems = [
    { name: "Home", path: "/" },
    { name: "About", path: "/about" },
    { name: "Projects", path: "/projects" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 px-6 md:px-36 py-6 transition-all duration-500 ${
        isScrolled ? "bg-black/90 backdrop-blur-sm shadow-xl" : "bg-transparent"
      }`}
    >
      <div className="flex justify-between items-center max-w-7xl mx-auto">
        <div
          className="text-3xl font-bold text-white font-sans cursor-pointer group"
          onClick={() => (window.location.href = "/")}
        >
          <span className="relative">
            {import.meta.env.VITE_APP_LOGO_TEXT || "Fizm"}
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-purple-500 transition-all duration-300 group-hover:w-full"></span>
          </span>
        </div>

        <button
          className="md:hidden cursor-pointer text-white text-3xl focus:outline-none z-50 transition-transform hover:scale-110"
          onClick={toggleMenu}
          aria-label="Toggle menu"
        >
          {isOpen ? (
            <FiX className="hover:text-purple-500 transition-colors" />
          ) : (
            <FiMenu className="hover:text-purple-500 transition-colors" />
          )}
        </button>

        <ul
          className={`absolute md:static top-0 left-0 w-full md:w-auto h-screen md:h-auto bg-black/95 md:bg-transparent backdrop-blur-sm md:backdrop-blur-none flex flex-col md:flex-row items-center md:items-start justify-center space-y-8 md:space-y-0 md:space-x-12 text-lg font-medium transition-transform duration-500 ease-in-out ${
            isOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
          }`}
          onClick={(e) => e.stopPropagation()}
        >
          {navItems.map((item) => (
            <li
              key={item.name}
              className="relative group text-center md:text-left"
            >
              <Link
                to={item.path}
                onClick={() => setIsOpen(false)}
                className={`block px-4 py-2 transition-all duration-300 ${
                  location.pathname === item.path
                    ? "text-purple-500"
                    : "text-white hover:text-purple-300"
                }`}
              >
                <span className="relative z-10">
                  {item.name}
                  <span
                    className={`absolute left-1/2 -bottom-1 w-0 h-[2px] bg-purple-500 transform -translate-x-1/2 transition-all duration-300 ${
                      location.pathname === item.path
                        ? "w-[calc(100%-1rem)]"
                        : "group-hover:w-[calc(100%-1rem)]"
                    }`}
                  ></span>
                </span>
                {location.pathname === item.path && null}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;