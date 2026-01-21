"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { containerVariants, itemVariants } from "@/lib/motion";

const initialFormState = {
  name: "",
  email: "",
  phone: "",
  message: "",
};

export default function ContactSection() {
  const [formValues, setFormValues] = useState(initialFormState);
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [status, setStatus] = useState(null);

  const updateField = (field) => (event) => {
    setFormValues((prev) => ({ ...prev, [field]: event.target.value }));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();

    if (!formValues.name || !formValues.email || !formValues.message) {
      setStatus({
        type: "error",
        message: "Please provide your name, email, and a message so we can respond.",
      });
      return;
    }

    setIsSubmitting(true);
    setStatus(null);

    try {
      const response = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formValues),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || "Something went wrong while sending your message.");
      }

      setStatus({
        type: "success",
        message: "Thank you! Your message has been sent. We'll get back to you shortly.",
      });
      setFormValues(initialFormState);
    } catch (error) {
      console.error("Contact form error", error);
      setStatus({
        type: "error",
        message: error.message || "Something went wrong. Please try again or reach out directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section
      id="contact"
      className="py-32 px-6 md:px-12 lg:px-24 bg-black relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-[-10%] right-[-10%] w-[500px] h-[500px] bg-brand/20 rounded-full blur-[120px]" />
        <div className="absolute bottom-[-10%] left-[-10%] w-[500px] h-[500px] bg-brand-deep/20 rounded-full blur-[100px]" />
      </div>

      <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 xl:gap-24 items-center relative z-10">
        <motion.div variants={itemVariants} className="hidden lg:block sticky top-32 rounded-[3rem] overflow-hidden shadow-2xl h-[700px] w-full relative border border-white/10">
          <Image
            src="/i.PNG"
            alt="Professional contact"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover hover:scale-105 transition-transform duration-1000 ease-in-out"
            priority={false}
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent flex flex-col justify-end p-12">
             <div className="transform translate-y-0 transition-transform duration-500">
                <span className="inline-block px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-brand-soft text-xs font-bold tracking-widest uppercase mb-4">
                  Connect With Us
                </span>
                <h3 className="text-white text-4xl font-black mb-3 leading-tight">Let&apos;s Create <br/>Something Iconic</h3>
                <p className="text-white/70 text-lg font-light max-w-sm">Your vision, our expertise. Start your journey with Bodayemo today.</p>
             </div>
          </div>
        </motion.div>

        <motion.div variants={itemVariants} className="flex flex-col justify-center bg-white/5 backdrop-blur-sm p-8 md:p-12 rounded-[3rem] border border-white/10 shadow-2xl">
          <div className="mb-12">
             <h2 className="text-5xl md:text-6xl font-black mb-6 text-white tracking-tight">Get in Touch</h2>
             <p className="text-xl text-white/60 leading-relaxed font-light">
               Interested in booking Bodayemo for your next event or content creation project? 
               We&apos;re ready to listen.
             </p>
          </div>

          <form className="space-y-8" onSubmit={handleSubmit}>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
               <div className="space-y-3 group">
                 <label htmlFor="contact-name" className="text-sm font-bold text-white/70 ml-1 uppercase tracking-wider group-focus-within:text-brand transition-all">Full Name</label>
                 <input
                   type="text"
                   id="contact-name"
                   value={formValues.name}
                   onChange={updateField("name")}
                   required
                   className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-brand/50 ring-0 focus:ring-4 focus:ring-brand/10 transition-all outline-none text-lg text-white placeholder:text-white/20 font-medium"
                   placeholder="John Doe"
                 />
               </div>
               <div className="space-y-3 group">
                 <label htmlFor="contact-email" className="text-sm font-bold text-white/70 ml-1 uppercase tracking-wider group-focus-within:text-brand transition-all">Email Address</label>
                 <input
                   type="email"
                   id="contact-email"
                   value={formValues.email}
                   onChange={updateField("email")}
                   required
                   className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-brand/50 ring-0 focus:ring-4 focus:ring-brand/10 transition-all outline-none text-lg text-white placeholder:text-white/20 font-medium"
                   placeholder="john@example.com"
                 />
               </div>
            </div>
            
            <div className="space-y-3 group">
              <label htmlFor="contact-phone" className="text-sm font-bold text-white/70 ml-1 uppercase tracking-wider group-focus-within:text-brand transition-all">Phone / WhatsApp</label>
              <input
                type="tel"
                id="contact-phone"
                value={formValues.phone}
                onChange={updateField("phone")}
                className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-brand/50 ring-0 focus:ring-4 focus:ring-brand/10 transition-all outline-none text-lg text-white placeholder:text-white/20 font-medium"
                placeholder="+234 800 000 0000"
              />
            </div>
            
            <div className="space-y-3 group">
              <label htmlFor="contact-message" className="text-sm font-bold text-white/70 ml-1 uppercase tracking-wider group-focus-within:text-brand transition-all">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                value={formValues.message}
                onChange={updateField("message")}
                required
                className="w-full px-6 py-5 rounded-2xl bg-white/5 border border-white/10 focus:border-brand/50 ring-0 focus:ring-4 focus:ring-brand/10 transition-all outline-none text-lg text-white placeholder:text-white/20 font-medium resize-none"
                placeholder="Tell us about your event..."
              />
            </div>

            {status ? (
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className={`rounded-2xl px-6 py-4 text-sm font-bold flex items-center gap-3 ${
                  status.type === "success"
                    ? "bg-green-500/10 text-green-400 border border-green-500/20"
                    : "bg-red-500/10 text-red-400 border border-red-500/20"
                }`}
              >
                <div className={`w-3 h-3 rounded-full ${status.type === "success" ? "bg-green-500" : "bg-red-500"}`} />
                {status.message}
              </motion.div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-5 rounded-2xl bg-brand text-white font-black text-xl tracking-wide shadow-lg shadow-brand/30 hover:bg-brand-deep hover:shadow-brand/50 hover:-translate-y-1 hover:scale-[1.01] transition-all duration-300 disabled:cursor-not-allowed disabled:opacity-60 disabled:hover:translate-y-0"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </motion.div>
      </div>
    </motion.section>
  );
}


