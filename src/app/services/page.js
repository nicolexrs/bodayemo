"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import PageHero from "@/components/PageHero";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Navbar />
      <main className="w-full">
        <PageHero
          title="Services that spark unforgettable experiences"
          tagline="What We Do"
          description="From concept to applause, we provide the talent, strategy, and production support to elevate every moment."
        />
        
        <div className="space-y-32 pb-32">
          {/* Main Services List */}
          <ServicesSection />
          
          {/* Custom Service CTA */}
          <motion.section 
            className="px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <motion.div 
              variants={itemVariants}
              className="rounded-[3rem] bg-gradient-to-br from-gray-900 to-gray-800 text-white p-12 md:p-20 text-center shadow-2xl relative overflow-hidden"
            >
              {/* Decorative Glows */}
              <div className="absolute top-0 right-0 w-96 h-96 bg-brand/20 blur-[100px] rounded-full" />
              <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/20 blur-[100px] rounded-full" />

              <div className="relative z-10 max-w-3xl mx-auto space-y-8">
                <h2 className="text-3xl md:text-5xl font-bold">Need something clearly custom?</h2>
                <p className="text-gray-300 text-lg md:text-xl leading-relaxed">
                  We tailor every engagement to fit your unique event goals. Tell us about the space, the people, and the feeling you want to create, and we will design the perfect mix.
                </p>
                <div className="pt-4">
                  <Link
                    href="/contact"
                    className="inline-flex items-center justify-center rounded-full bg-white text-gray-900 px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl hover:bg-brand hover:text-white transition-all duration-300 transform hover:-translate-y-1"
                  >
                    Start a Project Conversation
                  </Link>
                </div>
              </div>
            </motion.div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
