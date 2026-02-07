import Image from "next/image";
import Link from "next/link";

const navItems = [
  { href: "/about", label: "About" },
  { href: "/programs", label: "Programs" },
  { href: "/admissions", label: "Admissions" },
  { href: "/insurance-payment", label: "Insurance & Payment" },
  { href: "/families", label: "Families" },
  { href: "/resources", label: "Resources" },
  { href: "/careers", label: "Careers" },
  { href: "/contact", label: "Contact" }
];

export function SiteHeader() {
  return (
    <header className="sticky top-0 z-40 border-b border-line bg-white/90 backdrop-blur">
      <div className="container py-3">
        <div className="flex min-h-20 items-center justify-between gap-5">
          <Link href="/" className="focus-ring flex items-center gap-3 rounded-lg">
            <Image src="/logo.png" alt="Mulligan Recovery Centers of CT" width={44} height={44} priority />
            <div>
              <p className="text-xs uppercase tracking-[0.14em] text-brand-dark">Mulligan Recovery Centers of CT</p>
              <p className="text-sm font-semibold text-ink">ASAM Level 3.1 Residential</p>
            </div>
          </Link>
          <nav aria-label="Primary Navigation" className="hidden lg:block">
            <ul className="flex items-center gap-6 text-sm font-medium text-[#325362]">
              {navItems.map((item) => (
                <li key={item.href}>
                  <Link href={item.href} className="focus-ring rounded-md px-1.5 py-1 hover:text-brand-dark">
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <Link
            href="/contact"
            className="focus-ring rounded-xl bg-brand px-4 py-2 text-sm font-semibold text-white transition hover:bg-brand-dark"
          >
            Start Admissions
          </Link>
        </div>
        <nav aria-label="Mobile Navigation" className="lg:hidden">
          <ul className="mt-2 flex gap-3 overflow-x-auto pb-2 text-sm font-medium text-[#325362]">
            {navItems.map((item) => (
              <li key={item.href} className="shrink-0">
                <Link href={item.href} className="focus-ring rounded-md border border-line bg-white px-3 py-1.5">
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
}
