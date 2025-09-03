"use client";
import { motion } from "framer-motion";
import HeroSlider from "@/components/HeroSlider";
import { itemVariants } from "@/lib/motion";

export default function HeroSection() {
  return (
    <motion.section id="hero" className="relative min-h-[70vh] text-center pt-28 pb-20 md:pt-36 md:pb-24 flex flex-col justify-center items-center px-6" variants={itemVariants}>
      <div className="absolute inset-0 z-0" />
      <HeroSlider />
    </motion.section>
  );
}

