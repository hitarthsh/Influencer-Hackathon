import React, { useEffect } from "react";

const Navbar = ({ isMenuOpen, setIsMenuOpen, setPage }) => {
  const toggleMenu = () => {
    setIsMenuOpen((open) => !open);
  };

  const handleNavClick = (page) => {
    setPage(page);
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
          isMenuOpen ? "w-28 md:w-32" : "w-16"
        } bg-blue-700/90 border-r border-blue-500/50 z-40 flex flex-col justify-between items-center py-8 transition-all duration-400 backdrop-blur-sm`}
      >
        <div className="w-full flex justify-center">
          <button
            className={`relative w-12 h-10 flex flex-col justify-center items-center z-30 group`}
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
              }`}
            ></span>
            <span
              className={`absolute left-2 w-8 h-0.5 bg-yellow-300 transition-all duration-400 ${
                isMenuOpen ? "-rotate-45 translate-y-0" : "translate-y-2"
              }`}
            ></span>
          </button>
        </div>
        <div
          className={`flex-1 flex justify-center items-center text-center px-4 -rotate-90 transition-opacity duration-300 overflow-hidden ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <h2 className="font-serif text-base md:text-lg tracking-widest uppercase whitespace-nowrap text-yellow-300">
            Spritz Society
          </h2>
        </div>
        <div
          className={`font-serif text-xs text-center tracking-wide font-medium uppercase text-white mb-2 transition-opacity duration-300 ${
            isMenuOpen ? "opacity-100" : "opacity-0"
          }`}
        >
          <p className="-rotate-90 text-2xl">2025</p>
        </div>
      </div>

      {/* Fullscreen Overlay Menu */}
      <div
        className={`fixed top-0 left-0 w-full h-full bg-blue-700/90 z-30 transition-transform duration-700 ease-out-expo overflow-hidden backdrop-blur-sm ${
          isMenuOpen ? "translate-x-0" : "-translate-x-full"
        }`}
      >
        <nav className="w-full h-full flex flex-col justify-center items-start pl-24 md:pl-48 pr-8 relative z-10 transition-all duration-400">
          <ul className="list-none w-full">
            {[
              { page: "home", label: "HOME" },
              { page: "products", label: "PRODUCTS" },
              { page: "about", label: "ABOUT US" },
              { page: "login", label: "LOGIN" },
            ].map((item) => (
              <li className="py-4" key={item.page}>
                <a
                  href="#"
                  onClick={() => handleNavClick(item.page)}
                  className="block text-yellow-300 text-5xl md:text-7xl font-extrabold uppercase font-serif tracking-tight relative after:content-[''] after:absolute after:left-0 after:top-1/2 after:h-1 after:w-0 after:bg-yellow-300 after:transition-all after:duration-300 after:-translate-y-1/2 hover:after:w-full"
                >
                  {item.label}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </>
  );
};

export default Navbar;
