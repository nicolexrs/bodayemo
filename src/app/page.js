"use client";

import { motion } from "framer-motion";
import Image from "next/image";

// Animation variants
const containerVariants = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
    transition: { staggerChildren: 0.3 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0 },
};

export default function Home() {
  return (
    <main className="bg-gray-50 min-h-screen">
      {/* Hero Section */}
      <motion.section
        className="p-10 text-center"
        initial="hidden"
        animate="show"
        variants={containerVariants}
      >
        <h1 className="text-5xl font-extrabold text-purple-600 mb-6">
          Welcome to Our Event Services
        </h1>
        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
          It&apos;s your wedding day, let&apos;s make it unforgettable with
          professional hosting, entertainment, and creativity.
        </p>
        <div className="mt-8">
          <Image
            src="/hero.jpg"
            alt="Wedding Hero"
            width={1200}
            height={600}
            className="rounded-2xl shadow-lg w-full h-auto object-cover"
            priority
          />
        </div>
      </motion.section>

      {/* Services Section */}
      <motion.section
        id="services"
        className="p-10"
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-black text-center">
          Our Services
        </h2>
        <motion.ul
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            {
              title: "Master of Ceremony (MC)",
              desc: "Engaging and professional MC for weddings, birthdays, and corporate events.",
              icon: "/icons/mc.png",
            },
            {
              title: "Video Editing",
              desc: "High-quality cinematic video edits to capture your event highlights.",
              icon: "/icons/video.png",
            },
            {
              title: "Script Writing",
              desc: "Creative scripts tailored for events, plays, and presentations.",
              icon: "/icons/script.png",
            },
            {
              title: "Public Speaking",
              desc: "Confidence coaching and event speaking tailored for any audience.",
              icon: "/icons/mic.png",
            },
            {
              title: "Content Creation",
              desc: "Social media content packages that keep your audience engaged.",
              icon: "/icons/content.png",
            },
          ].map((service, index) => (
            <motion.li
              key={index}
              className="bg-white p-8 rounded-2xl shadow-md text-center transform hover:scale-105 transition-transform duration-300 cursor-pointer border border-gray-200 hover:border-purple-500"
              variants={itemVariants}
            >
              <div className="flex justify-center mb-4">
                <Image
                  src={service.icon}
                  alt={service.title}
                  width={64}
                  height={64}
                  className="h-16 w-16 object-contain"
                />
              </div>
              <h3 className="text-xl font-semibold text-black">
                {service.title}
              </h3>
              <p className="text-gray-600 mt-2">{service.desc}</p>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>

      {/* Wedding Packages Section */}
      <motion.section
        id="packages"
        className="p-10"
        variants={itemVariants}
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
      >
        <h2 className="text-4xl font-bold mb-8 text-purple-500 text-center">
          Wedding Packages
        </h2>
        <motion.ul
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          variants={containerVariants}
        >
          {[
            {
              desc: "Hosting for 2-3 hours",
              price: "₦100,000",
              image: "/packages/basic.jpg",
            },
            {
              desc: "Hosting for 3-5 hours + Wedding games",
              price: "₦200,000",
              image: "/packages/games.jpg",
            },
            {
              desc: "Hosting for 4-6 hours + Wedding games + After-party",
              price: "₦300,000",
              image: "/packages/afterparty.jpg",
            },
            {
              desc: "Hosting for 4-6 hours + Wedding games + Content creation",
              price: "₦400,000",
              image: "/packages/content.jpg",
            },
            {
              desc: "Hosting for 4-6 hours + Wedding games + After-party + Content creation",
              price: "₦500,000",
              image: "/packages/premium.jpg",
            },
          ].map((pkg, index) => (
            <motion.li
              key={index}
              className="bg-black p-8 rounded-2xl shadow-xl flex flex-col justify-between items-center transform hover:scale-105 transition-transform duration-300 border border-gray-700 hover:border-purple-500"
              variants={itemVariants}
            >
              <div className="w-full mb-4">
                <Image
                  src={pkg.image}
                  alt={pkg.desc}
                  width={500}
                  height={300}
                  className="rounded-xl w-full h-48 object-cover"
                />
              </div>
              <span className="text-lg md:text-xl text-gray-300 font-medium mb-2 text-center">
                {pkg.desc}
              </span>
              <span className="text-2xl md:text-3xl font-bold text-purple-500">
                {pkg.price}
              </span>
            </motion.li>
          ))}
        </motion.ul>
      </motion.section>
    </main>
  );
}
