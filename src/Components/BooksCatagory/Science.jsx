import React from "react";
import CustomCarousel from "./Carousel";
import { Link } from "react-router-dom";
import { historyBooks } from "../../data/historyBooks";

const Science = ({
  category = "Science",
  title = "Science Book Summaries",
}) => {
  const slides = [
    {
      imageUrl: "https://images.unsplash.com/photo-1497436072909-60f360e1d4b1",
      title: "Explore Nature",
      description: "Discover the beauty of natural landscapes...",
      buttonText: "Get Started",
      buttonLink: "/nature",
    },
    {
      imageUrl: "https://images.unsplash.com/photo-1493246507139-91e8fad9978e",
      title: "Mountain Adventures",
      description: "Experience thrilling mountain expeditions...",
      buttonText: "View Tours",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-orange-50 to-purple-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto">
        {/* Header Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl md:text-5xl font-bold bg-gradient-to-r from-orange-600 to-pink-600 bg-clip-text text-transparent mb-4 animate-fade-in">
            Literary Journeys
          </h1>
          <p className="text-xl text-gray-600 mb-8 max-w-2xl mx-auto">
            Immerse yourself in timeless stories and their profound meanings
          </p>
        </div>

        {/* Carousel Section */}
        <div className="my-12">
          <CustomCarousel slides={slides} />
        </div>

        {/* Books Grid Section */}

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-12">
          {historyBooks.map((book) => (
            <div
              key={book.id}
              className="group bg-white rounded-xl shadow-lg hover:shadow-2xl transition-all duration-300 ease-in-out transform hover:-translate-y-2"
            >
              <div className="p-6">
                <div className="mb-4 text-4xl">{book.emoji}</div>
                <h2 className="text-2xl font-bold text-gray-800 mb-2">
                  {book.title}
                </h2>
                <p className="text-sm font-medium text-purple-600 mb-3">
                  by {book.author}
                </p>
                <p className="text-gray-600 leading-relaxed mb-4">
                  {book.summary}
                </p>
                <Link
                  to={`/books/${category}/${book.id}`}
                  className="inline-flex items-center px-4 py-2 bg-purple-100 text-purple-700 rounded-lg hover:bg-purple-200 transition-colors duration-200 font-medium"
                >
                  Read Summary
                  <svg
                    className="w-4 h-4 ml-2"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M13 7l5 5m0 0l-5 5m5-5H6"
                    />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Science;
