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
      <div className="container relative overflow-hidden rounded-md border border-line bg-neutral-50 p-8 shadow-[0_12px_28px_rgba(17,17,17,0.08)] md:p-12">
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1.5 bg-primary/80" />
        <div aria-hidden="true" className="pointer-events-none absolute -right-12 -top-10 hidden h-40 w-40 border border-primary/30 md:block" />
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
