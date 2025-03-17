"use client";
import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
const AboutSection = () => {
  return (
    <section className="bg-black text-white py-20 md:py-28">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center"
        >
          <h2 className="text-4xl md:text-6xl font-extrabold">About CapLock</h2>
          <p className="mt-4 text-lg text-gray-300 max-w-2xl mx-auto">
            At CapLock, we merge art with cutting-edge technology to bring your
            visions to life. Our expertise in 3D printing, IoT, and robotics
            fuels innovation and precision.
          </p>
        </motion.div>

        {/* Split Layout: Image & Text */}
        <div className="mt-12 flex flex-col md:flex-row items-center gap-12">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, delay: 0.2 }}
            viewport={{ once: true }}
            className="relative w-full md:w-1/2 h-[300px] md:h-[400px]"
          >
            <Image
              src="https://formlabs-media.formlabs.com/filer_public_thumbnails/filer_public/f6/23/f623e6ff-7d8a-49e8-8f2b-4b40c938596c/image1.png__1184x0_subsampling-2.png"
              alt="CapLock Innovation"
              layout="fill"
              objectFit="cover"
              className="rounded-lg grayscale"
              priority
            />
          </motion.div>
          {/* Text Content */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.7, delay: 0.3 }}
            viewport={{ once: true }}
            className="w-full md:w-1/2 md:pl-12"
          >
            <p className="text-lg text-gray-300">
              Our journey began with a simple idea—to revolutionize the way
              technology interacts with creativity. Today, we are leaders in
              digital manufacturing, constantly pushing boundaries and
              delivering solutions that are both precise and innovative.
            </p>
            <p className="text-lg text-gray-300 mt-4">
              With a passionate team and a commitment to excellence, CapLock
              empowers creators and businesses to transform their ideas into
              reality, all while maintaining a bold, minimalist style.
            </p>

            {/* Learn More Button */}
            <div className="mt-8">
              <Link href="/about" passHref>
                <motion.a
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-8 py-3 border border-white text-white font-semibold rounded-lg shadow-md 
                                    hover:bg-white hover:text-black transition-all cursor-pointer"
                >
                  Learn More
                </motion.a>
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
export default AboutSection;
