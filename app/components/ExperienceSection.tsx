// components/ExperienceSection.tsx
"use client";
import { motion } from "framer-motion";
import Image from "next/image";

export default function ExperienceSection() {
  return (
    <section className="flex flex-col lg:flex-row items-center justify-between px-6 md:px-10 lg:px-20 py-10 lg:py-20 bg-white text-dark-blue">
      {/* Text Content Section */}
      <motion.div
        className="lg:w-1/2 space-y-6 lg:space-y-8"
        initial={{ opacity: 0, x: -50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <p className="text-sm text-gray-500 uppercase tracking-wide">
          Your business is safe with us
        </p>
        <h2 className="text-4xl md:text-5xl font-bold text-dark-blue leading-tight">
          Experienced <span className="text-gold-dark">And Trusted</span>
        </h2>
        <p className="mt-4 text-gray-700 text-lg">
          Our attorneys think like business people, with extensive backgrounds in both law and business. This unique perspective helps us address the complex challenges our clients face in achieving success and growth. We provide strategic, proactive solutions tailored to each clients needs, building strong, lasting relationships founded on trust and integrity.
        </p>
        <p className="text-gray-700 text-lg">
          Our commitment to excellence empowers clients to operate with confidence, knowing they have a legal partner dedicated to their long-term success and prepared to anticipate and prevent potential challenges.
        </p>

        {/* Icon Section */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-8">
          {[
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L1 9l1 1v11h9V14h2v7h9V10l1-1L12 2zM12 4.24L18.8 9H5.2L12 4.24zM3 11v7h2v-7H3zm16 7v-7h2v7h-2z" />
                </svg>
              ),
              title: "Strategic",
              description: "Providing clear strategies to effectively navigate legal challenges.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                >
                  <path d="M5 19h14v2H5zm7-16L3 9v2h18V9L12 3zm0 2.47L16.76 9H7.24L12 5.47z" />
                </svg>
              ),
              title: "Contractual",
              description: "Expertise in efficiently handling complex contractual matters with precision.",
            },
            {
              icon: (
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  fill="#FFD700"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 2L2 7v7c0 6 6 10 10 10s10-4 10-10V7l-10-5zm0 2.18l8 4v6c0 4.42-3.58 8-8 8s-8-3.58-8-8v-6l8-4z" />
                </svg>
              ),
              title: "Solutions",
              description: "Delivering tailored and effective solutions for all your legal needs.",
            },
          ].map((item, index) => (
            <motion.div
              key={index}
              className="flex flex-col items-center text-center space-y-2"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 * index }}
            >
              <div className="flex items-center justify-center w-14 h-14 rounded-full bg-dark-blue border-2 border-transparent hover:border-gold-dark transition-all duration-150 ease-in">
                {item.icon}
              </div>
              <h3 className="text-lg font-semibold text-gold-dark">{item.title}</h3>
              <p className="text-gray-600 text-sm">{item.description}</p>
            </motion.div>
          ))}
        </div>
      </motion.div>

      {/* Image Section */}
      <motion.div
        className="lg:w-1/2 mt-10 lg:mt-0 flex justify-center"
        initial={{ opacity: 0, x: 50 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="relative w-3/4 md:w-1/2 lg:w-full h-80 lg:h-[500px] rounded-lg overflow-hidden justify-center flex">
          <Image
            src="https://i.postimg.cc/rmwFPnrW/trust-2.png"
            alt="Experienced Lawyer"
            width={400}
            height={600}
            objectFit="cover"
            className=""
          />
        </div>
      </motion.div>
    </section>
  );
}
