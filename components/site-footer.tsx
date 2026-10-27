import Link from "next/link";

const quickLinks = [
  { href: "/", label: "Home" },
  { href: "/programs", label: "Residential Program" },
  { href: "/admissions", label: "Admissions" },
  { href: "/insurance-payment", label: "Insurance & Payment" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" }
];

const moreLinks = [
  { href: "/for-professionals", label: "For Professionals" },
  { href: "/families", label: "For Families" },
  { href: "/resources", label: "Resources" },
  { href: "/about#faq", label: "FAQ" },
  { href: "/careers", label: "Careers" }
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-neutral-50">
      <div className="container grid gap-10 py-14 md:grid-cols-2 lg:grid-cols-4">
        <section>
          <h2 className="text-lg font-semibold">Mulligan Recovery Centers of CT</h2>
          <p className="mt-3 text-sm text-neutral-700">
            Low-intensity residential treatment grounded in dignity, structure, and community-based recovery.
          </p>
          <p className="mt-4 text-sm text-neutral-700">
            351 Winthrop Ave, New Haven, CT 06511<br />
            admissions@mulliganrecoveryct.com
          </p>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Quick Links</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            {quickLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring rounded hover:text-primary-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">More</h2>
          <ul className="mt-3 space-y-2 text-sm text-neutral-700">
            {moreLinks.map((link) => (
              <li key={link.href}>
                <Link href={link.href} className="focus-ring rounded hover:text-primary-dark">
                  {link.label}
                </Link>
              </li>
            ))}
          </ul>
        </section>

        <section>
          <h2 className="text-lg font-semibold">Crisis Resources</h2>
          <p className="mt-3 text-sm text-neutral-700">
            If this is an emergency, call <strong>911</strong>.
          </p>
          <p className="mt-2 text-sm text-neutral-700">
            988 Suicide & Crisis Lifeline: call or text <strong>988</strong>
          </p>
          <p className="mt-2 text-sm text-neutral-700">SAMHSA National Helpline: 1-800-662-HELP (4357)</p>
          <Link href="/crisis-support" className="focus-ring mt-3 inline-block rounded text-sm font-semibold text-primary-dark underline">
            More crisis and support resources
          </Link>
        </section>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-neutral-700">
        <p>
          This website is for informational purposes only and does not provide medical advice. Do not include private
          health details in web forms.
        </p>
        <p className="mt-2 space-x-4">
          <Link href="/privacy-policy" className="focus-ring rounded underline hover:text-primary-dark">
            Privacy Policy
          </Link>
          <Link href="/terms" className="focus-ring rounded underline hover:text-primary-dark">
            Terms of Use
          </Link>
        </p>
      </div>
    </footer>
  );
}
