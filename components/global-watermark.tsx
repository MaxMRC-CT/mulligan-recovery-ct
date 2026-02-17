"use client";

import Image from "next/image";
import { usePathname } from "next/navigation";

export function GlobalWatermark() {
  const pathname = usePathname();
  const isHome = pathname === "/";

  return (
    <div
      aria-hidden="true"
      className={[
        "pointer-events-none absolute -right-44 z-[5] h-[1040px] w-[1040px] opacity-[0.06]",
        isHome ? "top-[980px]" : "top-[620px]"
      ].join(" ")}
    >
      <Image src="/logo-circle.png" alt="" fill sizes="920px" className="object-contain" />
    </div>
  );
}
