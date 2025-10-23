import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, X } from "lucide-react";
import Insta1 from "../assets/img/insta10.png";
import Insta2 from "../assets/img/insta11.png";
import Insta3 from "../assets/img/insta12.png";
import Insta4 from "../assets/img/insta13.png";
import Insta5 from "../assets/img/insta14.png";
import Insta6 from "../assets/img/insta15.png";
import Insta7 from "../assets/img/insta16.png";
import Insta20 from "../assets/img/insta20.png";
import Insta21 from "../assets/img/insta21.png";
import Insta22 from "../assets/img/insta22.png";
import Insta23 from "../assets/img/insta23.png";
import Insta24 from "../assets/img/insta24.png";
import Insta25 from "../assets/img/insta25.png";
import Insta26 from "../assets/img/insta26.png";
import Insta27 from "../assets/img/insta27.png";
import Insta29 from "../assets/img/insta29.png";
import Insta34 from "../assets/img/insta34.png";
import Insta32 from "../assets/img/insta32.png";
import Insta33 from "../assets/img/insta33.png";
import Progress from "./Progress";

const blogs = [
  {
    id: 1,
    image: Insta1,
    images: [Insta2, Insta3, Insta4, Insta5, Insta6, Insta7],
    title: "7 Self-Growth Tips",
    date: "Sep 25, 2025",
  },
  {
    id: 2,
    image: Insta20,
    images: [Insta21, Insta22, Insta23, Insta24, Insta25, Insta26, Insta27],
    title: "Step-by-Step Career Growth",
    date: "Sep 25, 2025",
  },
  {
    id: 3,
    image: Insta29,
    images: [Insta32, Insta33, Insta34],
    title: "5 Efficiency Tips",
    date: "Sep 25, 2025",
  },
];

