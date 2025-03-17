"use client";
import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiTruck, FiRefreshCcw, FiClock, FiCheckCircle } from "react-icons/fi";
const PolicyPage = () => {
  return (
    <section>
      {/* Hero Section */}
      <div className="relative w-full h-[60vh] bg-black text-white flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/4481259/pexels-photo-4481259.jpeg" // New Professional Image
            alt="Returns & Shipping Policy"
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
          Shipping & Return Policies
        </motion.h1>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl relative z-10">
          Learn about our fast shipping & easy return policies to make your
          shopping experience smooth.
        </p>
      </div>

      {/* Policies Section */}
      <div className="container mx-auto px-6 lg:px-16 py-20">
        {/* Two Column Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
          {/* Shipping Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="p-8 rounded-lg bg-gray-100 shadow-md"
          >
            <div className="flex items-center space-x-4">
              <FiTruck className="text-5xl text-black" />
              <h2 className="text-3xl font-bold">Shipping Policy</h2>
            </div>
            <p className="text-gray-700 text-lg mt-4">
              We offer fast & reliable worldwide shipping. Orders are processed
              within 1-3 business days.
            </p>
            <ul className="mt-6 space-y-4 text-gray-700">
              <li className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-600 text-xl" />
                <span>Free shipping on orders over ₹500.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiClock className="text-blue-600 text-xl" />
                <span>Standard delivery: 5-7 business days.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiClock className="text-blue-600 text-xl" />
                <span>Express shipping: 2-3 business days.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-600 text-xl" />
                <span>Tracking number provided for all shipments.</span>
              </li>
            </ul>
          </motion.div>
          {/* Return Policy */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="p-8 rounded-lg bg-black text-white shadow-md"
          >
            <div className="flex items-center space-x-4">
              <FiRefreshCcw className="text-5xl text-white" />
              <h2 className="text-3xl font-bold">Return Policy</h2>
            </div>
            <p className="text-gray-300 text-lg mt-4">
              If you&apos;re not satisfied with your purchase, you can return
              your item within 7 days.
            </p>
            <ul className="mt-6 space-y-4 text-gray-300">
              <li className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-500 text-xl" />
                <span>Items must be unused & in original packaging.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-500 text-xl" />
                <span>Return requests must be made within 7 days.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiClock className="text-yellow-500 text-xl" />
                <span>Refunds processed within 5-10 business days.</span>
              </li>
              <li className="flex items-center space-x-2">
                <FiCheckCircle className="text-green-500 text-xl" />
                <span>Defective items qualify for free return shipping.</span>
              </li>
            </ul>
          </motion.div>
        </div>
      </div>
      {/* Contact Section (Black Background) */}
      <motion.div
        className="text-center py-16 bg-black text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.6 }}
      >
        <h2 className="text-4xl font-bold">Need More Help?</h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Have questions? Contact our support team for more details about
          returns & shipping.
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
export default PolicyPage;
