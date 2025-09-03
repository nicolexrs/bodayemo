"use client";
import { Instagram, Youtube } from "@/components/icons";

export default function Footer() {
  return (
    <footer className="w-full bg-gray-900 border-t border-gray-800 p-8 mt-16 text-center text-gray-400">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
        <p>&copy; {new Date().getFullYear()} Bodayemo Entertainment. All rights reserved.</p>
        <div className="flex space-x-6">
          <a href="https://www.instagram.com/bodayemo" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors duration-300">
            <Instagram />
          </a>
          <a href="https://www.youtube.com/@bodayemo" target="_blank" rel="noopener noreferrer" className="hover:text-purple-500 transition-colors duration-300">
            <Youtube />
          </a>
        </div>
      </div>
    </footer>
  );
}

