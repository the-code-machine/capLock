"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
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
const FaqPage = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };
  return (
    <section>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-black text-white flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
            alt="FAQ Page"
            layout="fill"
            objectFit="cover"
            className="opacity-50"
            priority
          />
        </div>
        <motion.h1
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          className="text-5xl font-bold relative z-10"
        >
          Frequently Asked Questions
        </motion.h1>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl relative z-10">
          Get answers to the most common questions about our services.
        </p>
      </div>

      {/* FAQ List Section */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-6 lg:px-16 py-20 bg-white text-black"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">
          General Questions
        </h2>
        <div className="max-w-3xl mx-auto">
          {faqs.map((faq, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="border-b border-gray-300"
            >
              <button
                onClick={() => toggleFAQ(index)}
                className="w-full flex justify-between items-center py-5 text-left text-lg font-medium focus:outline-none"
              >
                <span className="text-gray-800">{faq.question}</span>
                <motion.div
                  animate={{ rotate: openIndex === index ? 180 : 0 }}
                  transition={{ duration: 0.3 }}
                >
                  {openIndex === index ? (
                    <FiMinus className="text-xl text-gray-600 cursor-pointer" />
                  ) : (
                    <FiPlus className="text-xl text-gray-600 cursor-pointer" />
                  )}
                </motion.div>
              </button>

              <motion.div
                initial={{ height: 0, opacity: 0 }}
                animate={
                  openIndex === index
                    ? { height: "auto", opacity: 1 }
                    : { height: 0, opacity: 0 }
                }
                transition={{ duration: 0.3 }}
                className="overflow-hidden text-gray-600 text-base pb-4"
              >
                {openIndex === index && <p>{faq.answer}</p>}
              </motion.div>
            </motion.div>
          ))}
        </div>
      </motion.div>
      {/* Contact Section (Black Background) */}
      <motion.div
        className="text-center py-16 bg-black text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold">Still Have Questions?</h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          If your question isn&apos;t answered here, feel free to contact us.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block px-8 py-3 bg-white text-black font-medium rounded-md transition-all shadow-md"
        >
          Contact Us
        </motion.a>
      </motion.div>
    </section>
  );
};
export default FaqPage;
