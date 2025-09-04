"use client";
import { motion } from "framer-motion";
import Image from "next/image";
import { itemVariants, containerVariants } from "@/lib/motion";
import { Camera } from "@/components/icons";

// First three are images, remaining are videos
const media = [
  { type: "image", src: "/a.jpg", alt: "Event photo 1" },
  { type: "image", src: "/b.jpg", alt: "Event photo 2" },
  { type: "image", src: "/c.jpg", alt: "Event photo 3" },
  { type: "video", src: "/d.mp4", },
  { type: "video", src: "/e.mp4",  },
  { type: "video", src: "/f.mp4",  },
];

export default function GallerySection() {
  return (
    <motion.section id="gallery" className="p-10 lg:px-60 md:px-20" variants={itemVariants}>
      <h2 className="text-4xl font-bold mb-8 text-black text-center flex justify-center items-center gap-4">
        <Camera className="w-8 h-8" width={32} height={32} /> Event Gallery
      </h2>
      <motion.div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" variants={containerVariants}>
        {media.map((m, index) => (
          <motion.div
            key={index}
            className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
            variants={itemVariants}
          >
            {m.type === "image" ? (
              <Image
                src={m.src}
                alt={m.alt ?? `Event image ${index + 1}`}
                width={600}
                height={400}
                sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                quality={70}
                className="w-full h-auto object-cover"
              />
            ) : (
              <video
                src={m.src}
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
