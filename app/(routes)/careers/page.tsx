import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Careers"
};

export default function CareersPage() {
  return (
    <>
      <PageHero
        title="Careers in recovery care"
        subtitle="Join a team committed to clinically sound, respectful, and community-focused residential treatment."
      />
      <section className="section pt-0">
        <div className="container prose-md rounded-md border border-line bg-white p-8 shadow-[0_12px_28px_rgba(17,17,17,0.08)]">
          <h2>Why work here</h2>
          <p>
            We support staff with structured onboarding, clear clinical expectations, and a culture that values both
            accountability and compassion.
          </p>
          <h2>Roles often available</h2>
          <p>
            Recovery support specialists, case managers, licensed clinicians, operations staff, and overnight support
            positions.
          </p>
          <h2>Equal opportunity</h2>
          <p>
            Mulligan Recovery Centers of CT is an equal opportunity employer and welcomes applicants from all
            backgrounds.
          </p>
        </div>
      </section>
      <CtaSection
        heading="Interested in joining our team?"
        body="Send a resume and short introduction to careers@mulliganrecoveryct.org."
        primaryHref="/contact"
        primaryLabel="General Contact"
      />
    </>
  );
}
