// components/Header.tsx
"use client";
import { motion } from "framer-motion";

export default function Header() {
  return (
    <header className="bg-dark-blue text-gray-300 py-6 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Description */}
        <motion.div
          className="flex items-center space-x-3 mb-4 md:mb-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo Icon */}
          <div className="w-8 h-8">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="#FFD700" // Dorado para el icono
              className="w-full h-full"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 3v18m9-9H3"
              />
            </svg>
          </div>
          {/* Brand Name and Description */}
          <div>
            <h1 className="text-white text-xl font-semibold">dreamy.</h1>
            <p className="text-sm text-gray-400">
              Dreamy UI & Certified UX Components for Adaptive Experience Design
            </p>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          className="flex space-x-8 text-sm"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#" className="hover:text-gold-dark transition">PRODUCTS</a>
          <a href="#" className="hover:text-gold-dark transition">BLOG</a>
          <a href="#" className="hover:text-gold-dark transition">SHOP</a>
          <a href="#" className="hover:text-gold-dark transition">CONTACTS</a>
        </motion.nav>
      </div>

      {/* Footer Divider and Rights Section */}
      <div className="mt-4 border-t border-gray-600 pt-4 text-sm flex justify-between">
        <p>© 2023 Dreamy Inc. All rights reserved.</p>
        <p className="hidden md:block">
          Designed with precision for the ultimate user experience.
        </p>
      </div>
    </header>
  );
}
