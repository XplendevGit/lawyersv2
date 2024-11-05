// components/Inicio.tsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Inicio() {
  return (
    <section className="relative h-full md:h-screen text-white flex flex-col items-start justify-center px-6 md:px-10 lg:px-20 pt-[190px] lg:pt-0 shadow-md shadow-gold-dark">
      {/* Imagen de Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.postimg.cc/rwKv6Gmv/bg-2.jpg"
          alt="Background Lawyer"
          layout="fill"
          objectFit="cover"
          quality={100}
        />
        {/* Overlay para oscurecer la imagen */}
        <div className="absolute inset-0 bg-black opacity-50"></div>
      </div>

      {/* Título y Subtítulo */}
      <div className="max-w-lg md:max-w-xl lg:max-w-2xl">
        <motion.h1
          className="text-center md:text-start text-4xl md:text-5xl lg:text-6xl font-bold text-gold-dark"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We’re Built on Relationships
        </motion.h1>
        <motion.p
          className="mt-4 text-center md:text-start text-base md:text-lg lg:text-xl text-gray-200"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          With decades of experience, we provide strategic and personalized legal solutions. Our commitment is to protect our clients interests with integrity and excellence, building trusted relationships and delivering exceptional results.
        </motion.p>

        {/* Botones */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center md:justify-start">
          <motion.a
            href="#trust"
            className="bg-gold-dark text-white px-4 py-2 rounded-full font-semibold hover:bg-gold-light transition"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            Legal Services
          </motion.a>
          <motion.a
            href="#contact"
            className="bg-dark-blue px-4 py-2 rounded-full font-semibold text-white hover:bg-blue-dark transition"
            initial={{ scale: 0.9 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.7 }}
          >
            Meet & Discuss
          </motion.a>
        </div>
      </div>

      {/* Sección de Servicios */}
      <div className="mt-12 lg:pt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 py-12 md:py-0">
        {[
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="50" height="50" className="text-gold-dark">
                <path d="M12 2L1 9l1 1v11h9V14h2v7h9V10l1-1L12 2zM12 4.24L18.8 9H5.2L12 4.24zM3 11v7h2v-7H3zm16 7v-7h2v7h-2z"/>
              </svg>
            ),
            title: "Business Focused",
            text: "Clear, concise, and strategic advice focused on helping you achieve and exceed your business objectives."
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="50" height="50" className="text-gold-dark">
                <path d="M5 19h14v2H5zm7-16L3 9v2h18V9L12 3zm0 2.47L16.76 9H7.24L12 5.47z"/>
              </svg>
            ),
            title: "Legal Counsel",
            text: "Expert, reliable guidance to help you navigate complex legal challenges with confidence and precision."
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="50" height="50" className="text-gold-dark">
                <path d="M5 5h14v14H5z" fill="none"/><path d="M12 7a5 5 0 100 10 5 5 0 000-10z"/>
              </svg>
            ),
            title: "Judicial Results",
            text: "A proven track record of successful judicial outcomes, ensuring your interests are expertly defended."
          },
          {
            icon: (
              <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" viewBox="0 0 24 24" width="50" height="50" className="text-gold-dark">
                <path d="M12 3L1 9v11h22V9L12 3zM12 5.19L20 10.27v8.73h-4v-6h-8v6H4V10.27L12 5.19z"/>
              </svg>
            ),
            title: "Strategic Planning",
            text: "Tailored, forward-thinking strategies designed to safeguard and strengthen your business interests."
          },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center text-center p-8 bg-dark-blue bg-opacity-80 rounded-lg hover:shadow-sm hover:shadow-gold-dark transition-shadow duration-100 border-[1px] border-transparent hover:border-gold-dark"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            {item.icon}
            <h3 className="text-lg md:text-xl font-semibold mt-4 text-gold-dark">{item.title}</h3>
            <p className="text-sm md:text-base lg:text-lg text-gray-200 mt-2">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
