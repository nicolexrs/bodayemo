"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import PageHero from "@/components/PageHero";
import { containerVariants, itemVariants } from "@/lib/motion";

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Navbar />
      <main className="w-full">
        <PageHero
          title="Let's build your next unforgettable moment"
          tagline="Start a Project"
          description="Share your brief and we will respond with availability, ideas, and how we can help you impress your audience."
        />
        
        <div className="space-y-32 pb-32">
          {/* Main Contact Form */}
          
          
          {/* Contact Methods Grid */}
          <motion.section 
            className="px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="grid gap-8 md:grid-cols-3 max-w-7xl mx-auto">
              <motion.div variants={itemVariants} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <h3 className="text-xl font-bold mb-4">Quick Chat</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Prefer a direct line? Reach out and we will respond within business hours.
                </p>
                <div className="space-y-2 font-medium text-brand">
                  <a href="tel:+2347019863196" className="block hover:underline hover:text-brand-deep transition-colors">+234 701 986 3196</a>
                  <a href="mailto:hello@bodayemo.com" className="block hover:underline hover:text-brand-deep transition-colors">hello@bodayemo.com</a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <h3 className="text-xl font-bold mb-4">Follow Our Stories</h3>
                <p className="text-gray-600 mb-6 text-sm">
                  Stay updated with event recaps, behind-the-scenes moments, and upcoming shows.
                </p>
                <div className="flex flex-col gap-2 font-medium text-brand">
                   <a href="https://instagram.com/bodayemo" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-brand-deep transition-colors">Instagram</a>
                   <a href="https://youtube.com/@bodayemo" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-brand-deep transition-colors">YouTube</a>
                   <a href="https://www.facebook.com/share/1BodLqwz8w/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="hover:underline hover:text-brand-deep transition-colors">Facebook</a>
                </div>
              </motion.div>

              <motion.div variants={itemVariants} className="group p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 border border-transparent hover:border-gray-100">
                <h3 className="text-xl font-bold mb-4">Booking Checklist</h3>
                <ul className="text-gray-600 text-sm space-y-3">
                   <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"/> Event date & location</li>
                   <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"/> Audience size & vibe</li>
                   <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"/> Deliverables needed</li>
                   <li className="flex items-center gap-2"><span className="w-1.5 h-1.5 rounded-full bg-brand"/> Budget window</li>
                </ul>
              </motion.div>
            </div>
          </motion.section>
        </div>
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
}
