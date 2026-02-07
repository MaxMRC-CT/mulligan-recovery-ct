import Link from "next/link";

type CtaSectionProps = {
  heading: string;
  body: string;
  primaryHref: string;
  primaryLabel: string;
  secondaryHref?: string;
  secondaryLabel?: string;
};

export function CtaSection({
  heading,
  body,
  primaryHref,
  primaryLabel,
  secondaryHref,
  secondaryLabel
}: CtaSectionProps) {
  return (
    <section className="section">
      <div className="container rounded-2xl border border-line bg-brand-soft p-8 shadow-card md:p-12">
        <h2 className="text-2xl font-bold text-brand-dark md:text-3xl">{heading}</h2>
        <p className="mt-3 max-w-3xl text-[#2e5361]">{body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link
            href={primaryHref}
            className="focus-ring rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link
              href={secondaryHref}
              className="focus-ring rounded-xl border border-brand px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-white"
            >
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
