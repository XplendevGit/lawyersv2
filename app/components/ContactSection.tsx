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
    <section className="flex flex-col lg:flex-row items-center justify-center min-h-screen bg-dark-blue text-white">
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
              className="w-full lg:w-1/2 p-4 bg-transparent border-b-2 border-gray-300 focus:outline-none placeholder-gray-400 text-white"
            />
            <input
              type="email"
              name="email"
              placeholder="Email"
              value={formData.email}
              onChange={handleChange}
              className="w-full lg:w-1/2 p-4 bg-transparent border-b-2 border-gray-300 focus:outline-none placeholder-gray-400 text-white"
            />
          </div>
          <textarea
            name="message"
            placeholder="Your Message"
            value={formData.message}
            onChange={handleChange}
            className="w-full p-4 bg-transparent border-b-2 border-gray-300 focus:outline-none placeholder-gray-400 text-white"
            rows={5}
          ></textarea>
          <div className="flex justify-center lg:justify-start">
            <button
              type="submit"
              className="bg-white text-dark-blue font-semibold py-3 px-8 rounded-full hover:bg-gray-100 transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </motion.div>

      {/* Contact Info Section */}
      <motion.div
        className="lg:w-1/3 p-10 lg:p-20 bg-red-700 space-y-8 lg:space-y-10 text-white"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="space-y-3">
          <h3 className="text-2xl font-bold">Contact Information</h3>
          <p className="text-gray-200">Feel free to reach out for inquiries or further information.</p>
        </div>
        <div className="space-y-4">
          <div>
            <h4 className="text-lg font-semibold">Office Location</h4>
            <p>1773 Vermont Ave., Los Angeles, CA 90007</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Email</h4>
            <p>lawyers@legalsample.com</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Phone</h4>
            <p>+1 (323) 555-2525</p>
          </div>
          <div>
            <h4 className="text-lg font-semibold">Business Hours</h4>
            <p>Mon-Fri: 9:00 - 20:00</p>
            <p>Sat-Sun: 10:00 - 18:00</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
