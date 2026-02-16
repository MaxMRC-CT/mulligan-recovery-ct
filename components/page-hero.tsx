type PageHeroProps = {
  title: string;
  subtitle: string;
  showEyebrow?: boolean;
};

export function PageHero({ title, subtitle, showEyebrow = true }: PageHeroProps) {
  return (
    <section className="section relative overflow-hidden bg-[#263241] pb-10 pt-16">
      <div
        aria-hidden="true"
        className="pointer-events-none absolute inset-0 opacity-25 [background:radial-gradient(circle_at_75%_20%,rgba(214,124,45,0.35),transparent_45%),repeating-linear-gradient(0deg,transparent,transparent_15px,rgba(255,255,255,0.04)_16px)]"
      />
      <div aria-hidden="true" className="pointer-events-none absolute -right-14 top-6 hidden h-56 w-56 border border-primary/30 md:block" />
      <div className="container relative">
        {showEyebrow ? <p className="text-xs uppercase tracking-[0.14em] text-primary">Mulligan Recovery Centers of CT</p> : null}
        <h1 className={`${showEyebrow ? "mt-3" : "mt-0"} max-w-3xl text-3xl font-bold leading-tight text-white md:text-5xl`}>{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-neutral-200 md:text-lg">{subtitle}</p>
        <div aria-hidden="true" className="mt-5 h-1.5 w-24 bg-primary/90" />
      </div>
    </section>
  );
}
