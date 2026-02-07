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
      <div className="container rounded-2xl border border-line bg-neutral-50 p-8 shadow-card md:p-12">
        <h2 className="text-2xl font-bold text-neutral-900 md:text-3xl">{heading}</h2>
        <p className="mt-3 max-w-3xl text-neutral-700">{body}</p>
        <div className="mt-6 flex flex-wrap gap-3">
          <Link href={primaryHref} className="btn-primary">
            {primaryLabel}
          </Link>
          {secondaryHref && secondaryLabel ? (
            <Link href={secondaryHref} className="btn-secondary">
              {secondaryLabel}
            </Link>
          ) : null}
        </div>
      </div>
    </section>
  );
}
