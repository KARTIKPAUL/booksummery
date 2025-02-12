import React from 'react';

const About = () => {
  return (
    <div className="bg-gradient-to-b from-gray-50 to-indigo-50">
      {/* Hero Section */}
      <section className="relative py-20 overflow-hidden">
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-3xl mx-auto">
            <div className="relative inline-block">
              <h1 className="text-5xl md:text-6xl font-bold text-gray-900 mb-6 animate-fade-in-up">
                About Us
                <div className="absolute bottom-0 left-1/2 transform -translate-x-1/2 w-32 h-1 bg-indigo-500 rounded-full"></div>
              </h1>
            </div>
            <p className="text-xl text-gray-600 mb-8 leading-relaxed animate-fade-in-up delay-100">
              Welcome to <span className="bg-gradient-to-r from-indigo-500 to-purple-600 bg-clip-text text-transparent font-bold">BookWise</span>, 
              where knowledge meets inspiration in every summary.
            </p>
            <div className="animate-float">
              <img src="https://images.pexels.com/photos/1024864/pexels-photo-1024864.jpeg?auto=compress&cs=tinysrgb&w=600" alt="Reading" className="mx-auto h-64" />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="relative py-20 bg-gradient-to-r from-indigo-500 to-purple-600">
        <div className="absolute inset-0 opacity-10 pattern-dots pattern-white pattern-size-4"></div>
        <div className="container mx-auto px-4">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl font-bold text-white mb-8 animate-slide-in-left">
              Our Mission
            </h2>
            <p className="text-xl text-indigo-100 leading-relaxed animate-slide-in-right">
              We're revolutionizing learning by distilling the world's greatest books into 
              <span className="font-semibold text-white"> 15-minute power-packed summaries</span>. 
              Perfect for busy minds craving growth and inspiration.
            </p>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="relative py-20 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold text-center text-gray-900 mb-16">
            Why BookWise Stands Out
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            {/* Feature 1 */}
            <div className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-indigo-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-6 w-16 h-16 flex items-center justify-center bg-indigo-500 rounded-lg transform group-hover:rotate-12 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Lightning-Fast Insights</h3>
                <p className="text-gray-600 leading-relaxed">
                  Get key ideas from 500+ bestselling books in 15-minute reads. Perfect for your coffee break!
                </p>
              </div>
            </div>

            {/* Feature 2 */}
            <div className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-purple-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-6 w-16 h-16 flex items-center justify-center bg-purple-500 rounded-lg transform group-hover:-rotate-12 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 6v6m0 0v6m0-6h6m-6 0H6"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Smart Search</h3>
                <p className="text-gray-600 leading-relaxed">
                  AI-powered recommendations and instant search across 10,000+ key concepts.
                </p>
              </div>
            </div>

            {/* Feature 3 */}
            <div className="group relative p-8 bg-white rounded-2xl shadow-xl hover:shadow-2xl transition-all duration-300 hover:-translate-y-2">
              <div className="absolute inset-0 bg-gradient-to-b from-transparent to-teal-50 opacity-0 group-hover:opacity-100 rounded-2xl transition-opacity duration-300"></div>
              <div className="relative">
                <div className="mb-6 w-16 h-16 flex items-center justify-center bg-teal-500 rounded-lg transform group-hover:scale-110 transition-all">
                  <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6"/>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-4">Learning Paths</h3>
                <p className="text-gray-600 leading-relaxed">
                  Curated journeys through business, philosophy, tech, and personal growth.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="relative py-20 bg-gradient-to-br from-indigo-600 to-purple-700">
        <div className="absolute inset-0 opacity-20 pattern-dots pattern-white pattern-size-4"></div>
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-2xl mx-auto">
            <h3 className="text-4xl font-bold text-white mb-6">
              Ready for a Knowledge Adventure?
            </h3>
            <p className="text-xl text-indigo-100 mb-8">
              Join 500,000+ curious minds who read smarter every day.
            </p>
            <button className="relative px-8 py-4 bg-white text-indigo-600 font-bold rounded-xl shadow-2xl hover:shadow-3xl transition-all transform hover:-translate-y-1 hover:scale-105">
              Start Free Trial
              <div className="absolute inset-0 border-2 border-white rounded-xl animate-pulse-slow"></div>
            </button>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;