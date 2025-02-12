import React, { useState } from "react";
import { FaChevronDown } from "react-icons/fa";
import { motion } from "framer-motion";

const faqs = [
  {
    question: "What is this website about?",
    answer:
      "Our website provides high-quality book summaries to help you grasp key insights in minutes.",
  },
  {
    question: "Is the content free to access?",
    answer:
      "We offer a mix of free and premium content. Some summaries are accessible for free, while others require a subscription.",
  },
  {
    question: "How often do you add new book summaries?",
    answer:
      "We update our collection regularly, adding new book summaries every week.",
  },
  {
    question: "Can I request a book summary?",
    answer:
      "Yes! If you have a book in mind, you can request a summary, and we'll consider adding it to our list.",
  },
  {
    question: "Do you provide full book content?",
    answer:
      "No, we only provide concise summaries of books to highlight key takeaways, not the full text.",
  },
  {
    question: "How can I contact support?",
    answer:
      "You can reach us via email at support@yourbooksummary.com for any inquiries.",
  },
];

const FAQ = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="container mx-auto py-16 px-6 text-gray-800">
      {/* Header */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Frequently Asked Questions</h2>
        <p className="text-lg text-gray-600 mt-3">
          Find answers to the most common questions about our service.
        </p>
      </div>

      {/* FAQ Section */}
      <div className="max-w-2xl mx-auto space-y-6">
        {faqs.map((faq, index) => (
          <div
            key={index}
            className="border border-gray-200 rounded-lg overflow-hidden"
          >
            <button
              className="w-full flex justify-between items-center p-5 text-left text-lg font-semibold bg-gray-100 hover:bg-gray-200 transition"
              onClick={() => toggleFAQ(index)}
            >
              {faq.question}
              <FaChevronDown
                className={`transition-transform ${
                  openIndex === index ? "rotate-180" : "rotate-0"
                }`}
              />
            </button>
            <motion.div
              className="overflow-hidden"
              initial={{ height: 0 }}
              animate={{ height: openIndex === index ? "auto" : 0 }}
              transition={{ duration: 0.3, ease: "easeInOut" }}
            >
              <p className="p-5 text-gray-700">{faq.answer}</p>
            </motion.div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default FAQ;
