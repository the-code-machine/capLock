"use client";

import React, { useState } from "react";
import { usePathname } from "next/navigation";
import Image from "next/image";
import { FiCheckCircle, FiXCircle, FiTruck } from "react-icons/fi";
import { products } from "@/data";

const ProductDetails = () => {
    const pathname = usePathname();
    const productId = pathname.split("/").pop(); // Extract product_id from URL

    // Find the product by ID
    const product = products.find((p) => p.product_id === productId);

    // If product not found
    if (!product) {
        return <div className="text-center text-2xl py-20">Product not found.</div>;
    }

    // Checkout Form State
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        phone: "",
        pincode: "",
        address: "",
    });

    // Handle Input Change
    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    // Handle Checkout Submission
    const handleSubmit = (e) => {
        e.preventDefault();
        alert(`Order placed successfully! 🎉\n\n${JSON.stringify(formData, null, 2)}`);
    };

    return (
        <section className="bg-white text-black py-20">
            <div className="container mx-auto px-6 lg:px-16">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                    {/* Product Image */}
                    <div className="relative w-full h-96">
                        <Image
                            src={product.images[0]}
                            alt={product.title}
                            layout="fill"
                            objectFit="cover"
                            className="rounded-lg shadow-lg"
                        />
                    </div>

                    {/* Product Details */}
                    <div>
                        <h1 className="text-4xl font-bold">{product.title}</h1>
                        <p className="text-gray-700 mt-4">{product.description}</p>

                        {/* Availability */}
                        <div className="flex items-center gap-2 mt-4 text-lg font-medium">
                            {product.available ? (
                                <FiCheckCircle className="text-green-600 text-xl" />
                            ) : (
                                <FiXCircle className="text-red-500 text-xl" />
                            )}
                            <span className={product.available ? "text-green-600" : "text-red-500"}>
                                {product.available ? "In Stock" : "Out of Stock"}
                            </span>
                        </div>

                        {/* Delivery Time */}
                        <div className="flex items-center gap-2 text-lg text-gray-500 mt-2">
                            <FiTruck className="text-xl" />
                            <span>Delivery: {product.delivery_time}</span>
                        </div>

                        {/* Price */}
                        <p className="text-3xl font-semibold mt-6">₹{product.price}</p>
                    </div>
                </div>

                {/* Checkout Form */}
                <div className="mt-16 bg-gray-100 p-8 ">
                    <h2 className="text-3xl font-bold text-center">Checkout</h2>
                    <p className="text-gray-600 text-center mt-2">
                        Fill in your details to complete the purchase.
                    </p>

                    <form onSubmit={handleSubmit} className="mt-6 max-w-2xl mx-auto">
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <input
                                type="text"
                                name="name"
                                placeholder="Full Name"
                                value={formData.name}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="email"
                                name="email"
                                placeholder="Email"
                                value={formData.email}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-4">
                            <input
                                type="tel"
                                name="phone"
                                placeholder="Phone Number"
                                value={formData.phone}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            />
                            <input
                                type="text"
                                name="pincode"
                                placeholder="Pincode"
                                value={formData.pincode}
                                onChange={handleChange}
                                required
                                className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            />
                        </div>

                        <textarea
                            name="address"
                            placeholder="Full Address"
                            value={formData.address}
                            onChange={handleChange}
                            required
                            className="w-full mt-4 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            rows="4"
                        ></textarea>

                        <button
                            type="submit"
                            className="mt-6 w-full px-8 py-3 bg-black  cursor-pointer text-white font-medium rounded-md transition-all shadow-md"
                        >
                            Place Order
                        </button>
                    </form>
                </div>
            </div>
        </section>
    );
};

export default ProductDetails;
