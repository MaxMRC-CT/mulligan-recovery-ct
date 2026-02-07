import { cn } from "@/lib/cn";

export type FaqItem = {
  question: string;
  answer: string;
};

type FaqAccordionProps = {
  items: FaqItem[];
  className?: string;
};

export function FaqAccordion({ items, className }: FaqAccordionProps) {
  return (
    <div className={cn("space-y-3", className)}>
      {items.map((item) => (
        <details key={item.question} className="group rounded-xl border border-line bg-white p-4 shadow-card">
          <summary className="cursor-pointer list-none pr-8 text-base font-semibold text-neutral-900 focus:outline-none focus-visible:ring-2 focus-visible:ring-primary">
            {item.question}
            <span className="float-right text-primary-dark transition group-open:rotate-45">+</span>
          </summary>
          <p className="mt-3 text-sm leading-6 text-neutral-700">{item.answer}</p>
        </details>
      ))}
    </div>
  );
}
