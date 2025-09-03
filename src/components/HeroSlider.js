"use client";
import React, { useEffect, useId, useRef, useState } from "react";
import { motion, AnimatePresence, useReducedMotion } from "framer-motion";
import { ChevronLeft, ChevronRight } from "./icons";

const SLIDE_DURATION_MS = 5000;

export default function HeroSlider() {
  const slides = [
    {
      title: "Bodayemo Entertainment",
      subtitle: "Bringing professional flair and unforgettable experiences to your events and content.",
      ctaText: "Book Now",
      ctaLink: "#contact",
    },
    {
      title: "Master of Ceremony",
      subtitle: "Engaging hosting services to make your event a success.",
      ctaText: "Learn More",
      ctaLink: "#services",
    },
    {
      title: "Premium Video Editing",
      subtitle: "Crafting stunning visuals that tell your story.",
      ctaText: "View Portfolio",
      ctaLink: "#gallery",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrev = () => setCurrentIndex((prev) => (prev - 1 + slides.length) % slides.length);
  const goToNext = () => setCurrentIndex((prev) => (prev + 1) % slides.length);

  return (
    <div className="relative w-full text-center z-10 flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-black/80 leading-tight tracking-wider">
            {slides[currentIndex].title}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-800 max-w-2xl">{slides[currentIndex].subtitle}</p>
          <a href={slides[currentIndex].ctaLink} className="mt-8 px-8 py-3 rounded-full bg-black text-white font-bold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105 inline-block">
            {slides[currentIndex].ctaText}
          </a>
        </motion.div>
      </AnimatePresence>

      <button onClick={goToPrev} aria-label="Previous slide" className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors duration-200">
        <ChevronLeft />
      </button>
      <button onClick={goToNext} aria-label="Next slide" className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors duration-200">
        <ChevronRight />
      </button>

      <div className="absolute -bottom-4 md:bottom-4 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            aria-label={`Go to slide ${index + 1}`}
            aria-current={currentIndex === index}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${currentIndex === index ? "bg-purple-600" : "bg-gray-300"}`}
          />
        ))}
      </div>
    </div>
  );
}
