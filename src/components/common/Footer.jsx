import React from "react";

const Footer = () => {
  return (
    <footer className="bg-blue-900 text-white py-12">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="font-black text-xl mb-4 text-yellow-300">SHOP</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  All Products
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Variety Packs
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Merch
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-xl mb-4 text-yellow-300">ABOUT</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Our Story
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Find Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Contact
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-xl mb-4 text-yellow-300">SOCIAL</h3>
            <ul className="space-y-2 text-gray-300">
              <li>
                <a href="#" className="hover:text-white">
                  Instagram
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  TikTok
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-white">
                  Facebook
                </a>
              </li>
            </ul>
          </div>
          <div>
            <h3 className="font-black text-xl mb-4 text-yellow-300">
              NEWSLETTER
            </h3>
            <p className="mb-4 text-gray-300">
              Join our list for exclusive offers and updates.
            </p>
            <form className="flex">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full bg-blue-800 text-white px-4 py-2 rounded-l-md focus:outline-none placeholder-gray-400 border border-blue-700"
              />
              <button className="bg-yellow-400 text-blue-900 font-bold py-2 px-4 rounded-r-md hover:bg-white transition">
                GO
              </button>
            </form>
          </div>
        </div>
        <div className="mt-12 pt-8 border-t border-blue-800 text-center text-sm text-gray-400">
          <p>&copy; 2025 Spritz Society Creative. All Rights Reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
