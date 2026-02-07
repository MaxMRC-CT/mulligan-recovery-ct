import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

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

export default function AdmissionsPage() {
  return (
    <>
      <PageHero
        title="Admissions: how it works"
        subtitle="Our process is designed to be straightforward, transparent, and respectful for residents, families, and referral partners."
      />
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-2">
          {steps.map((step) => (
            <article key={step.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-semibold text-[#18414f]">{step.title}</h2>
              <p className="mt-3 text-[#345867]">{step.body}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaSection
        heading="Ready to begin the first step?"
        body="Use our contact page to request an admissions callback. Please avoid including private medical details in web messages."
        primaryHref="/contact"
        primaryLabel="Request Callback"
      />
    </>
  );
}
