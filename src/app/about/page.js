"use client";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";
import { containerVariants, itemVariants, fadeInUp } from "@/lib/motion";

const impactMetrics = [
  {
    value: "500+",
    label: "Stages Hosted",
    detail: "Corporate galas, concerts, weddings, memorials, and campaign activations across Africa.",
  },
  {
    value: "70M+",
    label: "Impressions Generated",
    detail: "Content seen across Instagram, YouTube, TikTok, TV, and radio partner channels.",
  },
  {
    value: "30+",
    label: "Partner Brands",
    detail: "Trusted by telecoms, fintech, media houses, development orgs, and startups.",
  },
  {
    value: "24h",
    label: "Response Time",
    detail: "Fast feedback loops that keep approvals moving and momentum high.",
  },
];

const valuePillars = [
  {
    title: "Performance-led Storytelling",
    description: "Every microphone moment follows a narrative arc that guides audiences from anticipation to applause.",
  },
  {
    title: "Audience-first Design",
    description: "We tailor scripts, participation cues, and media touchpoints so every guest feels seen and involved.",
  },
  {
    title: "Reliable Production",
    description: "Planners, AV teams, and vendors rely on us to keep programmes on cue and professional all the way through.",
  },
];

const processSteps = [
  {
    title: "Discover & Align",
    summary: "We unpack ambitions, audience mood, tone of voice, and logistics.",
    points: [
      "Clarify programme objectives and emotional beats.",
      "Review run sheets and timing constraints.",
      "Assign communication channels with planners.",
    ],
  },
  {
    title: "Design the Narrative",
    summary: "Scripts, transitions, and crowd energy cues are crafted for impact.",
    points: [
      "Storyboard the event flow.",
      "Provide talking points and segues.",
      "Recommend music and content assets.",
    ],
  },
  {
    title: "Deliver Moments",
    summary: "We anchor the experience while keeping clients calm and guests energised.",
    points: [
      "Professional hosting and moderation.",
      "Live coordination with technical crews.",
      "Real-time adjustments for timing.",
    ],
  },
  {
    title: "Debrief & Amplify",
    summary: "We close the loop with insights and content opportunities.",
    points: [
      "Capture highlights and testimonials.",
      "Flag footage for fast-turnaround edits.",
      "Share recommendations for future events.",
    ],
  },
];

