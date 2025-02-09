import React, { useState, useEffect } from "react";

const HeroSection = () => {
  const [inView, setInView] = useState(false);

  const handleScroll = () => {
    const heroSection = document.querySelector('.hero-section');
    const rect = heroSection.getBoundingClientRect();
    if (rect.top <= window.innerHeight && rect.bottom >= 0) {
      setInView(true);
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="hero-section bg-gradient-to-r from-purple-500 via-indigo-500 to-blue-500 text-white py-16 px-8 min-h-screen flex flex-col justify-center items-center space-y-10">
      <div className="flex-1 hidden md:block mx-6 w-1/2">
          <input
            type="text"
            placeholder="Search for books..."
            className="w-full border rounded px-5 py-3 focus:ring  focus:outline-none text-black text-2xl"
          />
        </div>
      {/* Animated Heading */}
      <h1
        className={`text-4xl md:text-8xl font-extrabold text-center opacity-0 transform transition-all duration-1000 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'translate-y-10'
        }`}
      >
        Welcome to BookSummery
      </h1>

      {/* Brief Description */}
      <p
        className={`text-lg md:text-2xl text-center leading-relaxed max-w-4xl mx-auto opacity-0 transform transition-all duration-1000 ease-out ${
          inView ? 'opacity-100 translate-y-0' : 'translate-y-10'
        }`}
      >
        At BookVerse, we believe in the power of knowledge and storytelling. Our platform delivers expertly crafted summaries of the world's most influential books, saving you time while empowering you to grow and succeed.
      </p>

      {/* Aligned Paragraph Content */}
      <div className="text-left max-w-3xl mx-auto space-y-6">
        <p
          className={`text-lg md:text-xl leading-8 opacity-0 transform transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'translate-y-10'
          }`}
        >
          Explore thousands of summaries, whether you’re interested in personal development, business insights, or timeless classics. Each summary distills the key takeaways, giving you actionable insights in just minutes.
        </p>
        <p
          className={`text-lg md:text-xl leading-8 opacity-0 transform transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'translate-y-10'
          }`}
        >
          Join a community of curious minds, professionals, and lifelong learners who are unlocking knowledge on the go. With BookVerse, you can access essential ideas anytime, anywhere.
        </p>
        <p
          className={`text-lg md:text-xl leading-8 opacity-0 transform transition-all duration-1000 ease-out ${
            inView ? 'opacity-100 translate-y-0' : 'translate-y-10'
          }`}
        >
          Start your journey today and transform the way you read, learn, and grow.
        </p>
      </div>

      {/* Call to Action Button */}
      <div className="mt-10">
        <button className="px-8 py-4 bg-white text-indigo-600 font-bold text-lg rounded-lg shadow-lg hover:bg-gray-100 transition-all">
          Discover More
        </button>
      </div>
    </div>
  );
};

export default HeroSection;
