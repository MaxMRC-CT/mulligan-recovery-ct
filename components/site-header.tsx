"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const primaryItems = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Residential Program" },
  { href: "/admissions", label: "Admissions" },
  { href: "/about", label: "About" }
];

function isPathActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const [admissionsOpen, setAdmissionsOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileAdmissionsOpen, setMobileAdmissionsOpen] = useState(false);

  const admissionsActive = isPathActive(pathname, "/admissions") || isPathActive(pathname, "/insurance-payment");

  useEffect(() => {
    setAdmissionsOpen(false);
    setMobileMenuOpen(false);
    setMobileAdmissionsOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-[#faf7f2]/95 text-neutral-900 backdrop-blur">
      <div className="w-full px-4 py-3 sm:px-6 lg:px-8">
        <div className="flex min-h-16 items-center justify-between gap-2 sm:gap-3">
          <Link href="/" className="focus-ring shrink-0 rounded-md">
            <Image
              src="/images/brand/MRC-CT_Lockup-Descriptor_GradientM_for-light-bg.webp"
              alt="Mulligan Recovery Centers of Connecticut"
              width={2000}
              height={514}
              priority
              className="h-10 w-auto sm:h-16"
            />
          </Link>

          <Link href="/contact" className="focus-ring whitespace-nowrap rounded-md border border-line px-2.5 py-2 text-xs font-semibold text-primary-dark lg:hidden">
            Contact us
          </Link>

          <button
            type="button"
            className="focus-ring rounded-md border border-line px-3 py-2 text-sm font-semibold text-neutral-900 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            Menu
          </button>

          <nav aria-label="Primary Navigation" className="hidden flex-1 lg:ml-4 lg:block">
            <ul className="flex items-center justify-start gap-5 text-[17px] font-semibold text-neutral-900 xl:gap-7">
              {primaryItems.map((item) => {
                if (item.href === "/admissions") {
                  return (
                    <li key={item.href}>
                      <div
                        className="relative"
                        onMouseEnter={() => setAdmissionsOpen(true)}
                        onMouseLeave={() => setAdmissionsOpen(false)}
                      >
                        <Link
                          href="/admissions"
                          className={cn(
                            "focus-ring whitespace-nowrap rounded-md px-1.5 py-1 hover:text-primary-dark",
                            admissionsActive && "text-primary-dark underline decoration-[3px] underline-offset-8"
                          )}
                          aria-haspopup="menu"
                          aria-expanded={admissionsOpen}
                          aria-controls="admissions-menu"
                        >
                          {item.label}
                        </Link>

                        {admissionsOpen ? (
                          <ul
                            id="admissions-menu"
                            role="menu"
                            className="absolute left-0 top-[calc(100%-2px)] z-50 min-w-56 rounded-md border border-line bg-white p-2 shadow-[0_12px_28px_rgba(17,17,17,0.08)]"
                          >
                            <li role="none">
                              <Link
                                href="/insurance-payment"
                                role="menuitem"
                                className={cn(
                                  "focus-ring block rounded-md px-3 py-2 text-sm text-neutral-900 hover:bg-primary-soft hover:text-primary-dark",
                                  isPathActive(pathname, "/insurance-payment") && "bg-primary-soft text-primary-dark"
                                )}
                              >
                                Insurance &amp; Payment
                              </Link>
                            </li>
                          </ul>
                        ) : null}
                      </div>
                    </li>
                  );
                }

                const active = isPathActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "focus-ring whitespace-nowrap rounded-md px-1.5 py-1 hover:text-primary-dark",
                        active && "text-primary-dark underline decoration-[3px] underline-offset-8"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </nav>

          <Link href="/contact" className="btn-primary hidden lg:inline-flex">
            Contact
          </Link>
        </div>

        {mobileMenuOpen ? (
          <nav id="mobile-menu" aria-label="Mobile Navigation" className="mt-3 rounded-md border border-line bg-white p-4 lg:hidden">
            <ul className="space-y-2">
              {primaryItems.map((item) => {
                if (item.href === "/admissions") {
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        className={cn(
                          "focus-ring flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-neutral-900",
                          admissionsActive && "bg-primary-soft text-primary-dark"
                        )}
                        aria-expanded={mobileAdmissionsOpen}
                        aria-controls="mobile-admissions"
                        onClick={() => setMobileAdmissionsOpen((prev) => !prev)}
                      >
                        {item.label}
                        <span>{mobileAdmissionsOpen ? "−" : "+"}</span>
                      </button>

                      {mobileAdmissionsOpen ? (
                        <ul id="mobile-admissions" className="mt-1 space-y-1 pl-3">
                          <li>
                            <Link
                              href="/insurance-payment"
                              className={cn(
                                "focus-ring block rounded-md px-3 py-2 text-sm text-neutral-900",
                                isPathActive(pathname, "/insurance-payment") && "bg-primary-soft text-primary-dark"
                              )}
                            >
                              Insurance &amp; Payment
                            </Link>
                          </li>
                        </ul>
                      ) : null}
                    </li>
                  );
                }

                const active = isPathActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "focus-ring block rounded-md px-3 py-2 text-sm font-medium text-neutral-900",
                        active && "bg-primary-soft text-primary-dark"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li className="pt-2">
                <Link href="/contact" className="btn-primary w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
      <div className="h-1 w-full bg-gradient-to-r from-[#ef4336] via-primary to-[#faab3f]" />
    </header>
  );
}
