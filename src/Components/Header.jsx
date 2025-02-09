import React, { useState } from "react";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <div className="container mx-auto px-10 py-10 flex items-center justify-between">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          {/* <img src="" alt="" /> */}
          <p>BookSummry</p>
        </div>

        {/* Navigation Links for Desktop */}
        <nav className="hidden md:flex space-x-6">
          <a
            href="/"
            className="text-blue-600 hover:text-gray-900 transition-colors text-xl font-semibold"
          >
            Home
          </a>
          <a
            href="/genres"
            className="text-blue-600 hover:text-gray-900 transition-colors text-xl font-semibold"
          >
            Genres
          </a>
          <a
            href="/about"
            className="text-blue-600 hover:text-gray-900 transition-colors text-xl font-semibold"
          >
            About
          </a>
          <a
            href="/contact"
            className="text-blue-600 hover:text-gray-900 transition-colors text-xl font-semibold"
          >
            Contact
          </a>
        </nav>

        {/* Search Bar for Desktop */}
        {/* <div className="flex-1 hidden md:block mx-6">
          <input
            type="text"
            placeholder="Search for books..."
            className="w-full border rounded-md px-4 py-2 focus:ring focus:ring-blue-300 focus:outline-none"
          />
        </div> */}

        {/* CTA Button */}
        <div>
          <a
            href="/subscribe"
            className="px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
          >
            Subscribe
          </a>
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden focus:outline-none text-gray-800"
          onClick={toggleMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        </button>
      </div>

      {/* Mobile Overlay and Navigation Links */}
      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-gray-900 bg-opacity-50 fixed inset-0 z-40`}
        onClick={closeMenu}
      ></div>

      <div
        className={`md:hidden ${menuOpen ? "block" : "hidden"} bg-white shadow-md absolute w-full top-0 left-0 py-4 px-6 min-h-screen z-50`}
      >
        {/* Close Menu Button */}
        <button
          className="absolute top-4 right-4 text-blue-600 hover:text-gray-900"
          onClick={closeMenu}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M6 18L18 6M6 6l12 12"
            />
          </svg>
        </button>

        {/* Navigation Links */}
        <nav className="space-y-4">
          <a
            href="/"
            className="text-blue-600 hover:text-gray-900 transition-colors block"
            onClick={closeMenu}
          >
            Home
          </a>
          <a
            href="/genres"
            className="text-blue-600 hover:text-gray-900 transition-colors block text-xl "
            onClick={closeMenu}
          >
            Genres
          </a>
          <a
            href="/about"
            className="text-blue-600 hover:text-gray-900 transition-colors block "
            onClick={closeMenu}
          >
            About
          </a>
          <a
            href="/contact"
            className="text-blue-600 hover:text-gray-900 transition-colors block "
            onClick={closeMenu}
          >
            Contact
          </a>
          <div className="pt-4">
            <a
              href="/subscribe"
              className="block text-center px-4 py-2 bg-blue-600 text-white rounded-md shadow-md hover:bg-blue-700 transition"
              onClick={closeMenu}
            >
              Subscribe
            </a>
          </div>
        </nav>
      </div>
    </header>
  );
};

export default Header;
