import React from "react";

const Footer = () => {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="container mx-auto px-6">
        <div className="flex flex-wrap justify-between">
          {/* Brand and Description */}
          <div className="w-full md:w-1/3 mb-6">
            <h2 className="text-xl font-bold mb-2">BookSummaries</h2>
            <p className="text-gray-400">
              Discover key insights from thousands of books in minutes. Your gateway to knowledge and inspiration.
            </p>
          </div>

          {/* Quick Links */}
          <div className="w-full md:w-1/3 mb-6">
            <h3 className="text-lg font-bold mb-4">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <a href="/" className="text-gray-400 hover:text-white transition">
                  Home
                </a>
              </li>
              <li>
                <a href="/genres" className="text-gray-400 hover:text-white transition">
                  Genres
                </a>
              </li>
              <li>
                <a href="/about" className="text-gray-400 hover:text-white transition">
                  About
                </a>
              </li>
              <li>
                <a href="/contact" className="text-gray-400 hover:text-white transition">
                  Contact
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div className="w-full md:w-1/3">
            <h3 className="text-lg font-bold mb-4">Contact Us</h3>
            <ul className="text-gray-400 space-y-2">
              <li>Email: support@booksummaries.com</li>
              <li>Phone: +1 234 567 890</li>
              <li>Address: 123 Knowledge Lane, Booksville</li>
            </ul>
          </div>
        </div>

        {/* Social Media and Copyright */}
        <div className="mt-8 border-t border-gray-700 pt-6 flex flex-wrap justify-between items-center">
          {/* Social Media Links */}
          <div className="flex space-x-4">
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Facebook"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.437 9.877v-6.988H7.898v-2.89h2.539v-2.2c0-2.506 1.493-3.89 3.773-3.89 1.094 0 2.238.195 2.238.195v2.459h-1.26c-1.242 0-1.629.772-1.629 1.562v1.873h2.773l-.443 2.89h-2.33V21.88C18.342 21.128 22 16.992 22 12z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Twitter"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M8.29 20.251c7.547 0 11.675-6.155 11.675-11.495 0-.175 0-.349-.012-.523A8.18 8.18 0 0022 5.92a8.273 8.273 0 01-2.356.635 4.109 4.109 0 001.804-2.27 8.19 8.19 0 01-2.605.988A4.102 4.102 0 0015.43 4c-2.26 0-4.094 1.828-4.094 4.084 0 .32.037.63.105.926-3.4-.17-6.42-1.79-8.44-4.26a4.02 4.02 0 00-.555 2.051c0 1.42.735 2.675 1.85 3.413a4.086 4.086 0 01-1.85-.505v.05c0 1.984 1.415 3.641 3.287 4.015a4.1 4.1 0 01-1.848.07c.522 1.623 2.036 2.805 3.833 2.837a8.232 8.232 0 01-5.06 1.735c-.328 0-.653-.019-.975-.057A11.616 11.616 0 008.29 20.251z"
                />
              </svg>
            </a>
            <a
              href="#"
              className="text-gray-400 hover:text-white transition"
              aria-label="Instagram"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-6 w-6"
                fill="currentColor"
                viewBox="0 0 24 24"
              >
                <path
                  d="M12 2.163c3.204 0 3.584.012 4.849.07 1.366.062 2.633.336 3.608 1.311.975.975 1.249 2.242 1.31 3.608.059 1.265.071 1.645.071 4.849s-.012 3.584-.071 4.849c-.061 1.366-.335 2.633-1.31 3.608-.975.975-2.242 1.249-3.608 1.31-1.265.059-1.645.071-4.849.071s-3.584-.012-4.849-.071c-1.366-.061-2.633-.335-3.608-1.31-.975-.975-1.249-2.242-1.31-3.608-.059-1.265-.071-1.645-.071-4.849s.012-3.584.071-4.849c.061-1.366.335-2.633 1.31-3.608.975-.975 2.242-1.249 3.608-1.31 1.265-.059 1.645-.071 4.849-.071M12 0C8.741 0 8.332.015 7.052.073 5.78.132 4.621.36 3.682 1.298c-.939.939-1.166 2.098-1.225 3.37C2.015 6.668 2 7.077 2 10.337v3.326c0 3.26.015 3.669.073 4.95.059 1.272.286 2.431 1.225 3.37.939.939 2.098 1.166 3.37 1.225 1.281.058 1.69.073 4.95.073s3.669-.015 4.95-.073c1.272-.059 2.431-.286 3.37-1.225.939-.939 1.166-2.098 1.225-3.37.058-1.281.073-1.69.073-4.95v-3.326c0-3.26-.015-3.669-.073-4.95-.059-1.272-.286-2.431-1.225-3.37-.939-.939-2.098-1.166-3.37-1.225C15.669.015 15.26 0 12 0z"
                />
                <circle cx="12" cy="12" r="3.5" />
              </svg>
            </a>
          </div>

          {/* Copyright */}
          <p className="text-gray-400 text-sm">
            © {new Date().getFullYear()} BookSummaries. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
