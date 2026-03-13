type LegalHeroProps = {
  title: string;
  description: string;
  lastUpdated: string;
};

export function LegalHero({
  title,
  description,
  lastUpdated,
}: LegalHeroProps) {
  return (
    <section className="w-full px-6 pt-16 md:pt-20 relative z-10">
      <div className="max-w-5xl mx-auto overflow-hidden rounded-[2rem] border border-[#0255D1]/12 bg-gradient-to-br from-[#F4F8FF] via-white to-[#FAFCFF] shadow-[0_25px_80px_-30px_rgba(2,85,209,0.2)]">
        <div className="px-8 py-12 md:px-12 md:py-16">
          <span className="inline-flex rounded-full border border-[#0255D1]/15 bg-white px-4 py-2 text-xs font-bold uppercase tracking-[0.18em] text-[#0255D1]">
            Información legal
          </span>
          <h1 className="mt-6 max-w-3xl text-4xl font-black tracking-tight text-[#373435] md:text-5xl">
            {title}
          </h1>
          <p className="mt-5 max-w-3xl text-base leading-8 text-[#373435]/72 md:text-lg">
            {description}
          </p>
          <p className="mt-8 text-sm font-semibold text-[#373435]/50">
            Última actualización: {lastUpdated}
          </p>
        </div>
      </div>
    </section>
  );
}
