"use client";
import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Image from "next/image";
import { itemVariants, containerVariants } from "@/lib/motion";
import { Camera, XIcon } from "@/components/icons";
import { galleryMedia } from "@/data/gallery";

export default function GallerySection() {
  const [selectedMedia, setSelectedMedia] = useState(null);

  return (
    <motion.section 
      id="gallery" 
      className="py-32 px-6 md:px-12 lg:px-24 bg-white relative overflow-hidden" 
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
    >
      {/* Background Ambience */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none">
        <div className="absolute top-0 right-0 w-[800px] h-[800px] bg-brand-soft/40 rounded-full blur-[120px] mix-blend-multiply" />
        <div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50 rounded-full blur-[100px] mix-blend-multiply" />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-16">
          <motion.div variants={itemVariants} className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-soft/50 border border-brand/10 text-brand-deep text-sm font-bold tracking-widest uppercase mb-6 backdrop-blur-md">
            <Camera className="w-4 h-4" />
            <span>Captured Moments</span>
          </motion.div>
          
          <motion.h2 
            className="text-4xl md:text-6xl font-black text-gray-900 mb-6"
            variants={itemVariants}
          >
            Our Gallery
          </motion.h2>
          
          <motion.p 
            variants={itemVariants}
            className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed"
          >
            Relive the energy, emotion, and elegance of events we’ve had the privilege to host.
          </motion.p>
        </div>

        {/* Bento Grid Layout */}
        <motion.div 
          className="grid grid-cols-1 md:grid-cols-3 auto-rows-[300px] gap-4"
          variants={containerVariants}
        >
          {galleryMedia.map((mediaItem, index) => {
            // Bento logic: First item 2x2, others 1x1. Adjust as needed for specific layout.
            // For 6 items: 
            // Index 0: col-span-2 row-span-2
            // Others: col-span-1 row-span-1
            const isFeatured = index === 0;
            
            return (
              <motion.div
                key={`${mediaItem.type}-${mediaItem.src}-${index}`}
                className={`relative group rounded-3xl overflow-hidden cursor-pointer shadow-sm hover:shadow-xl transition-all duration-500 border border-gray-100 ${
                  isFeatured ? "md:col-span-2 md:row-span-2" : "md:col-span-1 md:row-span-1"
                }`}
                variants={itemVariants}
                onClick={() => setSelectedMedia(mediaItem)}
              >
                {/* Media Container */}
                <div className="w-full h-full relative">
                  {mediaItem.type === "image" ? (
                    <Image
                      src={mediaItem.src}
                      alt={mediaItem.alt ?? `Event image ${index + 1}`}
                      fill
                      priority={index < 4}
                      className="object-cover transform group-hover:scale-105 transition-transform duration-700 ease-in-out"
                      sizes={isFeatured ? "(min-width: 768px) 66vw, 100vw" : "(min-width: 768px) 33vw, 100vw"}
                    />
                  ) : (
                    <>
                      <video
                        src={mediaItem.src}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                        muted
                        playsInline
                        preload="metadata"
                      />
                      <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                        <div className="w-14 h-14 rounded-full bg-white/30 backdrop-blur-md flex items-center justify-center group-hover:scale-110 transition-transform duration-300 shadow-lg border border-white/40">
                          <div className="w-0 h-0 border-t-[8px] border-t-transparent border-l-[14px] border-l-white border-b-[8px] border-b-transparent ml-1" />
                        </div>
                      </div>
                    </>
                  )}
                  
                  {/* Overlay */}
                  <div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
                    <span className="text-white font-bold text-lg translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                      {mediaItem.alt || "View Highlight"}
                    </span>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/* Lightbox Modal */}
      <AnimatePresence>
        {selectedMedia && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-white/90 backdrop-blur-xl p-4 md:p-10"
            onClick={() => setSelectedMedia(null)}
          >
            <button 
              className="absolute top-6 right-6 p-2 rounded-full bg-black/5 text-gray-900 hover:bg-brand hover:text-white transition-colors z-50"
              onClick={() => setSelectedMedia(null)}
            >
              <XIcon className="w-8 h-8" />
            </button>

            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="relative w-full max-w-6xl max-h-[90vh] rounded-3xl overflow-hidden shadow-2xl border border-gray-100 bg-white"
              onClick={(e) => e.stopPropagation()}
            >
              {selectedMedia.type === "image" ? (
                <div className="relative w-full h-full flex items-center justify-center bg-gray-50">
                   <Image
                    src={selectedMedia.src}
                    alt={selectedMedia.alt || "Gallery Image"}
                    width={1920}
                    height={1080}
                    className="w-full h-auto max-h-[85vh] object-contain"
                    quality={100}
                  />
                </div>
              ) : (
                <video
                  src={selectedMedia.src}
                  controls
                  autoPlay
                  className="w-full h-auto max-h-[85vh] bg-black"
                />
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.section>
  );
}
