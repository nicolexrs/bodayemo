import Link from "next/link";
import Image from "next/image";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PageHero from "@/components/PageHero";

const impactMetrics = [
  {
    value: "500+",
    label: "Stages hosted",
    detail: "Corporate galas, concerts, weddings, memorials, and campaign activations across Africa.",
  },
  {
    value: "70M+",
    label: "Impressions generated",
    detail: "Content seen across Instagram, YouTube, TikTok, TV, and radio partner channels.",
  },
  {
    value: "30+",
    label: "Brands and agencies",
    detail: "Trusted by telecoms, fintech, media houses, development orgs, and startups.",
  },
  {
    value: "24 hrs",
    label: "Average response",
    detail: "Fast feedback loops that keep approvals moving and momentum high.",
  },
];

const valuePillars = [
  {
    title: "Performance-led storytelling",
    description: "Every microphone moment follows a narrative arc that guides audiences from anticipation to applause.",
  },
  {
    title: "Audience-first design",
    description: "We tailor scripts, participation cues, and media touchpoints so every guest feels seen and involved.",
  },
  {
    title: "Reliable production partnership",
    description: "Planners, AV teams, and vendors rely on us to keep programmes on cue and professional all the way through.",
  },
];

const processSteps = [
  {
    title: "Discover and align",
    summary: "We unpack ambitions, audience mood, tone of voice, and logistics in a collaborative briefing.",
    points: [
      "Clarify programme objectives, emotional beats, and success measures.",
      "Review run sheets, timing constraints, and show-flow responsibilities.",
      "Assign communication channels with planners, AV leads, and talent.",
    ],
  },
  {
    title: "Design the narrative",
    summary: "Scripts, transitions, and crowd energy cues are crafted to move people from hello to encore.",
    points: [
      "Storyboard the event or production flow with momentum lifts and calm moments.",
      "Provide talking points, segues, and contingency options for each segment.",
      "Recommend music, visuals, and content assets that reinforce the storyline.",
    ],
  },
  {
    title: "Deliver unforgettable moments",
    summary: "On stage and on set, we anchor the experience while keeping clients calm and guests energised.",
    points: [
      "Professional hosting, moderation, voiceovers, and audience engagement.",
      "Live coordination with technical crews, stage managers, and VIP handlers.",
      "Real-time adjustments for timing changes, audience mood, or curveballs.",
    ],
  },
  {
    title: "Debrief and amplify",
    summary: "We close the loop with insights and content opportunities that extend the event impact.",
    points: [
      "Capture highlights, testimonials, and notable reactions.",
      "Flag footage moments that deserve fast-turnaround edits or recaps.",
      "Share recommendations for encore engagements or evergreen content.",
    ],
  },
];

const audienceSegments = [
  "High-energy concerts and tours",
  "Corporate and public sector functions",
  "Luxury celebrations and private milestones",
  "Brand activations and product launches",
  "Media productions and digital storytelling",
];

