"use client";

import React, { useState } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { FiMail, FiPhone, FiMapPin } from "react-icons/fi";
import toast from "react-hot-toast";

const ContactPage = () => {
    // State for form data
    const [contactFormData, setContactFormData] = useState({
        name: "",
        email: "",
        message: ""
    });

    // Handle input change
    const handleChange = (e) => {
        setContactFormData({ ...contactFormData, [e.target.name]: e.target.value });
    };

    // Handle form submission
    const handleContactSubmit = async (e) => {
        e.preventDefault();
        toast.loading("Submitting your message...");

        try {
            const response = await fetch("/api/contact", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(contactFormData)
            });

            const data = await response.json();

            if (data.success) {
                toast.dismiss();
                toast.success("Message sent successfully! 🎉");
                setContactFormData({ name: "", email: "", message: "" }); // Reset form
            } else {
                toast.dismiss();
                toast.error("Message submission failed. Please try again.");
            }
        } catch (error) {
            console.error("Error:", error);
            toast.dismiss();
            toast.error("Something went wrong. Please try again later.");
        }
    };

    return (
        <section>
            {/* Hero Section */}
            <div className="relative w-full h-[60vh] bg-black text-white flex flex-col justify-center items-center text-center px-6">
                <div className="absolute inset-0">
                    <Image
                        src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg"
                        alt="Contact Us"
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
                    Contact Us
                </motion.h1>
                <p className="text-lg text-gray-300 mt-3 max-w-2xl relative z-10">
                    Get in touch with us for any inquiries or collaborations.
                </p>
            </div>

            {/* Contact Form Section */}
            <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8, delay: 0.2 }}
                className="container mx-auto px-6 lg:px-16 py-20 bg-white text-black text-center md:text-left"
            >
                <h2 className="text-4xl font-bold mb-6 text-center">Send Us a Message</h2>
                <p className="text-gray-700 text-lg max-w-3xl mx-auto text-center">
                    Fill out the form below and our team will get back to you shortly.
                </p>

                <form onSubmit={handleContactSubmit} className="mt-8 max-w-2xl mx-auto">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                        <input
                            type="text"
                            name="name"
                            value={contactFormData.name}
                            onChange={handleChange}
                            placeholder="Your Name"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                        <input
                            type="email"
                            name="email"
                            value={contactFormData.email}
                            onChange={handleChange}
                            placeholder="Your Email"
                            className="w-full p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                            required
                        />
                    </div>
                    <textarea
                        name="message"
                        value={contactFormData.message}
                        onChange={handleChange}
                        placeholder="Your Message"
                        className="w-full mt-6 p-3 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-black"
                        rows="5"
                        required
                    ></textarea>
                    <motion.button
                        type="submit"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.95 }}
                        className="mt-6 px-8 py-3 bg-black text-white font-medium rounded-md transition-all shadow-md w-full"
                    >
                        Send Message
                    </motion.button>
                </form>
            </motion.div>

            {/* Contact Details Section */}
            <motion.div
                className="container mx-auto px-6 lg:px-16 py-16 grid grid-cols-1 md:grid-cols-3 gap-8 text-center text-white"
                initial="hidden"
                animate="visible"
                variants={{
                    hidden: { opacity: 0, y: 30 },
                    visible: { opacity: 1, y: 0, transition: { delay: 0.3, staggerChildren: 0.2 } }
                }}
            >
                {/* Phone */}
                <motion.div
                    className="p-8 rounded-lg shadow-md border bg-black flex flex-col items-center"
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                >
                    <FiPhone className="text-5xl text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-white">Phone</h3>
                    <p className="text-gray-400 mt-2">+91 9752133459</p>
                </motion.div>

                {/* Email */}
                <motion.div
                    className="p-8 rounded-lg shadow-md border bg-black flex flex-col items-center"
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                >
                    <FiMail className="text-5xl text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-white">Email</h3>
                    <p className="text-gray-400 mt-2">sarthakkhare821@gmail.com</p>
                </motion.div>

                {/* Address */}
                <motion.div
                    className="p-8 rounded-lg shadow-md border bg-black flex flex-col items-center"
                    variants={{ hidden: { opacity: 0, y: 30 }, visible: { opacity: 1, y: 0 } }}
                >
                    <FiMapPin className="text-5xl text-gray-300 mb-4" />
                    <h3 className="text-xl font-semibold text-white">Address</h3>
                    <p className="text-gray-400 mt-2">464240, Vidisha, Madhya Pradesh</p>
                </motion.div>
            </motion.div>
        </section>
    );
};

export default ContactPage;
