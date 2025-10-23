import React, { useState, useEffect, useCallback, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight, Calendar, User, BookOpen, X } from "lucide-react";
import backgroundImage from "../assets/img/social.jpg"; // your image path
import Progress from "./Progress";
const BlogSlider = () => {
  const cards = [
    {
      id: 1,
      image: "./assets/images/11.jpeg",
      title: "10 Genius Study Hacks Toppers Won’t Tell You",
      content: [
        "Ever wonder why toppers seem so effortless? It’s not magic—it’s smart techniques. Try these hacks:",
        "Feynman Technique – Explain topics simply to find gaps.",
        "Spaced Repetition – Revise in intervals (Day 1, 2, 4, 7).",
        "Pomodoro – 25-min focus + 5-min break.",
        "Active Recall – Test yourself, don’t just re-read.",
        "Interleaving – Mix subjects for stronger memory.",
        "Leitner Flashcards – Review weak topics more often.",
        "Mind Maps – Visual notes boost recall.",
        "80/20 Rule – Focus on high-weightage topics first.",
        "Study Environment – One distraction-free space.",
        "Sleep – 7–8 hrs helps consolidate memory."
      ],
      author: "Sahil",
      date: "May 15, 2025",
      readTime: "6 min read",
      category: "Education",
    },
    {
      id: 2,
      image: "./assets/images/123.webp",
      title: "10 Powerful Study Tips for Class 10 Students",
      content: [
        "Understand Concepts – Don’t just memorize, learn the 'why' behind topics.",
        "Revise Regularly – Follow spaced revision (next day, weekly, monthly).",
        "Stay Healthy – Prioritize sleep, nutrition, and light exercise.",
        "Solve Past Papers – Practice with previous years’ papers and sample tests.",
        "Take Smart Notes – Create formula sheets, summaries, and mind maps.",
        "Choose a Study Spot – Quiet, distraction-free environment is key.",
        "Ask for Help – Clear doubts with teachers, peers, or online resources.",
        "Set Small Goals – Break big chapters into daily, manageable targets.",
        "Exam Strategy – Read the paper, manage time, start with easy questions.",
      ],
      author: "Meena",
      date: "June 2, 2025",
      readTime: "8 min read",
      category: "Productivity",
    },
    {
      id: 3,
      image: "./assets/images/classroom.webp",
      title: "Subject-Wise Study Guide: Physics, Chemistry, Maths & Biology",
      content: [
        "Mathematics – Solve problems step-by-step & analyze mistakes.",
        "Maintain a formula notebook & practice PYQs.",
        "Physics – Focus on concept clarity, not rote learning.",
        "Learn derivations to understand formulas.",
        "Chemistry – Use mnemonics for Inorganic, mechanisms for Organic.",
        "Physical: Practice numericals like Maths.",
        "Biology – Draw & revise diagrams frequently.",
        "Use flowcharts & active recall by teaching aloud.",
        "Golden Rule: NCERT is your Bible. Revise regularly.",
      ],
      author: "Emilly",
      date: "April 28, 2025",
      readTime: "5 min read",
      category: "Technology",
    },
    {
      id: 4,
      image: backgroundImage,
      title: "Why Do We Get Nervous in Exams? The Science of Stress (and How to Beat It)",
      content: [
        "Ever felt your heart racing, palms sweating, and mind going blank? That’s biology.",
        "Before exam – Study smart with a plan.",
        "Practice deep breathing daily & sleep well.",
        "Reframe nerves as excitement.",
        "During exam – Take 3 deep breaths to reset.",
        "Start with easy questions to build confidence.",
        "Sip water to stay calm & focused.",
      ],
      author: "Jameer",
      date: "July 10, 2025",
      readTime: "10 min read",
      category: "Social Impact",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [visibleCards, setVisibleCards] = useState(
    window.innerWidth >= 1280 ? 3 : window.innerWidth >= 1024 ? 2 : 1
  );
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [expandedCards, setExpandedCards] = useState({});
  
  // Lightbox states
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxIndex, setLightboxIndex] = useState(0);
  const [progress, setProgress] = useState(0);
  const progressRef = useRef(null);

  const toggleExpand = (id) => {
    setExpandedCards((prev) => ({
      ...prev,
      [id]: !prev[id],
    }));
  };

  const nextSlide = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % cards.length);
  }, [cards.length]);

  const prevSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + cards.length) % cards.length);
  };

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 1280) setVisibleCards(3);
      else if (window.innerWidth >= 1024) setVisibleCards(2);
      else setVisibleCards(1);
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    if (!isAutoPlaying) return;
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);
    return () => clearInterval(interval);
  }, [isAutoPlaying, nextSlide]);

  const getVisibleCards = () => {
    const total = cards.length;
    const display = [];
    for (let i = 0; i < visibleCards; i++) {
      display.push(cards[(currentIndex + i) % total]);
    }
    return display;
  };

  const visibleCardList = getVisibleCards();

  // Lightbox functions
  const openLightbox = (index) => {
    setLightboxIndex(index);
    setLightboxOpen(true);
    setProgress(0);
  };
  const closeLightbox = () => {
    setLightboxOpen(false);
    setProgress(0);
    clearInterval(progressRef.current);
  };
  const nextLightbox = () => setLightboxIndex((lightboxIndex + 1) % cards.length);
  const prevLightbox = () => setLightboxIndex((lightboxIndex - 1 + cards.length) % cards.length);

  // Instagram-style auto-progress
  useEffect(() => {
    if (!lightboxOpen) return;
    const duration = 5000; // 5s per story
    const intervalTime = 50; // 50ms per update
    const increment = (intervalTime / duration) * 100;

    progressRef.current = setInterval(() => {
      setProgress((prev) => {
        if (prev + increment >= 100) {
          nextLightbox();
          return 0;
        }
        return prev + increment;
      });
    }, intervalTime);

    return () => clearInterval(progressRef.current);
  }, [lightboxOpen, lightboxIndex]);

  return (
    <div className="min-h-screen flex items-center justify-center px-4 md:px-6 py-16 md:py-24 bg-white" id="blog">
      <div className="max-w-7xl w-full mx-auto">
        {/* Heading */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7 }}
          viewport={{ once: true }}
          className="text-center mb-16 md:mb-20"
        >
          <div className="inline-flex items-center rounded-full bg-[#8bc34a]/20 px-4 py-2 text-sm font-medium text-[#4a6a27] mb-6">
            <BookOpen size={14} className="mr-2" /> Latest Insights
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#4a6a27] mb-5 leading-tight">
            Our Insights
          </h1>
          <p className="text-lg text-[#4a6a27] max-w-2xl mx-auto leading-relaxed">
            Explore our curated blogs that bring valuable perspectives on learning, growth, and innovation.
          </p>
        </motion.div>

        {/* Slider */}
        <div
          className="relative group"
          onMouseEnter={() => setIsAutoPlaying(false)}
          onMouseLeave={() => setIsAutoPlaying(true)}
        >
          <div className="overflow-hidden px-2 flex">
            {visibleCardList.map((card, idx) => {
              const isExpanded = expandedCards[card.id] || false;
              const contentArray = Array.isArray(card.content) ? card.content : [card.content];
              const visibleContent = isExpanded ? contentArray : contentArray.slice(0, 4);

              return (
                <motion.div
                  key={card.id + "-" + idx}
                  className="flex-shrink-0 w-full md:w-[calc(100%/2)] lg:w-[calc(100%/3)] px-2"
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.6, delay: idx * 0.1 }}
                  whileHover={{ scale: 1.03, y: -6 }}
                >
                  <div className="bg-white rounded-2xl shadow-md hover:shadow-xl transition-all duration-500 flex flex-col h-full border border-[#8bc34a]/30 overflow-hidden group">
                    <div
                      className="relative h-48 md:h-56 overflow-hidden cursor-pointer"
                      onClick={() => openLightbox(currentIndex + idx)}
                    >
                      <img
                        src={card.image}
                        alt={card.title}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute top-3 left-3">
                        <span className="inline-flex items-center rounded-full bg-[#4a6a27]/90 text-white px-3 py-1 text-xs font-medium">
                          {card.category}
                        </span>
                      </div>
                    </div>

                    <div className="p-6 md:p-8 flex-1 flex flex-col">
                      <div className="flex items-center text-sm text-[#4a6a27] mb-4 flex-wrap">
                        <div className="flex items-center mr-4 mb-2">
                          <Calendar size={14} className="mr-1 text-[#8bc34a]" />
                          <span>{card.date}</span>
                        </div>
                        <div className="flex items-center mr-4 mb-2">
                          <User size={14} className="mr-1 text-[#8bc34a]" />
                          <span>{card.author}</span>
                        </div>
                        <div className="flex items-center mb-2">
                          <BookOpen size={14} className="mr-1 text-[#8bc34a]" />
                          <span>{card.readTime}</span>
                        </div>
                      </div>

                      <h2 className="text-xl md:text-2xl font-bold text-[#4a6a27] mb-3 leading-snug group-hover:text-[#8bc34a] transition-colors">
                        {card.title}
                      </h2>

                      <ul className="text-[#4a6a27] mb-4 leading-relaxed list-disc list-outside pl-5 text-left">
                    {visibleContent.map((point, index) => (
                      <li key={index} className="mb-2">
                        {point}
                      </li>
                    ))}
                  </ul>


                      {contentArray.length > 4 && (
                        <button
                          onClick={() => toggleExpand(card.id)}
                          className="text-sm text-[#8bc34a] font-medium hover:underline self-start mb-4"
                        >
                          {isExpanded ? "View Less" : "View More"}
                        </button>
                      )}
                    </div>
                  </div>
                </motion.div>
              );
            })}
          </div>

          {/* Navigation Buttons */}
          <button
            onClick={prevSlide}
            className="absolute left-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-[#8bc34a]/30 rounded-full p-3 shadow-md hover:scale-110 hover:bg-[#8bc34a]/10 z-10
              opacity-100 md:opacity-0 group-hover:opacity-100"
            aria-label="Previous slide"
          >
            <ChevronLeft size={20} className="text-[#4a6a27]" />
          </button>

          <button
            onClick={nextSlide}
            className="absolute right-2 top-1/2 -translate-y-1/2 bg-white/90 backdrop-blur-md border border-[#8bc34a]/30 rounded-full p-3 shadow-md hover:scale-110 hover:bg-[#8bc34a]/10 z-10
              opacity-100 md:opacity-0 group-hover:opacity-100"
            aria-label="Next slide"
          >
            <ChevronRight size={20} className="text-[#4a6a27]" />
          </button>
        </div>
      </div>

      {/* Instagram-style Lightbox */}
      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            {/* Progress bars */}
            <div className="absolute top-5 left-5 right-5 flex space-x-2">
              {cards.map((_, idx) => (
                <div key={idx} className="flex-1 bg-white/30 h-1 rounded">
                  <motion.div
                    className="bg-white h-1 rounded"
                    animate={{
                      width:
                        idx < lightboxIndex
                          ? "100%"
                          : idx === lightboxIndex
                          ? `${progress}%`
                          : "0%",
                    }}
                    transition={{ ease: "linear", duration: 0.05 }}
                  />
                </div>
              ))}
            </div>

            {/* Image */}
            <motion.img
              key={cards[lightboxIndex].id}
              src={cards[lightboxIndex].image}
              alt={cards[lightboxIndex].title}
              className="max-h-full max-w-full object-contain rounded-xl shadow-2xl"
              initial={{ scale: 0.8, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.8, opacity: 0 }}
              transition={{ duration: 0.3 }}
            />

            {/* Navigation */}
            <button
              className="absolute top-5 right-5 text-white"
              onClick={closeLightbox}
            >
              <X size={28} />
            </button>
            <button
              className="absolute left-5 top-1/2 -translate-y-1/2 text-white"
              onClick={prevLightbox}
            >
              <ChevronLeft size={36} />
            </button>
            <button
              className="absolute right-5 top-1/2 -translate-y-1/2 text-white"
              onClick={nextLightbox}
            >
              <ChevronRight size={36} />
            </button>
          </motion.div>
        )}
      </AnimatePresence>
       {/* ================= Progress Bar at the very bottom ================= */}
       <div className="absolute bottom-0 left-0 w-full">
        <Progress />
      </div>
    </div>
  );
};

export default BlogSlider;
