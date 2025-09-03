"use client";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";

export default function ContactSection() {
  return (
    <motion.section id="contact" className="p-10 white shadow-xl" variants={itemVariants}>
      <h2 className="text-4xl font-bold mb-8 text-black text-center">Get in Touch</h2>
      <p className="text-lg leading-relaxed text-gray-600 max-w-2xl mx-auto text-center mb-8">
        Interested in booking Bodayemo for your next event or content creation project? Fill out the form below and we’ll get back to you shortly.
      </p>
      <form className="max-w-xl mx-auto space-y-6">
        <div>
          <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
          <input type="text" id="name" className="w-full p-3 rounded-lg placeholder:text-black/40 border border-gray-300 focus:outline-none focus:border-purple-500" placeholder="Full name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
          <input type="email" id="email" className="w-full p-3 rounded-lg border placeholder:text-black/40 border-gray-300 focus:outline-none focus:border-purple-500" placeholder="Email address" />
        </div>
        <div>
          <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
          <textarea id="message" rows="5" className="w-full p-3 rounded-lg placeholder:text-black/40 border border-gray-300 focus:outline-none focus:border-purple-500" placeholder="Tell us about your event..." />
        </div>
        <button type="submit" className="w-full py-3 rounded-2xl bg-black text-white font-bold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300">
          Submit Inquiry
        </button>
      </form>
    </motion.section>
  );
}

