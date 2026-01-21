"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import ServiceBookingForm from "./booking-form";
import { XIcon } from "@/components/icons";

export default function BookingModal({ service, packages, initialPackageSlug }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="relative z-10 px-8 py-4 rounded-xl bg-gray-900 text-white font-bold shadow-lg hover:bg-brand hover:text-white transition-all duration-300 inline-block text-center hover:-translate-y-1 hover:shadow-brand/25"
      >
        Book This Service
      </button>

      <AnimatePresence>
        {isOpen && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setIsOpen(false)}
              className="absolute inset-0 bg-black/60 backdrop-blur-sm"
            />
            
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              className="relative w-full max-w-lg max-h-[90vh] overflow-y-auto bg-white rounded-2xl shadow-2xl z-10 scrollbar-hide"
            >
              <div className="sticky top-0 right-0 z-20 flex justify-end p-4 bg-gradient-to-b from-white via-white to-transparent pointer-events-none">
                 <button
                  onClick={() => setIsOpen(false)}
                  className="pointer-events-auto p-2 rounded-full bg-gray-100 hover:bg-gray-200 text-gray-500 hover:text-gray-900 transition-colors"
                >
                  <XIcon className="w-6 h-6" />
                </button>
              </div>

              <div className="px-6 md:px-10 pb-10 -mt-10">
                <ServiceBookingForm 
                  service={service} 
                  packages={packages} 
                  initialPackageSlug={initialPackageSlug} 
                />
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </>
  );
}
