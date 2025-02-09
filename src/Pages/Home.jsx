import React, { useEffect, useState } from 'react';
import HeroSection from '../Components/Hero';

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

  return (
    <div className="font-sans">
      {/* Hero Section */}
      <HeroSection />

      {/* Categories Section */}
      <div className="container mx-auto py-12">
  {/* Section Heading */}
  <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
    Explore by Categories
  </h2>

  {/* Categories Grid */}
  <div className="grid md:grid-cols-3 gap-8">
    {/* Self-Help Category */}
    <div className="bg-indigo-50 p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-indigo-100 cursor-pointer">
      <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
        Self-Help
      </h3>
      <p className="text-gray-600">
        Discover strategies to transform your mindset and achieve your goals.
      </p>
    </div>

    {/* Business Category */}
    <div className="bg-indigo-50 p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-indigo-100 cursor-pointer">
      <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
        Business
      </h3>
      <p className="text-gray-600">
        Unlock powerful insights into leadership, strategy, and innovation.
      </p>
    </div>

    {/* Fiction Category */}
    <div className="bg-indigo-50 p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-indigo-100 cursor-pointer">
      <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
        Fiction
      </h3>
      <p className="text-gray-600">
        Immerse yourself in stories that inspire and captivate your imagination.
      </p>
    </div>
  </div>
      </div>


      {/* Benefits Section */}
      {/* <div className="bg-gray-100 py-12">
        <div className="container mx-auto text-center">
          <h2 className="text-3xl font-bold text-gray-800 mb-6">
            
          </h2>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="text-gray-600">
              <h3 className> Save Time
              </h3>
              <p>
                Access summaries that distill the key ideas from books into bite-sized insights.
              </p>
            </div>
            <div className="text-gray-600">
              <h3 className="text-2xl font-semibold mb-2 text-indigo-500">
                Stay Informed
              </h3>
              <p>
                Stay up-to-date with the latest trends and ideas from world-class authors.
              </p>
            </div>
          </div>
        </div>
      </div> */}

<div className="container mx-auto py-12">
  {/* Section Heading */}
  <h2 className="text-4xl font-bold text-center text-blue-600 mb-12">
  Why Choose Us?
  </h2>

  {/* Categories Grid */}
  <div className="grid md:grid-cols-3 gap-8">
    {/* Self-Help Category */}
    <div className="bg-indigo-50 p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-indigo-100 cursor-pointer">
      <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
      Save Time
      </h3>
      <p className="text-gray-600">
      Access summaries that distill the key ideas from books into bite-sized insights.
      </p>
    </div>

    {/* Business Category */}
    <div className="bg-indigo-50 p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-indigo-100 cursor-pointer">
      <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
      Stay Informed
      </h3>
      <p className="text-gray-600">
      Stay up-to-date with the latest trends and ideas from world-class authors.
      </p>
    </div>

    {/* Fiction Category */}
    <div className="bg-indigo-50 p-8 rounded-lg shadow-md text-center transform transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:bg-indigo-100 cursor-pointer">
      <h3 className="text-2xl font-semibold text-indigo-500 mb-4">
        Easy To Understand
      </h3>
      <p className="text-gray-600">
        Immerse yourself in stories that inspire and captivate your imagination.
      </p>
    </div>
  </div>
      </div>

      {/* Popular Books Section */}
      <div className="bg-white py-12">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center text-blue-600 mb-8">
      Popular Books
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {/* Book Cards */}
      {[
        {
          title: 'The 7 Habits of Highly Effective People',
          description:
            'Learn the principles of effectiveness that lead to success.',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg',
        },
        {
          title: 'Atomic Habits',
          description: 'Discover how small changes can lead to remarkable results.',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/91bYsX41DVL.jpg',
        },
        {
          title: 'To Kill a Mockingbird',
          description: 'A classic story of justice, morality, and courage.',
          image:
            'https://images-na.ssl-images-amazon.com/images/I/71sBtM3Yi5L.jpg',
        },
      ].map((book, index) => (
        <div
          key={index}
          className="bg-indigo-50 p-6 rounded-lg shadow-md hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={book.image}
            alt={book.title}
            className="w-full h-40 object-cover rounded-md mb-4"
          />
          <h3 className="text-xl font-semibold text-gray-800 mb-2">
            {book.title}
          </h3>
          <p className="text-gray-600">{book.description}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Testimonials Section */}
      <div className="bg-gray-100 py-12">
  <div className="container mx-auto">
    <h2 className="text-3xl font-bold text-center text-indigo-600 mb-8">
      What Our Readers Say
    </h2>
    <div className="grid md:grid-cols-3 gap-6">
      {/* Feedback Cards */}
      {[
        {
          name: 'John Doe',
          feedback:
            'This platform transformed the way I read and learn. The summaries are concise and insightful!',
          image: 'https://via.placeholder.com/100?text=JD',
        },
        {
          name: 'Jane Smith',
          feedback:
            'I love how easy it is to dive into a new book summary during my commute. Highly recommended!',
          image: 'https://via.placeholder.com/100?text=JS',
        },
        {
          name: 'Emily Brown',
          feedback:
            'A great resource for busy people. The expert summaries save me so much time!',
          image: 'https://via.placeholder.com/100?text=EB',
        },
      ].map((review, index) => (
        <div
          key={index}
          className="bg-white p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-transform transform hover:scale-105"
        >
          <img
            src={review.image}
            alt={review.name}
            className="w-16 h-16 object-cover rounded-full mx-auto mb-4"
          />
          <h3 className="text-lg font-semibold text-gray-800">{review.name}</h3>
          <p className="text-gray-600 mt-2">{review.feedback}</p>
        </div>
      ))}
    </div>
  </div>
</div>


      {/* Call-to-Action Section */}
       <div className="bg-white text-black py-12 text-center">
        <h2 className="text-3xl font-bold mb-4 text-blue-600">Start Your Journey Today!</h2>
        <p className="text-lg mb-6">
          Join thousands of readers who are discovering the world’s best books.
        </p>
        <button className="px-8 py-3 bg-indigo-500 font-semibold rounded-lg shadow-lg hover:bg-indigo-600 transition-all text-gray-800">
          Browse Summaries
        </button>
      </div> 

      {/* Footer Section */}
      
    </div>
  );
};

export default Home;
