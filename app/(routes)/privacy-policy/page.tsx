import { PageHero } from "@/components/page-hero";
import { site } from "@/lib/site";

export const metadata = {
  title: "Privacy Policy"
};

export default function PrivacyPolicyPage() {
  return (
    <>
      <PageHero
        title="Privacy and cookie policy"
        subtitle="How we handle the information you share through this website."
      />
      <section className="section pt-0">
        <div className="container prose-md rounded-md border border-line bg-white p-8 shadow-[0_12px_28px_rgba(17,17,17,0.08)]">
          <h2>Information we collect</h2>
          <p>
            When you use our contact form, we collect your name, phone number, email address (optional), the reason
            for your inquiry, how you prefer to be contacted, and a short message. We do not ask for health
            information through this website.
          </p>
          <h2>How we use it</h2>
          <p>
            We use what you send only to respond to you and coordinate admissions. Form submissions are delivered to
            our admissions team by email through our email delivery provider. We do not sell or share your
            information for marketing.
          </p>
          <h2>Cookies and outside services</h2>
          <p>
            This website does not use advertising or analytics cookies. Pages load fonts from Google Fonts, and our
            contact page shows a Google Map. Those services may receive basic technical information, like your IP
            address, under their own privacy policies.
          </p>
          <h2>Health information</h2>
          <p>
            Please do not send diagnoses, medications, insurance ID numbers, or treatment records through this
            website or by email. We will talk through anything personal with you directly.
          </p>
          <h2>Questions</h2>
          <p>Questions about this policy can be sent to {site.admissionsEmail}.</p>
        </div>
      </section>
    </>
  );
}
