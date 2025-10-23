import React from "react";
import { motion } from "framer-motion";
import CountUp from "react-countup";
import Progress from "./Progress";

function Vision() {
  const stats = [
    { number: 10000, suffix: "+", label: "Students Taught" },
    { number: 95, suffix: "%", label: "Success Rate" },
    { number: 1000, suffix: "+", label: "Expert Tutors" },
    { number: 24, suffix: "/7", label: "Support Available" },
  ];

  return (
    <section
      id="vision"
      className="py-4 sm:py-4 bg-[rgb(73,105,39)] relative overflow-hidden"
    >
      {/* ✨ Floating Background Shapes */}
      <motion.div
        className="absolute top-10 left-1/4 w-56 h-56 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, 25, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 10, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-1/4 w-48 h-48 bg-white/10 rounded-full blur-3xl"
        animate={{ y: [0, -20, 0], opacity: [0.4, 0.6, 0.4] }}
        transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
      />

      <div className="relative z-10 container mx-auto px-4">
        {/* ================= Heading & Intro ================= */}
        <div className="flex flex-col items-center gap-6 sm:gap-8 text-center">
          <motion.h2
            className="text-3xl sm:text-4xl md:text-5xl font-bold text-white font-poppins leading-snug"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            Our Vision
          </motion.h2>

          <motion.p
            className="max-w-3xl text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            We aim to deliver{" "}
            <span className="font-semibold text-white">
              personalized, world-class education
            </span>{" "}
            at every doorstep, combining{" "}
            <span className="font-semibold text-white">AI-driven tools</span>{" "}
            with timeless Vedic wisdom. Our vision is to help students, teachers,
            and institutions grow together in every aspect of learning.
          </motion.p>

          {/* ================= Bullet Points ================= */}
          <motion.ul
            className="space-y-3 sm:space-y-4 max-w-2xl text-left"
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
            viewport={{ once: true }}
          >
            {[
              "Shaping the right people for the future at the right time.",
              "Helping learners fulfill their dreams and those of their parents & nation.",
              "Developing charismatic personalities guided by Guna and Karma.",
              "Building tomorrow’s leaders and educators.",
            ].map((item, i) => (
              <motion.li
                key={i}
                className="flex items-start gap-3 text-white/90 text-sm sm:text-base md:text-lg leading-relaxed"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.5, delay: 0.5 + i * 0.1 }}
                viewport={{ once: true }}
              >
                <span className="w-3 h-3 mt-2 rounded-full bg-white/70 flex-shrink-0"></span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </div>

        {/* ================= Bottom Stat Cards ================= */}
        <motion.div
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8 mt-12 sm:mt-16"
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.5 }}
          viewport={{ once: true }}
        >
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="text-center bg-red backdrop-blur-sm rounded-2xl p-4 sm:p-6 hover:bg-white/30 transition-all duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05, y: -5 }}
              transition={{ duration: 0.6, delay: 0.6 + i * 0.1 }}
              viewport={{ once: true }}
            >
              <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-2">
                <CountUp
                  start={0}
                  end={stat.number}
                  duration={2}
                  separator=","
                  enableScrollSpy={true} // counts when scrolled into view
                />
                {stat.suffix}
              </div>
              <div className="text-white/80 text-sm sm:text-base font-medium">
                {stat.label}
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>

      {/* ================= Progress Bar at the very bottom ================= */}
      <div className="absolute bottom-0 left-0 w-full">
        <Progress />
      </div>
    </section>
  );
}

export default Vision;
