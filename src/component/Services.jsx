import React from "react";
import { motion } from "framer-motion";
import { CheckCircle } from "lucide-react";
import Progress from "./Progress";

function Services() {
  return (
<section className="relative  bg-[rgb(73,105,39)] py-10 overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6" style={{ color: "white" }}>
            Our Services
          </h2>
          <p className="text-xl text-white max-w-3xl mx-auto leading-relaxed">
            Empowering students with personalized learning experiences through expert tutoring and complete exam preparation resources.
          </p>
        </motion.div>

        {/* Cards Grid */}
        <div className="grid md:grid-cols-2 gap-8 lg:gap-12 max-w-5xl mx-auto">
          {/* Card 1 */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(139, 195, 74, 0.25)" }}
            viewport={{ once: true }}
            className="relative group bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#8BC34A]/5 to-[#4A6A27]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="relative z-10">
              <motion.h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#4A6A27" }}>
                Class 10 & 12 Tutoring
              </motion.h3>
              <div className="mb-6">
                <div className="flex flex-col sm:flex-row items-baseline space-x-0 sm:space-x-4 space-y-2 sm:space-y-0">
                  <span className="text-4xl lg:text-3xl font-bold text-[#4A6A27]">₹499+GST</span>
                </div>
                <p className="text-gray-600 mt-2">per month • Complete subjects & exam prep</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "NCERT-focused teaching",
                  "Digital Study Material",
                  "Mock test & progress report",
                  "Weekly doubt-solving sessions",
                  "24/7 Student Support",
                  "Budget-friendly",
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#4A6A27]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4" style={{ color: "#4A6A27" }} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 px-6 bg-gradient-to-r from-[#4A6A27] to-[#6A8A3A] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="https://whatsapp.com/channel/0029VaIH7avFsn0bU4P1Ep1E">Enroll Now</a>
              </button>
            </div>
          </motion.div>

          {/* Card 2 */}
          <motion.div
            initial={{ opacity: 0, y: 80, scale: 0.9 }}
            whileInView={{ opacity: 1, y: 0, scale: 1 }}
            transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
            whileHover={{ y: -10, boxShadow: "0 25px 50px -12px rgba(74, 106, 39, 0.25)" }}
            viewport={{ once: true }}
            className="relative group bg-white rounded-3xl p-8 lg:p-10 shadow-xl border border-gray-100 overflow-hidden"
          >
            <div className="absolute inset-0 bg-gradient-to-br from-[#4A6A27]/5 to-[#8BC34A]/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute -top-2 -right-2 bg-gradient-to-r from-[#4A6A27] to-[#6A8A3A] text-white px-6 py-2 rounded-full text-sm font-bold transform -rotate-12">
              Guaranteed
            </div>
            <div className="relative z-10">
              <motion.h3 className="text-2xl lg:text-3xl font-bold mb-4" style={{ color: "#4A6A27" }}>
                Premium Tutoring Plan
              </motion.h3>
              <div className="mb-6">
                <div className="flex items-baseline space-x-2">
                  <span className="text-4xl lg:text-3xl font-bold text-[#4A6A27]">₹1,199+GST</span>
                </div>
                <p className="text-gray-600 mt-2">per month • Premium support included</p>
              </div>
              <ul className="space-y-4 mb-8">
                {[
                  "Personal Mentor Support",
                  "JEE / NEET Foundation Preparation",
                  "Mock Tests & Analysis",
                  "Live Interactive Session",
                  "24/7 Student Support",
                  "Career Guidance Sessions",
                ].map((feature) => (
                  <li key={feature} className="flex items-center space-x-3">
                    <div className="w-6 h-6 bg-[#4A6A27]/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-4 h-4" style={{ color: "#4A6A27" }} />
                    </div>
                    <span className="text-gray-700">{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full py-4 px-6 bg-gradient-to-r from-[#4A6A27] to-[#6A8A3A] text-white font-bold rounded-2xl shadow-lg hover:shadow-xl transition-all duration-300">
                <a href="https://whatsapp.com/channel/0029VaIH7avFsn0bU4P1Ep1E">Enroll Now</a>
              </button>
            </div>
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

export default Services;
