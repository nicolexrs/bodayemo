"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { MenuIcon, XIcon } from "./icons";

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const toggleMenu = () => setIsMenuOpen((s) => !s);

  const links = [
    { href: "#about", label: "About" },
    { href: "#services", label: "Services" },
    { href: "#packages", label: "Packages" },
    { href: "#gallery", label: "Gallery" },
    { href: "#contact", label: "Contact" },
  ];

  return (
    <motion.nav
      role="navigation"
      className="fixed top-0 z-50 w-full bg-white/90 backdrop-blur text-black py-4 px-4 lg:px-14 flex justify-between items-center shadow-2xl"
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <motion.a href="#hero" className="text-xl md:text-2xl font-bold text-black tracking-wide">
        Bodayemo
      </motion.a>
      <div className="hidden md:flex items-center space-x-8">
        {links.map((l) => (
          <motion.a key={l.href} href={l.href} className="hover:text-purple-500 transition-colors duration-200" whileHover={{ scale: 1.05 }}>
            {l.label}
          </motion.a>
        ))}
      </div>
      <button onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="mobile-menu" className="md:hidden text-black hover:text-purple-500 transition-colors duration-200">
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {isMenuOpen && (
        <motion.div
          id="mobile-menu"
          className="md:hidden w-[70vw] sm:w-[50vw] fixed h-screen justify-center items-center bg-white text-black right-0 top-0 z-40 shadow-lg"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -20 }}
          transition={{ duration: 0.3 }}
        >
          <div className="flex flex-col items-start h-screen justify-center space-y-4">
            {links.map((l) => (
              <React.Fragment key={l.href}>
                <a href={l.href} className="w-full px-6 hover:text-purple-800 rounded-lg transition-colors duration-200" onClick={toggleMenu}>
                  {l.label}
                </a>
                <hr className="border-black/20 w-full" />
              </React.Fragment>
            ))}
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
}

