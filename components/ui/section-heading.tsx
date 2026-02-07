import { cn } from "@/lib/cn";

type SectionHeadingProps = {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  className?: string;
};

export function SectionHeading({ eyebrow, title, subtitle, className }: SectionHeadingProps) {
  return (
    <header className={cn("rhythm", className)}>
      {eyebrow ? <p className="text-xs uppercase tracking-[0.14em] text-primary-dark">{eyebrow}</p> : null}
      <h2 className="section-heading">{title}</h2>
      {subtitle ? <p className="section-subheading">{subtitle}</p> : null}
    </header>
  );
}
