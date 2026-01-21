"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay, EffectFade } from "swiper/modules";
import "swiper/css";
import "swiper/css/effect-fade";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronLeft, ChevronRight } from "./icons";
import { heroSlides, heroVideoSources } from "@/data/hero";

function BackgroundVideo({ isActive }) {
  const videoRef = useRef(null);

  useEffect(() => {
    if (isActive && videoRef.current) {
      videoRef.current.play().catch(() => {});
    } else if (videoRef.current) {
      videoRef.current.pause();
    }
  }, [isActive]);

  return (
    <div className="absolute inset-0 w-full h-full">
      <video
        ref={videoRef}
        className="object-cover w-full h-full"
        loop
        muted
        playsInline
        poster="/hero-stage.png"
      >
        {heroVideoSources.map((src, idx) => (
          <source key={idx} src={src} type="video/mp4" />
        ))}
      </video>
      <div className="absolute inset-0 bg-black/50" />
    </div>
  );
}

export default function HeroSlider() {
  const [activeIndex, setActiveIndex] = useState(0);
  const swiperRef = useRef(null);

  const slideVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: "easeOut" } },
    exit: { opacity: 0, y: -20, transition: { duration: 0.5 } }
  };

  return (
    <div className="relative w-full h-screen">
      <Swiper
        modules={[Navigation, Autoplay, EffectFade]}
        effect="fade"
        speed={1000}
        autoplay={{ delay: 6000, disableOnInteraction: false }}
        loop
        className="w-full h-full"
        onSlideChange={(swiper) => setActiveIndex(swiper.realIndex)}
        onSwiper={(swiper) => (swiperRef.current = swiper)}
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="relative w-full h-full bg-black">
            {/* Background */}
            {slide.isVideo ? (
               <BackgroundVideo isActive={activeIndex === index} />
            ) : (
              <div className="relative w-full h-full">
                <Image
                  src={slide.bg}
                  alt={slide.title}
                  fill
                  priority={index === 0}
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
              </div>
            )}

            {/* Content Overlay */}
            <div className="absolute inset-0 flex items-center justify-center px-6 md:px-20 pt-20">
              <div className="max-w-5xl w-full text-center md:text-left z-20">
                <AnimatePresence mode="wait">
                  {activeIndex === index && (
                    <motion.div
                      key={`content-${index}`}
                      initial="hidden"
                      animate="visible"
                      exit="exit"
                      variants={{
                        visible: { transition: { staggerChildren: 0.2 } }
                      }}
                    >
                      <motion.h1 
                        variants={slideVariants}
                        className="text-4xl sm:text-5xl md:text-7xl lg:text-8xl font-black text-white tracking-tight mb-4 md:mb-6 drop-shadow-2xl leading-[1.1]"
                      >
                        {slide.title}
                      </motion.h1>
                      
                      <motion.p 
                        variants={slideVariants}
                        className="text-base sm:text-lg md:text-2xl text-gray-200 mb-8 md:mb-10 max-w-xl md:max-w-2xl md:leading-relaxed font-light drop-shadow-lg mx-auto md:mx-0"
                      >
                        {slide.subtitle}
                      </motion.p>
                      
                      <motion.div variants={slideVariants}>
                        <Link
                          href={slide.ctaLink}
                          className="inline-flex items-center gap-3 px-6 py-3 md:px-8 md:py-4 bg-white/10 backdrop-blur-md border border-white/30 text-white font-bold rounded-full hover:bg-white hover:text-black transition-all duration-300 group text-sm md:text-base"
                        >
                          {slide.ctaText}
                          <ChevronRight className="w-4 h-4 md:w-5 md:h-5 group-hover:translate-x-1 transition-transform" />
                        </Link>
                      </motion.div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Custom Navigation */}
      <div className="absolute bottom-10 left-0 right-0 z-30 flex flex-col md:flex-row justify-center md:justify-between items-center md:items-end px-6 md:px-20 pointer-events-none gap-6 md:gap-0">
        {/* Pagination Dots */}
        <div className="flex gap-3 pointer-events-auto">
          {heroSlides.map((_, i) => (
            <button
              key={i}
              onClick={() => swiperRef.current?.slideToLoop(i)}
              className={`h-1 transition-all duration-500 rounded-full ${
                activeIndex === i ? "w-12 bg-white" : "w-4 bg-white/40 hover:bg-white/70"
              }`}
              aria-label={`Go to slide ${i + 1}`}
            />
          ))}
        </div>

        {/* Arrow Controls - Hidden on Mobile */}
        <div className="hidden md:flex gap-4 pointer-events-auto">
          <button
            onClick={() => swiperRef.current?.slidePrev()}
            className="p-3 md:p-4 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 group"
            aria-label="Previous Slide"
          >
             <ChevronLeft className="w-6 h-6 group-hover:-translate-x-1 transition-transform" />
          </button>
          <button
            onClick={() => swiperRef.current?.slideNext()}
            className="p-3 md:p-4 rounded-full border border-white/20 bg-black/20 backdrop-blur-sm text-white hover:bg-white hover:text-black transition-all duration-300 group"
            aria-label="Next Slide"
          >
             <ChevronRight className="w-6 h-6 group-hover:translate-x-1 transition-transform" />
          </button>
        </div>
      </div>
    </div>
  );
}
