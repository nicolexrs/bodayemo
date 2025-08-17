"use client";
import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Custom SVG Icons
const Instagram = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-instagram"
  >
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" />
    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const Youtube = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-youtube"
  >
    <path d="M2.5 17.5a1.5 1.5 0 0 1 0-3h19a1.5 1.5 0 0 1 0 3zm0 4a1.5 1.5 0 0 1 0-3h19a1.5 1.5 0 0 1 0 3z" />
    <path d="M16 12a4 4 0 0 1-8 0" />
    <path d="M12 2v6" />
    <path d="M8 8h8" />
  </svg>
);

const Sparkles = () => (
  <svg
    fill="#000000"
    width="800px"
    height="800px"
    viewBox="0 0 56 56"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M 26.6875 12.6602 C 26.9687 12.6602 27.1094 12.4961 27.1797 12.2383 C 27.9062 8.3242 27.8594 8.2305 31.9375 7.4570 C 32.2187 7.4102 32.3828 7.2461 32.3828 6.9648 C 32.3828 6.6836 32.2187 6.5195 31.9375 6.4726 C 27.8828 5.6524 28.0000 5.5586 27.1797 1.6914 C 27.1094 1.4336 26.9687 1.2695 26.6875 1.2695 C 26.4062 1.2695 26.2656 1.4336 26.1953 1.6914 C 25.3750 5.5586 25.5156 5.6524 21.4375 6.4726 C 21.1797 6.5195 20.9922 6.6836 20.9922 6.9648 C 20.9922 7.2461 21.1797 7.4102 21.4375 7.4570 C 25.5156 8.2774 25.4687 8.3242 26.1953 12.2383 C 26.2656 12.4961 26.4062 12.6602 26.6875 12.6602 Z M 15.3438 28.7852 C 15.7891 28.7852 16.0938 28.5039 16.1406 28.0821 C 16.9844 21.8242 17.1953 21.8242 23.6641 20.5821 C 24.0860 20.5117 24.3906 20.2305 24.3906 19.7852 C 24.3906 19.3633 24.0860 19.0586 23.6641 18.9883 C 17.1953 18.0977 16.9609 17.8867 16.1406 11.5117 C 16.0938 11.0899 15.7891 10.7852 15.3438 10.7852 C 14.9219 10.7852 14.6172 11.0899 14.5703 11.5352 C 13.7969 17.8164 13.4687 17.7930 7.0469 18.9883 C 6.6250 19.0821 6.3203 19.3633 6.3203 19.7852 C 6.3203 20.2539 6.6250 20.5117 7.1406 20.5821 C 13.5156 21.6133 13.7969 21.7774 14.5703 28.0352 C 14.6172 28.5039 14.9219 28.7852 15.3438 28.7852 Z M 31.2344 54.7305 C 31.8438 54.7305 32.2891 54.2852 32.4062 53.6524 C 34.0703 40.8086 35.8750 38.8633 48.5781 37.4570 C 49.2344 37.3867 49.6797 36.8945 49.6797 36.2852 C 49.6797 35.6758 49.2344 35.2070 48.5781 35.1133 C 35.8750 33.7070 34.0703 31.7617 32.4062 18.9180 C 32.2891 18.2852 31.8438 17.8633 31.2344 17.8633 C 30.6250 17.8633 30.1797 18.2852 30.0860 18.9180 C 28.4219 31.7617 26.5938 33.7070 13.9140 35.1133 C 13.2344 35.2070 12.7891 35.6758 12.7891 36.2852 C 12.7891 36.8945 13.2344 37.3867 13.9140 37.4570 C 26.5703 39.1211 28.3281 40.8321 30.0860 53.6524 C 30.1797 54.2852 30.6250 54.7305 31.2344 54.7305 Z" />
  </svg>
);

const Camera = () => (
  <img
    width="100"
    height="100"
    src="https://img.icons8.com/bubbles/100/camera.png"
    alt="camera"
  />
);

const Menu = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-menu"
  >
    <line x1="4" x2="20" y1="12" y2="12" />
    <line x1="4" x2="20" y1="6" y2="6" />
    <line x1="4" x2="20" y1="18" y2="18" />
  </svg>
);

const X = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-x"
  >
    <path d="M18 6 6 18" />
    <path d="m6 6 12 12" />
  </svg>
);

const ChevronLeft = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-left"
  >
    <path d="m15 18-6-6 6-6" />
  </svg>
);

const ChevronRight = () => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="32"
    height="32"
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className="lucide lucide-chevron-right"
  >
    <path d="m9 18 6-6-6-6" />
  </svg>
);

// Animation variants for sections
const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1,
    },
  },
};

