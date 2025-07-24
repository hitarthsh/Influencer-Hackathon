import React from "react";
import Logo from "../../assets/images/logo.svg";
import {
  FaInstagram,
  FaFacebook,
  FaTwitter,
  FaGithub,
  FaDribbble,
} from "react-icons/fa";

const socialLinks = [
  {
    href: "https://instagram.com/",
    label: "Instagram",
    icon: (
      <FaInstagram className="w-7 h-7 text-blue-900 hover:text-yellow-400 transition-colors" />
    ),
  },
  {
    href: "https://facebook.com/",
    label: "Facebook",
    icon: (
      <FaFacebook className="w-7 h-7 text-blue-900 hover:text-yellow-400 transition-colors" />
    ),
  },
  {
    href: "https://twitter.com/",
    label: "Twitter",
    icon: (
      <FaTwitter className="w-7 h-7 text-blue-900 hover:text-yellow-400 transition-colors" />
    ),
  },
  {
    href: "https://github.com/",
    label: "GitHub",
    icon: (
      <FaGithub className="w-7 h-7 text-blue-900 hover:text-yellow-400 transition-colors" />
    ),
  },
  {
    href: "https://dribbble.com/",
    label: "Dribbble",
    icon: (
      <FaDribbble className="w-7 h-7 text-blue-900 hover:text-yellow-400 transition-colors" />
    ),
  },
];

const navLinks = [
  { label: "Home", href: "#" },
  { label: "Products", href: "#" },
  { label: "About Us", href: "#" },
  { label: "Login", href: "#" },
];

const Footer = () => {
  return (
    <footer className="w-full flex flex-col items-center justify-center py-8 sm:py-10 px-2 bg-white">
      {/* Social Icons */}
      <div className="flex flex-wrap justify-center items-center gap-4 sm:gap-6 mb-6 sm:mb-8 w-full">
        {socialLinks.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.label}
            className="hover:scale-110 transition-transform mb-2 sm:mb-0"
          >
            {item.icon}
          </a>
        ))}
      </div>
      {/* Main Footer Box */}
      <div className="w-full max-w-2xl rounded-2xl border-4 border-blue-900 px-2 sm:px-4 md:px-8 py-4 sm:py-6 flex flex-col items-center mb-6 sm:mb-8 bg-white">
        <nav className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-2 sm:gap-4 md:gap-8 mb-2 w-full">
          {navLinks.map((link) => (
            <a
              key={link.label}
              href={link.href}
              className="font-bold text-blue-900 hover:text-yellow-400 transition-colors text-sm sm:text-base md:text-lg text-center"
            >
              {link.label}
            </a>
          ))}
        </nav>
      </div>
      {/* Description and External Link */}
      <div className="text-center text-gray-500 text-xs sm:text-sm max-w-[90vw] sm:max-w-xs md:max-w-xl mb-2 px-2">
        Award-winning sparkling cocktails made with real ingredients. No secret
        stuff, just real, simple, and delicious spritz.
      </div>
      <a
        href="https://spritzsociety.com/"
        target="_blank"
        rel="noopener noreferrer"
        className="text-pink-600 underline hover:text-pink-800 text-xs sm:text-sm mb-2"
      >
        Visit Spritz Society
      </a>
      <div className="text-center text-gray-400 text-xs mt-2">
        &copy; 2025 Spritz Society. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
