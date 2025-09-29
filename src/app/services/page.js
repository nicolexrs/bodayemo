import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ServicesSection from "@/components/sections/ServicesSection";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Services | Bodayemo Inc.",
  description: "Browse the full catalogue of hosting, content, and experiential services crafted by Bodayemo Inc. for modern brands and events.",
};

export default function ServicesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col items-center overflow-hidden">
      <Navbar />
      <main className="w-full bg-white pt-14">
        <PageHero
          title="Services that spark unforgettable experiences"
          tagline="What We Do"
          
        />
        <div className="space-y-24">
          <ServicesSection />
          <section className="px-6 md:px-20 lg:px-60 pb-24">
            <div className="rounded-3xl bg-gradient-to-r from-brand-soft/10 via-white to-brand-soft/20 p-10 md:p-16 text-center shadow-lg border border-brand-soft/20">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Need something custom?</h2>
              <p className="text-gray-600 mb-8 text-base md:text-lg">
                We tailor every engagement to fit your event goals. Tell us about the ambience, audience, and outcomes you want, and we will design the perfect mix of services.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-contrast shadow transition-all duration-300 hover:bg-brand-deep"
              >
                Start a project conversation
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
