// components/Hero.tsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Hero() {
  return (
    <section className="flex flex-col lg:flex-row items-start justify-between px-6 md:px-10 lg:px-20 py-10 lg:py-20 bg-white space-y-10 lg:space-y-0">
      {/* Texto principal */}
      <motion.div
        className="lg:w-1/2 space-y-6 lg:space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Your business is safe with us
        </p>
        <h1 className="text-4xl md:text-5xl md:text-start font-bold text-dark-blue leading-tight">
          Committed to <span className="text-gold-dark">Your Business</span>
        </h1>
        <p className="mt-4 text-gray-700 text-lg">
          We’re experienced attorneys with a mission to handle a broad range of complex legal matters for businesses, government entities, organizations, and individuals in a clear, organized, and efficient manner.
        </p>

        {/* Sección de Iconos */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mt-8">
          {[
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" className="text-white">
                  <path d="M12 2L2 7v7c0 6 6 10 10 10s10-4 10-10V7l-10-5zm0 2.18l8 4v6c0 4.42-3.58 8-8 8s-8-3.58-8-8v-6l8-4z" />
                  <path d="M11 14h2v2h-2zm0-7h2v5h-2z" />
                </svg>
              ),
              title: "Trust and Integrity",
              text: "Committed to upholding high standards of integrity and trust in our legal practice.",
              bgColor: "bg-gold-dark",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" className="text-dark-blue">
                  <path d="M12 2L4.5 8l.5 8 7 4 7-4 .5-8L12 2zm0 2.47l5.5 4.01-.39 5.69-5.11 2.92L6.89 14.2 6.5 8.47 12 4.47z" />
                </svg>
              ),
              title: "Expert Team",
              text: "Highly skilled attorneys equipped to tackle complex legal issues.",
              bgColor: "bg-gray-200",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" className="text-white">
                  <path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 14h-2v-6h2v6zm4 0h-2v-4h2v4z" />
                </svg>
              ),
              title: "Client-Focused Approach",
              text: "Focused on delivering results that meet and exceed client expectations.",
              bgColor: "bg-gold-dark",
            },
            {
              icon: (
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" width="50" height="50" className="text-dark-blue">
                  <path d="M12 2l1.45 4.62h4.85l-3.93 2.86 1.51 4.62-3.88-2.8-3.88 2.8 1.51-4.62L5.7 6.62h4.85L12 2z" />
                </svg>
              ),
              title: "Justice and Fairness",
              text: "Dedicated to ensuring fair and just outcomes for all clients.",
              bgColor: "bg-gray-200",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className={`flex items-center p-4 rounded-lg ${item.bgColor} bg-opacity-80`}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="mr-4">{item.icon}</div>
              <div>
                <h3 className="text-lg font-semibold text-dark-blue">{item.title}</h3>
                <p className="text-gray-700">{item.text}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Card con Imagen y Testimonio */}
      <motion.div
        className="lg:w-1/2 lg:min-h-[580px] mt-10 lg:mt-0 flex flex-col items-center justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-full lg:w-[90%] max-w-md bg-white rounded-lg shadow-lg overflow-hidden">
          <Image
            src="https://i.postimg.cc/L504TmXw/img1.jpg"
            alt="Business Meeting"
            width={500}
            height={400}
            className="w-full h-60 object-cover"
          />
          <div className="bg-dark-blue text-white p-6">
            <p className="text-lg italic">
              We support and encourage all attorney work in community and outreach efforts outside of our clients.
            </p>
            <p className="mt-4 font-semibold text-right">Adam Bernstein</p>
          </div>
        </div>
      </motion.div>
    </section>
  );
}
