import React from 'react';

const Genres = () => {
  const genres = [
    { 
      name: 'Self-Help', 
      color: 'bg-gradient-to-br from-purple-400 to-blue-400',
      icon: '📖',
      description: 'Discover powerful insights on personal growth, productivity, and mental wellness.'
    },
    {
      name: 'Business',
      color: 'bg-gradient-to-br from-green-400 to-cyan-400',
      icon: '💼',
      description: 'Unlock key strategies for entrepreneurship, management, and leadership.'
    },
    {
      name: 'Fiction',
      color: 'bg-gradient-to-br from-red-400 to-pink-400',
      icon: '🎭',
      description: 'Immerse yourself in captivating novels, classic tales, and modern fiction.'
    },
    {
      name: 'Health',
      color: 'bg-gradient-to-br from-yellow-400 to-orange-400',
      icon: '🏋️',
      description: 'Learn about fitness, nutrition, and holistic health with these top books.'
    },
    {
      name: 'Technology',
      color: 'bg-gradient-to-br from-blue-400 to-indigo-400',
      icon: '💻',
      description: 'Stay ahead with the latest trends and innovations in technology and science.'
    },
    {
      name: 'History',
      color: 'bg-gradient-to-br from-gray-400 to-blue-800',
      icon: '⏳',
      description: 'Dive into the past with summaries of history’s most influential books.'
    }
  ];

  return (
    <div className="min-h-screen">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-blue-600 to-purple-600 text-white py-24 px-6 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/escheresque.png')" }} />
        <div className="relative max-w-4xl mx-auto animate-fade-in-up">
          <h1 className="text-4xl md:text-6xl font-bold mb-6">
            Explore <span className="text-yellow-300">Book Genres</span> 📚
          </h1>
          <p className="text-lg md:text-xl mb-8 font-light max-w-2xl mx-auto">
            Journey through literary worlds with curated summaries in your favorite categories
          </p>
          <button className="px-8 py-4 bg-white/10 backdrop-blur-lg text-lg font-semibold rounded-xl shadow-2xl hover:bg-white/20 transition-all duration-300 transform hover:scale-105">
            Start Exploring →
          </button>
        </div>
      </div>

      {/* Genres Section */}
      <div className="container mx-auto py-16 px-4">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-12 relative">
          Popular Genres
          <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-24 h-1 bg-blue-500 rounded-full"></div>
        </h2>
        <div className="grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 gap-8">
          {genres.map((genre, index) => (
            <div 
              key={index}
              className={`${genre.color} p-8 rounded-2xl shadow-2xl text-white transform transition-all duration-300 hover:-translate-y-2 hover:shadow-3xl group`}
            >
              <div className="flex items-center mb-6">
                <span className="text-4xl mr-4 transition-transform duration-300 group-hover:rotate-12">
                  {genre.icon}
                </span>
                <h3 className="text-2xl font-bold">{genre.name}</h3>
              </div>
              <p className="text-lg mb-6 opacity-90">{genre.description}</p>
              <button className="px-6 py-3 bg-white/20 backdrop-blur-sm rounded-xl hover:bg-white/30 transition-all duration-200">
                View Summaries →
              </button>
            </div>
          ))}
        </div>
      </div>

      {/* CTA Section */}
      <div className="relative py-24 bg-gradient-to-br from-purple-600 to-blue-600 text-center overflow-hidden">
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: "url('https://www.transparenttextures.com/patterns/diagonal-stripes.png')" }} />
        <div className="relative max-w-4xl mx-auto px-4">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Expand Your Knowledge? 🌟
          </h2>
          <p className="text-xl text-white/90 mb-8">
            Join thousands of readers exploring new ideas through our book summaries
          </p>
          <div className="space-x-4">
            <button className="px-8 py-4 bg-white text-blue-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transform transition-all duration-300 hover:scale-105">
              Browse All Genres
            </button>
            <button className="px-8 py-4 border-2 border-white text-white font-bold rounded-xl hover:bg-white/10 transition-all duration-300">
              Get Premium Access
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Genres;