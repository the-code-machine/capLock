"use client";

import React from "react";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { FiPrinter, FiCpu, FiSettings } from "react-icons/fi";
const HeroSection = () => {
    return (
        <section className="relative w-full min-h-screen bg-gray-50 overflow-hidden flex items-center">
            <div className="container mx-auto px-6 lg:px-16 py-16 md:py-24">
                <div className="flex flex-col-reverse md:flex-row items-center justify-between gap-12">
                    {/* Left Content */}
                    <motion.div
                        initial={{ opacity: 0, x: -50 }}
                        animate={{ opacity: 1, x: 0 }}
                        transition={{ duration: 0.7 }}
                        className="w-full md:w-1/2 text-center md:text-left"
                    >
                        <h1 className="text-4xl md:text-6xl font-extrabold text-gray-900 leading-tight">
                            Transforming Ideas <br className="hidden md:block" /> into Reality with <span className="text-gray-400">3D Printing</span>
                        </h1>
                        <p className="text-lg text-gray-700 mt-5 max-w-lg mx-auto md:mx-0">
                            Advanced 3D printing, IoT solutions, and robotics tailored to bring your projects to life.
                        </p>
                        <div className="mt-8 flex flex-wrap justify-center md:justify-start gap-4">
                            <Link href="/services" passHref>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-black text-white font-semibold rounded-lg shadow-md hover:bg-gray-900 transition-all"
                                >
                                    Explore Services
                                </motion.div>
                            </Link>
                            <Link href="/contact" passHref>
                                <motion.div
                                    whileHover={{ scale: 1.05 }}
                                    whileTap={{ scale: 0.95 }}
                                    className="px-8 py-3 bg-white text-black border border-gray-800 font-semibold rounded-lg shadow-md hover:bg-gray-100 transition-all"
                                >
                                    Get in Touch
                                </motion.div>
                            </Link>
                        </div>
                    </motion.div>

                    {/* Right Image */}
                    <motion.div
                        initial={{ opacity: 0, scale: 0.9 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.7, delay: 0.3 }}
                        className="w-full md:w-1/2 relative"
                    >
                        <div className="relative h-[350px] md:h-[450px] w-full">
                            <Image
                                src="https://d4804za1f1gw.cloudfront.net/wp-content/uploads/sites/22/2024/07/3DPRINTER-BANNER.jpg"
                                alt="3D Printing Technology"
                                layout="fill"
                                objectFit="cover"
                                className="rounded-xl shadow-lg"
                                priority
                            />
                        </div>
                    </motion.div>
                </div>

                {/* Key Features Section */}
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 0.7, delay: 0.6 }}
                    className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-16"
                >
                    {[

                        { title: "3D Printing", description: "High-quality prototypes & custom designs.", icon: <FiPrinter className="text-5xl text-gray-700" /> },
                        { title: "IoT Solutions", description: "Smart device automation & integration.", icon: <FiCpu className="text-5xl text-gray-700" /> },
                        { title: "Robotics", description: "Custom-built robotics for innovation.", icon: <FiSettings className="text-5xl text-gray-700" /> }
                    ].map((feature, index) => (
                        <motion.div
                            key={index}
                            whileHover={{ scale: 1.03, boxShadow: "0px 10px 20px rgba(0,0,0,0.1)" }}
                            transition={{ duration: 0.3 }}
                            className="bg-white p-8 rounded-lg shadow-md border border-gray-200 flex flex-col items-center text-center"
                        >
                            {/* Icon */}
                            <div className="mb-4">{feature.icon}</div>

                            {/* Title */}
                            <h3 className="text-xl font-semibold text-gray-700">{feature.title}</h3>

                            {/* Description */}
                            <p className="text-gray-500 mt-2 leading-relaxed">{feature.description}</p>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default HeroSection;
