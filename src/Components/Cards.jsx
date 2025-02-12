
import { motion } from 'framer-motion';

const COLORS = {
  lightBg: '#f9f9f9',
  textPrimary: '#333',
  textSecondary: '#666',
  accent: '#ff6b6b'
};



const Cards = ({ name, description, icon }) => {
  return (
    <motion.div 
      whileHover={{ scale: 1.05 }}
      className="p-8 rounded-2xl shadow-lg text-center transition-all duration-300 bg-white hover:shadow-2xl cursor-pointer border border-gray-200"
    >
      <div className="flex justify-center mb-4">{icon}</div>
      <h3 className="text-xl font-semibold text-gray-800">{name}</h3>
      <p className="text-md text-gray-600 mt-2">{description}</p>
    </motion.div>
  );
};



export default Cards;
