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
    <footer className="w-full mt-16 bg-black backdrop-blur border-t border-gray-800 text-gray-300">
      <div className="lg:px-60 md:px-20 mx-auto px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <Link href="/" className="inline-flex items-center gap-3">
              <Image src="/by.jpg" alt="Bodayemo Inc." width={56} height={56} className="rounded-full shadow" />
              <span className="text-xl font-semibold tracking-wide">Bodayemo Inc.</span>
            </Link>
            <p className="mt-4 text-sm leading-relaxed">
              Events, ads, and artiste content with professional flair. We craft memorable experiences and engaging stories for brands and audiences.
            </p>
            <div className="mt-4 flex items-center gap-4">
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
                    className="hover:text-brand transition-colors"
                  >
                    <Icon />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-100">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link className="hover:text-brand transition-colors" href={link.href}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-100">What We Do</h3>
            <ul className="mt-4 space-y-2 text-sm">
              {services.map((service) => (
                <li key={service.slug}>
                  <Link href={`/services/${service.slug}`} className="hover:text-brand transition-colors">
                    {service.title}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-100">Stay Updated</h3>
            <p className="mt-4 text-sm">Get news about events, content drops, and offers.</p>
            <form
              className="mt-4 flex items-center gap-2"
              onSubmit={(e) => {
                e.preventDefault();
                alert("Thanks for subscribing!");
              }}
            >
              <label htmlFor="newsletter" className="sr-only">
                Email address
              </label>
              <input
                id="newsletter"
                type="email"
                required
                placeholder="you@example.com"
                className="flex-1 rounded-lg border border-gray-300 dark:border-gray-700 bg-white/70 dark:bg-black/40 px-3 py-2 text-sm outline-none focus:border-brand"
              />
              <button
                type="submit"
                className="rounded-lg bg-brand text-brand-contrast text-sm font-semibold px-4 py-2 hover:bg-brand-deep transition-colors"
              >
                Subscribe
              </button>
            </form>
            <p className="mt-2 text-xs text-gray-500 dark:text-gray-400">We respect your privacy. Unsubscribe any time.</p>
          </div>
        </div>

        <div className="mt-10 border-t border-gray-200 dark:border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs">&copy; {year} Bodayemo Inc. All rights reserved.</p>
          <div className="flex items-center gap-4 text-xs">
            {footerMetaLinks.map((link, index) => {
              const linkContent = isInternalHref(link.href) ? (
                <Link href={link.href} className="hover:text-brand">
                  {link.label}
                </Link>
              ) : (
                <a href={link.href} className="hover:text-brand">
                  {link.label}
                </a>
              );

              return (
                <React.Fragment key={`${link.href}-${index}`}>
                  {linkContent}
                  {index < footerMetaLinks.length - 1 ? <span className="opacity-40">|</span> : null}
                </React.Fragment>
              );
            })}
          </div>
        </div>
      </div>
    </footer>
  );
}
