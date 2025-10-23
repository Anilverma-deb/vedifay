import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import vedafaiLogo from "../assets/img/vedafai.png";

const Header = ({ scrollToSection }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const navItems = [
    { name: "Home", href: "home" },
    { name: "About", href: "about" },
    { name: "Insight", href: "blog" },
    { name: "Contact", href: "contact" },
    { name: "Upcoming Batch", href: "upcoming" },

  ];

  const handleNavClick = (href) => {
    if (scrollToSection) scrollToSection(href);
    setIsMenuOpen(false); // close mobile menu
  };

  const NavButton = ({ item, index, isMobile = false }) => (
    <motion.button
      key={item.name}
      initial={{ opacity: 0, x: isMobile ? -20 : -20, y: isMobile ? 0 : -20 }}
      animate={{ opacity: 1, x: 0, y: 0 }}
      transition={{ delay: 0.1 * index, duration: 0.4 }}
      whileHover={{ scale: isMobile ? 1.02 : 1.05, y: isMobile ? 0 : -2 }}
      onClick={() => handleNavClick(item.href)}
      className={`flex items-center space-x-2 ${
        isMobile
          ? "w-full px-4 py-3 rounded-lg text-left hover:bg-[#8BC34A]/10"
          : "px-4 py-2 rounded-lg relative group"
      } text-lg font-bold transition-all duration-300`}
      style={{ color: "oklch(0.48 0.1 130.83)" }}
    >
      <span className="relative">
        {item.name}
        {!isMobile && (
          <motion.div
            className="absolute -bottom-1 left-0 right-0 h-0.5 bg-[#8BC34A] rounded-full"
            initial={{ scaleX: 0 }}
            whileHover={{ scaleX: 1 }}
            transition={{ duration: 0.3 }}
          />
        )}
      </span>
    </motion.button>
  );

  const CTAButton = ({ isMobile = false }) => (
    <motion.button
      whileHover={{ scale: 1.05, y: -2 }}
      whileTap={{ scale: 0.95 }}
      onClick={() => handleNavClick("contact")}
      className={`flex items-center space-x-2 ${
        isMobile
          ? "w-full justify-center px-6 py-3 rounded-full mt-4"
          : "px-6 py-2.5 lg:px-8 lg:py-3 rounded-full hidden sm:flex"
      } text-white font-semibold transition-all duration-300 hover:shadow-lg hover:shadow-[#8BC34A]/30`}
      style={{ backgroundColor: "oklch(0.48 0.1 130.83)" }}
    >
      <span className="">Free Consultation</span>
      <ArrowRight className="w-4 h-4" />
    </motion.button>
  );

  return (
    <motion.header
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6, ease: "easeOut" }}
      className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur-lg border-b border-gray-100 shadow-sm"
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16 lg:h-20">
          {/* Logo */}
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => handleNavClick("home")}
            className="flex items-center space-x-3 cursor-pointer select-none"
          >
            <img
              src={vedafaiLogo}
              alt="Vedafai Logo"
              className="h-10 lg:h-12 w-auto"
            />
            <div className="flex flex-col">
              <span
                className="text-xl lg:text-2xl font-bold lg:mx-[30px]"
                style={{ color: "#4A6A27" }}
              >
                Vedifai
              </span>
              <span className="text-xs font-bold text-gray-500 -mt-1 sm:block ">
                Your Personalised Navigator
              </span>
            </div>
          </motion.div>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navItems.map((item, index) => (
              <NavButton key={item.name} item={item} index={index} />
            ))}
          </nav>

          {/* CTA Button & Mobile Menu Toggle */}
          <div className="flex items-center space-x-2 lg:space-x-4">
            <CTAButton />

            {/* Mobile Menu Toggle */}
            <button
              className="lg:hidden p-2 text-[#4A6A27]"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
            className="lg:hidden absolute top-16 left-0 right-0 bg-white shadow-md border-t border-gray-100 px-4 py-6"
          >
            <div className="space-y-2">
              {navItems.map((item, index) => (
                <NavButton
                  key={item.name}
                  item={item}
                  index={index}
                  isMobile={true}
                />
              ))}
              <CTAButton isMobile={true} />
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );

};

export default Header;