// Animation variants for list items
const itemVariants = {
  hidden: { opacity: 0, y: 50 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

// Slider for the Hero Section
const HeroSlider = () => {
  const slides = [
    {
      title: "Bodáyemò Entertainment",
      subtitle:
        "Bringing professional flair and unforgettable experiences to your events and content.",
      ctaText: "Book Now",
      ctaLink: "#contact",
    },
    {
      title: "Master of Ceremony",
      subtitle: "Engaging hosting services to make your event a success.",
      ctaText: "Learn More",
      ctaLink: "#services",
    },
    {
      title: "Premium Video Editing",
      subtitle: "Crafting stunning visuals that tell your story.",
      ctaText: "View Portfolio",
      ctaLink: "#gallery",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change slide every 5 seconds
    return () => clearInterval(interval);
  }, [slides.length]);

  const goToPrev = () => {
    setCurrentIndex(
      (prevIndex) => (prevIndex - 1 + slides.length) % slides.length
    );
  };

  const goToNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
  };

  return (
    <div className="relative w-full  text-center z-10 flex flex-col items-center">
      <AnimatePresence mode="wait">
        <motion.div
          key={currentIndex}
          initial={{ opacity: 0, x: 100 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -100 }}
          transition={{ duration: 0.5 }}
          className="text-center flex flex-col items-center"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold text-black/80 leading-tight tracking-wider">
            {slides[currentIndex].title}
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-800 max-w-2xl">
            {slides[currentIndex].subtitle}
          </p>
          <a
            href={slides[currentIndex].ctaLink}
            className="mt-8 px-8 py-3 rounded-full bg-black text-white font-bold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300 transform hover:scale-105 inline-block"
          >
            {slides[currentIndex].ctaText}
          </a>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Buttons */}
      <button
        onClick={goToPrev}
        className="absolute left-0 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors duration-200"
      >
        <ChevronLeft />
      </button>
      <button
        onClick={goToNext}
        className="absolute right-4 top-1/2 -translate-y-1/2 text-gray-400 hover:text-black transition-colors duration-200"
      >
        <ChevronRight />
      </button>

      {/* Dot Indicators */}
      {/* <div className="absolute bottom-8 flex space-x-2">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrentIndex(index)}
            className={`h-2 w-2 rounded-full transition-colors duration-300 ${currentIndex === index ? 'bg-purple-500' : 'bg-gray-400'}`}
          />
        ))}
      </div> */}
    </div>
  );
};

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="min-h-screen  bg-gray-950 text-gray-200 font-sans flex flex-col items-center overflow-hidden">
      {/* Main Container */}
      <motion.div
        className=" w-full bg-white "
        initial="hidden"
        animate="visible"
        variants={containerVariants}
      >
        {/* Navbar */}
        <motion.nav
          className="fixed top-0 z-50 w-full  bg-white/90 text-black  py-6 px-14 flex justify-between items-center  shadow-2xl   "
          initial={{ y: -100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 0.5, delay: 0.2 }}
        >
          <motion.a
            href="#hero"
            className="text-xl  md:text-2xl font-bold text-black-500 tracking-wide"
          >
            Bodáyemò
          </motion.a>
          <div className="hidden md:flex items-center space-x-8">
            <motion.a
              href="#about"
              className="hover:text-purple-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              About
            </motion.a>
            <motion.a
              href="#services"
              className="hover:text-purple-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Services
            </motion.a>
            <motion.a
              href="#packages"
              className="hover:text-purple-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Packages
            </motion.a>
            <motion.a
              href="#gallery"
              className="hover:text-purple-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Gallery
            </motion.a>
            <motion.a
              href="#contact"
              className="hover:text-purple-500 transition-colors duration-200"
              whileHover={{ scale: 1.05 }}
            >
              Contact
            </motion.a>
          </div>
          <button
            onClick={toggleMenu}
            className="md:hidden text-black hover:text-purple-500 transition-colors duration-200"
          >
            {isMenuOpen ? <X /> : <Menu />}
          </button>
        </motion.nav>

        {/* Mobile Menu */}
        {isMenuOpen && (
          <motion.div
            className="md:hidden w-[30vw] fixed  h-screen justify-center items-center bg-white text-black    right-0 z-40  shadow-lg"
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.3 }}
          >
            <div className="flex flex-col items-start h-screen justify-center space-y-4">
              <a
                href="#about"
                className="w-full px-6   hover:text-purple-800 rounded-lg transition-colors duration-200"
                onClick={toggleMenu}
              >
                About
              </a>
              <hr className="border-black/20 w-full"></hr>
              <a
                href="#services"
                className="w-full px-6  hover:text-purple-800 rounded-lg transition-colors duration-200"
                onClick={toggleMenu}
              >
                Services
              </a>
              <hr className="border-black/20 w-full"></hr>
              <a
                href="#packages"
                className="w-full px-6 hover:text-purple-800 rounded-lg transition-colors duration-200"
                onClick={toggleMenu}
              >
                Packages
              </a>
              <hr className="border-black/20 w-full"></hr>
              <a
                href="#gallery"
                className="w-full px-6  hover:text-purple-800 rounded-lg transition-colors duration-200"
                onClick={toggleMenu}
              >
                Gallery
              </a>
              <hr className="border-black/20 w-full"></hr>
              <a
                href="#contact"
                className="w-full px-6   hover:text-purple-800 rounded-lg transition-colors duration-200"
                onClick={toggleMenu}
              >
                Contact
              </a>
              <hr className="border-black/20 w-full"></hr>
            </div>
          </motion.div>
        )}

        {/* Hero Section */}
        <motion.section
          id="hero"
          className="relative h-200 text-center py-24 md:py-36 flex flex-col justify-center items-center  px-6"
          variants={itemVariants}
        >
          <div className="absolute inset-0 z-0">
            {/* Background gradient effect */}
            <div className="w-full h-full "></div>
          </div>
          <HeroSlider />
        </motion.section>

        {/* Main Content Sections */}
        <main className=" space-y-24 ">
          {/* About Section */}
          <motion.section
            id="about"
            className="p-10  h-100 flex flex-col justify-center items-center "
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-6 text-black text-center">
              About Us
            </h2>
            <p className="text-lg leading-relaxed text-gray-300 max-w-4xl mx-auto text-center">
              Bodáyemò Entertainment is a versatile individual and brand
              providing a professional range of entertainment and content
              creation services. With years of experience, we bring passion and
              expertise to every event and project, ensuring every moment is
              captured and every audience is engaged.
            </p>
          </motion.section>

          {/* Services Section */}
          <motion.section
            id="services"
            className="py-20 px-10 bg-gradient-to-b from-gray-50 to-white"
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-4 text-center text-gray-900">
              Our Services
            </h2>
            <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
              We specialize in creating unforgettable experiences, engaging
              content, and impactful storytelling tailored to your audience.
              Explore our wide range of services:
            </p>

            <motion.ul
              className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
              variants={containerVariants}
            >
              {[
                {
                  title: "Master of Ceremony (MC)",
                  desc: "Hosting events with energy, charisma, and professionalism that keeps audiences engaged from start to finish.",
                  icon: "🎤",
                },
                {
                  title: "Video Editing",
                  desc: "Transforming raw footage into cinematic experiences using creative cuts, effects, and storytelling flow.",
                  icon: "🎬",
                },
                {
                  title: "Script Writing",
                  desc: "Crafting compelling scripts for events, commercials, skits, and corporate presentations.",
                  icon: "📝",
                },
                {
                  title: "Public Speaking",
                  desc: "Delivering powerful speeches and training others to communicate with confidence and impact.",
                  icon: "🎙️",
                },
                {
                  title: "Content Creation",
                  desc: "Producing engaging social media, brand, and digital content that resonates with your audience.",
                  icon: "📱",
                },
                {
                  title: "Event Consultancy",
                  desc: "Providing expert guidance to plan, structure, and execute memorable and seamless events.",
                  icon: "📊",
                },
              ].map((service, index) => (
                <motion.li
                  key={index}
                  className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 hover:border-purple-500
                   text-center transform hover:scale-105 transition-all duration-300 relative group"
                  variants={itemVariants}
                >
                  <div className="text-4xl mb-4 group-hover:animate-bounce">
                    {service.icon}
                  </div>
                  <h3 className="text-xl font-semibold text-gray-800 mb-2">
                    {service.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed">
                    {service.desc}
                  </p>
                </motion.li>
              ))}
            </motion.ul>
          </motion.section>

         {/* Wedding Packages Section */}
<motion.section
  id="packages"
  className="py-20 px-10 bg-gradient-to-b from-white to-gray-50"
  variants={itemVariants}
>
  <h2 className="text-4xl font-bold mb-4 text-purple-600 text-center">
    Wedding Packages
  </h2>
  <p className="text-center text-lg text-gray-600 mb-12 max-w-2xl mx-auto">
    Choose from our carefully curated wedding packages designed to create 
    unforgettable memories for your big day. Each package comes with professional 
    hosting, engaging entertainment, and a touch of elegance.
  </p>

  <motion.ul
    className="grid md:grid-cols-2 lg:grid-cols-3 gap-10"
    variants={containerVariants}
  >
    {[
      {
        title: "Classic Package",
        features: ["Hosting for 2–3 hours", "Engaging audience flow"],
        price: "₦100,000",
        icon: "💍"
      },
      {
        title: "Premium Package",
        features: ["Hosting for 3–5 hours", "Wedding games", "Audience interaction"],
        price: "₦200,000",
        icon: "🎤"
      },
      {
        title: "Luxury Package",
        features: [
          "Hosting for 4–6 hours",
          "Wedding games",
          "After-party hosting"
        ],
        price: "₦300,000",
        icon: "🎉"
      },
      {
        title: "Content Package",
        features: [
          "Hosting for 4–6 hours",
          "Wedding games",
          "Professional content creation"
        ],
        price: "₦400,000",
        icon: "📸"
      },
      {
        title: "Elite Package",
        features: [
          "Hosting for 4–6 hours",
          "Wedding games",
          "After-party hosting",
          "Content creation"
        ],
        price: "₦500,000",
        icon: "👑"
      },
    ].map((pkg, index) => (
      <motion.li
        key={index}
        className="bg-white p-8 rounded-2xl shadow-lg border border-gray-200 
                   hover:border-purple-500 hover:shadow-2xl transform hover:scale-105 
                   transition-all duration-300 flex flex-col items-center text-center group"
        variants={itemVariants}
      >
        <div className="text-5xl mb-4 group-hover:animate-pulse">{pkg.icon}</div>
        <h3 className="text-xl font-semibold text-gray-800 mb-4">{pkg.title}</h3>
        <ul className="text-gray-600 text-sm space-y-2 mb-6">
          {pkg.features.map((f, i) => (
            <li key={i}>✔ {f}</li>
          ))}
        </ul>
        <span className="inline-block px-6 py-2 text-2xl font-bold text-purple-600 bg-purple-50 rounded-full">
          {pkg.price}
        </span>
      </motion.li>
    ))}
  </motion.ul>
</motion.section>


          {/* Gallery Section */}
          <motion.section
            id="gallery"
            className="p-10   "
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-8 text-black text-center flex justify-center items-center gap-4">
              <Camera className="w-8 h-8" /> Event Gallery
            </h2>
            <motion.div
              className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
              variants={containerVariants}
            >
              {[
                "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+1",
                "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+2",
                "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+3",
                "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+4",
                "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+5",
                "https://placehold.co/600x400/1e293b/a855f7?text=Event+Photo+6",
              ].map((image, index) => (
                <motion.div
                  key={index}
                  className="rounded-xl overflow-hidden shadow-lg transform hover:scale-105 transition-transform duration-300 cursor-pointer"
                  variants={itemVariants}
                >
                  <img
                    src={image}
                    alt={`Event ${index + 1}`}
                    className="w-full h-auto object-cover"
                  />
                </motion.div>
              ))}
            </motion.div>
          </motion.section>

          {/* Contact Section */}
          <motion.section
            id="contact"
            className="p-10 white shadow-xl "
            variants={itemVariants}
          >
            <h2 className="text-4xl font-bold mb-8 text-black text-center">
              Get in Touch
            </h2>
            <p className="text-lg leading-relaxed text-gray-400 max-w-2xl mx-auto text-center mb-8">
              Interested in booking Bodáyemò for your next event or content
              creation project? Fill out the form below and we'll get back to
              you shortly.
            </p>
            <form className="max-w-xl mx-auto space-y-6">
              <div>
                <label htmlFor="name" className="block text-gray-400 mb-2">
                  Full Name
                </label>
                <input
                  type="text"
                  id="name"
                  className="w-full p-3 rounded-lg placeholder:text-black/20 border border-gray-700 focus:outline-none focus:border-purple-500"
                  placeholder="full name"
                />
              </div>
              <div>
                <label htmlFor="email" className="block text-gray-400 mb-2">
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full p-3 rounded-lg border placeholder:text-black/20 border-gray-700 focus:outline-none focus:border-purple-500"
                  placeholder="email adress"
                />
              </div>
              <div>
                <label htmlFor="message" className="block text-gray-400 mb-2">
                  Message
                </label>
                <textarea
                  id="message"
                  rows="5"
                  className="w-full p-3 rounded-lg placeholder:text-black/20 border border-gray-700 focus:outline-none focus:border-purple-500"
                  placeholder="Tell us about your event..."
                />
              </div>
              <button
                type="submit"
                className="w-full py-3 rounded-2xl bg-black text-white font-bold text-lg shadow-lg hover:bg-purple-700 transition-colors duration-300"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.section>
        </main>
      </motion.div>

      {/* Footer */}
      <footer className="w-full bg-gray-900 border-t border-gray-800 p-8 mt-16 text-center text-gray-400">
        <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
          <p>
            &copy; {new Date().getFullYear()} Bodáyemò Entertainment. All rights
            reserved.
          </p>
          <div className="flex space-x-6">
            <a
              href="https://www.instagram.com/bodáyemò"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              <Instagram />
            </a>
            <a
              href="https://www.youtube.com/bodáyemòtv"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-purple-500 transition-colors duration-300"
            >
              <Youtube />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
