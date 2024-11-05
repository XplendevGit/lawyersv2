// components/Header.tsx
"use client";
import { useState } from 'react';
import { motion } from 'framer-motion';
import Image from 'next/image';
import { MenuIcon, XIcon } from '@heroicons/react/solid';
import Link from 'next/link';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);

  const smoothScroll = (sectionId: string) => {
    const section = document.getElementById(sectionId);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth' });
      setIsOpen(false); // Close mobile menu if open
    }
  };

  return (
    <motion.header
      className="fixed w-full bg-black text-white z-50 shadow-sm shadow-gold-dark"
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container mx-auto px-4 py-3 flex justify-between items-center">
        {/* Logo */}
        <Link href={'/'}>
          <motion.div className="flex items-center space-x-2 cursor-pointer">
            <Image 
              className="w-[80px] h-auto md:w-[80px]"
              src="https://i.postimg.cc/wjQspNGQ/logo0.png" 
              alt="Law Firm Logo" 
              width={450} 
              height={450} 
              priority={true}
            />
          </motion.div>
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex space-x-6 pt-8">
          {['Home', 'Trust', 'Support', 'Contact'].map((item, index) => (
            <button
              key={index}
              onClick={() => smoothScroll(item.toLowerCase())}
              className="relative hover:text-gold-dark transition-all duration-200 
                        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                        after:w-0 after:h-[2px] after:bg-gold-dark after:transition-all 
                        after:duration-300 hover:after:w-full hover:after:left-0 text-gray-400"
            >
              {item.toUpperCase()}
            </button>
          ))}
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
          className="md:hidden bg-black/90 text-center space-y-4 py-4 flex flex-col w-full top-full shadow-lg"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
        >
          {['Home', 'Trust', 'Support', 'Contact'].map((item, index) => (
            <button
              key={index}
              onClick={() => smoothScroll(item.toLowerCase())}
              className="block text-lg font-semibold hover:text-gold-dark transition-all duration-200 
                        after:content-[''] after:absolute after:left-1/2 after:bottom-0 
                        after:w-0 after:h-[2px] after:transition-all 
                        after:duration-300 hover:after:w-full hover:after:left-0"
            >
              {item.toUpperCase()}
            </button>
          ))}

        </motion.nav>
      )}
    </motion.header>
  );
}
