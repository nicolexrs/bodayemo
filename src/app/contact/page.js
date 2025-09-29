import Link from "next/link";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import ContactSection from "@/components/sections/ContactSection";
import PageHero from "@/components/PageHero";

export const metadata = {
  title: "Contact | Bodayemo Inc.",
  description: "Reach out to Bodayemo Inc. to book hosting, storytelling, or content support for your next event or campaign.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col items-center overflow-hidden">
      <Navbar />
      <main className="w-full bg-white pt-24">
        <PageHero
          title="Let's build your next unforgettable moment"
          tagline="Contact"
          description="Share your brief and we will respond with availability, ideas, and how we can help you impress your audience."
          cta={
            <Link
              href="tel:+2347019863196"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-contrast shadow transition-all duration-300 hover:bg-brand-deep"
            >
              Call +234 701 986 3196
            </Link>
          }
        />
        <div className="space-y-24">
          <ContactSection />
          <section className="px-6 md:px-20 lg:px-60 pb-24">
            <div className="grid gap-8 md:grid-cols-3">
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Quick chat</h2>
                <p className="text-gray-600 text-sm">Prefer WhatsApp or a quick call? Reach out directly and we will respond within business hours.</p>
                <div className="mt-4 space-y-2 text-sm font-medium text-brand">
                  <a href="tel:+2347019863196" className="block hover:underline">+234 701 986 3196</a>
                  <a href="mailto:hello@bodayemo.com" className="block hover:underline">hello@bodayemo.com</a>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Follow our stories</h2>
                <p className="text-gray-600 text-sm">Stay updated with event recaps, behind-the-scenes moments, and upcoming shows.</p>
                <div className="mt-4 space-y-2 text-sm font-medium text-brand">
                  <a href="https://instagram.com/bodayemo" target="_blank" rel="noopener noreferrer" className="block hover:underline">Instagram</a>
                  <a href="https://youtube.com/@bodayemo" target="_blank" rel="noopener noreferrer" className="block hover:underline">YouTube</a>
                  <a
                    href="https://www.facebook.com/share/1BodLqwz8w/?mibextid=wwXIfr"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="block hover:underline"
                  >
                    Facebook
                  </a>
                </div>
              </div>
              <div className="rounded-2xl border border-gray-200 bg-white p-8 shadow">
                <h2 className="text-lg font-semibold text-gray-900 mb-2">Booking checklist</h2>
                <ul className="text-gray-600 text-sm space-y-2 list-disc list-inside">
                  <li>Event date, location, and format</li>
                  <li>Audience size and target vibe</li>
                  <li>Required deliverables or capture needs</li>
                  <li>Budget window and timeline</li>
                </ul>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
