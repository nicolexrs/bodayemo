"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { itemVariants, containerVariants } from "@/lib/motion";
import { Camera } from "@/components/icons";
import { galleryMedia } from "@/data/gallery";

export default function GallerySection() {
  return (
    <motion.section id="gallery" className="p-10 lg:px-60 md:px-20" variants={itemVariants}>
      <h2 className="text-4xl font-bold mb-8 text-brand  text-center flex justify-center items-center gap-4">
        <Camera className="w-8 h-8 text-brand" width={32} height={32} /> Events Gallery
      </h2>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
        {galleryMedia.map((mediaItem, index) => (
          <motion.div
            key={`${mediaItem.type}-${mediaItem.src}`}
            className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            variants={itemVariants}
          >
            {mediaItem.type === "image" ? (
              <Image
                src={mediaItem.src}
                alt={mediaItem.alt ?? `Event image ${index + 1}`}
                width={600}
                height={400}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                quality={70}
                className="w-full h-auto object-cover"
              />
            ) : (
              <video
                src={mediaItem.src}
                controls
                preload="auto"
                playsInline
                className="w-full h-auto object-cover bg-black"
                title={`Event video ${index + 1}`}
              />
            )}
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}
