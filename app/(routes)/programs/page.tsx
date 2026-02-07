import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ContentImage } from "@/components/ui/content-image";

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
        <div className="container">
          <ContentImage
            src="/images/programs/hero.svg"
            alt="A warm, structured residential treatment setting with shared seating"
            ratio="hero"
            caption="Structured support in a calm and respectful environment."
          />
        </div>
      </section>
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
              <p className="font-medium text-neutral-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-2">
          <ContentImage
            src="/images/programs/daily-structure.svg"
            alt="A small group session in a bright room with adults listening and participating"
            caption="Daily structure helps people rebuild routines without overwhelm."
          />
          <ContentImage
            src="/images/programs/group-room.svg"
            alt="A calm group room prepared for counseling and recovery discussion"
            caption="Shared spaces support accountability and connection."
          />
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
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-3">
          <article className="card">
            <h2 className="text-lg font-semibold text-neutral-900">Length of Stay Planning</h2>
            <p className="mt-3 text-neutral-700">
              Duration is individualized based on engagement, stability goals, and referral-team coordination.
            </p>
          </article>
          <article className="card">
            <h2 className="text-lg font-semibold text-neutral-900">Continuing Care Handoff</h2>
            <p className="mt-3 text-neutral-700">
              Discharge plans include outpatient linkage, support meetings, and accountable follow-up recommendations.
            </p>
          </article>
          <article className="card">
            <h2 className="text-lg font-semibold text-neutral-900">Referral Communication</h2>
            <p className="mt-3 text-neutral-700">
              With consent and applicable releases, care updates can be coordinated with external providers.
            </p>
          </article>
        </div>
      </section>
      <CtaSection
        heading="Need help deciding if this level of care fits?"
        body="Our team can review needs and recommend the clearest next step."
        primaryHref="/admissions"
        primaryLabel="See if Mulligan is right for you"
      />
    </>
  );
}
