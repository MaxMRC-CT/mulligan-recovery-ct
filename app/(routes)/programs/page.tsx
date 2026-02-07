import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Programs"
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="ASAM Level 3.1: Low-Intensity Residential"
        subtitle="A supportive residential environment for adults who need structure, recovery coaching, and coordinated care while strengthening independence."
      />
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-2">
          {[
            "Daily schedule with clinical groups and recovery skill-building",
            "Case management and discharge planning with community handoff",
            "Medication coordination with external prescribers",
            "Peer-based recovery engagement and accountability planning",
            "Family involvement when authorized by the resident",
            "Relapse prevention and return-to-work/readiness planning"
          ].map((item) => (
            <div key={item} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <p className="font-medium text-[#244655]">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="container prose-md rounded-2xl border border-line p-8">
          <h2>Who is this level of care for?</h2>
          <p>
            ASAM 3.1 may be appropriate for individuals who require a stable living setting and consistent recovery
            support but do not need 24-hour nursing or acute medical services.
          </p>
          <p>
            Final placement is based on screening, referral documentation, and clinical appropriateness.
          </p>
        </div>
      </section>
      <CtaSection
        heading="Need a placement decision quickly?"
        body="We prioritize efficient referral coordination and clear next-step communication with providers and families."
        primaryHref="/admissions"
        primaryLabel="See Admissions Process"
      />
    </>
  );
}
