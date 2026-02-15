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
    <header className="sticky top-0 z-40 border-b border-[#3b4657] bg-[#263241]/95 text-neutral-100 backdrop-blur">
      <div className="w-full px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex min-h-24 items-center justify-between gap-3">
          <Link href="/" className="focus-ring flex w-[390px] shrink-0 items-center gap-3 rounded-md">
            <Image src="/logo-circle.png" alt="Mulligan Recovery Centers of CT" width={50} height={50} priority />
            <div className="space-y-0.5">
              <p className="hidden text-sm font-semibold uppercase tracking-[0.12em] text-primary xl:block">Mulligan Recovery Centers of CT</p>
              <p className="text-sm font-semibold uppercase tracking-[0.12em] text-primary xl:hidden">Mulligan Recovery CT</p>
              <p className="whitespace-nowrap text-xs font-medium text-neutral-200 sm:text-sm">Real People. Real Recovery. Real Simple.</p>
            </div>
          </Link>

          <a href="tel:+12035550173" className="focus-ring rounded-md border border-[#48566c] px-2.5 py-2 text-xs font-semibold text-primary lg:hidden">
            Call (203) 555-0173
          </a>

          <button
            type="button"
            className="focus-ring rounded-md border border-[#48566c] px-3 py-2 text-sm font-semibold text-neutral-100 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            Menu
          </button>

          <nav aria-label="Primary Navigation" className="hidden flex-1 lg:ml-4 lg:block">
            <ul className="flex items-center justify-start gap-5 text-[17px] font-semibold text-neutral-100 xl:gap-7">
              {primaryItems.map((item) => {
                if (item.href === "/admissions") {
                  return (
                    <li key={item.href}>
                      <div className="relative" onMouseEnter={() => setAdmissionsOpen(true)} onMouseLeave={() => setAdmissionsOpen(false)}>
                        <button
                          type="button"
                          className={cn(
                            "focus-ring whitespace-nowrap rounded-md px-1.5 py-1 hover:text-primary",
                            admissionsActive && "text-primary underline decoration-[3px] underline-offset-8"
                          )}
                          aria-haspopup="menu"
                          aria-expanded={admissionsOpen}
                          aria-controls="admissions-menu"
                          onClick={() => setAdmissionsOpen((prev) => !prev)}
                        >
                          {item.label}
                        </button>

                        {admissionsOpen ? (
                          <ul
                            id="admissions-menu"
                            role="menu"
                            className="absolute left-0 top-9 z-50 min-w-56 rounded-md border border-[#48566c] bg-[#2c394a] p-2 shadow-[0_12px_28px_rgba(17,17,17,0.08)]"
                          >
                            <li role="none">
                              <Link
                                href="/insurance-payment"
                                role="menuitem"
                                className={cn(
                                  "focus-ring block rounded-md px-3 py-2 text-sm text-neutral-100 hover:bg-[#36465d] hover:text-primary",
                                  isPathActive(pathname, "/insurance-payment") && "bg-[#36465d] text-primary"
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
                        "focus-ring whitespace-nowrap rounded-md px-1.5 py-1 hover:text-primary",
                        active && "text-primary underline decoration-[3px] underline-offset-8"
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
          <nav id="mobile-menu" aria-label="Mobile Navigation" className="mt-3 rounded-md border border-[#48566c] bg-[#2c394a] p-4 lg:hidden">
            <ul className="space-y-2">
              {primaryItems.map((item) => {
                if (item.href === "/admissions") {
                  return (
                    <li key={item.href}>
                      <button
                        type="button"
                        className={cn(
                          "focus-ring flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-neutral-100",
                          admissionsActive && "bg-[#36465d] text-primary"
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
                                "focus-ring block rounded-md px-3 py-2 text-sm text-neutral-100",
                                isPathActive(pathname, "/insurance-payment") && "bg-[#36465d] text-primary"
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
                        "focus-ring block rounded-md px-3 py-2 text-sm font-medium text-neutral-100",
                        active && "bg-[#36465d] text-primary"
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
      <div className="h-1 w-full bg-primary" />
    </header>
  );
}
