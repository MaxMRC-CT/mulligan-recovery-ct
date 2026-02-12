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
    <header className="sticky top-0 z-40 border-b border-[#3b4657] bg-[#263241]/95 text-neutral-100 backdrop-blur">
      <div className="w-full px-4 py-5 sm:px-6 lg:px-8">
        <div className="flex min-h-24 items-center justify-between gap-4">
          <Link href="/" className="focus-ring flex w-[420px] shrink-0 items-center gap-3 rounded-md">
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

          <nav aria-label="Primary Navigation" className="hidden flex-1 lg:block">
            <ul className="flex items-center justify-end gap-6 pr-4 text-base font-medium text-neutral-200 xl:gap-8 xl:pr-5">
              {primaryItems.map((item) => {
                const active = isPathActive(pathname, item.href);

                return (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      className={cn(
                        "focus-ring whitespace-nowrap rounded-md px-1.5 py-1 hover:text-primary",
                        active && "text-primary underline decoration-2 underline-offset-8"
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
                      "focus-ring whitespace-nowrap rounded-md px-1.5 py-1 hover:text-primary",
                      resourcesActive && "text-primary underline decoration-2 underline-offset-8"
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
                      className="absolute left-0 top-9 z-50 min-w-56 rounded-md border border-[#48566c] bg-[#2c394a] p-2 shadow-[0_12px_28px_rgba(17,17,17,0.08)]"
                    >
                      {resourcesItems.map((item) => (
                        <li key={item.href} role="none">
                          <Link
                            href={item.href}
                            role="menuitem"
                            className={cn(
                              "focus-ring block rounded-md px-3 py-2 text-sm text-neutral-100 hover:bg-[#36465d] hover:text-primary",
                              isPathActive(pathname, item.href) && "bg-[#36465d] text-primary"
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
          <nav id="mobile-menu" aria-label="Mobile Navigation" className="mt-3 rounded-md border border-[#48566c] bg-[#2c394a] p-4 lg:hidden">
            <ul className="space-y-2">
              {primaryItems.map((item) => {
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

              <li>
                <button
                  type="button"
                  className={cn(
                    "focus-ring flex w-full items-center justify-between rounded-md px-3 py-2 text-left text-sm font-medium text-neutral-100",
                    resourcesActive && "bg-[#36465d] text-primary"
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
                            "focus-ring block rounded-md px-3 py-2 text-sm text-neutral-100",
                            isPathActive(pathname, item.href) && "bg-[#36465d] text-primary"
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
      <div className="h-1 w-full bg-primary" />
    </header>
  );
}
