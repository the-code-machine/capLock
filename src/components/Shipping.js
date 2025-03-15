"use client";
import React from "react";
import { FiTruck, FiShield, FiRefreshCcw, FiClock } from "react-icons/fi";
import { motion } from "framer-motion";
const shippingFeatures = [
  {
    title: "Fast & Secure Delivery",
    description: "We ensure quick and safe delivery of all your orders.",
    icon: <FiTruck className="text-5xl text-gray-300" />,
  },
  {
    title: "Safe Payment",
    description: "100% secure payment options with multiple choices.",
    icon: <FiShield className="text-5xl text-gray-300" />,
  },
  {
    title: "Easy Returns",
    description: "Hassle-free returns within 7 days of delivery.",
    icon: <FiRefreshCcw className="text-5xl text-gray-300" />,
  },
  {
    title: "24/7 Support",
    description: "Our team is available round the clock to assist you.",
    icon: <FiClock className="text-5xl text-gray-300" />,
  },
];
const ShippingSection = () => {
  return (
    <section className="bg-black text-white py-20">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl md:text-5xl font-bold text-white">
            Why Shop With Us?
          </h2>
          <p className="text-lg text-gray-400 mt-3">
            We make your shopping experience seamless and secure.
          </p>
        </motion.div>

        {/* Shipping Features Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8"
          initial="hidden"
          animate="visible"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: {
              opacity: 1,
              y: 0,
              transition: { delay: 0.2, staggerChildren: 0.1 },
            },
          }}
        >
          {shippingFeatures.map((feature, index) => (
            <motion.div
              key={index}
              whileHover={{
                scale: 1.03,
                boxShadow: "0px 10px 20px rgba(255,255,255,0.1)",
              }}
              transition={{ duration: 0.3 }}
              className="bg-gray-900 p-8 rounded-lg shadow-md border border-gray-700 flex flex-col items-center text-center"
            >
              {/* Icon */}
              <div className="mb-4">{feature.icon}</div>

              {/* Title */}
              <h3 className="text-xl font-semibold text-gray-100">
                {feature.title}
              </h3>

              {/* Description */}
              <p className="text-gray-400 mt-2 leading-relaxed">
                {feature.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};
export default ShippingSection;
