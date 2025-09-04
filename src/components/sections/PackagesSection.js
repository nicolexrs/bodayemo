"use client";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motion";

const packages = [
  { title: "Classic Package", features: ["Hosting for 2–3 hours", "Engaging audience flow"], price: "₦100,000", icon: "💍" },
  { title: "Premium Package", features: ["Hosting for 3–5 hours", "Wedding games", "Audience interaction"], price: "₦200,000", icon: "⭐" },
  { title: "Luxury Package", features: ["Hosting for 4–6 hours", "Wedding games", "After-party hosting"], price: "₦300,000", icon: "👑" },
  { title: "Content Package", features: ["Hosting for 4–6 hours", "Wedding games", "Professional content creation"], price: "₦400,000", icon: "🎥" },
  { title: "Elite Package", features: ["Hosting for 4–6 hours", "Wedding games", "After-party hosting", "Content creation"], price: "₦500,000", icon: "🏆" },
];

export default function PackagesSection() {
  return (
    <motion.section id="packages" className="py-20 md:px-20 px-10 lg:px-60 bg-gradient-to-b from-white to-gray-50" variants={itemVariants}>
      <h2 className="text-4xl font-bold mb-4 text-brand text-center">Wedding Packages</h2>
      <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
        Choose from our carefully curated wedding packages designed to create unforgettable memories for your big day. Each package
        comes with professional hosting, engaging entertainment, and a touch of elegance.
      </p>
      <motion.ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-10" variants={containerVariants}>
        {packages.map((pkg, index) => (
          <motion.li key={index} className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-brand hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center group" variants={itemVariants}>
            <div className="text-5xl mb-4 group-hover:animate-pulse">{pkg.icon}</div>
            <h3 className="text-xl font-semibold text-gray-800 mb-4">{pkg.title}</h3>
            <ul className="text-gray-600 text-sm space-y-2 mb-6">
              {pkg.features.map((f, i) => (
                <li key={i}>• {f}</li>
              ))}
            </ul>
            <span className="inline-block px-6 py-2 text-2xl text-white font-bold  bg-brand-soft rounded-full">{pkg.price}</span>
          </motion.li>
        ))}
      </motion.ul>
    </motion.section>
  );
}
