import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Terms"
};

export default function TermsPage() {
  return (
    <>
      <PageHero
        title="Terms of use"
        subtitle="Placeholder terms for legal review and operational policy approval."
      />
      <section className="section pt-0">
        <div className="container prose-md rounded-md border border-line bg-white p-8 shadow-[0_12px_28px_rgba(17,17,17,0.08)]">
          <h2>Use of this site</h2>
          <p>
            Content is provided for general informational use. Accessing this website does not establish a treatment
            relationship.
          </p>
          <h2>Not medical advice</h2>
          <p>
            Materials on this website are not medical advice and should not replace emergency or clinical guidance from
            licensed professionals.
          </p>
          <h2>Third-party links</h2>
          <p>
            Any external links are provided for convenience and do not imply endorsement. We are not responsible for
            third-party content.
          </p>
          <h2>Changes</h2>
          <p>These terms may be updated over time. Continued use of the site indicates acceptance of current terms.</p>
        </div>
      </section>
    </>
  );
}
