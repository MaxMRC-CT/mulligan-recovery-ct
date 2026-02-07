import type { ReactNode } from "react";
import { cn } from "@/lib/cn";

type CardProps = {
  title?: string;
  className?: string;
  children: ReactNode;
};

export function Card({ title, className, children }: CardProps) {
  return (
    <article className={cn("card", className)}>
      {title ? <h3 className="text-xl font-semibold text-neutral-900">{title}</h3> : null}
      <div className={cn(title ? "mt-3 text-neutral-700" : "text-neutral-700")}>{children}</div>
    </article>
  );
}
