"use client";

import { useState } from "react";
import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { containerVariants, itemVariants, scaleOnHover } from "@/lib/motion";
import { packageCategories } from "@/data/packages";

function CardGrid({ items }) {
  return (
    <motion.ul
      className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 justify-items-center"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
      exit="hidden"
    >
      {items.map((item) => (
        <motion.li
          key={item.slug ?? item.title}
          className="group relative bg-white p-10 rounded-[2.5rem] w-full h-full flex flex-col items-center text-center transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl border border-gray-100 hover:border-brand-soft/50 overflow-hidden"
          variants={itemVariants}
          whileHover="hover"
          whileTap="tap"
          custom={scaleOnHover}
        >
          {/* Subtle details */}
          <div className="absolute top-0 right-0 w-40 h-40 bg-brand-soft/20 rounded-full blur-[60px] group-hover:bg-brand-soft/40 transition-colors duration-500" />
          <div className="absolute bottom-0 left-0 w-32 h-32 bg-blue-50/50 rounded-full blur-[50px] group-hover:bg-blue-100/40 transition-colors duration-500" />

          <div className="relative z-10 w-full flex flex-col items-center h-full">
            {item.tag && (
              <span className="mb-8 inline-block px-5 py-2 text-xs font-bold uppercase tracking-widest text-brand-deep bg-brand-soft/50 border border-brand/5 rounded-full shadow-sm">
                {item.tag}
              </span>
            )}
            
            <h3 className="text-2xl font-bold text-gray-900 mb-6 group-hover:text-brand-deep transition-colors duration-300">
              {item.title}
            </h3>
            
            <div className="mb-8 w-full border-t border-dashed border-gray-200 group-hover:border-brand-soft/50 transition-colors" />

            {item.features && item.features.length > 0 && (
              <ul className="text-gray-600 font-medium text-sm space-y-5 mb-12 flex-grow w-full text-left px-4">
                {item.features.map((feature) => (
                  <li key={feature} className="flex items-start gap-3">
                    <span className="text-brand shrink-0 mt-0.5 text-lg drop-shadow-sm">✓</span>
                    <span className="leading-relaxed">{feature}</span>
                  </li>
                ))}
              </ul>
            )}
            
            <div className="mt-auto w-full pt-8 border-t border-gray-50">
              <div className="text-5xl font-black text-gray-900 mb-8 tracking-tight group-hover:scale-110 transition-transform duration-300 origin-center drop-shadow-sm">
                {item.price}
              </div>
              
              {item.serviceSlug && (
                <Link
                  href={`/services/${item.serviceSlug}?package=${item.slug}`}
                  className="inline-flex items-center justify-center w-full rounded-2xl bg-gray-900 text-white px-8 py-5 text-sm font-bold shadow-lg shadow-gray-200 transition-all duration-300 hover:bg-brand hover:shadow-brand/30 hover:-translate-y-1 hover:scale-[1.02]"
                >
                  Choose Plan
                </Link>
              )}
            </div>
          </div>
        </motion.li>
      ))}
    </motion.ul>
  );
}

export default function PackagesSection() {
  const [activeTab, setActiveTab] = useState(packageCategories[0]?.key ?? "mc");

  const activeCategory =
    packageCategories.find((category) => category.key === activeTab) ??
    packageCategories[0];

  return (
    <motion.section
      id="packages"
      className="py-32 px-6 md:px-12 lg:px-24 bg-gray-50 relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Ambience */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.5, 0.3] }}
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-20%] right-[-10%] w-[700px] h-[700px] bg-brand-soft/60 rounded-full blur-[120px]"
        />
        <motion.div
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.4, 0.2] }}
          transition={{
            duration: 15,
            repeat: Infinity,
            ease: "easeInOut",
            delay: 2,
          }}
          className="absolute bottom-[-10%] left-[-10%] w-[600px] h-[600px] bg-blue-100/50 rounded-full blur-[100px]"
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16 space-y-4">
          <motion.div variants={itemVariants} className="inline-block">
            <span className="px-5 py-2 rounded-full border border-brand/10 bg-white/60 text-brand-deep text-sm font-bold tracking-widest uppercase backdrop-blur-md shadow-sm">
              Pricing & Plans
            </span>
          </motion.div>

          <motion.h2
            variants={itemVariants}
            className="text-4xl md:text-6xl font-black mb-6 text-gray-900 drop-shadow-sm"
          >
            Packages
          </motion.h2>

       
        </div>

        {/* Tabs */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          {packageCategories.map((category) => {
            const isActive = category.key === activeTab;
            return (
              <motion.button
                key={category.key}
                onClick={() => setActiveTab(category.key)}
                className={`relative px-8 py-3 rounded-full text-sm font-bold tracking-wide transition-all duration-300 z-10 overflow-hidden ${
                  isActive
                    ? "text-white shadow-[0_10px_25px_-5px_rgba(var(--brand),0.4)]"
                    : "text-gray-500 hover:text-brand-deep hover:bg-white shadow-sm"
                }`}
                whileTap={{ scale: 0.95 }}
              >
                {isActive && (
                  <motion.div
                    layoutId="activeTab"
                    className="absolute inset-0 bg-brand rounded-full -z-10"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.6 }}
                  />
                )}
                {category.label}
              </motion.button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={activeCategory.key}
            initial={{ opacity: 0, y: 20, filter: "blur(10px)" }}
            animate={{ opacity: 1, y: 0, filter: "blur(0px)" }}
            exit={{ opacity: 0, y: -20, filter: "blur(10px)" }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-center mb-16">
              <h3 className="text-3xl font-bold text-gray-900 mb-4">
                {activeCategory.label}
              </h3>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto font-light leading-relaxed">
                {activeCategory.description}
              </p>
            </div>
            <CardGrid items={activeCategory.items} />
          </motion.div>
        </AnimatePresence>
      </div>
    </motion.section>
  );
}
