import React from 'react';

const Genres = () => {
  return (
    <div>
      {/* Hero Section */}
      <div className="bg-gradient-to-r from-blue-500 to-teal-500 text-white py-20 px-6 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Explore Book Genres
        </h1>
        <p className="text-lg md:text-xl mb-6">
          Find book summaries by genre and dive deep into topics of your interest.
        </p>
        <button className="px-8 py-3 bg-white text-blue-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Start Exploring
        </button>
      </div>

      {/* Genres Section */}
      <div className="container mx-auto py-12">
        <h2 className="text-3xl font-bold text-center text-gray-800 mb-8">
          Popular Genres
        </h2>
        <div className="grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-6">
          {/* Genre Card 1 */}
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Self-Help</h3>
            <p className="text-gray-600 mb-4">
              Discover powerful insights on personal growth, productivity, and mental wellness.
            </p>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
              View Summaries
            </button>
          </div>

          {/* Genre Card 2 */}
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Business</h3>
            <p className="text-gray-600 mb-4">
              Unlock key strategies for entrepreneurship, management, and leadership.
            </p>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
              View Summaries
            </button>
          </div>

          {/* Genre Card 3 */}
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Fiction</h3>
            <p className="text-gray-600 mb-4">
              Immerse yourself in captivating novels, classic tales, and modern fiction.
            </p>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
              View Summaries
            </button>
          </div>

          {/* Genre Card 4 */}
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Health</h3>
            <p className="text-gray-600 mb-4">
              Learn about fitness, nutrition, and holistic health with these top books.
            </p>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
              View Summaries
            </button>
          </div>

          {/* Genre Card 5 */}
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">Technology</h3>
            <p className="text-gray-600 mb-4">
              Stay ahead with the latest trends and innovations in technology and science.
            </p>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
              View Summaries
            </button>
          </div>

          {/* Genre Card 6 */}
          <div className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg hover:bg-indigo-100">
            <h3 className="text-xl font-semibold text-indigo-600 mb-4">History</h3>
            <p className="text-gray-600 mb-4">
              Dive into the past with summaries of history’s most influential books.
            </p>
            <button className="px-4 py-2 bg-indigo-500 text-white rounded-lg hover:bg-indigo-600">
              View Summaries
            </button>
          </div>
        </div>
      </div>

      {/* Call to Action Section */}
      <div className="bg-indigo-500 text-white py-12 text-center">
        <h2 className="text-3xl font-bold mb-4">Start Exploring Your Favorite Genres!</h2>
        <p className="text-lg mb-6">
          Access book summaries from a wide range of genres and broaden your horizons today.
        </p>
        <button className="px-8 py-3 bg-white text-indigo-500 font-semibold rounded-lg shadow-lg hover:bg-gray-100">
          Browse All Genres
        </button>
      </div>
    </div>
  );
};

export default Genres;
