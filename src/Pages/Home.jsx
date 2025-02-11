import React, { useEffect, useState } from 'react';
import HeroSection from '../Components/Hero';

// Color constants for consistency
const COLORS = {
  primary: '#4F46E5',    // Indigo-600
  secondary: '#2563EB',  // Blue-600
  lightBg: '#EEF2FF',    // Indigo-50
  textPrimary: '#1E293B', // Slate-800
  textSecondary: '#64748B' // Slate-600
};

const Home = () => {
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

  const SectionHeading = ({ headding, subHeading }) => (
    <>
    <h2 className="text-4xl font-bold text-center mb-12">
      {headding}
    </h2>
    <p className='text-xl text-center'>{subHeading}</p>
    </>
  );

  const CardTitle = ({ children }) => (
    <h3 className="text-2xl font-semibold mb-4" style={{ color: COLORS.primary }}>
      {children}
    </h3>
  );

  return (
    <div className="font-sans antialiased">
      {/* Hero Section */}
      <HeroSection brandColor={COLORS.primary} />

      {/* Categories Section */}
      <div className="container mx-auto py-16">
        <SectionHeading headding={"Explore by Categories"} subHeading={"This is realy Me"} />
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {['Self-Help', 'Business', 'Fiction'].map((category, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl cursor-pointer"
              style={{ backgroundColor: COLORS.lightBg }}
            >
              <CardTitle>{category}</CardTitle>
              <p className="text-lg" style={{ color: COLORS.textSecondary }}>
                {category === 'Self-Help' && 'Discover strategies to transform your mindset and achieve your goals.'}
                {category === 'Business' && 'Unlock powerful insights into leadership, strategy, and innovation.'}
                {category === 'Fiction' && 'Immerse yourself in stories that inspire and captivate your imagination.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="container mx-auto py-16">
        <SectionHeading>Why Choose Us?</SectionHeading>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {['Save Time', 'Stay Informed', 'Easy To Understand'].map((benefit, index) => (
            <div 
              key={index}
              className="p-8 rounded-lg shadow-md text-center transition-all duration-300 hover:shadow-xl"
              style={{ backgroundColor: COLORS.lightBg }}
            >
              <CardTitle>{benefit}</CardTitle>
              <p className="text-lg" style={{ color: COLORS.textSecondary }}>
                {benefit === 'Save Time' && 'Access summaries that distill key ideas into bite-sized insights.'}
                {benefit === 'Stay Informed' && 'Stay updated with latest trends and ideas from top authors.'}
                {benefit === 'Easy To Understand' && 'Clear, concise summaries that get straight to the point.'}
              </p>
            </div>
          ))}
        </div>
      </div>

      {/* Popular Books Section */}
      <div className="bg-white py-16">
        <div className="container mx-auto">
          <SectionHeading>Popular Books</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {[
              {
                title: 'The 7 Habits of Highly Effective People',
                description: 'Learn principles of effectiveness that lead to success.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg',
              },
              {
                title: 'Atomic Habits',
                description: 'Discover how small changes lead to remarkable results.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
              },
              {
                title: 'To Kill a Mockingbird',
                description: 'A classic story of justice, morality, and courage.',
                image: 'https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg',
              },
            ].map((book, index) => (
              <div
                key={index}
                className="p-6 rounded-lg shadow-md hover:shadow-lg transition-all"
                style={{ backgroundColor: COLORS.lightBg }}
              >
                <img
                  src={book.image}
                  alt={book.title}
                  className="w-full h-48 object-contain rounded-md mb-4"
                />
                <h3 className="text-xl font-semibold mb-2" style={{ color: COLORS.textPrimary }}>
                  {book.title}
                </h3>
                <p className="text-lg" style={{ color: COLORS.textSecondary }}>
                  {book.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Testimonials Section */}
      <div className="py-16" style={{ backgroundColor: COLORS.lightBg }}>
        <div className="container mx-auto">
          <SectionHeading>What Our Readers Say</SectionHeading>
          <div className="grid md:grid-cols-3 gap-6 px-4">
            {[
              {
                name: 'John Doe',
                feedback: 'This platform transformed how I learn. Concise and insightful summaries!',
                image: 'https://via.placeholder.com/100?text=JD',
              },
              {
                name: 'Jane Smith',
                feedback: 'Perfect for busy people. Expert summaries save me time!',
                image: 'https://via.placeholder.com/100?text=JS',
              },
              {
                name: 'Emily Brown',
                feedback: 'Great resource with high-quality book summaries.',
                image: 'https://via.placeholder.com/100?text=EB',
              },
            ].map((review, index) => (
              <div
                key={index}
                className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-all"
              >
                <img
                  src={review.image}
                  alt={review.name}
                  className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
                />
                <h3 className="text-lg font-semibold" style={{ color: COLORS.textPrimary }}>
                  {review.name}
                </h3>
                <p className="text-lg mt-2" style={{ color: COLORS.textSecondary }}>
                  {review.feedback}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="py-16 text-center">
        <h2 className="text-4xl font-bold mb-4" style={{ color: COLORS.secondary }}>
          Start Your Journey Today!
        </h2>
        <p className="text-xl mb-8" style={{ color: COLORS.textSecondary }}>
          Join thousands of readers discovering the world's best books.
        </p>
        <button 
          className="px-10 py-4 text-lg font-semibold rounded-lg shadow-lg transition-all hover:shadow-xl"
          style={{ 
            backgroundColor: COLORS.primary,
            color: '#FFFFFF'
          }}
        >
          Browse Summaries
        </button>
      </div>

      {/* Footer Section */}
      <footer className="bg-gray-900 text-white py-8">
        <div className="container mx-auto text-center">
          <div className="mb-4">
            <span className="text-2xl font-bold" style={{ color: COLORS.primary }}>
              EST-BOOK
            </span>
            <span className="text-2xl font-light ml-2" style={{ color: COLORS.secondary }}>
              SUMMERY
            </span>
          </div>
          <p className="text-gray-400">&copy; {new Date().getFullYear()} All rights reserved</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;