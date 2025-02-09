import React from 'react';

const About = () => {
  return (
    <div className="bg-gray-50 py-10">
      {/* Hero Section */}
      <div className="container mx-auto text-center py-10">
        <h1 className="text-4xl font-bold text-gray-800 mb-4">About Us</h1>
        <p className="text-lg text-gray-600">
          Welcome to <span className="text-indigo-500 font-semibold">Book Summaries App</span>, your gateway to a world of knowledge, condensed into bite-sized insights.
        </p>
      </div>

      {/* Mission Section */}
      <div className="bg-white shadow-md rounded-lg py-10 px-6 mx-auto container">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-6">Our Mission</h2>
        <p className="text-lg text-gray-600 leading-7 text-center">
          We aim to make learning accessible, time-efficient, and enjoyable by providing well-curated summaries of the world’s most impactful books. Whether you’re looking for self-development, business strategies, or timeless classics, we have you covered!
        </p>
      </div>

      {/* Features Section */}
      <div className="container mx-auto py-10">
        <h2 className="text-3xl font-semibold text-gray-800 text-center mb-8">Why Choose Us?</h2>
        <div className="grid md:grid-cols-3 gap-6">
          {/* Feature 1 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-indigo-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6M3 7h18"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Curated Summaries</h3>
            <p className="text-gray-600">
              Save time with concise, accurate, and engaging summaries of best-selling books.
            </p>
          </div>

          {/* Feature 2 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-indigo-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M8 16l-4-4m0 0l4-4m-4 4h16"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">User-Friendly Design</h3>
            <p className="text-gray-600">
              Explore summaries effortlessly with our intuitive interface and powerful search features.
            </p>
          </div>

          {/* Feature 3 */}
          <div className="bg-white shadow-lg rounded-lg p-6 text-center">
            <div className="text-indigo-500 mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                className="w-12 h-12 mx-auto"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M12 8v4m0 4h.01m6.938-4H18m-6 6a6 6 0 100-12 6 6 0 000 12z"
                />
              </svg>
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">Wide Range of Categories</h3>
            <p className="text-gray-600">
              From business to self-help to fiction, we’ve got summaries for every taste.
            </p>
          </div>
        </div>
      </div>

      {/* Call to Action */}
      <div className="bg-indigo-500 text-white py-10 text-center">
        <h3 className="text-2xl font-semibold mb-4">Ready to Explore?</h3>
        <p className="text-lg mb-6">
          Start your journey today and uncover the wisdom of the world’s best books.
        </p>
        <button className="px-6 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default About;
