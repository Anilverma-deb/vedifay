import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";


import HeroSlides from "./Slider";
import ContactPart from "./third";
import Teacher from "./Teacher";

import Testionails from "./Testimonial";
import UpcomingBatches from "./Upcoming";
import LatestBlog from "./blog";
import Vision from "./Vision";
import Services from "./Services";
import What from "./What";
import Value from "./Value";






import Header from "./Header";
import { FaFacebookF, FaInstagram, FaLinkedinIn } from "react-icons/fa";


const TutoringLandingPage = () => {
  const [marginTop, setMarginTop] = useState(0);

  useEffect(() => {
    const handleResize = () => {
      setMarginTop(window.innerWidth >= 768 ? 85 : 0);
    };
  
    // Run once
    handleResize();

   // Resize listener
   window.addEventListener("resize", handleResize);
   return () => window.removeEventListener("resize", handleResize);
  }, []);

  const scrollToSection = (id) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="min-h-screen bg-white" style={{ marginTop: `${marginTop}px` }}>
      {/* Header Component */}
      <Header scrollToSection={scrollToSection} marginTop={marginTop} />

      {/* Sections */}
      <HeroSlides />
      <Teacher />
      <section>
        <Value />
      </section>
      <section>
        <Vision />
        
      
      </section>

      {/* <BusinessSection /> */}
      {/* <AboutProgram /> */}
      {/* <MentorSection /> */}
      <What />


      {/* About Section with Pricing Cards */}
      <section>
        <Services />
 

</section>


      {/*Vision Section */}
      

      
      <UpcomingBatches />
     
      <section id="blog" className="mb-[40px]" >
       {/* <BlogSlider/> */}
       <LatestBlog />
    

      </section>




  
    <section
      id="contact"
    >
   <ContactPart/>

    </section>

    <Testionails />


    
    <footer className="bg-gradient-to-r from-green-950 via-green-900 to-green-950 text-white py-10">
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center"
      >
        {/* Logo */}
        


        <motion.div
          initial={{ scale: 0.8, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
          className="text-3xl font-extrabold tracking-wide"
        >
          <span className="bg-clip-text text-transparent bg-gradient-to-r from-green-400 to-lime-400">
            Vedifai
          </span>
        </motion.div>

        {/* Slogan */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-2 text-green-100 text-sm sm:text-base italic"
        >
          " Your Personalised Navigator"
        </motion.p>

        {/* Divider */}
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="w-20 h-[2px] bg-gradient-to-r from-green-400 to-lime-400 mt-4 mb-3"
        ></motion.div>

        {/* Social Icons */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
          className="flex gap-6 mt-3 mb-4"
        >
          <a
            href="https://www.facebook.com/profile.php?id=61581437906421&rdid=LqteKlhBkVmTleN1&share_url=https%3A%2F%2Fwww.facebook.com%2Fshare%2F1DBgG19Mda%2F#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-green-400 transition text-xl"
          >
            <FaFacebookF />
          </a>
          <a
            href="https://www.instagram.com/vedifai?utm_source=qr&igsh=eXF2NjJqZWN6cTRt"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-pink-400 transition text-xl"
          >
            <FaInstagram />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="text-white hover:text-blue-400 transition text-xl"
          >
            <FaLinkedinIn />
          </a>
        </motion.div>

        {/* Copyright */}
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 1, delay: 0.8 }}
          className="text-green-200 text-xs sm:text-sm"
        >
 {/* Logo */}
           
           
          © {new Date().getFullYear()} Vedifai. All rights reserved.{" "}
          created by{" "}
          <a
            href="https://jbhtechinnovation.com"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-white"
          >
            jbhtechinnovation
          </a>
        </motion.p>
      </motion.div>
    </footer>
 

    </div>
  );
};

export default TutoringLandingPage;