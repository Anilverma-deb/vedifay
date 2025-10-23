import React, { useRef, useState, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { User, Calendar, Clock, ChevronLeft, ChevronRight } from "lucide-react";
import Progress from "./Progress";

const cardsData = [
  {
    id: 5,
    title: "SAT/ACT",
    subtitle: "Ivy League Admissions",
    description:
      "Top scores & admissions guidance with 1-to-1 coaching, premium resources, and practice tests.",
    features: [
      "Personalized focused batches",
      "Expert test strategy & college guidance",
      "Premium resources & mentorship",
      "Full-length practice tests",
      "Time management & exam strategies",
    ],
    batchStart: "15 Oct 2025",
    students: "150+ Trainers",
    successRate: "89%",
    duration: "6 Months",
  },
  {
    id: 2,
    title: "UPSC/CSAT",
    subtitle: "Civil Services Exam",
    description:
      "Premium UPSC & CSAT classes with expert mentors, current affairs, mock tests, and exclusive study material.",
    features: [
      "Full UPSC & CSAT Coverage",
      "Daily Current Affairs",
      "Mock Tests & PYQs",
      "Mentorship & Doubt Solving",
      "Answer Writing Practice",
    ],
    batchStart: "15 Oct 2025",
    students: "250+ Trainers",
    successRate: "95%",
    duration: "6 Months",
  },
  {
    id: 3,
    title: "JEE/NEET",
    subtitle: "Engineering & Medical",
    description:
      "Crack JEE & NEET with concept clarity, practice questions, mock tests, and personalized mentorship.",
    features: [
      "Concept Clarity (PCM & Bio)",
      "Daily Practice & Quick Notes",
      "Mock & Chapter Tests",
      "PYQs with Solutions",
      "Mentorship & Strategy",
    ],
    batchStart: "15 Oct 2025",
    students: "400+ Trainers",
    successRate: "98%",
    duration: "6 Months",
  },
  {
    id: 4,
    title: "GATE/CAT",
    subtitle: "Post Graduate Exams",
    description:
      "Focused classes for GATE & CAT with practice, tests, mentorship, and proven strategies.",
    features: [
      "Complete Syllabus Coverage",
      "Concept Clarity Sessions",
      "Daily Practice & Notes",
      "Mock Tests & PYQs",
      "1-to-1 Mentorship",
    ],
    batchStart: "15 Oct 2025",
    students: "150+ Trainers",
    successRate: "89%",
    duration: "6 Months",
  },
];

const UpcomingBatches = () => {
  const ref = useRef(null);
  const isInView = useInView(ref, { margin: "-100px 0px", once: false });
  const [currentSlide, setCurrentSlide] = useState(0);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  // Detect screen size
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      setIsMobile(width < 768);
      setIsTablet(width >= 768 && width < 1024);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Calculate slides to show based on screen size
  const getSlidesToShow = () => {
    if (isMobile) return 1;
    if (isTablet) return 2;
    return 3;
  };

  // Slide navigation
  const nextSlide = () => {
    const slidesToShow = getSlidesToShow();
    setCurrentSlide((prev) => 
      prev >= cardsData.length - slidesToShow ? 0 : prev + 1
    );
  };

  const prevSlide = () => {
    const slidesToShow = getSlidesToShow();
    setCurrentSlide((prev) => 
      prev === 0 ? cardsData.length - slidesToShow : prev - 1
    );
  };

  // Auto-slide on mobile
  useEffect(() => {
    if (!isMobile) return;
    const interval = setInterval(nextSlide, 5000);
    return () => clearInterval(interval);
  }, [isMobile]);

  // Calculate transform percentage based on screen size
  const getTransformPercentage = () => {
    const slidesToShow = getSlidesToShow();
    return currentSlide * (100 / slidesToShow);
  };

  // Card width based on screen size
  const getCardWidth = () => {
    if (isMobile) return "w-full";
    if (isTablet) return "w-1/2";
    return "w-1/3";
  };

  return (
    <div className="relative min-h-screen bg-gray-50 py-8 sm:py-12 px-3 sm:px-4 lg:px-8" ref={ref} id="upcoming">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={isInView ? { opacity: 1, y: 0 } : {}}
        transition={{ duration: 0.6 }}
        className="max-w-7xl mx-auto text-center mb-8 sm:mb-12 px-2"
      >
        <h1 className="text-2xl xs:text-3xl sm:text-4xl lg:text-5xl font-bold mb-3 sm:mb-4 text-[rgb(74,106,39)]">
          Upcoming Batches
        </h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="max-w-2xl mx-auto text-sm xs:text-base sm:text-lg text-gray-600 px-2"
        >
          Join our tailored courses to excel academically with expert mentorship, interactive learning, and complete study materials.
        </motion.p>
      </motion.div>

      {/* Slider for Tablet & Desktop */}
      <div className="hidden sm:block max-w-7xl mx-auto relative">
        <div className="overflow-hidden relative">
          <div
            className="flex transition-transform duration-500 ease-in-out"
            style={{ transform: `translateX(-${getTransformPercentage()}%)` }}
          >
            {cardsData.map((card, index) => (
              <div key={index} className={`${getCardWidth()} flex-shrink-0 px-2 sm:px-3 lg:px-4`}>
                <motion.div
                  initial={{ opacity: 0, y: 60 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.6, delay: index * 0.2 }}
                  className="p-2 sm:p-3 h-full"
                >
                  <div className="relative bg-white/80 backdrop-blur-md shadow-lg sm:shadow-xl rounded-2xl sm:rounded-3xl cursor-pointer overflow-hidden border border-gray-200 h-full flex flex-col">
                    {/* Icon + Title */}
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 sm:space-x-4 p-4 sm:p-6">
                        <div className="w-12 h-12 sm:w-14 sm:h-14 lg:w-16 lg:h-16 flex items-center justify-center bg-[rgb(74,106,39)] text-white text-2xl sm:text-3xl shadow-lg rounded-full flex-shrink-0">
                          {card.id === 2
                            ? "⚡"
                            : card.id === 3
                            ? "📘"
                            : card.id === 4
                            ? "🎯"
                            : "🌎"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg sm:text-xl lg:text-2xl font-bold text-gray-800 truncate">{card.title}</h3>
                          <p className="text-gray-500 text-sm sm:text-base truncate">{card.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 px-4 sm:px-6 mb-3 sm:mb-4 text-xs sm:text-sm lg:text-base leading-relaxed">
                        {card.description}
                      </p>
                      <ul className="px-4 sm:px-6 mb-4 sm:mb-6 space-y-1 sm:space-y-2">
                        {card.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-700 text-xs sm:text-sm lg:text-base">
                            <span className="w-4 h-4 sm:w-5 sm:h-5 mr-2 sm:mr-3 flex-shrink-0 text-[rgb(74,106,39)] mt-0.5">✔</span>
                            <span className="leading-tight sm:leading-normal">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    
                    {/* Footer with Info and Button */}
                    <div className="px-4 sm:px-6 pb-4 sm:pb-6 pt-3 sm:pt-4 border-t border-gray-200 mt-auto">
                      <div className="flex flex-wrap justify-between items-center gap-2 sm:gap-3 mb-3 sm:mb-4">
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Calendar className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(74,106,39)]" />
                          <span className="text-gray-700 text-xs sm:text-sm font-semibold whitespace-nowrap">
                            {card.batchStart}
                          </span>
                        </div>
                        <div className="flex items-center gap-1 sm:gap-2">
                          <Clock className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(74,106,39)]" />
                          <span className="text-gray-700 text-xs sm:text-sm font-semibold whitespace-nowrap">
                            {card.duration}
                          </span>
                        </div>
                        {card.students && (
                          <div className="flex items-center gap-1 sm:gap-2">
                            <User className="w-4 h-4 sm:w-5 sm:h-5 text-[rgb(74,106,39)]" />
                            <span className="text-gray-700 text-xs sm:text-sm font-semibold whitespace-nowrap">
                              {card.students}
                            </span>
                          </div>
                        )}
                      </div>
                      <a href="https://whatsapp.com/channel/0029VaIH7avFsn0bU4P1Ep1E" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full px-4 py-2 sm:px-5 sm:py-2 rounded-full font-semibold bg-[rgb(74,106,39)] text-white hover:bg-white hover:text-[rgb(74,106,39)] border border-[rgb(74,106,39)] transition-all duration-300 text-sm sm:text-base">
                          Enroll Now
                        </button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Navigation Arrows */}
        <button 
          onClick={prevSlide} 
          className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md rounded-full p-2 shadow-lg z-10 -ml-1 sm:-ml-2 hover:bg-[rgb(74,106,39)] hover:text-white transition-all duration-300"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(74,106,39)] hover:text-white" />
        </button>
        <button 
          onClick={nextSlide} 
          className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-white/80 backdrop-blur-md rounded-full p-2 shadow-lg z-10 -mr-1 sm:-mr-2 hover:bg-[rgb(74,106,39)] hover:text-white transition-all duration-300"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-[rgb(74,106,39)] hover:text-white" />
        </button>
      </div>

      {/* Mobile Slider */}
      <div className="sm:hidden max-w-md mx-auto relative px-2">
        <div className="overflow-hidden relative">
          <div 
            className="flex transition-transform duration-500 ease-in-out" 
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {cardsData.map((card, index) => (
              <div key={index} className="w-full flex-shrink-0 px-2">
                <motion.div 
                  initial={{ opacity: 0, y: 60 }} 
                  animate={isInView ? { opacity: 1, y: 0 } : {}} 
                  transition={{ duration: 0.6, delay: index * 0.2 }} 
                  className="p-2 h-full"
                >
                  <div className="relative bg-white/80 backdrop-blur-md shadow-xl rounded-2xl cursor-pointer overflow-hidden border border-gray-200 h-full flex flex-col">
                    <div className="flex-1">
                      <div className="flex items-center space-x-3 p-4">
                        <div className="w-12 h-12 flex items-center justify-center bg-[rgb(74,106,39)] text-white text-2xl shadow-lg rounded-full flex-shrink-0">
                          {card.id === 2 ? "⚡" : card.id === 3 ? "📘" : card.id === 4 ? "🎯" : "🌎"}
                        </div>
                        <div className="flex-1 min-w-0">
                          <h3 className="text-lg font-bold text-gray-800 truncate">{card.title}</h3>
                          <p className="text-gray-500 text-sm truncate">{card.subtitle}</p>
                        </div>
                      </div>
                      <p className="text-gray-700 px-4 mb-3 text-sm leading-relaxed">{card.description}</p>
                      <ul className="px-4 mb-4 space-y-1">
                        {card.features.map((feature, i) => (
                          <li key={i} className="flex items-start text-gray-700 text-sm">
                            <span className="w-4 h-4 mr-2 flex-shrink-0 text-[rgb(74,106,39)] mt-0.5">✔</span>
                            <span className="leading-tight">{feature}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                    <div className="px-4 pb-4 pt-3 border-t border-gray-200 mt-auto">
                      <div className="flex flex-wrap justify-between items-center gap-2 mb-3">
                        <div className="flex items-center gap-1">
                          <Calendar className="w-4 h-4 text-[rgb(74,106,39)]" />
                          <span className="text-gray-700 text-xs font-semibold whitespace-nowrap">{card.batchStart}</span>
                        </div>
                        <div className="flex items-center gap-1">
                          <Clock className="w-4 h-4 text-[rgb(74,106,39)]" />
                          <span className="text-gray-700 text-xs font-semibold whitespace-nowrap">{card.duration}</span>
                        </div>
                        {card.students && (
                          <div className="flex items-center gap-1">
                            <User className="w-4 h-4 text-[rgb(74,106,39)]" />
                            <span className="text-gray-700 text-xs font-semibold whitespace-nowrap">{card.students}</span>
                          </div>
                        )}
                      </div>
                      <a href="https://whatsapp.com/channel/0029VaIH7avFsn0bU4P1Ep1E" target="_blank" rel="noopener noreferrer" className="block">
                        <button className="w-full px-4 py-2 rounded-full font-semibold bg-[rgb(74,106,39)] text-white hover:bg-white hover:text-[rgb(74,106,39)] border border-[rgb(74,106,39)] transition-all duration-300 text-sm">
                          Enroll Now
                        </button>
                      </a>
                    </div>
                  </div>
                </motion.div>
              </div>
            ))}
          </div>
        </div>
        
        {/* Dots Indicator */}
        <div className="flex justify-center mt-4 space-x-2">
          {cardsData.map((_, index) => (
            <button 
              key={index} 
              onClick={() => setCurrentSlide(index)} 
              className={`w-2 h-2 sm:w-3 sm:h-3 rounded-full transition-all duration-300 ${
                index === currentSlide ? "bg-[rgb(74,106,39)]" : "bg-gray-300"
              }`} 
              aria-label={`Go to slide ${index + 1}`} 
            />
          ))}
        </div>
      </div>

      {/* Progress Bar at the very bottom */}
      <div className="absolute bottom-0 left-0 w-full">
        <Progress />
      </div>
    </div>
  );
};

export default UpcomingBatches;