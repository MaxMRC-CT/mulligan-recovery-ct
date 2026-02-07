import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ContentImage } from "@/components/ui/content-image";

export const metadata = {
  title: "Families"
};

export default function FamiliesPage() {
  return (
    <>
      <PageHero
        title="For families"
        subtitle="If you are not sure what level of care makes sense, that is normal. We will help you think it through."
      />
      <section className="section pt-0">
        <div className="container">
          <ContentImage
            src="/images/resources/families.svg"
            alt="A family member and counselor talking calmly in a private room"
            ratio="hero"
            caption="Support starts with clear conversation and practical next steps."
          />
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-6 md:grid-cols-3">
          {[
            {
              title: "Clear communication",
              text: "With consent, we set simple update plans so you know what to expect."
            },
            {
              title: "Practical guidance",
              text: "We explain next steps in plain language and answer questions directly."
            },
            {
              title: "Transition planning",
              text: "Before discharge, we align on follow-up care and support at home."
            }
          ].map((item) => (
            <article key={item.title} className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-lg font-semibold text-neutral-900">{item.title}</h2>
              <p className="mt-2 text-sm text-neutral-700">{item.text}</p>
            </article>
          ))}
        </div>
      </section>
      <CtaSection
        heading="You do not need to figure this out alone"
        body="Talk with our team about what support is needed right now and what comes next."
        primaryHref="/contact"
        primaryLabel="Talk to someone today"
      />
    </>
  );
}
