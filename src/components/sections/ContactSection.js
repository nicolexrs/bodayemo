"use client";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";

export default function ContactSection() {
  return (
    <motion.section id="contact" className="p-10 md:px-20 lg:px-60 " variants={itemVariants}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        {/* Image side */}
        <div className=" hidden md:block  order-2 lg:order-1 rounded-2xl overflow-hidden shadow-md min-h-[280px] md:min-h-[360px] lg:min-h-[480px]">
          <img
            src="/w.jpg"
            alt="Professional contact and planning"
            className="w-full h-full object-cover"
            loading="lazy"
          />
        </div>

        {/* Content + Form */}
        <div className=" flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-black text-center lg:text-left">Get in Touch</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-8 text-center lg:text-left">
            Interested in booking Bodayemo for your next event or content creation project? Fill out the form below and we’ll get back to you shortly.
          </p>

          <form className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="name"
                className="w-full p-3 rounded-lg placeholder:text-black/40 border border-gray-300 focus:outline-none focus:border-brand"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="email"
                className="w-full p-3 rounded-lg border placeholder:text-black/40 border-gray-300 focus:outline-none focus:border-brand"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="message"
                rows={5}
                className="w-full p-3 rounded-lg placeholder:text-black/40 border border-gray-300 focus:outline-none focus:border-brand"
                placeholder="Tell us about your event..."
              />
            </div>
            <button
              type="submit"
              className="w-full py-3 rounded-2xl bg-brand text-brand-contrast font-bold text-lg shadow-lg hover:bg-brand-deep transition-colors duration-300"
            >
              Submit Inquiry
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}

