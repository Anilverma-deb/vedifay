import React from "react";
import { motion } from "framer-motion";
import Progress from "./Progress";

function Value() {
  const stats = [
    { title: "Quality" },
    { title: "Convenient" },
    { title: "Personalization" },
    { title: "Guarantee" },
  ];

  return (
    <div className="text-center relative w-full">
      {/* ===== Heading ===== */}
      <motion.h2
        className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-bold text-[rgb(74,106,39)] mb-6 sm:mb-8 md:mb-12 mt-6 sm:mt-10"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        Our Value
      </motion.h2>

      {/* ===== Stat Cards ===== */}
      <motion.div
        className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        {stats.map((stat, i) => (
          <motion.div
            key={i}
            className="relative group text-center p-6 sm:p-8 rounded-2xl border border-[rgb(74,106,39)] bg-white text-[rgb(74,106,39)] transition-all duration-500 cursor-pointer"
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            whileHover={{ scale: 1.05, y: -5 }}
            transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
            viewport={{ once: true }}
          >
            <div className="text-base sm:text-lg md:text-xl lg:text-2xl font-extrabold transition-colors duration-500 group-hover:text-white">
              {stat.title}
            </div>

            {/* Hover Background */}
            <div className="absolute inset-0 rounded-2xl bg-[rgb(74,106,39)] opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-500"></div>
          </motion.div>
        ))}
      </motion.div>

      {/* ===== Progress Bar (Full Width) ===== */}
      <div className="mt-8 sm:mt-10 lg:mt-12 w-full">
        <Progress />
      </div>
    </div>
  );
}

export default Value;
