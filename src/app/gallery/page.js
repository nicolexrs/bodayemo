"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/sections/GallerySection";
import PageHero from "@/components/PageHero";
import { containerVariants, fadeInUp } from "@/lib/motion";

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-white text-white font-sans flex flex-col">
      <Navbar />
      <main className="w-full">
        <PageHero
          title="Moments in Motion"
          tagline="Gallery"
          description="A visual curation of energy, emotion, and production excellence from our stages and sets."
        />
        
        <div className="space-y-32 pb-32">
          {/* Main Gallery Grid */}
          <GallerySection />
          
          {/* Instagram/Social Feed Prompt */}
          <motion.section 
             className="px-6 md:px-12 lg:px-24"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={containerVariants}
          >
            <motion.div 
               variants={fadeInUp}
               className="text-center max-w-2xl mx-auto"
            >
              <h2 className="text-3xl md:text-4xl font-bold mb-6 text-brand">See more on Instagram</h2>
              <p className="text-gray-400 mb-8">
                Follow @bodayemo for daily updates, behind-the-scenes clips, and live event coverage.
              </p>
              <Link
                href="https://instagram.com/bodayemo"
                target="_blank"
                className="inline-flex items-center gap-2 border-b-2 border-brand text-brand font-bold uppercase tracking-widest hover:text-brand/30 hover:border-brand/80 transition-colors duration-300 pb-1"
              >
                Visit Profile
              </Link>
            </motion.div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
