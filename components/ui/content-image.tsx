import Image from "next/image";
import { cn } from "@/lib/cn";

type ContentImageProps = {
  src: string;
  alt: string;
  caption?: string;
  ratio?: "hero" | "landscape" | "portrait";
  className?: string;
};

const ratioClass: Record<NonNullable<ContentImageProps["ratio"]>, string> = {
  hero: "aspect-[16/7]",
  landscape: "aspect-[16/10]",
  portrait: "aspect-[4/5]"
};

export function ContentImage({ src, alt, caption, ratio = "landscape", className }: ContentImageProps) {
  return (
    <figure className={cn("space-y-2", className)}>
      <div className={cn("group relative overflow-hidden rounded-md border border-line bg-neutral-100 shadow-[0_10px_24px_rgba(17,17,17,0.1)]", ratioClass[ratio])}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
        <div aria-hidden="true" className="pointer-events-none absolute inset-x-0 top-0 h-1 bg-primary/70" />
      </div>
      {caption ? <figcaption className="text-sm text-neutral-700">{caption}</figcaption> : null}
    </figure>
  );
}
