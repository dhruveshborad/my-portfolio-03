"use client";

import { motion } from "framer-motion";
import { Download, Rocket, MapPin, Clock } from "lucide-react";
import { personalInfo } from "../data/portfolio";
import Image from "next/image";
import { useState, useEffect } from "react";

export function HeroSection() {
  const [displayText, setDisplayText] = useState("");
  const [isTypingComplete, setIsTypingComplete] = useState(false);

  useEffect(() => {
    let i = 0;
    const text = personalInfo.name;
    const timer = setInterval(() => {
      setDisplayText(text.substring(0, i));
      i++;
      if (i > text.length) {
        clearInterval(timer);
        setIsTypingComplete(true);
      }
    }, 150); // typing speed
    
    return () => clearInterval(timer);
  }, []);

  const handleViewWork = () => {
    const element = document.querySelector("#projects");
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  const handleDownloadCV = () => {
    // In a real app, this would download the actual CV
    const link = document.createElement("a");
    link.href = "/assets/Resume.pdf";
    link.download = "Resume.pdf";
    link.click();
  };

  return (
    <section
      id="home"
      className="min-h-screen flex items-center justify-center relative z-10 px-4"
    >
      <div className="text-center">
        {/* Profile Image */}
        <motion.div
          className="relative mb-8"
          initial={{ scale: 0, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.2 }}
        >
          <motion.div
            className="w-40 h-40 mx-auto rounded-full overflow-hidden cosmic-glow"
            animate={{
              y: [0, -10, 0],
            }}
            transition={{
              duration: 6,
              repeat: Infinity,
              ease: "easeInOut",
            }}
          >
            <Image
              src={personalInfo.profileImage}
              width={160}
              height={160}
              alt={`${personalInfo.name} - Frontend Developer`}
              className="w-full h-full object-top object-cover"
            />
          </motion.div>
        </motion.div>

        {/* Name */}
        <motion.h1
          className="text-6xl md:text-8xl font-orbitron font-bold text-white mb-4 min-h-[1.2em] flex items-center justify-center"
          initial={{ y: 50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8 }}
        >
          <span 
            className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent"
            suppressHydrationWarning
          >
            {displayText}
          </span>
          <motion.span
            animate={{ opacity: [1, 0] }}
            transition={{ repeat: Infinity, duration: 0.8, ease: "linear" }}
            className={`inline-block w-1 h-[0.8em] bg-accent ml-2 ${isTypingComplete ? 'opacity-50' : ''}`}
          />
        </motion.h1>

        {/* Title */}
        <motion.p
          className="text-xl md:text-2xl text-muted-foreground mb-4 font-light"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
        >
          {personalInfo.title}
        </motion.p>

        {/* Location and Timezone */}
        <motion.div
          className="flex items-center justify-center gap-6 text-white/70 mb-6 font-medium text-sm md:text-base"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.7 }}
        >
          <div className="flex items-center gap-2">
            <MapPin size={18} className="text-accent" />
            <span>{personalInfo.location}</span>
          </div>
          <div className="flex items-center gap-2">
            <Clock size={18} className="text-accent" />
            <span>IST (UTC+5:30)</span>
          </div>
        </motion.div>

        {/* Description */}
        <motion.p
          className="text-lg text-white/80 max-w-2xl mx-auto mb-8 leading-relaxed"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.8 }}
        >
          {personalInfo.description}
        </motion.p>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-4 justify-center items-center"
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
        >
          <motion.button
            onClick={handleViewWork}
            className="glass-morphism cosmic-glow px-8 py-4 rounded-xl text-white font-semibold transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-view-work"
          >
            <Rocket size={20} />
            <span>View My Work</span>
          </motion.button>
          <motion.button
            onClick={handleDownloadCV}
            className="border border-white/20 px-8 py-4 rounded-xl text-white font-semibold hover:bg-white/10 transition-all duration-300 flex items-center space-x-2"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            data-testid="button-download-cv"
          >
            <Download size={20} />
            <span>Download CV</span>
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
