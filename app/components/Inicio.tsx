// components/Inicio.tsx
"use client";
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function Inicio() {
  return (
    <motion.section
      className="relative h-screen text-white flex flex-col items-center justify-between"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
    >
      {/* Imagen de Fondo */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="https://i.postimg.cc/C1Z7vJxK/law-bg1.jpg"
          alt="Background Building"
          layout="fill"
          objectFit="cover"
          quality={100}
          className="opacity-70"
        />
      </div>

      {/* Encabezado Central */}
      <div className="flex flex-col items-center text-center mt-20 lg:mt-32 px-6 max-w-3xl">
        <motion.h1
          className="text-4xl md:text-5xl lg:text-6xl font-bold"
          initial={{ y: -20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          COMMITTED TO JUSTICE <br /> AND EXCELLENCE
        </motion.h1>
        <motion.p
          className="mt-4 text-sm md:text-base lg:text-lg max-w-xl text-gray-300"
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          We provide a wide range of legal services to meet your needs. Our team of experienced attorneys is committed to upholding the highest standards of excellence in every case.
        </motion.p>

        {/* Botón Central */}
        <motion.a
          href="#contact"
          className="mt-8 bg-gold text-dark-blue px-6 py-3 rounded-full font-semibold hover:bg-yellow-400 transition"
          initial={{ scale: 0.9 }}
          animate={{ scale: 1 }}
          transition={{ delay: 0.7 }}
        >
          CONTACT US
        </motion.a>
      </div>

      {/* Sección de Íconos en la Parte Inferior */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-6 p-6 bg-dark-blue bg-opacity-60 w-full text-center text-sm md:text-base">
        {[
          { icon: "/images/icon-justice.png", title: "HOME", text: "Lorem ipsum dolor sit amet, consectetur adipiscing elit." },
          { icon: "/images/icon-service.png", title: "OUR SERVICES", text: "Offering a variety of legal services tailored to your needs." },
          { icon: "/images/icon-about.png", title: "ABOUT US", text: "Experienced attorneys dedicated to justice and integrity." },
          { icon: "/images/icon-justice.png", title: "OUR TEAM", text: "Meet our professional team of lawyers and experts." },
          { icon: "/images/icon-contact.png", title: "CONTACT US", text: "Get in touch for more information and assistance." },
        ].map((item, index) => (
          <motion.div
            key={index}
            className="flex flex-col items-center space-y-2"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.8 + index * 0.1 }}
          >
            <Image src={item.icon} alt={item.title} width={50} height={50} />
            <h3 className="text-gold font-semibold">{item.title}</h3>
            <p className="text-gray-300">{item.text}</p>
          </motion.div>
        ))}
      </div>
    </motion.section>
  );
}
