import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ReferralPathways } from "@/components/sections/referral-pathways";
import { TrustSignals } from "@/components/sections/trust-signals";

const highlights = [
  {
    title: "Structured Daily Support",
    body: "Residents receive routine-focused care with counseling, peer support, and practical life-stability planning."
  },
  {
    title: "Person-Centered Admissions",
    body: "We begin with a brief screening and coordinate next steps quickly with your referral source or care team."
  },
  {
    title: "Family-Informed Care",
    body: "With consent, we involve trusted supports in treatment planning and transition preparation."
  }
];

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Recovery support designed for stability, dignity, and long-term growth"
        subtitle="Mulligan Recovery Centers of CT provides ASAM Level 3.1 low-intensity residential treatment for adults who need structured support in a safe, sober environment."
      />

      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-3">
          {highlights.map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-semibold text-[#18414f]">{item.title}</h2>
              <p className="mt-3 text-sm text-[#365866]">{item.body}</p>
            </article>
          ))}
        </div>
      </section>

      <TrustSignals />

      <section className="section bg-white">
        <div className="container grid gap-10 md:grid-cols-2 md:items-center">
          <div>
            <h2 className="text-3xl font-bold text-[#153947]">Who we serve</h2>
            <p className="mt-4 text-[#315260]">
              Our 3.1 program is appropriate for adults who can benefit from a monitored residential setting while
              continuing to build independent recovery skills. We coordinate with outpatient providers, probation,
              hospitals, and community agencies throughout Connecticut.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/programs" className="focus-ring rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark">
                Explore Program Details
              </Link>
              <Link href="/admissions" className="focus-ring rounded-xl border border-brand px-5 py-3 text-sm font-semibold text-brand-dark hover:bg-brand-soft">
                View Admissions Steps
              </Link>
            </div>
          </div>
          <div className="rounded-2xl border border-line bg-accent-soft p-8">
            <h3 className="text-xl font-semibold text-[#18414f]">Need immediate support?</h3>
            <p className="mt-3 text-[#315260]">
              If someone is in danger, call 911. For urgent emotional distress, call or text 988. Admissions requests
              are reviewed as quickly as possible during business hours.
            </p>
          </div>
        </div>
      </section>

      <ReferralPathways />

      <CtaSection
        heading="Start a confidential admissions conversation"
        body="Share only basic contact details. Do not submit diagnosis details, medications, or other private medical information through online forms."
        primaryHref="/contact"
        primaryLabel="Contact Admissions"
        secondaryHref="/insurance-payment"
        secondaryLabel="Review Insurance Options"
      />
    </>
  );
}
