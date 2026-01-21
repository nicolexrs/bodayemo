"use client";
import { motion } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";
import { ChevronDown } from "@/components/icons";
import { containerVariants, fadeInUp } from "@/lib/motion";

export default function HeroSection() {
  return (
    <motion.section
      id="hero"
      className="relative min-h-screen flex flex-col justify-center items-center overflow-hidden bg-black"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={containerVariants}
    >
      <div className="absolute inset-0 z-0 select-none">
         {/* Slider handles its own background/video */}
         <HeroSlider />
      </div>

      {/* Content overlay managed inside HeroSlider for slides, but we can add a global overlay or scroll hint here */}
      
      <motion.div 
        className="absolute bottom-10 z-20 text-white flex flex-col items-center cursor-pointer"
        variants={fadeInUp}
        animate={{ y: [0, 10, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        onClick={() => {
           const nextSection = document.getElementById("services");
           if (nextSection) nextSection.scrollIntoView({ behavior: "smooth" });
        }}
      >
        <span className="text-sm font-medium tracking-widest mb-2 uppercase opacity-80">Scroll Down</span>
        <ChevronDown className="w-8 h-8 opacity-80" />
      </motion.div>
    </motion.section>
  );
}

