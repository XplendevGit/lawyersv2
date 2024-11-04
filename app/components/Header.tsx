// components/Header.tsx
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MenuIcon, XIcon } from '@heroicons/react/solid';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header
      className="fixed w-full bg-dark-blue text-white z-50 shadow-md"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <motion.div className="flex items-center space-x-2" whileHover={{ scale: 1.05 }}>
          <Image 
            className="w-[100px] h-auto md:w-[120px]" // Ajuste de tamaño para dispositivos móviles
            src="https://i.postimg.cc/wjQspNGQ/logo0.png" 
            alt="Law Firm Logo" 
            width={450} 
            height={450} 
            priority={true}
          />
        </motion.div>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6">
          {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
            <motion.a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="hover:text-gray-300 transition-all duration-200"
              whileHover={{ scale: 1.1 }}
            >
              {item.toUpperCase()}
            </motion.a>
          ))}
          {/* Botón de Contacto */}
          <motion.a
            href="#contact"
            className="bg-gold text-dark-blue px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition"
            whileHover={{ scale: 1.05 }}
          >
            CONTACT
          </motion.a>
        </nav>

        {/* Mobile Menu Button */}
        <div className="md:hidden">
          <button onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? (
              <XIcon className="h-6 w-6 text-white" />
            ) : (
              <MenuIcon className="h-6 w-6 text-white" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <motion.nav
          className="md:hidden bg-dark-blue text-center space-y-4 py-4 absolute w-full top-full shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['Home', 'Services', 'About', 'Contact'].map((item, index) => (
            <a
              key={index}
              href={`#${item.toLowerCase()}`}
              className="block text-lg font-semibold hover:text-gray-300 transition-all duration-200"
              onClick={() => setIsOpen(false)}
            >
              {item.toUpperCase()}
            </a>
          ))}
          <a
            href="#contact"
            className="bg-gold text-dark-blue px-4 py-2 rounded-full font-semibold hover:bg-yellow-400 transition block mx-auto mt-2 w-3/4"
            onClick={() => setIsOpen(false)}
          >
            CONTACT
          </a>
        </motion.nav>
      )}
    </motion.header>
  );
}
