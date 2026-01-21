"use client";
import Link from "next/link";
import { motion } from "framer-motion";
import { containerVariants, itemVariants, scaleOnHover } from "@/lib/motion";
import { services } from "@/data/services";
import { ChevronRight } from "@/components/icons";

export default function ServicesSection() {
  return (
    <motion.section
      id="services"
      className="py-32 px-6 md:px-12 lg:px-24 bg-brand-deep relative overflow-hidden"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.1 }}
      variants={containerVariants}
    >
      {/* Background Ambience - Animated Pulse */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden pointer-events-none">
        <motion.div 
          animate={{ scale: [1, 1.2, 1], opacity: [0.3, 0.6, 0.3] }}
          transition={{ duration: 8, repeat: Infinity, ease: "easeInOut" }}
          className="absolute top-[-10%] left-[-10%] w-[600px] h-[600px] bg-brand/30 rounded-full blur-[120px]" 
        />
        <motion.div 
          animate={{ scale: [1, 1.3, 1], opacity: [0.2, 0.5, 0.2] }}
          transition={{ duration: 10, repeat: Infinity, ease: "easeInOut", delay: 1 }}
          className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-soft/20 rounded-full blur-[120px]" 
        />
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center mb-20 space-y-4">
          <motion.div variants={itemVariants} className="inline-block">
             <span className="px-4 py-1.5 rounded-full border border-white/20 bg-white/5 text-white/90 text-sm font-medium tracking-wider uppercase backdrop-blur-sm shadow-xl">
               What We Do
             </span>
          </motion.div>
          
          <motion.h2 variants={itemVariants} className="text-4xl md:text-6xl font-black text-white tracking-tight drop-shadow-2xl">
            Services that <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-soft to-white animate-pulse">Captivate</span>
          </motion.h2>
          
          <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/70 max-w-2xl mx-auto font-light leading-relaxed">
            From commanding stages to crafting digital stories, we provide the expertise to elevate your brand&apos;s presence.
          </motion.p>
        </div>
        
        <motion.div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8" variants={containerVariants}>
          {services.map((service, index) => (
            <motion.div
              key={service.slug}
              className="group relative bg-black/20 hover:bg-black/40 backdrop-blur-xl border border-white/10 p-8 rounded-[2.5rem] transition-all duration-500 overflow-hidden flex flex-col hover:-translate-y-2 hover:shadow-[0_20px_40px_-15px_rgba(var(--brand-deep),0.5)]"
              variants={itemVariants}
              custom={index}
              whileHover={{ rotateX: 5, rotateY: 5, scale: 1.02 }}
              style={{ perspective: 1000 }}
            >
              {/* Hover Glow Effect */}
              <div className="absolute inset-0 bg-gradient-to-br from-brand/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" />
              
              {/* Moving Shine */ }
              <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:animate-shine pointer-events-none z-0" />

              <div className="relative z-10 flex flex-col h-full">
                <div className="w-18 h-18 rounded-2xl bg-white/10 flex items-center justify-center text-4xl mb-6 group-hover:scale-110 group-hover:rotate-6 group-hover:bg-brand group-hover:text-white transition-all duration-300 shadow-2xl group-hover:shadow-brand/50 border border-white/5">
                  {service.icon}
                </div>
                
                <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-brand-soft transition-colors tracking-tight">
                  {service.title}
                </h3>
                
                <p className="text-white/60 text-base leading-relaxed mb-8 flex-grow group-hover:text-white/90 transition-colors">
                  {service.desc}
                </p>
              
                <Link
                  href={`/services/${service.slug}`}
                  className="inline-flex items-center gap-2 text-white font-bold group/link mt-auto self-start"
                >
                  <span className="relative overflow-hidden border-b border-white/30 group-hover/link:border-brand-soft pb-1 transition-colors duration-300">
                    <span className="inline-block translate-y-0 group-hover/link:-translate-y-full transition-transform duration-300">
                      Explore Service
                    </span>
                    <span className="absolute top-0 left-0 inline-block translate-y-full group-hover/link:translate-y-0 transition-transform duration-300 text-brand-soft">
                      Explore Service
                    </span>
                  </span>
                  <ChevronRight className="w-4 h-4 text-white/50 group-hover/link:text-brand-soft group-hover/link:translate-x-1 transition-all" />
                </Link>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </motion.section>
  );
}
