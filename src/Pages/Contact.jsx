import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

const Contact = () => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Form submitted', formData);
  };

  return (
    <div className="bg-gray-50">
      {/* Hero Section */}
      <div className="relative bg-gradient-to-r from-green-500 to-blue-500 text-white py-24 px-6 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: -20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6 }}
          className="text-5xl md:text-7xl font-extrabold mb-4"
        >
          Get in Touch with Us
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0, y: 20 }} 
          animate={{ opacity: 1, y: 0 }} 
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-lg md:text-2xl max-w-2xl mx-auto"
        >
          We’d love to hear from you! Whether you have a question, suggestion, or feedback, feel free to reach out.
        </motion.p>
      </div>

      {/* Contact Form Section */}
      <div className="container mx-auto py-16 px-6">
        <h2 className="text-4xl font-bold text-center text-gray-800 mb-10">Contact Us</h2>
        <div className="bg-white shadow-lg rounded-xl p-8 max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Your Name</label>
              <input 
                type="text" name="name" value={formData.name} onChange={handleChange} required 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your name"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Your Email</label>
              <input 
                type="email" name="email" value={formData.email} onChange={handleChange} required 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                placeholder="Enter your email"
              />
            </div>
            <div>
              <label className="block text-lg font-semibold text-gray-700 mb-2">Your Message</label>
              <textarea 
                name="message" value={formData.message} onChange={handleChange} required rows="6" 
                className="w-full p-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500" 
                placeholder="Write your message"
              ></textarea>
            </div>
            <div className="text-center">
              <motion.button 
                whileHover={{ scale: 1.05 }} 
                whileTap={{ scale: 0.95 }}
                type="submit" 
                className="px-8 py-3 bg-blue-500 text-white text-lg font-semibold rounded-lg shadow-lg hover:bg-blue-600"
              >
                Send Message
              </motion.button>
            </div>
          </form>
        </div>
      </div>

      {/* Social Media Section */}
      <div className="bg-gray-100 py-16">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-gray-800 mb-6">Follow Us</h2>
          <p className="text-lg text-gray-600 mb-8">Stay updated with our latest book summaries and news.</p>
          <div className="flex justify-center space-x-6">
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-3xl text-gray-800 hover:text-blue-500">
              <FaFacebookF />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-3xl text-gray-800 hover:text-blue-400">
              <FaTwitter />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-3xl text-gray-800 hover:text-pink-500">
              <FaInstagram />
            </motion.a>
            <motion.a whileHover={{ scale: 1.2 }} href="#" className="text-3xl text-gray-800 hover:text-blue-700">
              <FaLinkedin />
            </motion.a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact;
