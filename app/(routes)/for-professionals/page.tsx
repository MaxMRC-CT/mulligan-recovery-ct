import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "For Professionals"
};

const professionalFaq = [
  {
    question: "What referral details are needed initially?",
    answer:
      "Basic demographics, contact information, current support need, and payer information. Share only minimum necessary details at first contact."
  },
  {
    question: "How quickly can your team provide a placement update?",
    answer:
      "Most referrals receive a same-day or next-business-day status update depending on documentation completeness."
  },
  {
    question: "Can you coordinate with outpatient/MAT providers during transition?",
    answer:
      "Yes. With appropriate releases, we coordinate treatment handoff and continuing-care planning with community providers."
  }
];

export default function ForProfessionalsPage() {
  return (
    <>
      <PageHero
        title="For professionals and referral partners"
        subtitle="Mulligan provides ASAM-aligned low-intensity residential care for people who need structure without inpatient acuity."
      />

      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-3">
          <article className="card">
            <h2 className="text-lg font-semibold text-neutral-900">1. Send Referral Request</h2>
            <p className="mt-3 text-neutral-700">
              Share the referral summary and best callback contact.
            </p>
          </article>
          <article className="card">
            <h2 className="text-lg font-semibold text-neutral-900">2. Clinical and Payer Review</h2>
            <p className="mt-3 text-neutral-700">
              We review ASAM fit, payer needs, and practical timing.
            </p>
          </article>
          <article className="card">
            <h2 className="text-lg font-semibold text-neutral-900">3. Transition and Intake</h2>
            <p className="mt-3 text-neutral-700">
              We confirm intake timing and transition communication.
            </p>
          </article>
        </div>
      </section>

      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Referral Pack"
            title="Suggested documentation checklist"
            subtitle="Use this list to reduce delays. Final requirements may vary by payer."
          />
          <div className="mt-8 grid gap-4 md:grid-cols-2">
            {[
              "Current contact and discharge planning contact",
              "Recent level-of-care rationale or referral summary",
              "Current medications and prescribing coordination contact",
              "Insurance details and authorization notes",
              "Known legal/probation coordination requirements",
              "Preferred continuing-care handoff plan"
            ].map((item) => (
              <div key={item} className="rounded-xl border border-line bg-neutral-50 px-4 py-3 text-sm text-neutral-700">
                {item}
              </div>
            ))}
          </div>
          <FaqAccordion items={professionalFaq} className="mt-8" />
        </div>
      </section>

      <CtaSection
        heading="Coordinate a referral now"
        body="Use the admissions contact route for placement coordination. Avoid submitting PHI beyond minimum necessary details in unsecured channels."
        primaryHref="/contact"
        primaryLabel="Talk to someone today"
        secondaryHref="/admissions"
        secondaryLabel="See if Mulligan is right for you"
      />
    </>
  );
}
