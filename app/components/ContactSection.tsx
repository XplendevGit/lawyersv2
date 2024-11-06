// components/ContactSection.tsx
"use client";
import { motion } from "framer-motion";
import { useState } from "react";

export default function ContactSection() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  // Handle input change
  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle form submission
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic here
  };

  return (
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-dark-blue text-white shadow-b-sm shadow-gold-dark">
      {/* Form Section */}
      <motion.div
        className="lg:w-2/3 p-10 lg:p-20 bg-opacity-50 backdrop-blur-lg"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2 className="text-3xl lg:text-4xl font-semibold mb-8">Get Your Free Consultation</h2>
        <form onSubmit={handleSubmit} className="space-y-8">
          <div className="flex flex-col lg:flex-row gap-6">
            <input
              type="text"
              name="name"
              placeholder="Name"
              value={formData.name}
              onChange={handleChange}
              className="w-full lg:w-1/2 p-4 bg-transparent border-b-2 border-gray-500 focus:outline-none placeholder-gray-400 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full lg:w-1/2 p-4 bg-transparent border-b-2 border-gray-500 focus:outline-none placeholder-gray-400 text-white"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-transparent border-b-2 border-gray-500 focus:outline-none placeholder-gray-400 text-white"
            rows={5}
          ></textarea>
          <div className="flex justify-center lg:justify-start">
            <button
              type="submit"
              className="bg-gold-dark text-dark-blue font-semibold py-3 px-8 rounded-full hover:bg-gold-light transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className="lg:w-1/3 p-10 lg:p-20 bg-dark-gray text-white space-y-8 lg:space-y-10"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p className="text-gray-300">Feel free to reach out for inquiries or further information.</p>
        </div>
        <div className="space-y-4">
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFD700"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M12 2C8.13 2 5 5.13 5 9c0 3.09 3.84 6.64 6.23 10.69.4.66 1.14.66 1.54 0C15.16 15.64 19 12.09 19 9c0-3.87-3.13-7-7-7zm0 9.5c-.83 0-1.5-.67-1.5-1.5S11.17 8.5 12 8.5s1.5.67 1.5 1.5S12.83 11.5 12 11.5z" />
            </svg>
            <div>
              <h4 className="text-lg font-semibold">Office Location</h4>
              <p>1773 Vermont Ave., Los Angeles, CA 90007</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFD700"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M6.62 10.79a15.72 15.72 0 006.59 6.59l2.2-2.2a1 1 0 011.14-.23 11.64 11.64 0 004.4.85 1 1 0 011 1V20a1 1 0 01-1 1A17 17 0 013 4a1 1 0 011-1h3.37a1 1 0 011 1 11.64 11.64 0 00.85 4.4 1 1 0 01-.23 1.14z" />
            </svg>
            <div>
              <h4 className="text-lg font-semibold">Phone</h4>
              <p>+1 (323) 555-2525</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFD700"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M4 4h16v2H4zM3 7h18v14H3zm2 2v10h14V9z" />
            </svg>
            <div>
              <h4 className="text-lg font-semibold">Email</h4>
              <p>lawyers@legalsample.com</p>
            </div>
          </div>
          <div className="flex items-center space-x-3">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="#FFD700"
              viewBox="0 0 24 24"
              className="w-6 h-6"
            >
              <path d="M8 2v2h8V2H8zm2 18v-2H8v2h2zm8-18v2h2a2 2 0 012 2v16a2 2 0 01-2 2h-2v2h-2v-2H8v2H6v-2H4a2 2 0 01-2-2V4a2 2 0 012-2h2V0h2v2h8V0h2v2h2a2 2 0 012 2h-2zm0 18V8H6v12h12z" />
            </svg>
            <div>
              <h4 className="text-lg font-semibold">Business Hours</h4>
              <p>Mon-Fri: 9:00 - 20:00</p>
              <p>Sat-Sun: 10:00 - 18:00</p>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
