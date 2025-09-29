"use client";

import { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { itemVariants } from "@/lib/motion";

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
        message: "Thank you! Your message has been sent. We&rsquo;ll get back to you shortly.",
      });
      setFormValues(initialFormState);
    } catch (error) {
      console.error("Contact form error", error);
      setStatus({
        type: "error",
        message: error.message || "Something went wrong while sending your message. Please try again or reach out directly.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <motion.section id="contact" className="p-10 md:px-20 lg:px-60" variants={itemVariants}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-stretch">
        <div className="hidden md:block order-2 lg:order-1 rounded-2xl overflow-hidden shadow-md min-h-[280px] md:min-h-[360px] lg:min-h-[480px] relative">
          <Image
            src="/i.PNG"
            alt="Professional contact"
            fill
            sizes="(min-width: 1024px) 50vw, 100vw"
            className="object-cover"
            priority={false}
          />
        </div>

        <div className="flex flex-col justify-center">
          <h2 className="text-4xl font-bold mb-4 text-brand underline text-center lg:text-left">Get in Touch</h2>
          <p className="text-lg leading-relaxed text-gray-600 mb-8 text-center lg:text-left">
            Interested in booking Bodayemo for your next event or content creation project? Fill out the form below and we&rsquo;ll get back to you shortly.
          </p>

          <form className="space-y-6" onSubmit={handleSubmit}>
            <div>
              <label htmlFor="contact-name" className="block text-gray-700 mb-2">Full Name</label>
              <input
                type="text"
                id="contact-name"
                value={formValues.name}
                onChange={updateField("name")}
                required
                className="w-full p-3 rounded-lg placeholder:text-black/40 border border-gray-300 focus:outline-none focus:border-brand"
                placeholder="Full name"
              />
            </div>
            <div>
              <label htmlFor="contact-email" className="block text-gray-700 mb-2">Email Address</label>
              <input
                type="email"
                id="contact-email"
                value={formValues.email}
                onChange={updateField("email")}
                required
                className="w-full p-3 rounded-lg border placeholder:text-black/40 border-gray-300 focus:outline-none focus:border-brand"
                placeholder="Email address"
              />
            </div>
            <div>
              <label htmlFor="contact-phone" className="block text-gray-700 mb-2">Phone / WhatsApp (optional)</label>
              <input
                type="tel"
                id="contact-phone"
                value={formValues.phone}
                onChange={updateField("phone")}
                className="w-full p-3 rounded-lg placeholder:text-black/40 border border-gray-300 focus:outline-none focus:border-brand"
                placeholder="+234 800 000 0000"
              />
            </div>
            <div>
              <label htmlFor="contact-message" className="block text-gray-700 mb-2">Message</label>
              <textarea
                id="contact-message"
                rows={5}
                value={formValues.message}
                onChange={updateField("message")}
                required
                className="w-full p-3 rounded-lg placeholder:text-black/40 border border-gray-300 focus:outline-none focus:border-brand"
                placeholder="Tell us about your event..."
              />
            </div>

            {status ? (
              <div
                className={`rounded-xl px-4 py-3 text-sm font-medium ${
                  status.type === "success"
                    ? "bg-green-50 text-green-700 border border-green-200"
                    : "bg-red-50 text-red-700 border border-red-200"
                }`}
              >
                {status.message}
              </div>
            ) : null}

            <button
              type="submit"
              disabled={isSubmitting}
              className="w-full py-3 rounded-2xl bg-brand text-brand-contrast font-bold text-lg shadow-lg hover:bg-brand-deep transition-colors duration-300 disabled:cursor-not-allowed disabled:opacity-60"
            >
              {isSubmitting ? "Sending..." : "Send Message"}
            </button>
          </form>
        </div>
      </div>
    </motion.section>
  );
}


