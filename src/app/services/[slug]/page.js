import { notFound } from "next/navigation";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { services } from "@/data/services";
import { packagesByService } from "@/data/packages";
import ServiceBookingForm from "./booking-form";
import * as motion from "framer-motion/client";

function getService(slug) {
  return services.find((service) => service.slug === slug);
}

export function generateStaticParams() {
  return services.map((service) => ({ slug: service.slug }));
}

export async function generateMetadata({ params }) {
  const { slug } = await params;
  const service = getService(slug);
  if (!service) {
    return { title: "Service not found" };
  }
  return {
    title: `${service.title} | Book Service`,
    description: service.longDesc ?? service.desc,
  };
}

export default async function ServiceBookingPage({ params, searchParams }) {
  const { slug } = await params;
  const service = getService(slug);
  const resolvedSearchParams = await searchParams;

  if (!service) {
    notFound();
  }

  const servicePackages = packagesByService[service.slug] ?? [];
  const initialPackageSlug =
    typeof resolvedSearchParams?.package === "string" ? resolvedSearchParams.package : "";

  return (
    <div className="min-h-screen flex flex-col bg-white">
      <Navbar />
      
      {/* Cinematic Hero Section */}
      <div className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-black">
        <div className="absolute inset-0 bg-gradient-to-br from-brand-deep/90 via-black to-black opacity-90 z-10" />
        {/* Abstract Background Shapes */}
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand/30 rounded-full blur-[120px] mix-blend-screen pointer-events-none" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-blue-600/20 rounded-full blur-[100px] mix-blend-screen pointer-events-none" />
        
        <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 relative z-20 text-center md:text-left">
           <motion.div 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6 }}
             className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-brand-soft text-sm font-bold tracking-widest uppercase mb-6"
           >
              <span className="text-lg">{service.icon}</span>
              <span>Premium Service</span>
           </motion.div>
           
           <motion.h1 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.1 }}
             className="text-5xl md:text-7xl font-black text-white mb-6 leading-tight tracking-tight"
           >
             {service.title}
           </motion.h1>
           
           <motion.p 
             initial={{ opacity: 0, y: 20 }}
             animate={{ opacity: 1, y: 0 }}
             transition={{ duration: 0.6, delay: 0.2 }}
             className="text-xl md:text-2xl text-white/70 max-w-3xl font-light leading-relaxed"
           >
             {service.longDesc ?? service.desc}
           </motion.p>
        </div>
      </div>

      <main className="flex-1 bg-white relative z-20 -mt-10 rounded-t-[3rem] border-t border-white/50 shadow-[0_-20px_50px_rgba(0,0,0,0.1)]">
        <div className="max-w-5xl mx-auto px-6 md:px-12 py-20 md:py-32">
          
           {/* Deliverables Grid & Pricing */}
           {service.deliverables?.length ? (
             <motion.div 
               initial={{ opacity: 0, y: 20 }}
               whileInView={{ opacity: 1, y: 0 }}
               viewport={{ once: true }}
               className="space-y-16"
             >
               <div className="text-center max-w-2xl mx-auto">
                 <h2 className="text-3xl md:text-4xl font-black text-gray-900 tracking-tight mb-6">Experience the Excellence</h2>
                 <p className="text-gray-500 text-lg">Here is what you can expect when you partner with us for your {service.title.toLowerCase()}.</p>
               </div>
               
               <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
                 {service.deliverables.map((item, i) => (
                   <motion.div 
                     key={item} 
                     initial={{ opacity: 0, scale: 0.95 }}
                     whileInView={{ opacity: 1, scale: 1 }}
                     viewport={{ once: true }}
                     transition={{ delay: i * 0.1 }}
                     className="flex flex-col gap-4 p-8 rounded-[2rem] bg-gray-50 border border-gray-100 hover:bg-white hover:border-brand/20 hover:shadow-xl hover:shadow-brand/5 transition-all duration-300 group min-h-[180px]"
                   >
                     <div className="w-12 h-12 rounded-2xl bg-white border border-gray-100 flex items-center justify-center text-brand shadow-sm group-hover:bg-brand group-hover:text-white group-hover:border-brand transition-colors duration-300">
                        <span className="text-2xl">✓</span>
                     </div>
                     <span className="text-xl text-gray-700 font-medium leading-relaxed group-hover:text-gray-900 transition-colors">{item}</span>
                   </motion.div>
                 ))}
               </div>

               {service.startingPrice && (
                 <div className="mt-16 mb-20 p-10 md:p-14 rounded-[2.5rem] bg-black text-white flex flex-col md:flex-row items-center justify-between gap-10 shadow-2xl relative overflow-hidden group text-center md:text-left">
                   {/* Background effects */}
                   <div className="absolute top-[-50%] right-[-10%] w-[500px] h-[500px] bg-brand/30 rounded-full blur-[100px] group-hover:bg-brand/40 transition-colors duration-700 pointer-events-none" />
                   <div className="absolute bottom-[-50%] left-[-10%] w-[400px] h-[400px] bg-brand-deep/30 rounded-full blur-[100px] pointer-events-none" />
                   
                   <div className="relative z-10 flex-1">
                     <span className="block text-brand-soft/80 font-bold uppercase tracking-widest text-sm mb-3">Investments Start From</span>
                     <div className="text-5xl md:text-6xl font-black text-white tracking-tight">{service.startingPrice}</div>
                     <p className="mt-4 text-white/60 max-w-md">Secure the date for your event or project with a booking today.</p>
                   </div>

                   <div className="relative z-10 shrink-0">
                      <a href="#booking-form" className="px-8 py-4 rounded-full bg-white text-black font-bold shadow-lg hover:bg-brand hover:text-white transition-all duration-300">
                        Scroll to Book
                      </a>
                   </div>
                 </div>
               )}

               {/* Inline Booking Form Section */}
               <div id="booking-form" className="relative max-w-4xl mx-auto pt-16">
                 <div className="absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent" />
                 <ServiceBookingForm 
                    service={service}
                    packages={servicePackages}
                    initialPackageSlug={initialPackageSlug}
                 />
               </div>
             </motion.div>
           ) : null}

        </div>
      </main>
      <Footer />
    </div>
  );
}
