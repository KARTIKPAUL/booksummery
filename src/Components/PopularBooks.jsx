import { FaStar } from 'react-icons/fa';
import { motion } from 'framer-motion';

const COLORS = {
  lightBg: '#f9f9f9',
  textPrimary: '#333',
  textSecondary: '#666',
  accent: '#ff6b6b'
};

const books = [
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
];

const BookCard = ({ title, description, image }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="p-6 rounded-xl shadow-lg hover:shadow-2xl transition-all bg-white border border-gray-200"
    >
      <img src={image} alt={title} className="w-full h-48 object-contain rounded-md mb-4" />
      <h3 className="text-xl font-semibold text-gray-800 flex items-center justify-center">
        {title} <FaStar className="text-yellow-500 ml-2" />
      </h3>
      <p className="text-md text-gray-600 mt-2 text-center">{description}</p>
    </motion.div>
  );
};

const PopularBooks = () => {
  return (
    <div className="bg-gray-50 py-16 text-center">
      <div className="container mx-auto">
        <h2 className="text-3xl font-bold text-gray-800 mb-6">Popular Books</h2>
        <div className="grid md:grid-cols-3 gap-8 px-4">
          {books.map((book, index) => (
            <BookCard key={index} title={book.title} description={book.description} image={book.image} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PopularBooks;
