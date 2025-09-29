"use client";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";

export default function AboutSection() {
  return (
    <motion.section id="about" className="p-10 flex flex-col justify-center items-center" variants={itemVariants}>
      <h2 className="text-4xl font-bold mb-6 text-brand underline text-center">About Us</h2>
      <p className="text-lg leading-relaxed text-gray-700 max-w-4xl mx-auto text-center">
        Bodayemo Entertainment is a versatile individual and brand providing a professional range of entertainment and content
        creation services. With years of experience, we bring passion and expertise to every event and project, ensuring every
        moment is captured and every audience is engaged.
      </p>
    </motion.section>
  );
}

