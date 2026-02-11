import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ContentImage } from "@/components/ui/content-image";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { SectionHeading } from "@/components/ui/section-heading";

export const metadata = {
  title: "Admissions"
};

const steps = [
  {
    title: "1. Initial Contact",
    body: "Share basic non-sensitive details so we can confirm whether a full screening is appropriate."
  },
  {
    title: "2. Screening Review",
    body: "Our team reviews referral and clinical context to confirm alignment with ASAM 3.1 criteria."
  },
  {
    title: "3. Benefits and Logistics",
    body: "We verify insurance and discuss private-pay options, required documents, and intake timing."
  },
  {
    title: "4. Admission Day",
    body: "Residents receive orientation, schedule overview, and immediate stabilization support."
  }
];

const admissionsFaq = [
  {
    question: "How quickly do you respond to new inquiries?",
    answer:
      "Most admissions requests are triaged the same business day. Complex referrals may require additional documentation before final placement."
  },
  {
    question: "Can providers submit referrals directly?",
    answer:
      "Yes. Providers can call or use the contact pathway and include only minimum necessary referral context for initial coordination."
  },
  {
    question: "What should families prepare before intake?",
    answer:
      "Primary contact information, current payer details, and a brief summary of the support need. Do not submit private medical details through general web forms."
  }
];

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions: how it works"
        subtitle="Our process is designed to be straightforward, transparent, and respectful for residents, families, and referral partners."
      />
      <section className="section pt-0">
        <div className="container">
          <ContentImage
            src="/images/admissions/hero.jpg"
            alt="A calm intake conversation at a table between staff and an adult seeking care"
            ratio="hero"
            caption="Admissions starts with a simple conversation and clear next steps."
          />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-semibold text-neutral-900">{step.title}</h2>
              <p className="mt-3 text-neutral-700">{step.body}</p>
            </article>
          ))}
        </div>
      </section>
      <section className="section bg-white">
        <div className="container">
          <SectionHeading
            eyebrow="Admissions Readiness"
            title="What helps us move quickly"
            subtitle="Clean referral details and complete payer information reduce preventable delays."
          />
          <div className="mt-8 grid gap-5 md:grid-cols-3">
            <article className="card">
              <h3 className="text-lg font-semibold text-neutral-900">Initial Triage</h3>
              <p className="mt-3 text-neutral-700">General inquiry review, appropriateness screening, and first callback planning.</p>
            </article>
            <article className="card">
              <h3 className="text-lg font-semibold text-neutral-900">Clinical Fit Check</h3>
              <p className="mt-3 text-neutral-700">ASAM 3.1 alignment review with referral source and current support context.</p>
            </article>
            <article className="card">
              <h3 className="text-lg font-semibold text-neutral-900">Coverage and Intake Plan</h3>
              <p className="mt-3 text-neutral-700">Benefits verification, intake timing, and orientation logistics confirmation.</p>
            </article>
          </div>
          <FaqAccordion items={admissionsFaq} className="mt-8" />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-2">
          <ContentImage
            src="/images/admissions/process.jpg"
            alt="Care coordinator reviewing referral notes in a quiet office"
            caption="Clear coordination helps reduce delays."
          />
          <ContentImage
            src="/images/admissions/welcome.jpg"
            alt="A welcoming residential entrance and common area"
            caption="A stable environment supports a safer start."
          />
        </div>
      </section>
      <CtaSection
        heading="Ready for a clear next step?"
        body="Use our contact page to request an admissions callback. Please avoid including private medical details in web messages."
        primaryHref="/contact"
        primaryLabel="Talk to someone today"
      />
    </>
  );
}
