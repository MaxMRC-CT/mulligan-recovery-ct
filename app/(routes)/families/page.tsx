import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Families"
};

export default function FamiliesPage() {
  return (
    <>
      <PageHero
        title="Family and support network guidance"
        subtitle="Families are often central to recovery success. We help establish healthy communication, boundaries, and realistic expectations."
      />
      <section className="section pt-0">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Communication plans",
              text: "With resident consent, we schedule structured updates so loved ones stay informed without disrupting care."
            },
            {
              title: "Education sessions",
              text: "Families learn about recovery stages, relapse warning signs, and practical support approaches."
            },
            {
              title: "Transition planning",
              text: "We align on housing, follow-up care, and accountability before discharge."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-semibold text-[#18414f]">{item.title}</h2>
              <p className="mt-2 text-sm text-[#365866]">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaSection
        heading="Looking for support as a family member?"
        body="Reach out for guidance on referral readiness and what to expect during residential treatment."
        primaryHref="/contact"
        primaryLabel="Contact Our Team"
      />
    </>
  );
}
