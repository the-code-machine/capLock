"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const recentActivities = [
  {
    title: "AICTE & IDEA Lab Exhibition",
    date: "March 7, 2025",
    location: "AICTE Headquarter, Delhi",
    image: "/1.jpg", // Replace with actual image path
  },
  {
    title: "Our Team at AICTE Innovation Expo",
    date: "March 7, 2025",
    location: "Delhi, India",
    image: "/2.jpg", // Replace with actual image path
  },
  {
    title: "Showcasing Our 3D Printing Innovations",
    date: "March 7, 2025",
    location: "AICTE, Delhi",
    image: "/3.jpg", // Replace with actual image path
  },
];

const RecentActivity = () => {
  return (
    <section className="bg-black text-white py-16">
      <div className="container mx-auto px-6 lg:px-16">
        {/* Section Heading */}
        <motion.h2
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-4xl font-bold text-center mb-12"
        >
          Recent Activity
        </motion.h2>

        <p className="text-center text-gray-300 text-lg mb-8">
          We participated in an exhibition conducted by AICTE & IDEA Lab on{" "}
          <strong>7th March</strong> at{" "}
          <strong>AICTE Headquarter, Delhi</strong>, where we showcased our
          latest innovations in 3D printing and IoT solutions.
        </p>

        {/* Swiper Slider */}
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation
          autoplay={{ delay: 3000 }}
          loop
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
          className="w-full"
        >
          {recentActivities.map((activity, index) => (
            <SwiperSlide key={index}>
              <motion.div
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0px 10px 20px rgba(255,255,255,0.1)",
                }}
                transition={{ duration: 0.3 }}
                className="bg-gray-900 rounded-lg shadow-lg overflow-hidden border border-gray-700"
              >
                {/* Image */}
                <div className="relative w-full h-64">
                  <Image
                    src={activity.image}
                    alt={activity.title}
                    layout="fill"
                    className="rounded-t-lg   object-cover  object-left-top"
                  />
                </div>

                {/* Content */}
                <div className="p-6 overflow-hidden">
                  <h3 className="text-xl font-bold text-white w-full truncate">
                    {activity.title}
                  </h3>
                  <p className="text-gray-400 text-sm mt-2 w-full truncate">
                    {activity.date} | {activity.location}
                  </p>
                </div>
              </motion.div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default RecentActivity;
