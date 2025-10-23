import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image1 from "../assets/img/15.jpeg";
import Image2 from "../assets/img/l2.jpeg";
import Image3 from "../assets/img/14.jpeg";
import Progress from "./Progress";

export default function Testimonials() {
  const testimonials = [
    {
      text: "Thanks to the guidance I received, I achieved 93% in Chemistry! The teaching methods were clear and easy to follow, making complex concepts simple.",
      img: Image2,
      name: "Araaf",
      role: "Student",
    },
    {
      text: "Sir, your teaching methods are incredible. I'm so happy to share that I scored 100 in CSAT because of your guidance. Thank you for making difference!",
      img: Image3,
      name: "Varnika Jain",
      role: "Student",
    },
    {
      text: "I scored 93% in Chemistry thanks to the excellent guidance and support I received. The concepts were made easy, and my confidence improved tremendously!",
      img: Image1,
      name: "Rohan Sharma",
      role: "Student",
    },
  ];

  const [current, setCurrent] = useState(0);
  const [hovered, setHovered] = useState(false);

  // Auto slide
  useEffect(() => {
    if (hovered) return;
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % testimonials.length);
    }, 7000);
    return () => clearInterval(interval);
  }, [testimonials.length, hovered]);

  return (
    <section className="relative py-16 px-0 bg-gray-50 text-center">
      <h3
        className="text-5xl font-bold mb-3"
        style={{ color: "rgb(74, 106, 39)" }}
      >
        Testimonials
      </h3>
      <p className="text-gray-600 mb-12 text-[19px] max-w-2xl mx-auto">
        See what our students are saying about Vedifai
      </p>

      <div
        className="max-w-5xl mx-auto relative overflow-hidden"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
      >
        <AnimatePresence mode="wait">
          <motion.div
            key={current}
            initial={{ opacity: 0, x: 100 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -100 }}
            transition={{ duration: 0.8 }}
            className="p-6"
          >
            <div className="bg-white p-10 rounded-2xl shadow-lg flex flex-col md:flex-row items-center md:items-start gap-8 mb-8">
              {/* Left Image */}
              <div className="flex-shrink-0">
                <div className="w-[200px] h-[185px] rounded-lg overflow-hidden border-4 border-green-800 shadow-md">
                  <a
                    href={testimonials[current].img}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <img
                      src={testimonials[current].img}
                      alt={testimonials[current].name}
                      className="w-full h-full object-cover"
                    />
                  </a>
                </div>
              </div>

              {/* Right Content */}
              <div className="flex-1 text-left">
                <p className="italic text-gray-700 text-lg leading-relaxed mb-6">
                  {testimonials[current].text}
                </p>
                <div>
                  <div className="font-semibold text-gray-800 text-xl">
                    {testimonials[current].name}
                  </div>
                  <div className="text-sm text-green-800">
                    {testimonials[current].role}
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </AnimatePresence>

        {/* Controls */}
        <div className="flex justify-center mt-8 gap-4">
          {testimonials.map((_, index) => (
            <button
              key={index}
              onClick={() => setCurrent(index)}
              className={`w-4 h-4 rounded-full transition-colors duration-300 ${
                current === index
                  ? "bg-green-800"
                  : "bg-gray-300 hover:bg-green-400"
              }`}
            />
          ))}
        </div>
      </div>

      {/* ================= Progress Bar at the very bottom ================= */}
      <div className="mt-12">
        <Progress />
      </div>
    </section>
  );
}
