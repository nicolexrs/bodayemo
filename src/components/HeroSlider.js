"use client";
import React, { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Keyboard, Autoplay } from "swiper/modules";
// import "swiper/css"; // ensure this is imported globally once
import { ChevronLeft, ChevronRight } from "./icons";
import { heroSlides, heroVideoSources } from "@/data/hero";

const DEFAULT_VIDEO_SOURCES = heroVideoSources;

function BackgroundVideoPlaylist({ sources = DEFAULT_VIDEO_SOURCES, playing = true }) {
  const videoRef = useRef(null);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const v = videoRef.current;
    if (!v || sources.length === 0) return;
    v.muted = true;
    v.playsInline = true;
    v.src = sources[index % sources.length];
    v.load();
    if (playing) {
      const id = setTimeout(() => {
        v.play().catch(() => {});
      }, 50);
      return () => clearTimeout(id);
    }
    v.pause();
  }, [index, playing, sources]);

  return (
    <video
      ref={videoRef}
      className="absolute inset-0 w-full h-full object-contain md:object-cover bg-black md:bg-transparent"
      onEnded={() => setIndex((i) => (i + 1) % Math.max(1, sources.length))}
      preload="auto"
      muted
      playsInline
      poster="/images.jpeg"
      aria-hidden
    />
  );
}

export default function HeroSlider() {
  const prevRef = useRef(null);
  const nextRef = useRef(null);
  const swiperRef = useRef(null);
  const [active, setActive] = useState(0);

  return (
    <div className="relative w-full text-center flex flex-col items-center pb-10">
      <Swiper
        modules={[Navigation, Keyboard, Autoplay]}
        slidesPerView={1}
        loop
        grabCursor
        speed={500}
        autoplay={{ delay: 5000, disableOnInteraction: false, pauseOnMouseEnter: true }}
        keyboard={{ enabled: true }}
        onBeforeInit={(swiper) => {
          swiper.params.navigation.prevEl = prevRef.current;
          swiper.params.navigation.nextEl = nextRef.current;
        }}
        onInit={(swiper) => {
          swiperRef.current = swiper;
          swiper.navigation.init();
          swiper.navigation.update();
          setActive(swiper.realIndex);
        }}
        onSlideChange={(swiper) => setActive(swiper.realIndex)}
        className="w-full"
      >
        {heroSlides.map((slide, index) => (
          <SwiperSlide key={index} className="!flex !justify-center">
            <div className="relative  w-full min-h-[80vh]  flex items-center justify-center px-6">
              {index === 0 ? (
                <BackgroundVideoPlaylist playing={active === 0} />
              ) : (
                <Image
                  src={slide.bg}
                  alt=""
                  fill
                  sizes="100vw"
                  quality={70}
                  className="object-cover"
                />
              )}
              <div className="absolute inset-0 bg-black/40" />
              <div className="relative text-center flex flex-col items-center z-10">
                <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-tight tracking-wider drop-shadow-md">{slide.title}</h1>
                <p className="mt-4 text-xl md:text-2xl text-gray-100 max-w-2xl drop-shadow">{slide.subtitle}</p>
                <a
                  href={slide.ctaLink}
                  className="mt-8 px-8 py-3 rounded-full bg-brand text-brand-contrast font-bold text-lg shadow-lg hover:bg-brand-deep transition-colors duration-300 transform hover:scale-105 inline-block"
                >
                  {slide.ctaText}
                </a>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>

      {/* Prev / Next buttons */}
      <button
        ref={prevRef}
        aria-label="Previous slide"
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-black transition-colors duration-200"
      >
        <ChevronLeft />
      </button>
      <button
        ref={nextRef}
        aria-label="Next slide"
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 text-gray-400 hover:text-black transition-colors duration-200"
      >
        <ChevronRight />
      </button>

      {/* Pagination dots */}
      <div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-20 flex space-x-2">
        {heroSlides.map((_, index) => (
          <button
            key={index}
            onClick={() => swiperRef.current?.slideToLoop(index)}
            className={`h-2.5 w-2.5 rounded-full transition-colors duration-300 ${
              active === index ? "bg-brand" : "bg-gray-300 hover:bg-gray-400"
            }`}
          >
            <span className="sr-only">Go to slide {index + 1}</span>
          </button>
        ))}
      </div>
    </div>
  );
}