const Blog = () => {
  const [selectedIndex, setSelectedIndex] = useState(null);
  const [storyIndex, setStoryIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const [sliderIndex, setSliderIndex] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(1);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);

  // Handle responsive slides
  const handleResize = () => {
    if (window.innerWidth >= 1024) setVisibleSlides(3);
    else if (window.innerWidth >= 768) setVisibleSlides(2);
    else setVisibleSlides(1);
  };

  useEffect(() => {
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const closeModal = () => {
    setSelectedIndex(null);
    setStoryIndex(0);
    setProgress(0);
    setIsAutoPlaying(true);
  };

  // Story modal auto-progress
  useEffect(() => {
    if (selectedIndex === null || !isAutoPlaying) return;

    const currentBlog = blogs[selectedIndex];
    const totalImages = currentBlog.images.length;
    
    let animationFrame;
    let startTime = null;
    const duration = 13000; // 13 seconds per image

    const animate = (timestamp) => {
      if (!startTime) startTime = timestamp;
      const elapsed = timestamp - startTime;
      const newProgress = (elapsed / duration) * 100;

      if (newProgress >= 100) {
        setProgress(0);
        if (storyIndex < totalImages - 1) {
          setStoryIndex(prev => prev + 1);
        } else {
          // Move to next blog or close if last
          if (selectedIndex < blogs.length - 1) {
            setSelectedIndex(prev => prev + 1);
            setStoryIndex(0);
          } else {
            closeModal();
          }
        }
      } else {
        setProgress(newProgress);
        animationFrame = requestAnimationFrame(animate);
      }
    };

    animationFrame = requestAnimationFrame(animate);
    return () => cancelAnimationFrame(animationFrame);
  }, [selectedIndex, storyIndex, isAutoPlaying]);

  // Reset progress when story index changes
  useEffect(() => {
    setProgress(0);
  }, [storyIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyPress = (e) => {
      if (selectedIndex === null) return;
      
      switch(e.key) {
        case 'ArrowLeft':
          handlePreviousStory();
          break;
        case 'ArrowRight':
          handleNextStory();
          break;
        case 'Escape':
          closeModal();
          break;
        default:
          break;
      }
    };

    window.addEventListener('keydown', handleKeyPress);
    return () => window.removeEventListener('keydown', handleKeyPress);
  }, [selectedIndex, storyIndex]);

  const handleNextStory = () => {
    const currentBlog = blogs[selectedIndex];
    if (storyIndex < currentBlog.images.length - 1) {
      setStoryIndex(prev => prev + 1);
    } else if (selectedIndex < blogs.length - 1) {
      setSelectedIndex(prev => prev + 1);
      setStoryIndex(0);
    } else {
      closeModal();
    }
  };

  const handlePreviousStory = () => {
    if (storyIndex > 0) {
      setStoryIndex(prev => prev - 1);
    } else if (selectedIndex > 0) {
      setSelectedIndex(prev => prev - 1);
      setStoryIndex(blogs[selectedIndex - 1].images.length - 1);
    }
  };

  // Main slider navigation
  const maxIndex = Math.max(0, blogs.length - visibleSlides);

  const nextSlide = () => {
    setSliderIndex(prev => prev >= maxIndex ? 0 : prev + 1);
  };

  const prevSlide = () => {
    setSliderIndex(prev => prev <= 0 ? maxIndex : prev - 1);
  };

  const slideWidth = 100 / visibleSlides;

  return (
    <section className="px-4 sm:px-6 lg:px-8 py-10 lg:py-16 bg-gray-50">
      <h2 className="text-center text-3xl sm:text-4xl lg:text-5xl font-bold mb-6 lg:mb-12 text-[rgb(74,106,39)]">
        Latest Insights
      </h2>

      {/* Blogs Slider */}
      <div className="relative max-w-7xl mx-auto overflow-hidden px-2">
        <motion.div
          className="flex"
          animate={{ x: `-${sliderIndex * slideWidth}%` }}
          transition={{ type: "spring", stiffness: 120, damping: 25 }}
        >
          {blogs.map((blog, index) => (
            <div
              key={blog.id}
              className="flex-shrink-0 px-3"
              style={{ width: `${slideWidth}%` }}
            >
              <motion.div
                className="bg-white shadow-lg rounded-xl overflow-hidden hover:shadow-2xl transition-all duration-300 cursor-pointer group"
                whileHover={{ y: -5 }}
                onClick={() => {
                  setSelectedIndex(index);
                  setStoryIndex(0);
                }}
              >
                <div className="relative h-64 sm:h-72 lg:h-80 overflow-hidden">
                  <img
                    src={blog.image}
                    alt={blog.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300"></div>
                  <div className="absolute bottom-4 left-4 right-4 text-white transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                    <h3 className="text-lg font-semibold leading-tight mb-1">
                      {blog.title}
                    </h3>
                    <p className="text-sm opacity-90">{blog.date}</p>
                  </div>
                  <div className="absolute top-4 right-4 bg-black/50 text-white px-2 py-1 rounded-full text-xs">
                    {blog.images.length} images
                  </div>
                </div>
              </motion.div>
            </div>
          ))}
        </motion.div>

        {/* Navigation Arrows */}
        <button
          className="absolute top-1/2 -left-2 sm:-left-4 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
          onClick={prevSlide}
        >
          <ChevronLeft size={20} />
        </button>
        <button
          className="absolute top-1/2 -right-2 sm:-right-4 transform -translate-y-1/2 bg-white/90 hover:bg-white text-gray-800 p-2 rounded-full shadow-lg z-10 transition-all duration-200 hover:scale-110"
          onClick={nextSlide}
        >
          <ChevronRight size={20} />
        </button>

        {/* Dots Indicator */}
        <div className="flex justify-center mt-6 space-x-2">
          {Array.from({ length: maxIndex + 1 }).map((_, index) => (
            <button
              key={index}
              onClick={() => setSliderIndex(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                index === sliderIndex 
                  ? "bg-[rgb(74,106,39)] w-6" 
                  : "bg-gray-300"
              }`}
            />
          ))}
        </div>
      </div>

      {/* Story Modal */}
      <AnimatePresence>
        {selectedIndex !== null && (
          <motion.div
            className="fixed inset-0 bg-black/95 flex items-center justify-center z-50"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Close Button */}
            <button
              className="absolute top-6 right-6 text-white/80 hover:text-white z-50 transition-colors duration-200"
              onClick={closeModal}
            >
              <X size={28} />
            </button>

            {/* Story Container */}
            <div className="relative w-full max-w-4xl mx-4">
              {/* Progress Bars */}
              <div className="absolute top-4 left-4 right-4 flex gap-1 z-40">
                {blogs[selectedIndex].images.map((_, i) => (
                  <div
                    key={i}
                    className="flex-1 h-1 bg-gray-600 rounded-full overflow-hidden"
                    onClick={() => {
                      setIsAutoPlaying(false);
                      setStoryIndex(i);
                      setTimeout(() => setIsAutoPlaying(true), 1000);
                    }}
                  >
                    <motion.div
                      className="h-full bg-white"
                      initial={{ width: "0%" }}
                      animate={{ 
                        width: i < storyIndex ? "100%" : 
                               i === storyIndex ? `${progress}%` : "0%" 
                      }}
                      transition={{ duration: 0.1 }}
                    />
                  </div>
                ))}
              </div>

              {/* Story Image */}
              <div className="relative h-[70vh] sm:h-[80vh] rounded-2xl overflow-hidden bg-black">
                <motion.img
                  key={`${selectedIndex}-${storyIndex}`}
                  src={blogs[selectedIndex].images[storyIndex]}
                  alt={`Slide ${storyIndex + 1}`}
                  className="w-full h-full object-contain"
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.3 }}
                />

                {/* Navigation Overlays */}
                <div 
                  className="absolute inset-y-0 left-0 w-1/2 cursor-pointer"
                  onClick={handlePreviousStory}
                />
                <div 
                  className="absolute inset-y-0 right-0 w-1/2 cursor-pointer"
                  onClick={handleNextStory}
                />

                {/* Story Info */}
                <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-6">
                  <div className="text-center">
                    <h3 className="text-white text-xl font-semibold mb-2">
                      {blogs[selectedIndex].title}
                    </h3>
                    <p className="text-gray-300 text-sm">
                      {storyIndex + 1} / {blogs[selectedIndex].images.length}
                    </p>
                  </div>
                </div>
              </div>

              {/* Mobile Navigation Arrows */}
              <div className="sm:hidden flex justify-between items-center mt-4 px-4">
                <button
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  onClick={handlePreviousStory}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="bg-white/20 hover:bg-white/30 text-white p-3 rounded-full transition-colors duration-200"
                  onClick={handleNextStory}
                >
                  <ChevronRight size={24} />
                </button>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

      {/* Progress Bar */}
      <div className="mt-12 lg:mt-16">
        <Progress />
      </div>
    </section>
  );
};

export default Blog;