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
      <div className={cn("relative overflow-hidden rounded-2xl border border-line bg-neutral-100", ratioClass[ratio])}>
        <Image src={src} alt={alt} fill sizes="(max-width: 768px) 100vw, 50vw" className="object-cover" />
      </div>
      {caption ? <figcaption className="text-sm text-neutral-700">{caption}</figcaption> : null}
    </figure>
  );
}
