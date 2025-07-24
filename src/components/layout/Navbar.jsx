import React, { useEffect } from "react";
import { NavLink, useNavigate } from "react-router-dom";

const Navbar = ({ isMenuOpen, setIsMenuOpen }) => {
  const navigate = useNavigate();
  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  // Close menu on navigation
  const handleNav = (to) => {
    navigate(to);
    setIsMenuOpen(false);
  };

  useEffect(() => {
    if (isMenuOpen) {
      document.body.classList.add("menu-open");
    } else {
      document.body.classList.remove("menu-open");
    }
    return () => {
      document.body.classList.remove("menu-open");
    };
  }, [isMenuOpen]);

  return (
    <>
      {/* Fixed Left Menu */}
      <div
        className={`fixed top-0 left-0 h-screen ${
          isMenuOpen ? "w-12 sm:w-16 md:w-15" : "w-12 sm:w-16"
        } bg-blue-700/90 border-r border-blue-500/50 z-40 flex flex-col justify-between items-center py-4 transition-all duration-400 backdrop-blur-sm`}
      >
        <div className="w-full flex justify-center">
          <button
            className={`relative w-10 sm:w-12 h-10 flex flex-col justify-center items-center z-30 group`}
            aria-label="Open Menu"
            onClick={toggleMenu}
          >
            <span
              className={`absolute left-2 w-8 h-0.5 bg-yellow-300 transition-all duration-400 ${
                isMenuOpen ? "rotate-45 translate-y-0" : "-translate-y-2"
              }`}
            ></span>
            <span
              className={`absolute left-2 w-8 h-0.5 bg-yellow-300 transition-all duration-400 ${
                isMenuOpen ? "opacity-0 -translate-x-5" : ""
              }
              }`}
            ></span>
            <span
              className={`absolute left-2 w-8 h-0.5 bg-yellow-300 transition-all duration-400 ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-blue-700/90 z-30 transition-transform duration-700 ease-out-expo overflow-hidden backdrop-blur-sm ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="w-full h-full flex flex-col justify-center items-start pl-16 sm:pl-24 md:pl-48 pr-4 sm:pr-8 relative z-10 transition-all duration-400">
          <ul className="list-none w-full">
            {[
              { to: "/", label: "HOME" },
              { to: "/products", label: "PRODUCTS" },
              { to: "/about", label: "ABOUT US" },
              { to: "/login", label: "LOGIN" },
            ].map((item) => (
              <li className="py-4" key={item.to}>
                <NavLink
                  to={item.to}
                  onClick={() => setIsMenuOpen(false)}
                  className={({ isActive }) =>
                    `block text-yellow-300 text-xl sm:text-2xl md:text-7xl font-extrabold uppercase font-serif tracking-tight relative after:content-[''] after:absolute after:left-0 after:top-1/2 after:h-1 after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 after:-translate-y-1/2 hover:after:w-full` +
                    (isActive ? " text-white drop-shadow-lg" : "")
                  }
                  end={item.to === "/"}
                >
                  {item.label}
                </NavLink>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
