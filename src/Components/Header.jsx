import React, { useState, useEffect } from "react";
import navLogo from "../assets/img/navLogo.png";

const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);
  const closeMenu = () => setMenuOpen(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`bg-white sticky top-0 z-50 transition-all duration-300 ${scrolled ? "shadow-xl" : "shadow-md"}`}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          {/* Logo with hover effect */}
          <div className="flex-shrink-0">
            <img
              src={navLogo}
              alt="Logo"
              className="h-16 w-16 transform transition duration-300 hover:scale-110 cursor-pointer"
            />
          </div>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a
              href="/"
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium relative group"
            >
              Home
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="/genres"
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium relative group"
            >
              Genres
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="/about"
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium relative group"
            >
              About
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
            <a
              href="/contact"
              className="text-gray-700 hover:text-blue-600 transition-colors text-lg font-medium relative group"
            >
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-1 bg-blue-600 transition-all group-hover:w-full"></span>
            </a>
          </nav>

          {/* CTA Button with animation */}
          <div className="hidden md:block">
            <a
              href="/subscribe"
              className="px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-600 transform hover:-translate-y-1"
            >
              Subscribe Now
            </a>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg text-gray-600 hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <div
        className={`md:hidden fixed inset-0 z-40 bg-black/50 transition-opacity ${
          menuOpen ? "opacity-100" : "opacity-0 pointer-events-none"
        }`}
        onClick={closeMenu}
      ></div>

      {/* Mobile Menu Content */}
      <div
        className={`md:hidden fixed top-0 right-0 z-50 w-80 h-screen bg-white shadow-2xl transform transition-transform duration-300 ${
          menuOpen ? "translate-x-0" : "translate-x-full"
        }`}
      >
        <div className="flex flex-col h-full p-6">
          {/* Close Button */}
          <div className="flex justify-end">
            <button
              onClick={closeMenu}
              className="p-2 rounded-full hover:bg-gray-100 text-gray-600 focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
          </div>

          {/* Mobile Navigation */}
          <nav className="flex flex-col space-y-6 mt-8">
            <a
              href="/"
              onClick={closeMenu}
              className="text-2xl font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Home
            </a>
            <a
              href="/genres"
              onClick={closeMenu}
              className="text-2xl font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Genres
            </a>
            <a
              href="/about"
              onClick={closeMenu}
              className="text-2xl font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              About
            </a>
            <a
              href="/contact"
              onClick={closeMenu}
              className="text-2xl font-medium text-gray-700 hover:text-blue-600 transition-colors px-4 py-2 rounded-lg hover:bg-blue-50"
            >
              Contact
            </a>
          </nav>

          {/* Mobile CTA Button */}
          <div className="mt-auto pt-8">
            <a
              href="/subscribe"
              onClick={closeMenu}
              className="block w-full text-center px-6 py-4 bg-gradient-to-r from-blue-600 to-blue-500 text-white rounded-lg shadow-lg hover:shadow-xl transition-all duration-300 hover:from-blue-700 hover:to-blue-600"
            >
              Subscribe Now
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;