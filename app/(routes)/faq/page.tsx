import { PageHero } from "@/components/page-hero";
import { FaqAccordion } from "@/components/ui/faq-accordion";

export const metadata = {
  title: "FAQ"
};

const faqItems = [
  {
    question: "Who is appropriate for ASAM Level 3.1 care?",
    answer:
      "Adults who are medically stable and benefit from structured residential support while building recovery routines may be appropriate for ASAM 3.1 placement."
  },
  {
    question: "How fast can admissions respond?",
    answer:
      "Most inquiries are triaged the same business day. Final timing depends on documentation completeness and payer requirements."
  },
  {
    question: "Can families participate in the process?",
    answer:
      "Yes. With resident authorization, family members can participate in communication planning and transition discussions."
  },
  {
    question: "Can I submit detailed medical information online?",
    answer:
      "No. Please submit only general contact and referral details through web forms. Secure workflows should be used for PHI collection."
  }
];

export default function FaqPage() {
  return (
    <>
      <PageHero
        title="Frequently Asked Questions"
        subtitle="Quick answers for residents, families, and referral partners considering ASAM Level 3.1 treatment."
      />
      <section className="section pt-0">
        <div className="container">
          <FaqAccordion items={faqItems} />
        </div>
      </section>
    </>
  );
}
