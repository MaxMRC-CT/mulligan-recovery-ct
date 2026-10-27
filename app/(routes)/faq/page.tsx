import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/ui/faq-accordion";
import { faqItems } from "@/lib/faq";

export const metadata = {
  title: "FAQ"
};

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers for residents, families, and referral partners."
      />
      <section className="section pt-0">
        <div className="container">
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
