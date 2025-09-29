"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motion";
import { packageCategories } from "@/data/packages";

function CardGrid({ items }) {
  return (
    <motion.ul
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 justify-items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      {items.map((item) => (
        <motion.li
          key={item.slug ?? item.title}
          className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-brand hover:shadow-2xl transform hover:scale-105 transition-all duration-300 flex flex-col items-center text-center group w-full"
          variants={itemVariants}
        >
          {item.tag ? (
            <div className="text-xs font-semibold uppercase tracking-widest text-brand-soft mb-2">{item.tag}</div>
          ) : null}
          <h3 className="text-xl font-semibold text-gray-800 mb-4">{item.title}</h3>
          {item.features && item.features.length > 0 ? (
            <ul className="text-gray-600 text-sm space-y-2 mb-6">
              {item.features.map((feature) => (
                <li key={feature}>- {feature}</li>
              ))}
            </ul>
          ) : null}
          <span className="inline-block px-6 py-2 text-2xl text-white font-bold bg-brand-soft rounded-full mb-4">{item.price}</span>
          {item.serviceSlug ? (
            <Link
              href={`/services/${item.serviceSlug}?package=${item.slug}`}
              className="inline-flex items-center justify-center rounded-full bg-brand px-5 py-2 text-sm font-semibold text-brand-contrast shadow transition-all duration-300 hover:bg-brand-deep"
            >
              Book this package
            </Link>
          ) : null}
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState(packageCategories[0]?.key ?? "mc");

  const activeCategory =
    packageCategories.find((category) => category.key === activeTab) ?? packageCategories[0];

  return (
    <motion.section
      id="packages"
      className="py-20 md:px-20 px-10 lg:px-60 bg-gradient-to-b from-white to-gray-50"
      variants={itemVariants}
      initial="hidden"
      animate="visible"
    >
     

      <div className="flex flex-wrap justify-center gap-4 mb-12">
        {packageCategories.map((category) => {
          const isActive = category.key === activeTab;
          return (
            <motion.button
              key={category.key}
              onClick={() => setActiveTab(category.key)}
              className={`px-6 py-3 rounded-full text-sm font-semibold transition-colors duration-300 border ${
                isActive
                  ? "bg-brand-soft text-white border-brand-soft shadow-lg"
                  : "bg-white text-brand-soft border-brand-soft/40 hover:border-brand-soft"
              }`}
              whileTap={{ scale: 0.96 }}
              whileHover={!isActive ? { scale: 1.03 } : undefined}
            >
              {category.label}
            </motion.button>
          );
        })}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={activeCategory.key}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.35 }}
        >
          <h3 className="text-3xl font-semibold text-brand text-center mb-4">{activeCategory.label}</h3>
          <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">{activeCategory.description}</p>
          <CardGrid items={activeCategory.items} />
        </motion.div>
      </AnimatePresence>
    </motion.section>
  );
}


