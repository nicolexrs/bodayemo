"use client";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motion";

const services = [
  { title: "Master of Ceremony (MC)", desc: "Hosting events with energy, charisma, and professionalism that keeps audiences engaged from start to finish.", icon: "🎤" },
  { title: "Video Editing", desc: "Transforming raw footage into cinematic experiences using creative cuts, effects, and storytelling flow.", icon: "🎬" },
  { title: "Script Writing", desc: "Crafting compelling scripts for events, commercials, skits, and corporate presentations.", icon: "✍️" },
  { title: "Public Speaking", desc: "Delivering powerful speeches and training others to communicate with confidence and impact.", icon: "🎙️" },
  { title: "Content Creation", desc: "Producing engaging social media, brand, and digital content that resonates with your audience.", icon: "📱" },
  { title: "Event Consultancy", desc: "Providing expert guidance to plan, structure, and execute memorable and seamless events.", icon: "🎉" },
];

export default function ServicesSection() {
  return (
    <motion.section id="services" className="py-20 px-10 bg-gradient-to-b from-gray-50 to-white" variants={itemVariants}>
      <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">Our Services</h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        We specialize in creating unforgettable experiences, engaging content, and impactful storytelling tailored to your audience.
        Explore our wide range of services:
      </p>
      <motion.ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10" variants={containerVariants}>
        {services.map((service, index) => (
          <motion.li key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-purple-500 text-center transform hover:scale-105 transition-all duration-300 relative group" variants={itemVariants}>
            <div className="text-4xl mb-4 group-hover:animate-bounce">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}

