// components/Header.tsx
"use client";
import { motion } from "framer-motion";

import Image from "next/image";

export default function Header() {
  return (
    <header className="bg-[#0A0A0A] text-gray-400 py-6 px-4 md:px-10 lg:px-20">
      <div className="flex flex-col md:flex-row items-center justify-between">
        {/* Logo and Description */}
        <motion.div
          className="flex items-center space-x-3 mb-4 md:mb-0"
          initial={{ opacity: 0, x: -30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          {/* Logo Icon */}
          <div className="w-44 md:w-32 h-32">
            <Image
              src="https://i.postimg.cc/wjQspNGQ/logo0.png" // URL de tu imagen
              alt="Logo"
              width={100} // Puedes ajustar el tamaño según tus necesidades
              height={100}
              className="w-full h-full"
            />
          </div>
          {/* Brand Name and Description */}
          <div>
            <h1 className="text-white text-xl font-semibold">Compice Law</h1>
            <p className="text-sm text-gray-400">
             Expert Legal Solutions & Certified Counsel for Adaptive Client Needs
            </p>
          </div>
        </motion.div>

        {/* Navigation Links */}
        <motion.nav
          className="flex space-x-8 text-sm text-gray-400"
          initial={{ opacity: 0, x: 30 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.5 }}
        >
          <a href="#trust" className="hover:text-white transition">
            TRUST
          </a>
          <a href="#support" className="hover:text-white transition">
            SUPPORT
          </a>
        </motion.nav>
      </div>

      {/* Footer Divider and Rights Section */}
      <div className="mt-4 border-t border-gray-700 pt-4 text-sm flex justify-between">
        <a href="https://xplendev.com/" className="hover:text-gold-dark transition-all duration-200 
                        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                        after:w-0 after:h-[2px] after:transition-all 
                        after:duration-300 hover:after:w-full hover:after:left-0 text-center md:text-start mx-auto md:mx-0">© 2024 Xplendev. All rights reserved.</a>
        <p className="hidden md:block">
          Designed with precision for the ultimate user experience.
        </p>
      </div>
    </header>
  );
}

