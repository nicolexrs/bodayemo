const baseClasses = "relative flex flex-col items-center justify-center text-center px-6 py-28 md:py-32";

export default function PageHero({ title, tagline, description, cta }) {
  return (
    <section className={`${baseClasses} bg-gradient-to-br from-brand-soft/20 via-white to-brand-soft/10`}>
      <div className="max-w-3xl mx-auto">
        {tagline ? (
          <p className="text-xs font-semibold tracking-[0.4em] uppercase text-brand-soft mb-4">
            {tagline}
          </p>
        ) : null}
        <h1 className="text-4xl md:text-5xl font-bold text-gray-900">{title}</h1>
        {description ? <p className="mt-6 text-lg text-gray-600 leading-relaxed">{description}</p> : null}
        {cta ? <div className="mt-10 flex justify-center">{cta}</div> : null}
      </div>
    </section>
  );
}
