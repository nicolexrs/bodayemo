import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { packagesByService } from "@/data/packages";
import ServiceBookingForm from "./booking-form";

function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export function generateMetadata({ params }) {
  const service = getService(params.slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: `${service.title} | Book Service`,
    description: service.longDesc ?? service.desc,
  };
}

export default function ServiceBookingPage({ params, searchParams }) {
  const service = getService(params.slug);

  if (!service) {
    notFound();
  }

  const servicePackages = packagesByService[service.slug] ?? [];
  const initialPackageSlug =
    typeof searchParams?.package === "string" ? searchParams.package : "";

  return (
    <div className="min-h-screen flex flex-col bg-gray-50 text-gray-900">
      <Navbar />
      <main className="flex-1 bg-gradient-to-b from-white via-gray-50 to-gray-100 py-16 md:py-24">
        <div className="max-w-5xl mx-auto px-6 md:px-8 lg:px-0">
          <div className="mb-12">
            <span className="inline-flex items-center gap-2 text-xs font-semibold uppercase tracking-wider text-brand-soft">
              Service Booking
            </span>
            <h1 className="mt-2 text-4xl md:text-5xl font-extrabold text-gray-900">{service.title}</h1>
            <p className="mt-4 text-lg text-gray-600 md:text-xl max-w-3xl">{service.longDesc ?? service.desc}</p>
          </div>

          {service.deliverables?.length ? (
            <div className="mb-14 rounded-2xl bg-white shadow-lg border border-gray-200 p-8">
              <h2 className="text-2xl font-semibold text-brand mb-4">What you get</h2>
              <ul className="space-y-3 text-gray-600">
                {service.deliverables.map((item) => (
                  <li key={item} className="flex items-start gap-3">
                    <span className="mt-1 h-2 w-2 rounded-full bg-brand-soft" aria-hidden />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              {service.startingPrice ? (
                <p className="mt-6 inline-flex items-center gap-2 text-brand font-semibold text-lg">
                  <span>Starting from</span>
                  <span className="px-3 py-1 rounded-full bg-brand-soft/10 text-brand-soft">{service.startingPrice}</span>
                </p>
              ) : null}
            </div>
          ) : null}

          <ServiceBookingForm
            service={service}
            packages={servicePackages}
            initialPackageSlug={initialPackageSlug}
          />
        </div>
      </main>
      <Footer />
    </div>
  );
}
