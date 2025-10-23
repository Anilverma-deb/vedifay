import React from "react";
import backgroundImage from "../assets/img/112.jpg"; // apni image ka path

const MentorSection = () => {
  return (
    <section className="py-16 px-6 md:px-20 bg-white">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 items-center gap-10">
        
        {/* Left Side Image with Decorative Boxes */}
        <div className="relative w-full flex justify-center">
          <div className="relative inline-block">
            {/* Mentor Image */}
            <img
              src={backgroundImage}
              alt="Mentor"
              className="relative z-10 w-[400px] h-auto shadow-lg"
            />

            {/* Decorative Boxes (Touching Corners) */}
            <div className="absolute top-0 left-0 -translate-x-1/2 -translate-y-1/2 w-20 h-20 " style={{ backgroundColor: "rgb(74, 106, 39)" }}></div>
            <div className="absolute bottom-0 right-0 translate-x-1/2 translate-y-1/2 w-20 h-20 " style={{ backgroundColor: "rgb(74, 106, 39)" }}></div>
          </div>
        </div>

        {/* Right Side Content */}
        <div className="text-center md:text-left">
          <h2 className="text-2xl md:text-3xl font-semibold " style={{ color: "rgb(74, 106, 39)" }}>
            Dr Vivek Bindra
          </h2>
          <p className="text-lg text-gray-800 mt-2">
            Founder & CEO, Bada Business
          </p>
          <p className="text-lg text-gray-800 mt-1">
            India’s Leading Business Coach & Startup Guru
          </p>

          {/* Divider Line */}
          <div className="flex items-center justify-center md:justify-start gap-2 my-6">
            <span className="w-16 h-[2px] " style={{ backgroundColor: "rgb(74, 106, 39)" }}></span>
            <span className="w-2 h-2  rounded-full" style={{ backgroundColor: "rgb(74, 106, 39)" }}></span>
            <span className="w-16 h-[2px] " style={{ backgroundColor: "rgb(74, 106, 39)" }}></span>
          </div>

          {/* Title */}
          <h3 className="text-xl md:text-2xl font-semibold " style={{ color: "rgb(74, 106, 39)" }}>
            Trusted Advisor To 1500 Corporates
          </h3>

          {/* Dotted Line */}
          <div className="border-b border-dotted border-black my-4 w-full md:w-[80%]"></div>

          {/* Description */}
          <p className="text-gray-700 text-lg">
            CEO Coach To Over Top 100+ CEOs In The Country
          </p>
        </div>
      </div>
    </section>
  );
};

export default MentorSection;
