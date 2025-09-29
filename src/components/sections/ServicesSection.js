"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motion";
import { services } from "@/data/services";

export default function ServicesSection() {
  return (
    <motion.section id="services" className="py-20 md:px-20 px-10 lg:px-60 bg-gradient-to-b from-gray-50 to-white" variants={itemVariants}>
      <h2 className="text-4xl font-bold mb-4 text-center text-brand underline">Our Services</h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        We specialize in creating unforgettable experiences, engaging content, and impactful storytelling tailored to your audience.
        Explore our wide range of services:
      </p>
      <motion.ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10" variants={containerVariants}>
        {services.map((service) => (
          <motion.li
            key={service.slug}
            className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-brand text-center transform hover:scale-105 transition-all duration-300 relative group"
            variants={itemVariants}
          >
            <div className="text-4xl mb-4 group-hover:animate-bounce">{service.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
            <p className="text-gray-600 text-sm leading-relaxed">{service.desc}</p>
           
            <Link
              href={`/services/${service.slug}`}
              className="inline-flex items-center mt-4 justify-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-contrast shadow transition-all duration-300 hover:bg-brand-deep"
            >
              Book Now
            </Link>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
