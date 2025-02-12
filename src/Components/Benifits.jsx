import { FaClock, FaLightbulb, FaCheckCircle } from "react-icons/fa";
import { motion } from "framer-motion";
import Cards from "./Cards";
import React from "react";

const COLORS = {
  lightBg: "#f9f9f9",
  textPrimary: "#333",
  textSecondary: "#666",
  accent: "#ff6b6b",
};

const benefits = [
  {
    name: "Save Time",
    description:
      "Access summaries that distill key ideas into bite-sized insights.",
    icon: <FaClock size={40} className="text-blue-500" />,
  },
  {
    name: "Stay Informed",
    description: "Stay updated with latest trends and ideas from top authors.",
    icon: <FaLightbulb size={40} className="text-green-500" />,
  },
  {
    name: "Easy To Understand",
    description: "Clear, concise summaries that get straight to the point.",
    icon: <FaCheckCircle size={40} className="text-red-500" />,
  },
];

const Benefits = () => {
  return (
    <div className="container mx-auto py-16 px-4 text-center bg-black">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-b from-white via-sky-300 to-sky-500 tracking-tigh mb-6">
          Why Choose Us?
        </h2>
        <p className="text-lg text-white max-w-2xl mx-auto mb-12">
          In today's fast-paced world, keeping up with vast amounts of
          information can be overwhelming. Our service bridges the gap between
          knowledge and time, providing you with carefully curated insights that
          matter most.
        </p>
      </motion.div>

      <div className="flex flex-col md:flex-row justify-center items-center gap-8 my-12">
        {benefits.map((benefit, index) => (
          <motion.div
            key={index}
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: index * 0.2 }}
            className="flex flex-col items-center p-6 bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300"
          >
            <div className="p-4 rounded-full bg-blue-50 mb-4">
              {React.cloneElement(benefit.icon, { className: "text-blue-600" })}
            </div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">
              {benefit.name}
            </h3>
            <p className="text-gray-600 text-sm max-w-xs">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.4 }}
        className="mt-12"
      >
        <p className="text-lg text-gray-100 max-w-2xl mx-auto">
          Whether you're a busy professional, lifelong learner, or just curious,
          our summaries help you absorb knowledge efficiently without
          compromising depth. We transform complex ideas into digestible content
          that fits your lifestyle.
        </p>
      </motion.div>
    </div>
  );
};

export default Benefits;
