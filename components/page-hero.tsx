type PageHeroProps = {
  title: string;
  subtitle: string;
};

export function PageHero({ title, subtitle }: PageHeroProps) {
  return (
    <section className="section pb-10 pt-16">
      <div className="container">
        <p className="text-xs uppercase tracking-[0.14em] text-brand-dark">Mulligan Recovery Centers of CT</p>
        <h1 className="mt-3 max-w-3xl text-3xl font-bold leading-tight text-[#153947] md:text-5xl">{title}</h1>
        <p className="mt-4 max-w-2xl text-base text-[#2f5360] md:text-lg">{subtitle}</p>
      </div>
    </section>
  );
}
