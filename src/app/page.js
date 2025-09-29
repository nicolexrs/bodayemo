import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { HeroSection, AboutSection, ServicesSection, PackagesSection, GallerySection, ContactSection } from "@/components/sections";

export default function App() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col items-center overflow-hidden">
      <Navbar />
      <main className="w-full bg-white">
        <HeroSection />
        <div className="space-y-24">
          <AboutSection />
          <ServicesSection />
            <h2 className="text-4xl font-bold mb-0 text-center text-brand underline">Packages</h2>
          <PackagesSection />
          <GallerySection />
          <ContactSection />
        </div>
      </main>
      <Footer />
    </div>
  );
}
