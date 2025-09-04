"use client";
import Image from "next/image";
import { Instagram, Youtube } from "@/components/icons";

export default function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="w-full mt-16 bg-black backdrop-blur border-t border-gray-800 text-gray-300">
      <div className="lg:px-60 md:px-20 mx-auto px-10 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <a href="#hero" className="inline-flex items-center gap-3">
              <Image src="/by.jpg" alt="Bodayemo Inc." width={56} height={56} className="rounded-full shadow" />
              <span className="text-xl font-semibold tracking-wide">Bodayemo Inc.</span>
            </a>
            <p className="mt-4 text-sm leading-relaxed">
              Events, ads, and artiste content with professional flair. We craft memorable experiences and engaging stories for brands and audiences.
            </p>
            <div className="mt-4 flex items-center gap-4">
              <a href="https://www.instagram.com/bodayemo" target="_blank" rel="noopener noreferrer" aria-label="Instagram" className="hover:text-brand transition-colors">
                <Instagram />
              </a>
              <a href="https://www.youtube.com/@bodayemo" target="_blank" rel="noopener noreferrer" aria-label="YouTube" className="hover:text-brand transition-colors">
                <Youtube />
              </a>
            </div>
          </div>

          {/* Quick links */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">Quick Links</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li><a className="hover:text-brand transition-colors" href="#about">About</a></li>
              <li><a className="hover:text-brand transition-colors" href="#services">Services</a></li>
              <li><a className="hover:text-brand transition-colors" href="#packages">Packages</a></li>
              <li><a className="hover:text-brand transition-colors" href="#gallery">Gallery</a></li>
              <li><a className="hover:text-brand transition-colors" href="#contact">Contact</a></li>
            </ul>
          </div>

          {/* Services */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">What We Do</h3>
            <ul className="mt-4 space-y-2 text-sm">
              <li>Master of Ceremony (MC)</li>
              <li>Video Editing & Post‑production</li>
              <li>Script Writing</li>
              <li>Public Speaking & Training</li>
              <li>Content Creation</li>
              <li>Event Consultancy</li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-gray-900 dark:text-gray-100">Stay Updated</h3>
            <p className="mt-4 text-sm">Get news about events, content drops, and offers.</p>
            <form
              className="mt-4 flex items-center gap-2"
              onSubmit={(e) => { e.preventDefault(); alert("Thanks for subscribing!"); }}
            >
              <label htmlFor="newsletter" className="sr-only">Email address</label>
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
            <a href="#contact" className="hover:text-brand">Contact</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-brand">Privacy</a>
            <span className="opacity-40">•</span>
            <a href="#" className="hover:text-brand">Terms</a>
            <span className="opacity-40">•</span>
            <a href="#hero" className="hover:text-brand">Back to top</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
