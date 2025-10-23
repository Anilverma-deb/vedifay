import React from "react";
import { motion } from "framer-motion";
import Progress from "./Progress";
function Teacher() {
  // Animation Variants
  const containerVariant = {
    hidden: { opacity: 0, y: 40 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: "easeOut", staggerChildren: 0.3 },
    },
  };

  const childVariant = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
  };

  return (
    <section
      className="relative py-3 sm:py-6 lg:py-8 overflow-hidden"
      id="about"
      style={{
        background: "rgb(73 105 39)",
      }}
    >
      {/* 🌟 Decorative Animated Background */}
      <motion.div
        className="absolute top-10 left-10 w-48 h-48 bg-white/5 rounded-full blur-3xl -z-0 mb-[30px]"
        animate={{ y: [0, 20, 0], opacity: [0.6, 0.9, 0.6] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        className="absolute bottom-10 right-10 w-72 h-72 bg-white/10 rounded-full blur-3xl -z-0"
        animate={{ y: [0, -20, 0], opacity: [0.5, 0.8, 0.5] }}
        transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
      />

      {/* 🌟 Content */}
      <div className="relative container mx-auto px-4 z-10">
        <div className="flex flex-col items-center gap-6 sm:gap-10">
          <motion.div
            className="about-content w-full max-w-3xl text-center"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={containerVariant}
          >
            {/* Heading */}
            <motion.h3
              className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white font-poppins leading-tight drop-shadow-lg"
              variants={childVariant}
            >
              About Vedifai
            </motion.h3>


            {/* Paragraph */}
            <motion.p
              className="text-white/90 text-lg sm:text-xl leading-relaxed mt-4 font-light"
              variants={childVariant}
            >
              Vedifai is a personalised educational platform that provides
              complete A–Z learning solutions in just one click.  
              We bring you real and virtual learning experiences with the right
              training, expert guidance, and a culture that shapes your success.
            </motion.p>

            {/* Highlighted Text */}
            <motion.p
              className="text-white/80 text-base sm:text-lg mt-5 italic mb-[30px]"
              variants={childVariant}
            >
              Our counsellors guide you, subject matter experts teach you, and
              mentors shape your journey with a personalised success path.
            </motion.p>
          </motion.div>
        </div>
      </div>

     {/* ================= Progress Bar at the very bottom ================= */}
     <div className="absolute bottom-0 left-0 w-full">
        <Progress />
      </div>
    </section>
  );
}

export default Teacher;
