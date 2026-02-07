import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { PayerClarity } from "@/components/sections/payer-clarity";

export const metadata = {
  title: "Insurance and Payment"
};

export default function InsurancePaymentPage() {
  return (
    <>
      <PageHero
        title="Insurance and payment options"
        subtitle="We work to make coverage and financial expectations clear before admission whenever possible."
      />
      <section className="section pt-0">
        <div className="container prose-md rounded-2xl border border-line bg-white p-8 shadow-card">
          <h2>Coverage verification</h2>
          <p>
            We can verify many commercial plans and selected public benefits. Coverage depends on policy terms,
            clinical authorization, and eligibility on the date of service.
          </p>
          <h2>Private-pay support</h2>
          <p>
            If insurance is not available, we provide transparent private-pay information and discuss practical
            alternatives when appropriate.
          </p>
          <h2>What we need</h2>
          <p>
            Please share only basic insurance details through the admissions process. Avoid sending diagnoses,
            medication lists, or full treatment history through unsecured web forms.
          </p>
        </div>
      </section>
      <PayerClarity />
      <section className="section bg-white">
        <div className="container rounded-2xl border border-line bg-neutral-50 p-8">
          <h2 className="text-2xl font-bold text-neutral-900">Payers commonly reviewed (placeholder)</h2>
          <p className="mt-3 text-neutral-700">
            Final payer participation should be confirmed by contract and effective date before public launch.
          </p>
          <div className="mt-6 grid gap-3 md:grid-cols-2">
            <p className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-neutral-700">Commercial PPO plans</p>
            <p className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-neutral-700">Select HMO options (authorization required)</p>
            <p className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-neutral-700">Selected Medicaid pathways by eligibility</p>
            <p className="rounded-xl border border-line bg-white px-4 py-3 text-sm text-neutral-700">Out-of-network case-by-case review</p>
          </div>
        </div>
      </section>
      <CtaSection
        heading="Verify benefits before admission"
        body="Our team can help clarify likely coverage and next steps with your referral source."
        primaryHref="/contact"
        primaryLabel="Contact Billing and Admissions"
      />
    </>
  );
}
