// components/BannerStats.tsx
"use client";
import { motion } from "framer-motion";

export default function BannerStats() {
  const stats = [
    {
      icon: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          fill="#FFD700"
          viewBox="0 0 24 24"
        >
          <path d="M12 2l9 8-1.5 1.5L12 4.5 4.5 11.5 3 10z"></path>
        </svg>
      ),
      label: "Successful Cases",
      value: "96%",
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
          <path d="M19 3H5a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2V5a2 2 0 00-2-2zm-7 14H7v-2h5v2zm5-4H7v-2h10v2zm0-4H7V7h10v2z"></path>
        </svg>
      ),
      label: "Cases Done",
      value: "$628M+",
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
          <path d="M12 12a5 5 0 100-10 5 5 0 000 10zM4 21c0-4 8-6 8-6s8 2 8 6H4z"></path>
        </svg>
      ),
      label: "Happy Clients",
      value: "1,258",
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
          <path d="M12 2L1 9l1 1v11h9v-7h2v7h9V10l1-1-11-7zm0 2.47L18.76 9H5.24L12 4.47zM3 11v8h2v-8H3zm16 0v8h2v-8h-2z"></path>
        </svg>
      ),
      label: "Recovered",
      value: "$296k+",
    },
  ];

  return (
    <section className="flex flex-wrap justify-center gap-6 py-10 lg:py-16 px-4 lg:px-20 bg-gray-100 text-dark-blue">
      {stats.map((stat, index) => (
        <motion.div
          key={index}
          className="flex flex-col items-center w-40 md:w-48 text-center space-y-2"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2 * index }}
        >
          <div className="flex items-center justify-center w-12 h-12 rounded-full bg-dark-blue">
            {stat.icon}
          </div>
          <p className="text-xs text-gray-500 uppercase tracking-wider">
            {stat.label}
          </p>
          <p className="text-2xl font-bold text-black">{stat.value}</p>
        </motion.div>
      ))}
    </section>
  );
}
