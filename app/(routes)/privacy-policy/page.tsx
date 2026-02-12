import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy and cookie policy"
        subtitle="Placeholder policy content for legal review. Replace with finalized counsel-approved language before publishing."
      />
      <section className="section pt-0">
        <div className="container prose-md rounded-md border border-line bg-white p-8 shadow-[0_12px_28px_rgba(17,17,17,0.08)]">
          <h2>Information collected</h2>
          <p>
            We collect limited website analytics and basic contact details submitted through approved forms. We do not
            request detailed protected health information through website forms.
          </p>
          <h2>Cookie notice</h2>
          <p>
            This site may use essential and analytics cookies. A production consent manager and full preference center
            should be added before launch.
          </p>
          <h2>Use and retention</h2>
          <p>
            Submitted contact details are used to respond to inquiries and coordinate admissions follow-up. Retention
            practices should be finalized with compliance and legal teams.
          </p>
          <h2>HIPAA awareness</h2>
          <p>
            Do not submit diagnoses, medications, insurance ID numbers, or treatment records through general website
            forms unless and until a secure, compliant intake workflow is implemented.
          </p>
        </div>
      </section>
    </>
  );
}
