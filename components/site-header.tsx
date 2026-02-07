"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { cn } from "@/lib/cn";

const primaryItems = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Programs" },
  { href: "/admissions", label: "Admissions" },
  { href: "/insurance-payment", label: "Insurance & Payment" },
  { href: "/about", label: "About" }
];

const resourcesItems = [
  { href: "/crisis-support", label: "Crisis & Support" },
  { href: "/families", label: "Families" },
  { href: "/for-professionals", label: "For Professionals" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Blog" }
];

function isPathActive(pathname: string, href: string) {
  if (href === "/") {
    return pathname === "/";
  }

  return pathname === href || pathname.startsWith(`${href}/`);
}

export function SiteHeader() {
  const pathname = usePathname();
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [resourcesOpen, setResourcesOpen] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [mobileResourcesOpen, setMobileResourcesOpen] = useState(false);

  const resourcesActive = resourcesItems.some((item) => isPathActive(pathname, item.href));

  useEffect(() => {
    function closeOnOutsideClick(event: MouseEvent) {
      if (!dropdownRef.current?.contains(event.target as Node)) {
        setResourcesOpen(false);
      }
    }

    document.addEventListener("mousedown", closeOnOutsideClick);
    return () => document.removeEventListener("mousedown", closeOnOutsideClick);
  }, []);

  useEffect(() => {
    setMobileMenuOpen(false);
    setMobileResourcesOpen(false);
    setResourcesOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/95 backdrop-blur">
      <div className="container py-3">
        <div className="flex min-h-16 items-center justify-between gap-3">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-lg">
            <Image src="/logo.png" alt="Mulligan Recovery Centers of CT" width={40} height={40} priority />
            <div>
              <p className="hidden text-[11px] uppercase tracking-[0.14em] text-primary-dark sm:block">Mulligan Recovery Centers of CT</p>
              <p className="text-[11px] uppercase tracking-[0.14em] text-primary-dark sm:hidden">Mulligan Recovery</p>
              <p className="text-sm font-semibold text-ink">ASAM Level 3.1 Residential</p>
            </div>
          </Link>

          <a href="tel:+12035550173" className="focus-ring rounded-lg border border-line px-2.5 py-2 text-xs font-semibold text-primary-dark lg:hidden">
            Call (203) 555-0173
          </a>

          <button
            type="button"
            className="focus-ring rounded-lg border border-line px-3 py-2 text-sm font-semibold text-neutral-700 lg:hidden"
            aria-expanded={mobileMenuOpen}
            aria-controls="mobile-menu"
            onClick={() => setMobileMenuOpen((prev) => !prev)}
          >
            Menu
          </button>

          <nav aria-label="Primary Navigation" className="hidden lg:block">
            <ul className="flex items-center gap-5 text-sm font-medium text-neutral-700">
              {primaryItems.map((item) => {
                const active = isPathActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "focus-ring rounded-md px-1.5 py-1 hover:text-primary-dark",
                        active && "text-primary-dark underline decoration-2 underline-offset-8"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li>
                <div
                  ref={dropdownRef}
                  className="relative"
                  onMouseEnter={() => setResourcesOpen(true)}
                  onMouseLeave={() => setResourcesOpen(false)}
                >
                  <button
                    type="button"
                    className={cn(
                      "focus-ring rounded-md px-1.5 py-1 hover:text-primary-dark",
                      resourcesActive && "text-primary-dark underline decoration-2 underline-offset-8"
                    )}
                    aria-haspopup="menu"
                    aria-expanded={resourcesOpen}
                    aria-controls="resources-menu"
                    onClick={() => setResourcesOpen((prev) => !prev)}
                  >
                    Resources
                  </button>

                  {resourcesOpen ? (
                    <ul
                      id="resources-menu"
                      role="menu"
                      className="absolute left-0 top-9 z-50 min-w-56 rounded-xl border border-line bg-white p-2 shadow-card"
                    >
                      {resourcesItems.map((item) => (
                        <li key={item.href} role="none">
                          <Link
                            href={item.href}
                            role="menuitem"
                            className={cn(
                              "focus-ring block rounded-lg px-3 py-2 text-sm text-neutral-700 hover:bg-primary-soft hover:text-primary-dark",
                              isPathActive(pathname, item.href) && "bg-primary-soft text-primary-dark"
                            )}
                          >
                            {item.label}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </div>
              </li>
            </ul>
          </nav>

          <Link href="/contact" className="btn-primary hidden lg:inline-flex">
            Contact
          </Link>
        </div>

        {mobileMenuOpen ? (
          <nav id="mobile-menu" aria-label="Mobile Navigation" className="mt-3 rounded-2xl border border-line bg-white p-4 lg:hidden">
            <ul className="space-y-2">
              {primaryItems.map((item) => {
                const active = isPathActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "focus-ring block rounded-lg px-3 py-2 text-sm font-medium text-neutral-700",
                        active && "bg-primary-soft text-primary-dark"
                      )}
                    >
                      {item.label}
                    </Link>
                  </li>
                );
              })}

              <li>
                <button
                  type="button"
                  className={cn(
                    "focus-ring flex w-full items-center justify-between rounded-lg px-3 py-2 text-left text-sm font-medium text-neutral-700",
                    resourcesActive && "bg-primary-soft text-primary-dark"
                  )}
                  aria-expanded={mobileResourcesOpen}
                  aria-controls="mobile-resources"
                  onClick={() => setMobileResourcesOpen((prev) => !prev)}
                >
                  Resources
                  <span>{mobileResourcesOpen ? "−" : "+"}</span>
                </button>

                {mobileResourcesOpen ? (
                  <ul id="mobile-resources" className="mt-1 space-y-1 pl-3">
                    {resourcesItems.map((item) => (
                      <li key={item.href}>
                        <Link
                          href={item.href}
                          className={cn(
                            "focus-ring block rounded-lg px-3 py-2 text-sm text-neutral-700",
                            isPathActive(pathname, item.href) && "bg-primary-soft text-primary-dark"
                          )}
                        >
                          {item.label}
                        </Link>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>

              <li className="pt-2">
                <Link href="/contact" className="btn-primary w-full">
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        ) : null}
      </div>
    </header>
  );
}
