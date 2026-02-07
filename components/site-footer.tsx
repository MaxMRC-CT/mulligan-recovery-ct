import Link from "next/link";

const quickLinks = [
  { href: "/programs", label: "Programs" },
  { href: "/admissions", label: "Admissions" },
  { href: "/families", label: "Families" },
  { href: "/for-professionals", label: "For Professionals" },
  { href: "/insurance-payment", label: "Insurance & Payment" },
  { href: "/crisis-support", label: "Crisis & Support" },
  { href: "/faq", label: "FAQ" },
  { href: "/resources", label: "Blog" },
  { href: "/privacy-policy", label: "Privacy Policy" },
  { href: "/terms", label: "Terms" }
];

export function SiteFooter() {
  return (
    <footer className="mt-20 border-t border-line bg-neutral-50">
      <div className="container grid gap-10 py-14 md:grid-cols-3">
        <section>
          <h2 className="text-lg font-semibold">Mulligan Recovery Centers of CT</h2>
          <p className="mt-3 text-sm text-neutral-700">
            Low-intensity residential treatment grounded in dignity, structure, and community-based recovery.
          </p>
          <p className="mt-4 text-sm text-neutral-700">
            Contact: (203) 555-0173<br />
            admissions@mulliganrecoveryct.org
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
          <h2 className="text-lg font-semibold">Crisis Resources</h2>
          <p className="mt-3 text-sm text-neutral-700">
            If this is an emergency, call <strong>911</strong>.
          </p>
          <p className="mt-2 text-sm text-neutral-700">
            988 Suicide & Crisis Lifeline: call or text <strong>988</strong>
          </p>
          <p className="mt-2 text-sm text-neutral-700">SAMHSA National Helpline: 1-800-662-HELP (4357)</p>
        </section>
      </div>
      <div className="border-t border-line py-5 text-center text-xs text-neutral-700">
        <p>
          This website is for informational purposes only and does not provide medical advice. Do not include private
          health details in web forms.
        </p>
        <p className="mt-2">Cookie notice and policy controls are placeholder content pending legal review.</p>
      </div>
    </footer>
  );
}
