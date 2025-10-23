import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import { FaWhatsapp } from "react-icons/fa";
import Progress from "./Progress";
// Import local images
import Img1 from "../assets/img/free.jpg";
import Img2 from "../assets/img/batch.jpg";
import Img3 from "../assets/img/membership.jpg";
import Img4 from "../assets/img/c1.png";

const images = [Img1, Img2, Img3, Img4];

const HeroSlider = () => {
  const [current, setCurrent] = useState(0);

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + images.length) % images.length);
  };

  useEffect(() => {
    const timer = setInterval(nextSlide, 6000); // Auto-slide every 6 seconds
    
    return () => clearInterval(timer);
  }, []);

  return (
    <div id="home" className="relative w-full mt-16 lg:mt-20 overflow-hidden">
      <div
        className="flex transition-transform duration-700 ease-in-out"
        style={{ transform: `translateX(-${current * 100}%)` }}
      >
        {images.map((src, index) => (
          <img
            key={index}
            src={src}
            alt={`Slide ${index}`}
            className="w-full flex-shrink-0 sm:h-[330px] h-[155px] mt-[5px]"
          />
        ))}
      </div>

      {/* Left Button */}
      <button
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 bg-black/10 text-white p-2 rounded-full"
      >
        <ChevronLeft />
      </button>

      {/* Right Button */}
      <button
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 bg-black/10 text-white p-2 rounded-full"
      >
        <ChevronRight />
      </button>

      {/* WhatsApp Button */}
      <a
        href="https://whatsapp.com/channel/0029VaIH7avFsn0bU4P1Ep1E"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed bottom-6 right-6 text-green-500 text-4xl hover:text-green-600 transition-shadow shadow-lg z-50"
      >
        <FaWhatsapp />
      </a>

     {/* ================= Progress Bar at the very bottom ================= */}
     <div className="absolute bottom-0 left-0 w-full">
        <Progress />
      </div>
    </div>
  );
};

export default HeroSlider;
