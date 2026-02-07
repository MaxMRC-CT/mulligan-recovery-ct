import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";

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
      <CtaSection
        heading="Verify benefits before admission"
        body="Our team can help clarify likely coverage and next steps with your referral source."
        primaryHref="/contact"
        primaryLabel="Contact Billing and Admissions"
      />
    </>
  );
}
