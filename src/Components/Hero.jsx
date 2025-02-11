import React, { useState, useEffect } from "react";
import { Search, ArrowRight, Book, Clock, Star } from "lucide-react";

const HeroSection = () => {
  const [inView, setInView] = useState(false);
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [searchFocused, setSearchFocused] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const heroSection = document.querySelector('.hero-section');
      if (!heroSection) return;
      const rect = heroSection.getBoundingClientRect();
      setInView(rect.top <= window.innerHeight && rect.bottom >= 0);
    };

    const handleMouseMove = (e) => {
      setMousePosition({
        x: (e.clientX / window.innerWidth) * 20,
        y: (e.clientY / window.innerHeight) * 20
      });
    };

    window.addEventListener('scroll', handleScroll);
    window.addEventListener('mousemove', handleMouseMove);
    handleScroll();
    
    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  const features = [
    { icon: <Book className="w-8 h-8" />, text: "5000+ Summaries", description: "Comprehensive collection" },
    { icon: <Clock className="w-8 h-8" />, text: "15-min Reads", description: "Perfect for busy minds" },
    { icon: <Star className="w-8 h-8" />, text: "Expert Curated", description: "Quality insights" }
  ];

  return (
    <div className="hero-section relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-gradient-to-b from-black via-gray-900 to-black">
      {/* Interactive Background */}
      <div 
        className="absolute inset-0 opacity-30"
        style={{
          transform: `translate(${mousePosition.x}px, ${mousePosition.y}px)`,
          transition: 'transform 0.2s ease-out'
        }}
      >
        {[...Array(50)].map((_, i) => (
          <div
            key={i}
            className="absolute w-2 h-2 bg-sky-400 rounded-full"
            style={{
              top: `${Math.random() * 100}%`,
              left: `${Math.random() * 100}%`,
              animation: `float ${Math.random() * 10 + 5}s infinite`,
              opacity: Math.random() * 0.5 + 0.5
            }}
          />
        ))}
      </div>

      <div className="relative z-10 container mx-auto px-4 py-16 flex flex-col items-center space-y-12">
        {/* Animated Title */}
        <div className="text-center space-y-4">
          <h1 className={`text-6xl md:text-8xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-sky-300 to-sky-500 tracking-tight
            ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}>
            Book Summery
          </h1>
          <p className={`text-2xl md:text-3xl text-sky-200 font-light
            ${inView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
            Samene Here - Where Knowledge Meets Efficiency
          </p>
        </div>

        {/* Enhanced Search Bar */}
        <div className={`w-full max-w-2xl transform transition-all duration-300 ${searchFocused ? 'scale-105' : ''}`}>
          <div className="backdrop-blur-xl bg-white/5 rounded-2xl p-2 shadow-2xl border border-sky-500/20">
            <div className="flex items-center space-x-3">
              <input
                type="text"
                placeholder="Search for books, authors, or topics..."
                className="w-full bg-transparent text-white text-xl py-4 px-6 placeholder-sky-200/70 focus:outline-none"
                onFocus={() => setSearchFocused(true)}
                onBlur={() => setSearchFocused(false)}
              />
              <button className="p-4 bg-sky-500 text-white rounded-xl hover:bg-sky-400 transition-colors duration-300">
                <Search className="w-6 h-6" />
              </button>
            </div>
          </div>
        </div>

        {/* Feature Cards */}
        <div className="grid md:grid-cols-3 gap-6 w-full max-w-6xl">
          {features.map((feature, i) => (
            <div
              key={i}
              className={`group backdrop-blur-lg bg-black/50 p-8 rounded-2xl border border-sky-500/20 hover:bg-sky-900/20 
                transition-all duration-500 cursor-pointer ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${i * 200}ms` }}
            >
              <div className="text-sky-400 mb-4 group-hover:scale-110 transition-transform duration-300">
                {feature.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{feature.text}</h3>
              <p className="text-sky-200/70">{feature.description}</p>
            </div>
          ))}
        </div>

        {/* CTA Section */}
        <div className={`flex flex-col md:flex-row items-center justify-center space-y-4 md:space-y-0 md:space-x-8 
          ${inView ? 'animate-fade-in-up delay-500' : 'opacity-0'}`}>
          <button className="group flex items-center px-8 py-4 bg-sky-500 text-white font-bold rounded-xl 
            hover:bg-sky-400 transform transition-all duration-300 hover:scale-105 shadow-lg">
            Start Your Journey
            <ArrowRight className="ml-2 w-5 h-5 group-hover:translate-x-2 transition-transform duration-300" />
          </button>
          <span className="text-sky-200/80 text-lg">7-day free trial • No credit card required</span>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 animate-bounce opacity-70">
        <div className="w-8 h-14 border-2 border-sky-400 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-sky-400 rounded-full mt-2 animate-scroll" />
        </div>
      </div>

      <style jsx>{`
        @keyframes float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          50% { transform: translateY(-20px) rotate(10deg); }
        }
        @keyframes scroll {
          0% { transform: translateY(0); opacity: 1; }
          100% { transform: translateY(10px); opacity: 0; }
        }
        .animate-scroll {
          animation: scroll 1.5s infinite;
        }
      `}</style>
    </div>
  );
};

export default HeroSection;