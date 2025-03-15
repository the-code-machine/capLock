"use client";
import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { FiCheckCircle, FiXCircle, FiTruck } from "react-icons/fi";
import { products } from "@/data";
const ProductSection = () => {
  const [randomProducts, setRandomProducts] = useState([]);

  useEffect(() => {
    // Shuffle products and pick 6 random ones
    const shuffledProducts = [...products]
      .sort(() => 0.5 - Math.random()) // Random shuffle
      .slice(0, 6); // Select first 6 items
    setRandomProducts(shuffledProducts);
  }, []);
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
          <h2 className="text-4xl md:text-5xl font-extrabold">
            Our Latest Products
          </h2>
          <p className="text-lg text-gray-600 mt-3">
            Explore our latest innovations in 3D Printing, IoT, and Prototyping.
          </p>
        </motion.div>
        {/* Product Grid */}
        <motion.div
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8"
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
          {randomProducts.map((product) => (
            <motion.div
              key={product.product_id}
              whileHover={{ scale: 1.02 }}
              whileTap={{ scale: 0.98 }}
              className="border border-gray-300 rounded-lg shadow-md overflow-hidden bg-white transition-all"
              variants={{
                hidden: { opacity: 0, y: 30 },
                visible: { opacity: 1, y: 0 },
              }}
            >
              {/* Image */}
              <div className="relative w-full h-40">
                <Image
                  src={product.images[0]}
                  alt={product.title}
                  layout="fill"
                  objectFit="cover"
                  className="rounded-t-lg"
                  quality={80}
                  loading="lazy"
                />
              </div>
              {/* Content */}
              <div className="p-6">
                <h3 className="text-xl font-bold">{product.title}</h3>
                <p className="text-gray-600 mt-2">{product.description}</p>

                {/* Availability */}
                <div className="flex items-center gap-2 mt-2 text-sm font-medium">
                  {product.available ? (
                    <FiCheckCircle className="text-green-600 text-lg" />
                  ) : (
                    <FiXCircle className="text-red-500 text-lg" />
                  )}
                  <span
                    className={
                      product.available ? "text-green-600" : "text-red-500"
                    }
                  >
                    {product.available ? "In Stock" : "Out of Stock"}
                  </span>
                </div>

                {/* Delivery */}
                <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                  <FiTruck className="text-lg" />
                  <span>Delivery: {product.delivery_time}</span>
                </div>
                {/* View Details Button */}
                <div className=" flex gap-5 items-center justify-between">
                  <Link href={`/products/${product.product_id}`} passHref>
                    <motion.div
                      whileHover={{ scale: 1.05 }}
                      whileTap={{ scale: 0.95 }}
                      className="inline-block mt-4 px-6 py-2 bg-black text-white font-medium rounded-md transition-all"
                    >
                      View Details
                    </motion.div>
                  </Link>
                  <p className="text-2xl font-semibold mt-4">
                    ₹{product.price}
                  </p>
                </div>
              </div>
            </motion.div>
          ))}
        </motion.div>
        {/* Explore More Button */}
        <motion.div
          className="text-center mt-12"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.4 }}
        >
          <Link href="/products" passHref>
            <motion.a
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-8 py-3 border border-black text-black font-semibold rounded-lg shadow-md 
                            hover:bg-black hover:text-white transition-all cursor-pointer"
            >
              Explore More Products
            </motion.a>
          </Link>
        </motion.div>
      </div>
    </section>
  );
};
export default ProductSection;