export const metadata = {
  title: "About | Bodayemo Inc.",
  description: "Learn how Bodayemo Inc. blends stagecraft, storytelling, and production strategy to create unforgettable experiences for brands and audiences.",
};

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-gray-50 text-gray-900 font-sans flex flex-col items-center overflow-hidden">
      <Navbar />
      <main className="w-full bg-white pt-14">
        <PageHero
          title="The energy behind unforgettable experiences"
          tagline="About Bodayemo Inc."
          description="For more than a decade, Bodayemo Inc. has merged stage presence with production strategy, helping brands delight audiences and turn key moments into vibrant stories."
          cta={
            <Link
              href="/contact"
              className="inline-flex items-center justify-center rounded-full bg-brand px-6 py-3 text-sm font-semibold text-brand-contrast shadow transition-all duration-300 hover:bg-brand-deep"
            >
              Start a conversation
            </Link>
          }
        />

        <div className="space-y-20 md:space-y-24 pt-4 pb-24">
          <section className="px-6 md:px-20 lg:px-60">
            <div className="grid gap-12 lg:grid-cols-[1.15fr_0.85fr] items-center">
              <div className="space-y-6">
                <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">Rooted in performance, powered by strategy</h2>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Bodayemo Entertainment evolvs from a charismatic MC into a multidisciplinary entertainment partner.
                  Today we help brands, planners, and media teams execute programmes that stay memorable long after the lights go down.
                </p>
                <p className="text-base md:text-lg text-gray-700 leading-relaxed">
                  Whether it is a corporate offsite, a milestone celebration, or a viral content brief, we blend stagecraft, audience psychology,
                  and production detail. Every cue, pause, and punchline is intentional, making the experience feel seamless while the brand message
                  stays front of mind.
                </p>
                <ul className="grid gap-3 sm:grid-cols-2">
                  {audienceSegments.map((segment) => (
                    <li
                      key={segment}
                      className="flex items-start gap-3 rounded-2xl border border-brand-soft/30 bg-white px-4 py-3 shadow-sm"
                    >
                      <span className="mt-1 inline-flex h-2 w-2 flex-none rounded-full bg-brand" aria-hidden="true" />
                      <span className="text-sm font-medium text-gray-700">{segment}</span>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="relative">
                <div className="relative overflow-hidden rounded-3xl border border-brand-soft/30 shadow-xl min-h-[360px]">
                  <Image
                    src="/i.PNG"
                    alt="Bodayemo hosting an event"
                    fill
                    sizes="(min-width: 1024px) 32vw, (min-width: 768px) 60vw, 90vw"
                    className="object-cover object-top"
                    priority={false}
                  />
                  <div className="absolute inset-0 bg-gradient-to-tr from-black/20 via-black/0 to-brand-soft/40" aria-hidden="true" />
                </div>
                <div className="relative mt-6 rounded-3xl bg-white border border-gray-100 shadow-lg p-6">
                  <p className="text-xs font-semibold uppercase tracking-[0.3em] text-brand-soft">Founder note</p>
                  <p className="mt-3 text-base text-gray-700 leading-relaxed">
                    "Great events do more than entertain. They build trust, move hearts, and spark action. Our job is to ensure every second on stage
                    or on camera earns that reaction."
                  </p>
                  <p className="mt-4 text-sm font-semibold text-gray-900">Bodayemo - Lead Host and Creative Director</p>
                </div>
              </div>
            </div>
          </section>

         

          <section className="px-6 md:px-20 lg:px-60">
            <div className="text-center max-w-3xl mx-auto">
              <h2 className="text-3xl md:text-4xl font-semibold text-gray-900">What keeps clients coming back</h2>
              <p className="mt-4 text-base md:text-lg text-gray-700">
                Entertainment is only powerful when it serves a purpose. These pillars guide how we craft each moment, from rehearsal to encore.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {valuePillars.map((pillar, index) => (
                <div
                  key={pillar.title}
                  className="rounded-3xl border border-gray-200 bg-white p-8 shadow-sm transition-transform duration-300 hover:-translate-y-1"
                >
                  <span className="text-xs font-semibold uppercase tracking-[0.35em] text-brand-soft/80">Pillar {index + 1}</span>
                  <h3 className="mt-4 text-xl font-semibold text-gray-900">{pillar.title}</h3>
                  <p className="mt-3 text-sm text-gray-600 leading-relaxed">{pillar.description}</p>
                </div>
              ))}
            </div>
          </section>

          <section className="px-6 md:px-20 lg:px-60">
            <div className="rounded-3xl bg-gray-900 text-gray-100 border border-gray-800 shadow-xl p-10 md:p-14">
              <div className="max-w-3xl">
                <h2 className="text-3xl md:text-4xl font-semibold">Our process keeps everyone in sync</h2>
                <p className="mt-4 text-base md:text-lg text-gray-300">
                  We slot into existing teams with clarity, ensuring that every partner, crew member, and guest knows when and how the next moment lands.
                </p>
              </div>
              <div className="mt-10 grid gap-6 md:grid-cols-2">
                {processSteps.map((step, index) => (
                  <div key={step.title} className="rounded-3xl border border-white/10 bg-white/5 p-6">
                    <div className="flex items-start gap-4">
                      <span className="flex h-12 w-12 items-center justify-center rounded-full bg-brand-soft/20 text-base font-semibold text-brand-soft">
                        {index + 1}
                      </span>
                      <div>
                        <h3 className="text-lg font-semibold text-white">{step.title}</h3>
                        <p className="mt-2 text-sm text-gray-300 leading-relaxed">{step.summary}</p>
                      </div>
                    </div>
                    <ul className="mt-4 space-y-2 text-sm text-gray-300">
                      {step.points.map((point) => (
                        <li key={point} className="flex gap-3">
                          <span className="mt-1 h-1.5 w-1.5 flex-none rounded-full bg-brand-soft" aria-hidden="true" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="px-6 md:px-20 lg:px-60">
            <div className="rounded-3xl bg-brand text-brand-contrast shadow-2xl p-10 md:p-16">
              <h2 className="text-3xl md:text-4xl font-semibold">Let us craft your next unforgettable moment</h2>
              <p className="mt-4 text-base md:text-lg max-w-3xl">
                Share your brief and we will respond with concepts, availability, and a roadmap for bringing your event or content brief to life.
                From timelines to tone, we will keep the experience professional, memorable, and unmistakably you.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <Link
                  href="/contact"
                  className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3 text-sm font-semibold text-brand shadow transition-colors duration-300 hover:bg-gray-100"
                >
                  Book a discovery call
                </Link>
                <Link
                  href="/packages"
                  className="inline-flex items-center justify-center rounded-full border border-white/70 px-6 py-3 text-sm font-semibold text-brand-contrast transition-colors duration-300 hover:bg-white/10"
                >
                  Explore curated packages
                </Link>
              </div>
            </div>
          </section>
        </div>
      </main>
      <Footer />
    </div>
  );
}
