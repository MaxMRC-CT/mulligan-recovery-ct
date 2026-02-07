import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ContentImage } from "@/components/ui/content-image";

export const metadata = {
  title: "About"
};

export default function AboutPage() {
  return (
    <>
      <PageHero
        title="About Mulligan Recovery Centers of CT"
        subtitle="Our team delivers accountable, relationship-based residential care rooted in safety, consistency, and practical recovery planning."
      />
      <section className="section pt-0">
        <div className="container">
          <ContentImage
            src="/images/about/hero.svg"
            alt="A welcoming residential treatment environment with natural light and neutral decor"
            ratio="hero"
            caption="A respectful setting designed for stability and progress."
          />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container prose-md grid gap-6 rounded-2xl border border-line bg-white p-8 shadow-card">
          <p>
            Mulligan Recovery Centers of CT was built to close a common gap in care: people often need a stable
            residential setting that is less restrictive than hospital-level treatment but more supportive than living
            alone too early.
          </p>
          <p>
            Our ASAM Level 3.1 program combines recovery structure, clinical oversight, and coordinated referrals for
            continued care. We focus on measurable progress, reliable communication, and respect for each resident’s
            goals.
          </p>
          <p>
            We welcome referrals from healthcare organizations, behavioral health providers, courts, and families.
            Collaboration is central to safe transitions.
          </p>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-2">
          <ContentImage
            src="/images/about/team.svg"
            alt="Staff members in a collaborative planning discussion"
            caption="Our team approach centers on consistency and dignity."
          />
          <ContentImage
            src="/images/about/community.svg"
            alt="A quiet community outdoor space near a residential neighborhood"
            caption="Community connection is part of long-term recovery planning."
          />
        </div>
      </section>
      <CtaSection
        heading="Questions about fit?"
        body="Our admissions team can help determine whether ASAM 3.1 is appropriate and discuss alternatives if another level of care may be better."
        primaryHref="/contact"
        primaryLabel="Speak With Admissions"
      />
    </>
  );
}
