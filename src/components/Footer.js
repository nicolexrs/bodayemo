"use client";
import React from "react";
import Link from "next/link";
import Image from "next/image";
import { Instagram, Youtube, Facebook } from "@/components/icons";
import { navLinks, navSocials } from "@/data/navigation";
import { services } from "@/data/services";
import { footerMetaLinks } from "@/data/footer";

const socialIconMap = {
  instagram: Instagram,
  youtube: Youtube,
  facebook: Facebook,
};

const isInternalHref = (href) => href.startsWith("/");

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="w-full bg-black text-gray-400 py-20 px-6 md:px-12 lg:px-24 border-t border-white/10">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
          {/* Brand Column */}
          <div className="space-y-6">
            <Link href="/" className="inline-flex items-center gap-3 group">
              <div className="relative overflow-hidden rounded-full border border-white/10 group-hover:border-brand transition-colors duration-300">
                <Image
                  src="/by.jpg"
                  alt="Bodayemo Inc."
                  width={56}
                  height={56}
                  className="w-12 h-12 grayscale group-hover:grayscale-0 transition-all duration-300"
                />
              </div>
              <span className="text-xl font-bold text-white tracking-wide">
                Bodayemo
              </span>
            </Link>
            <p className="text-sm leading-relaxed text-gray-500 max-w-xs">
              Crafting memorable experiences and engaging stories. We blend
              stage presence with production strategy for brands that dare to
              stand out.
            </p>
            <div className="flex items-center gap-4 pt-2">
              {navSocials.map((social) => {
                const Icon = socialIconMap[social.icon];
                if (!Icon) return null;
                return (
                  <a
                    key={social.href}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={social.label}
                    className="p-2 rounded-full bg-white/5 hover:bg-brand hover:text-white transition-all duration-300 hover:-translate-y-1"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">Explore</h3>
            <ul className="space-y-3">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm hover:text-brand hover:pl-2 transition-all duration-300 block"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">
              Services
            </h3>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link
                    href={`/services/${service.slug}`}
                    className="text-sm hover:text-brand hover:pl-2 transition-all duration-300 block"
                  >
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-white font-bold mb-6 tracking-wide">
              Stay Connected
            </h3>
            <p className="text-sm mb-4 text-gray-500">
              Join our newsletter for the latest updates and exclusive offers.
            </p>
            <form
              className="flex flex-col gap-3"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for subscribing!");
              }}
            >
              <input
                type="email"
                required
                placeholder="Enter your email"
                className="w-full rounded-lg bg-white/5 border border-white/10 px-4 py-3 text-sm text-white placeholder:text-gray-600 focus:outline-none focus:border-brand focus:ring-1 focus:ring-brand transition-all"
              />
              <button
                type="submit"
                className="w-full rounded-lg bg-brand text-white text-sm font-semibold px-4 py-3 hover:bg-brand-deep shadow-lg shadow-brand/20 transition-all duration-300"
              >
                Subscribe
              </button>
            </form>
          </div>
        </div>

        <div className="mt-20 pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-6 text-xs text-gray-600">
          <p>&copy; {year} Bodayemo Inc. All rights reserved.</p>
          <div className="flex flex-wrap justify-center gap-6">
            {footerMetaLinks.map((link, index) => (
              <React.Fragment key={`${link.href}-${index}`}>
                {isInternalHref(link.href) ? (
                  <Link
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </Link>
                ) : (
                  <a
                    href={link.href}
                    className="hover:text-white transition-colors"
                  >
                    {link.label}
                  </a>
                )}
              </React.Fragment>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
