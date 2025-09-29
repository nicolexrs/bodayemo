import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PackagesSection from "@/components/sections/PackagesSection";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Packages | Bodayemo Inc.",
  description: "Compare Bodayemo Inc. packages for MC experiences, content amplification, and service upgrades tailored to your event goals.",
};

export default function PackagesPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col items-center overflow-hidden">
      <Navbar />
      <main className="w-full bg-white pt-14">
        <PageHero
          title="Packages built for every stage"
          tagline="Curated Experiences"
          description="Pick a ready-to-go experience or mix and match add-ons to match the energy of your celebration, launch, or corporate gathering."
          cta={
            <Link
              href="/services"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-contrast shadow transition-all duration-300 hover:bg-brand-deep"
            >
              See individual services
            </Link>
          }
        />
        <div className="space-y-24">
          <PackagesSection />
          <section className="px-6 md:px-20 lg:px-60 pb-24">
            <div className="rounded-3xl bg-white border border-gray-200 shadow-xl p-10 md:p-16 text-center">
              <h2 className="text-2xl md:text-3xl font-semibold text-gray-900 mb-4">Looking for a bespoke bundle?</h2>
              <p className="text-gray-600 mb-8 text-base md:text-lg">
                Share your brief and we will craft a tailored package that delivers the exact mix of hosting, storytelling, and media coverage you need.
              </p>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-contrast shadow transition-all duration-300 hover:bg-brand-deep"
              >
                Tell us about your event
              </Link>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
