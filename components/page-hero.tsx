type PageHeroProps = {
  title: string;
  subtitle?: string;
  showEyebrow?: boolean;
};

export function PageHero({ title }: PageHeroProps) {
  return (
    <section className="relative bg-[#F4F1EC] py-12">
      <div className="container">
        {title ? <h1 className="text-center text-3xl font-bold leading-tight text-neutral-900 md:text-5xl">{title}</h1> : null}
      </div>
    </section>
  );
}
