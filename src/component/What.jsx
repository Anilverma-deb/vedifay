import React from "react";
import { motion } from "framer-motion";
import { GraduationCap, Monitor, School } from "lucide-react"; // icons
import Progress from "./Progress";

const cardsData = [
  {
    title: "For Students",
    description:
      "We provide goal-oriented, personalized education designed to meet individual learning needs and help students achieve their academic and career aspirations.",
    icon: <GraduationCap size={40} />,
  },
  {
    title: "For Teachers",
    description:
      "We offer A2Z technological solutions, equipping educators with cutting-edge tools for lesson planning, content delivery, assessment, and classroom management. From interactive modules to data analytics, we support teachers every step of the way, enabling them to focus on what they do best teaching.",
    icon: <Monitor size={40} />,
  },
  {
    title: "For Parents & Schools",
    description:
      "We connect parents and schools with well-trained, highly qualified teachers who are passionate about education and skilled in modern pedagogical techniques.",
    icon: <School size={40} />,
  },
];

const What = () => {
  return (
    <section className="pt-[40px] bg-gray-50">
      {/* ===== What We Offer Heading ===== */}
      <div className="max-w-7xl mx-auto text-center mb-12">
        <motion.h2
          className="text-4xl sm:text-5xl font-bold text-[rgb(74,106,39)] mb-4"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          What We Offer
        </motion.h2>
        <motion.p
          className="text-gray-600 max-w-2xl mx-auto text-lg sm:text-xl"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          Explore the unique approach that combines modern tools with ancient
          wisdom to enhance learning.
        </motion.p>
      </div>

      {/* ===== Cards ===== */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {cardsData.map((card, index) => (
          <motion.div
            key={index}
            className="bg-white shadow-md p-8 flex flex-col items-center text-center cursor-pointer hover:shadow-2xl hover:-translate-y-2 transition-all duration-500"
            initial={{ opacity: 0, y: 60 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7, delay: 0.3 + index * 0.2 }}
            whileHover={{ scale: 1.05 }}
          >
            {/* Icon with background and hover animation */}
            <motion.div
              className="flex items-center justify-center w-20 h-20 rounded-full bg-[rgb(74,106,39)] text-white mb-6 shadow-lg"
              whileHover={{ scale: 1.2, rotate: 10 }}
              transition={{ type: 'spring', stiffness: 300 }}
            >
              {card.icon}
            </motion.div>

            {/* Title */}
            <h3 className="text-xl sm:text-2xl font-semibold mb-3 text-[rgb(74,106,39)]">
              {card.title}
            </h3>

            {/* Description */}
            <p className="text-gray-600 text-sm sm:text-base leading-relaxed">
              {card.description}
            </p>
          </motion.div>
        ))}
      </div>

      {/* ===== Progress Bar at the very bottom ===== */}
      <div className="mt-10">
        <Progress />
      </div>
    </section>
  );
};

export default What;
