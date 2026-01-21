"use client";
import { motion } from "framer-motion";
import Link from "next/link";
import Image from "next/image";
import { itemVariants, containerVariants, fadeInUp } from "@/lib/motion";


export default function AboutSection() {
  return (
    <motion.section
      id="about"
      className="py-32 px-6 md:px-12 lg:px-24 flex flex-col justify-center items-center bg-gray-50 overflow-hidden relative"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-brand-soft/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-24 items-center relative z-10">
        {/* Text Content */}
        <motion.div variants={itemVariants} className="space-y-8">
           <div className="flex items-center gap-3">
             <span className="h-px w-10 bg-brand" />
             <span className="text-sm font-bold tracking-[0.25em] uppercase text-brand">Who We Are</span>
           </div>
           
           <h2 className="text-4xl md:text-5xl font-black text-gray-900 leading-[1.1]">
             More than just <br />
             <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-deep to-brand">entertainment</span>.
           </h2>
           
           <p className="text-lg text-gray-600 leading-relaxed">
             <span className="font-bold text-gray-900">Bodayemo Inc.</span> is a creative force transforming how brands and people connect. We combine charismatic hosting with high-end production strategy to turn ordinary events into unforgettable stories.
           </p>
           
           <p className="text-lg text-gray-600 leading-relaxed">
             Whether it&apos;s commanding a stage of thousands or crafting intimate digital content, we bring energy, precision, and a touch of magic to every project.
           </p>

           <div className="pt-4">
             <Link
               href="/about"
               className="inline-flex items-center gap-2 text-brand font-bold uppercase tracking-wider border-b-2 border-brand hover:text-brand-deep hover:border-brand-deep transition-all duration-300 pb-1 group"
             >
               Read Our Story
               <svg
                 xmlns="http://www.w3.org/2000/svg"
                 width="16"
                 height="16"
                 viewBox="0 0 24 24"
                 fill="none"
                 stroke="currentColor"
                 strokeWidth="3"
                 strokeLinecap="round"
                 strokeLinejoin="round"
                 className="w-4 h-4 group-hover:translate-x-1 transition-transform"
               >
                 <path d="m9 18 6-6-6-6" />
               </svg>
             </Link>
           </div>
        </motion.div>

        {/* Visual Content */}
        <motion.div variants={fadeInUp} className="relative">
          <div className="relative aspect-[4/5] w-full rounded-[2.5rem] overflow-hidden shadow-2xl rotate-3 hover:rotate-0 transition-all duration-500 group">
             <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors z-10 duration-500" />
             <Image 
               src="/hero-gala.png"
               alt="Bodayemo hosting an event"
               fill
               className="object-cover scale-105 group-hover:scale-100 transition-transform duration-700"
               sizes="(min-width: 1024px) 50vw, 100vw"
             />
          </div>
          
          {/* Decorative Card */}
          <div className="absolute -bottom-10 -left-10 md:bottom-10 md:-left-12 bg-white/90 backdrop-blur-xl p-6 rounded-2xl shadow-xl border border-white/40 max-w-[240px] z-20 hidden md:block">
            <p className="text-4xl font-black text-brand mb-1">50+</p>
            <p className="text-sm font-medium text-gray-600 uppercase tracking-wide">Stages Hosted</p>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
}

