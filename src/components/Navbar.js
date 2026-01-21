"use client";
import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { MenuIcon, XIcon, Instagram, Youtube, Facebook } from "./icons";
import { navLinks, navSocials } from "@/data/navigation";

const socialIconMap = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
};

export default function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const pathname = usePathname();
  const isHomepage = pathname === "/";

  // Handle scroll effect for glassmorphism intensity
  useEffect(() => {
    if (!isHomepage) {
      setScrolled(true);
      return;
    }

    const handleScroll = () => setScrolled(window.scrollY > 20);
    // Check initial scroll
    handleScroll();
    
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, [isHomepage]);

  const toggleMenu = () => setIsMenuOpen((s) => !s);

  // Prevent scrolling when menu is open
  useEffect(() => {
    if (isMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
  }, [isMenuOpen]);

  return (
    <>
      <motion.nav
        role="navigation"
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
          scrolled
            ? "py-3 bg-white/80 backdrop-blur-md shadow-md border-b border-white/20"
            : "py-6 bg-transparent"
        }`}
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center">
          {/* Logo */}
          <Link
            href="/"
            className="relative z-50 flex items-center gap-3 group"
          >
            <div className="relative overflow-hidden rounded-full border-2 border-transparent group-hover:border-brand transition-colors duration-300">
              <Image
                src="/by.jpg"
                alt="Bodayemo logo"
                width={48}
                height={48}
                className="w-10 h-10 md:w-12 md:h-12 object-cover"
                priority
              />
            </div>
            <span
              className={`font-bold text-lg md:text-xl tracking-tight transition-colors duration-300 ${scrolled || isMenuOpen ? "text-gray-900" : "text-white mix-blend-difference"}`}
            >
              Bodayemo
            </span>
          </Link>

          {/* Desktop Nav */}
          <div className="hidden md:flex items-center space-x-1 bg-white/10 backdrop-blur-sm rounded-full px-2 py-1.5 border border-white/10 shadow-sm">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`relative px-5 py-2 rounded-full text-sm font-medium transition-all duration-300 overflow-hidden group ${
                  scrolled
                    ? "text-gray-700 hover:text-white"
                    : "text-white hover:text-white"
                }`}
              >
                <span className="relative z-10">{link.label}</span>
                <span className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-100 rounded-full -z-0 transition-opacity duration-300" />
                <span className="absolute inset-0 bg-brand opacity-0 group-hover:opacity-100 rounded-full -z-0 blur-md transition-opacity duration-300" />
              </Link>
            ))}
          </div>

          {/* Desktop Socials & CTA */}
          <div className="hidden md:flex items-center space-x-5">
            <div className="flex items-center space-x-3">
              {navSocials.map((social) => {
                const Icon = socialIconMap[social.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    aria-label={social.label}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`transition-colors duration-200 hover:scale-110 transform ${scrolled ? "text-gray-500 hover:text-brand" : "text-white/80 hover:text-white"}`}
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>

            <Link
              href="/contact"
              className="px-6 py-2.5 rounded-full bg-brand text-white text-sm font-semibold shadow-lg shadow-brand/30 hover:shadow-brand/50 hover:-translate-y-0.5 transition-all duration-300"
            >
              Book Now
            </Link>
          </div>

          {/* Mobile Toggle */}
          <button
            onClick={toggleMenu}
            className={`md:hidden relative z-50 p-2 rounded-full transition-colors ${
              scrolled || isMenuOpen
                ? "text-gray-900 bg-gray-100"
                : "text-white bg-white/20 backdrop-blur-md"
            }`}
            aria-label="Toggle menu"
          >
            <motion.div
              animate={isMenuOpen ? "open" : "closed"}
              variants={{
                open: { rotate: 180 },
                closed: { rotate: 0 },
              }}
              transition={{ duration: 0.4 }}
            >
              {isMenuOpen ? <XIcon /> : <MenuIcon />}
            </motion.div>
          </button>
        </div>
      </motion.nav>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, backdropFilter: "blur(0px)" }}
            animate={{ opacity: 1, backdropFilter: "blur(20px)" }}
            exit={{ opacity: 0, backdropFilter: "blur(0px)" }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-40 bg-black/90 md:hidden overflow-hidden flex flex-col items-center justify-center text-center"
          >
            {/* Background decorations - Dark Glass */}
            <div className="absolute top-[-20%] right-[-20%] w-[500px] h-[500px] bg-brand/20 rounded-full blur-[100px] pointer-events-none z-0" />
            <div className="absolute bottom-[-20%] left-[-20%] w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[100px] pointer-events-none z-0" />

            <div className="relative z-10 w-full px-6 flex flex-col gap-10 h-full justify-center pb-20 pt-20">
              <nav className="flex flex-col gap-8">
                {navLinks.map((link, i) => (
                  <motion.div
                    key={link.href}
                    initial={{ opacity: 0, y: 30 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    transition={{
                      delay: 0.1 + i * 0.1,
                      duration: 0.5,
                      ease: [0.22, 1, 0.36, 1],
                    }}
                  >
                    <Link
                      href={link.href}
                      onClick={toggleMenu}
                      className="text-4xl font-black text-white hover:text-brand transition-colors tracking-tight drop-shadow-md"
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                ))}
              </nav>

              <motion.div
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0 }}
                transition={{ delay: 0.4, duration: 0.5 }}
                className="w-full max-w-xs mx-auto space-y-10"
              >
                <div className="h-px w-32 mx-auto bg-white/10" />

                <Link
                  href="/contact"
                  onClick={toggleMenu}
                  className="block w-full py-5 rounded-full bg-brand text-white font-bold text-xl shadow-lg shadow-brand/30 hover:bg-brand-deep hover:scale-105 transition-all duration-300"
                >
                  Book Now
                </Link>

                <div className="flex justify-center gap-8 text-white/50">
                  {navSocials.map((social, i) => {
                    const Icon = socialIconMap[social.icon];
                    if (!Icon) return null;
                    return (
                      <motion.a
                        key={social.href}
                        href={social.href}
                        target="_blank"
                        rel="noopener noreferrer"
                        initial={{ opacity: 0, y: 20 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ delay: 0.5 + i * 0.1 }}
                        className="hover:text-brand transition-colors scale-125 hover:rotate-12 transform duration-300"
                      >
                        <Icon />
                      </motion.a>
                    );
                  })}
                </div>
              </motion.div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
