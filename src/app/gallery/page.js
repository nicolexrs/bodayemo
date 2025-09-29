import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import GallerySection from "@/components/sections/GallerySection";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Gallery | Bodayemo Inc.",
  description: "Take a closer look at highlights from Bodayemo Inc. events, media productions, and behind-the-scenes moments.",
};

export default function GalleryPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col items-center overflow-hidden">
      <Navbar />
      <main className="w-full bg-white pt-24">
        <PageHero
          title="Gallery"
          tagline="Moments in Motion"
          description="Explore a curated selection of images and videos that capture the energy and emotion from our stages and sets."
         
        />
        <div className="space-y-24">
          <GallerySection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
