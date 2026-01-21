"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackagesSection from "@/components/sections/PackagesSection";
import PageHero from "@/components/PageHero";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Navbar />
      <main className="w-full">
        <PageHero
          title="Packages built for every stage"
          tagline="Curated Experiences"
          description="Pick a ready-to-go experience or mix and match add-ons to capture the energy of your celebration, launch, or corporate gathering."
        />
        
        <div className="space-y-32 pb-32">
          {/* Main Packages List */}
          <PackagesSection />
          
          {/* Custom Package CTA */}
          <motion.section 
            className="px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
               variants={itemVariants}
               className="rounded-[3rem] border border-gray-100 bg-white p-12 md:p-16 text-center shadow-2xl relative overflow-hidden group hover:border-brand/20 transition-all duration-500"
            >
              {/* Subtle background pattern */}
              <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-20" />
              
              <div className="relative z-10 max-w-3xl mx-auto">
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">Looking for a bespoke bundle?</h2>
                <p className="text-lg text-gray-600 mb-10 leading-relaxed">
                  Share your brief and we will craft a tailored package that delivers the exact mix of hosting, storytelling, and media coverage you need.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-brand text-white px-10 py-4 text-base font-bold shadow-lg hover:shadow-brand/50 hover:scale-105 transition-all duration-300"
                >
                  Tell us about your event
                </Link>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
