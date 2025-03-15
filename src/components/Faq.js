"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import { FiPlus, FiMinus } from "react-icons/fi";

const faqs = [
  {
    question: "What is your shipping policy?",
    answer:
      "We offer fast and secure shipping worldwide. Delivery times vary based on location.",
  },
  {
    question: "Do you accept returns?",
    answer:
      "Yes, we offer hassle-free returns within 7 days of delivery. Contact our support team for assistance.",
  },
  {
    question: "What payment methods do you accept?",
    answer:
      "We accept all major credit/debit cards, PayPal, and digital wallets for secure transactions.",
  },
  {
    question: "Do you offer custom 3D printing services?",
    answer:
      "Yes! We provide fully customized 3D printing services based on your design and requirements.",
  },
  {
    question: "How can I track my order?",
    answer:
      "Once your order is shipped, you will receive a tracking number via email to monitor the delivery progress.",
  },
];

const FaqSection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <section className="bg-white text-black py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-gray-800">
            Frequently Asked Questions
          </h2>
          <p className="text-lg text-gray-500 mt-3">
            Find answers to the most common questions about our services and
            policies.
          </p>
        </motion.div>

        {/* FAQ List */}
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => {
            const isOpen = openIndex === index;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className={`border-b border-gray-300 transition-all duration-300 ${
                  isOpen ? "pb-4" : "pb-2"
                }`}
                style={{
                  height: isOpen ? "auto" : "60px", // Expanding height effect
                }}
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full flex justify-between items-center py-5 text-left text-lg font-medium focus:outline-none"
                >
                  <span className="text-gray-800">{faq.question}</span>

                  {/* Animated Plus/Minus Icon */}
                  <motion.div
                    animate={{ rotate: isOpen ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                  >
                    {isOpen ? (
                      <FiMinus className="text-xl text-gray-600 cursor-pointer" />
                    ) : (
                      <FiPlus className="text-xl text-gray-600 cursor-pointer" />
                    )}
                  </motion.div>
                </button>

                <motion.div
                  initial={{ opacity: 0 }}
                  animate={{ opacity: isOpen ? 1 : 0 }}
                  transition={{ duration: 0.3 }}
                  className={`text-gray-600 text-base transition-all duration-300 ${
                    isOpen ? "pt-2" : "hidden"
                  }`}
                >
                  {faq.answer}
                </motion.div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default FaqSection;
