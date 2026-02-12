import Link from "next/link";
import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const pathways = [
  {
    title: "Hospitals and ED Teams",
    body: "Coordinate discharge-safe transitions with rapid screening and next-step communication.",
    cta: "Professional Referral Guide",
    href: "/for-professionals"
  },
  {
    title: "Outpatient and MAT Providers",
    body: "Refer patients needing a structured residential bridge before outpatient stabilization.",
    cta: "Professional Referral Guide",
    href: "/for-professionals"
  },
  {
    title: "Court and Community Partners",
    body: "Structured reporting pathways and planning support for justice-involved clients.",
    cta: "Professional Referral Guide",
    href: "/for-professionals"
  },
  {
    title: "Families and Loved Ones",
    body: "Guidance on readiness, placement questions, and what to expect during treatment.",
    cta: "Talk to Admissions",
    href: "/contact"
  }
];

export function ReferralPathways() {
  return (
    <section className="section pt-0">
      <div className="container">
        <SectionHeading
          eyebrow="Referral Pathways"
          title="Clear routes for providers, families, and community partners"
          subtitle="Choose the path that matches your role to reduce delays and improve handoff quality."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {pathways.map((item) => (
            <Card key={item.title} title={item.title}>
              <p>{item.body}</p>
              <Link href={item.href} className="focus-ring mt-4 inline-block rounded-md text-sm font-semibold text-primary-dark">
                {item.cta} →
              </Link>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
