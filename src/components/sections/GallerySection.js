"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { itemVariants, containerVariants } from "@/lib/motion";
import { Camera } from "@/components/icons";

const images = [
  "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+1",
  "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+2",
  "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+3",
  "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+4",
  "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+5",
  "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+6",
];

export default function GallerySection() {
  return (
    <motion.section id="gallery" className="p-10" variants={itemVariants}>
      <h2 className="text-4xl font-bold mb-8 text-black text-center flex justify-center items-center gap-4">
        <Camera className="w-8 h-8" width={32} height={32} /> Event Gallery
      </h2>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
        {images.map((image, index) => (
          <motion.div key={index} className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer" variants={itemVariants}>
            <Image src={image} alt={`Event photo ${index + 1}`} width={600} height={400} className="w-full h-auto object-cover" />
          </motion.div>
        ))}
      </motion.div>
    </motion.section>
  );
}

