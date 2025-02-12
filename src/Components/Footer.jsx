import React from "react";
import navLogo from "../assets/img/navLogo.png";
import { Facebook, Twitter, Instagram } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-gradient-to-b from-gray-900 to-gray-800 text-white pt-12">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-5 pb-12">
          {/* Brand Section */}
          <div>
            <img
              src={navLogo}
              height={20}
              width={100}
              alt="BookSummery Logo"
              className="mb-3"
            />
            <p className="text-gray-400 text-sm leading-relaxed">
              Discover key insights from thousands of books in minutes. Your
              gateway to knowledge and inspiration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Explore
            </h3>
            <ul className="space-y-3">
              {["Genres", "About", "Contact"].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase()}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Useful Links */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Useful Links
            </h3>
            <ul className="space-y-3">
              {["privacypolicy", "termsandconditions", "faqs"].map((link) => (
                <li key={link}>
                  <a
                    href={`/${link.toLowerCase().replace(/ /g, "-")}`}
                    className="text-gray-300 hover:text-blue-400 transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-4">
            <h3 className="text-lg font-semibold text-blue-400 mb-4">
              Connect
            </h3>
            <ul className="space-y-3 text-gray-300">
              <li>Email: support@booksummaries.com</li>
              <li>Phone: +91 7363928335</li>
              <li>Address: Daulotpur Road,Mahestala,Kolkata - 700141</li>
            </ul>
          </div>

          {/* Social Media */}
          <div className="flex flex-col items-center justify-between pt-6">
            {/* Social Media Icons */}
            <div className="flex space-x-4">
              <a
                href="https://www.facebook.com/profile.php?id=61572622966769"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                <Facebook size={24} className="text-white" />
              </a>
              <a
                href="#"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                <Twitter size={24} className="text-white" />
              </a>
              <a
                href="https://www.instagram.com/book__summery/"
                className="p-2 bg-gray-800 rounded-full hover:bg-blue-600 transition-all duration-300"
              >
                <Instagram size={24} className="text-white" />
              </a>
            </div>

            {/* Newsletter Subscription */}
            <div className="flex items-center bg-white rounded-lg p-1 w-full md:w-auto mt-4 md:mt-0">
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full px-4 py-2 text-gray-900 rounded-lg focus:outline-none"
              />
              <button className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors">
                Subscribe
              </button>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className="text-center text-gray-400 text-sm py-4">
          © {new Date().getFullYear()} BookSummaries. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