const audienceSegments = [
  "High-energy concerts",
  "Corporate functions",
  "Luxury celebrations",
  "Brand activations",
  "Media productions",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-white text-gray-900 font-sans flex flex-col">
      <Navbar />
      <main className="w-full pt-20">
        <PageHero
          title="The Energy Behind Unforgettable Experiences"
          tagline="About Bodayemo Inc."
          description="Merging stage presence with production strategy to help brands delight audiences and turn key moments into vibrant stories."
          cta={
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-white text-brand px-8 py-4 text-base font-bold shadow-lg hover:shadow-xl hover:bg-gray-50 transition-all duration-300 transform hover:-translate-y-1"
            >
              Start a Conversation
            </Link>
          }
        />

        <div className="space-y-32 pb-32">
          {/* Intro Section */}
          <motion.section 
            className="px-6 md:px-12 lg:px-24 pt-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-7xl mx-auto grid gap-16 lg:grid-cols-2 items-center">
              <motion.div variants={itemVariants} className="space-y-8">
                <h2 className="text-4xl md:text-5xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-gray-900 to-gray-600">
                  Rooted in performance,<br />powered by strategy.
                </h2>
                <div className="space-y-6 text-lg text-gray-600 leading-relaxed">
                  <p>
                    Bodayemo Entertainment evolved from a charismatic MC into a multidisciplinary entertainment partner.
                    Today we help brands, planners, and media teams execute programmes that stay memorable long after the lights go down.
                  </p>
                  <p>
                    Whether it be a corporate offsite, a milestone celebration, or a viral content brief, we blend stagecraft, audience psychology,
                    and production detail perfectly.
                  </p>
                </div>
                
                <div className="flex flex-wrap gap-3 pt-4">
                  {audienceSegments.map((segment) => (
                    <span
                      key={segment}
                      className="px-4 py-2 rounded-full bg-brand-soft/20 text-brand-deep text-sm font-semibold border border-brand-soft/30"
                    >
                      {segment}
                    </span>
                  ))}
                </div>
              </motion.div>

              <motion.div variants={fadeInUp} className="relative group">
                <div className="relative overflow-hidden rounded-[2rem] shadow-2xl aspect-[4/5] transform hover:scale-[1.02] transition-transform duration-500">
                  <Image
                    src="/i.PNG"
                    alt="Bodayemo hosting"
                    fill
                    sizes="(min-width: 1024px) 40vw, 90vw"
                    className="object-cover"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-80" />
                  
                  <div className="absolute bottom-0 left-0 right-0 p-8 text-white">
                    <p className="text-xs font-bold uppercase tracking-widest text-brand-soft mb-2">Founder Note</p>
                    <p className="text-xl font-medium leading-relaxed mb-4">
                      &quot;Great events do more than entertain. They build trust, move hearts, and spark action.&quot;
                    </p>
                    <p className="text-sm opacity-80">— Bodayemo, Lead Host & Creative Director</p>
                  </div>
                </div>
                
                {/* Decorative element */}
                <div className="absolute -top-10 -right-10 w-40 h-40 bg-brand/10 rounded-full blur-3xl -z-10" />
                <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-blue-500/10 rounded-full blur-3xl -z-10" />
              </motion.div>
            </div>
          </motion.section>

          {/* Metrics Section */}
          <motion.section 
             className="border-y border-gray-100 bg-gray-50/50 py-20"
             initial="hidden"
             whileInView="visible"
             viewport={{ once: true }}
             variants={containerVariants}
          >
             <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
               <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                 {impactMetrics.map((metric, i) => (
                   <motion.div key={i} variants={itemVariants} className="text-center group">
                     <h3 className="text-5xl font-black text-brand mb-2 group-hover:scale-110 transition-transform duration-300 inline-block">{metric.value}</h3>
                     <p className="text-sm font-bold uppercase tracking-wider text-gray-900 mb-3">{metric.label}</p>
                     <p className="text-sm text-gray-500 leading-snug">{metric.detail}</p>
                   </motion.div>
                 ))}
               </div>
             </div>
          </motion.section>

          {/* Pillars Section */}
          <motion.section 
            className="px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-4xl mx-auto text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">What Keeps Clients Coming Back</h2>
              <p className="text-lg text-gray-600">
                Entertainment is only powerful when it serves a purpose. These pillars guide how we craft each moment.
              </p>
            </div>
            
            <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3">
              {valuePillars.map((pillar, index) => (
                <motion.div
                  key={pillar.title}
                  variants={itemVariants}
                  whileHover={{ y: -10 }}
                  className="bg-white rounded-3xl p-10 shadow-lg border border-gray-100 hover:shadow-2xl hover:border-brand/20 transition-all duration-300"
                >
                  <div className="w-12 h-12 bg-brand-soft/20 rounded-2xl flex items-center justify-center text-brand font-bold text-xl mb-6">
                    0{index + 1}
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-4">{pillar.title}</h3>
                  <p className="text-gray-600 leading-relaxed">{pillar.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.section>

          {/* Process Section */}
          <motion.section 
            className="px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={containerVariants}
          >
            <div className="max-w-7xl mx-auto rounded-[3rem] bg-[#0a0a0a] text-white p-8 md:p-16 lg:p-20 relative overflow-hidden">
               {/* Background Glows */}
               <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand/20 blur-[100px] rounded-full pointer-events-none" />
               <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-blue-600/10 blur-[80px] rounded-full pointer-events-none" />

               <div className="relative z-10 max-w-3xl mb-16">
                 <h2 className="text-3xl md:text-5xl font-bold mb-6">Our Process</h2>
                 <p className="text-xl text-gray-400 font-light">
                    We slot into existing teams with clarity, ensuring that every partner, crew member, and guest knows when and how the next moment lands.
                 </p>
               </div>

               <div className="relative z-10 grid gap-8 md:grid-cols-2">
                 {processSteps.map((step, index) => (
                   <motion.div 
                     key={step.title} 
                     variants={itemVariants} 
                     className="bg-white/5 border border-white/10 rounded-3xl p-8 hover:bg-white/10 transition-colors duration-300"
                   >
                     <div className="flex items-center gap-4 mb-6">
                       <span className="flex items-center justify-center w-10 h-10 rounded-full bg-brand text-white font-bold text-sm">
                         {index + 1}
                       </span>
                       <h3 className="text-xl font-bold">{step.title}</h3>
                     </div>
                     <p className="text-gray-300 mb-6 text-sm md:text-base">{step.summary}</p>
                     <ul className="space-y-3">
                       {step.points.map((point) => (
                         <li key={point} className="flex items-start gap-3 text-sm text-gray-400">
                           <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-brand shrink-0" />
                           {point}
                         </li>
                       ))}
                     </ul>
                   </motion.div>
                 ))}
               </div>
            </div>
          </motion.section>

          {/* CTA Section */}
          <motion.section 
            className="px-6 md:px-12 lg:px-24"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <div className="max-w-5xl mx-auto text-center rounded-3xl bg-gradient-to-br from-brand to-brand-deep text-white p-12 md:p-20 shadow-2xl shadow-brand/40">
              <h2 className="text-3xl md:text-5xl font-bold mb-8">Ready to create something unforgettable?</h2>
              <p className="text-lg md:text-xl text-brand-contrast/90 mb-10 max-w-2xl mx-auto">
                Share your brief and we will respond with concepts, availability, and a roadmap for bringing your vision to life.
              </p>
              <div className="flex flex-wrap justify-center gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 bg-white text-brand font-bold rounded-full shadow-lg hover:shadow-xl hover:scale-105 transition-all duration-300"
                >
                  Book a Discovery Call
                </Link>
                <Link
                  href="/packages"
                  className="px-8 py-4 bg-transparent border-2 border-white/30 text-white font-bold rounded-full hover:bg-white/10 transition-all duration-300"
                >
                  Explore Packages
                </Link>
              </div>
            </div>
          </motion.section>
        </div>
      </main>
      <Footer />
    </div>
  );
}

