"use client";
import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiTarget, FiUsers, FiAward } from "react-icons/fi";
const AboutPage = () => {
  return (
    <section>
      {/* Hero Section (Black Background) */}
      <div className="relative w-full h-[60vh] bg-black text-white flex flex-col justify-center items-center text-center px-6">
        <div className="absolute inset-0">
          <Image
            src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg" // New professional image
            alt="About Us - Innovation"
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
          About CapLock
        </motion.h1>
        <p className="text-lg text-gray-300 mt-3 max-w-2xl relative z-10">
          Transforming ideas into reality through cutting-edge 3D Printing, IoT,
          and Robotics solutions.
        </p>
      </div>
      {/* Who We Are Section (White Background) */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.2 }}
        className="container mx-auto px-6 lg:px-16 py-20 bg-white text-black text-center md:text-left"
      >
        <h2 className="text-4xl font-bold mb-6 text-center">Who We Are</h2>
        <p className="text-gray-700 text-lg max-w-3xl mx-auto">
          CapLock is a next-generation tech company specializing in 3D Printing,
          IoT Solutions, and Robotics. We bridge the gap between creativity and
          technology, ensuring innovation in every project. Our mission is to
          empower creators, businesses, and engineers with custom solutions that
          redefine the future.
        </p>
      </motion.div>
      {/* Core Values Section (Alternating Background) */}
      <motion.div
        className="container mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center"
        initial="hidden"
        animate="visible"
        variants={{
          hidden: { opacity: 0, y: 30 },
          visible: {
            opacity: 1,
            y: 0,
            transition: { delay: 0.3, staggerChildren: 0.2 },
          },
        }}
      >
        {/* Value 1 */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-300 flex flex-col items-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FiTarget className="text-5xl text-gray-700 mb-4" />
          <h3 className="text-xl font-semibold text-black">Innovation</h3>
          <p className="text-gray-600 mt-2">
            We push the boundaries of technology to bring unique, efficient, and
            high-quality solutions.
          </p>
        </motion.div>
        {/* Value 2 */}
        <motion.div
          className="bg-black text-white p-8 rounded-lg shadow-md border border-gray-700 flex flex-col items-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FiUsers className="text-5xl text-gray-300 mb-4" />
          <h3 className="text-xl font-semibold">Customer Focus</h3>
          <p className="text-gray-400 mt-2">
            Our clients are at the heart of everything we do. We create tailored
            solutions to fit their needs.
          </p>
        </motion.div>
        {/* Value 3 */}
        <motion.div
          className="bg-gray-100 p-8 rounded-lg shadow-md border border-gray-300 flex flex-col items-center"
          variants={{
            hidden: { opacity: 0, y: 30 },
            visible: { opacity: 1, y: 0 },
          }}
        >
          <FiAward className="text-5xl text-gray-700 mb-4" />
          <h3 className="text-xl font-semibold text-black">
            Quality Excellence
          </h3>
          <p className="text-gray-600 mt-2">
            We ensure precision, reliability, and durability in all our products
            and services.
          </p>
        </motion.div>
      </motion.div>
      {/* Contact Section (Black Background) */}
      <motion.div
        className="text-center py-16 bg-black text-white"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <h2 className="text-4xl font-bold">
          Let&apos;s Build the Future Together
        </h2>
        <p className="text-gray-300 mt-3 max-w-2xl mx-auto">
          Whether you need a custom prototype, an IoT solution, or an advanced
          robotics project, we’re here to help.
        </p>
        <motion.a
          href="/contact"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="mt-6 inline-block px-8 py-3 bg-white text-black font-medium rounded-md transition-all shadow-md"
        >
          Get in Touch
        </motion.a>
      </motion.div>
    </section>
  );
};
export default AboutPage;
