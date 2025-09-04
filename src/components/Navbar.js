"use client";
import React, { useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { MenuIcon, XIcon, Instagram, Youtube } from "./icons";

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

  const socials = [
    { href: "https://instagram.com/bodayemo", label: "Instagram", Icon: Instagram },
    { href: "https://youtube.com/@bodayemo", label: "YouTube", Icon: Youtube },
  ];

  return (
    <motion.nav
      role="navigation"
      className="fixed top-0 z-50 w-full bg-white backdrop-blur text-black py-2 px-4 lg:px-60 md:px-20 flex justify-between items-center shadow-2xl"
      initial={{ y: 0, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.1, delay: 0 }}
    >
      <motion.a href="#hero" className="tracking-wide">
        <Image src="/by.jpg" alt="Bodayemo logo" width={56} height={56} className="w-10 md:w-14 h-auto" priority />
      </motion.a>
      <div className="hidden md:flex items-center space-x-8">
        {links.map((l) => (
          <motion.a key={l.href} href={l.href} className="hover:text-brand transition-colors duration-200" whileHover={{ scale: 1.05 }}>
            {l.label}
          </motion.a>
        ))}
         </div>
        <div className="ml-2 hidden  md:flex items-center space-x-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={href}
              href={href}
              aria-label={label}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-brand transition-colors duration-200"
            >
              <Icon />
            </a>
          ))}
       
       
      </div>
  
      <button onClick={toggleMenu} aria-expanded={isMenuOpen} aria-controls="mobile-menu" className="md:hidden text-black hover:text-brand transition-colors duration-200">
        {isMenuOpen ? <XIcon /> : <MenuIcon />}
      </button>

      {isMenuOpen && (
        <>
          {/* Backdrop */}
          <div
            className="fixed inset-0 bg-black/40 backdrop-blur-[2px] md:hidden z-40"
            onClick={toggleMenu}
            aria-hidden
          />
          {/* Drawer */}
          <motion.div
            id="mobile-menu"
            role="dialog"
            aria-modal="true"
            className="md:hidden fixed top-0 right-0 h-screen w-[82vw] sm:w-[380px] z-50 bg-white text-black shadow-2xl border-l border-gray-200 overflow-y-auto"
            initial={{ x: "100%", opacity: 1 }}
            animate={{ x: 0, opacity: 1 }}
            exit={{ x: "100%", opacity: 1 }}
            transition={{ type: "spring", stiffness: 260, damping: 28 }}
          >
            {/* Header */}
            <div className="flex items-center justify-between px-6 py-4 border-b border-gray-200">
              <a href="#hero" onClick={toggleMenu} className="tracking-wide flex items-center gap-3">
                <Image className="w-10 h-10 rounded-full" src="/by.jpg" alt="Bodayemo" width={40} height={40} />
                <span className="font-semibold">Bodayemo Inc.</span>
              </a>
              <button onClick={toggleMenu} aria-label="Close menu" className="text-gray-600 hover:text-black">
                <XIcon />
              </button>
            </div>

            {/* Links */}
            <nav className="px-6 py-6">
              <ul className="space-y-2">
                {links.map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      onClick={toggleMenu}
                      className="block rounded-lg px-4 py-3 text-lg font-medium text-gray-800 hover:bg-gray-50 hover:text-brand transition-colors"
                    >
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>

              <a
                href="#contact"
                onClick={toggleMenu}
                className="mt-6 inline-flex w-full items-center justify-center rounded-xl bg-brand text-brand-contrast px-4 py-3 font-semibold shadow hover:bg-brand-deep transition-colors"
              >
                Book Now
              </a>

              <div className="mt-6 flex items-center gap-4">
                {socials.map(({ href, label, Icon }) => (
                  <a
                    key={href}
                    href={href}
                    aria-label={label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-gray-600 hover:text-brand transition-colors"
                    onClick={toggleMenu}
                  >
                    <Icon />
                  </a>
                ))}
              </div>

             
            </nav>
          </motion.div>
        </>
      )}
    </motion.nav>
  );
}
