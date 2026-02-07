import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { FaqAccordion, type FaqItem } from "@/components/ui/faq-accordion";
import { FormInput, FormTextArea } from "@/components/ui/form-input";
import { SectionHeading } from "@/components/ui/section-heading";

const faqItems: FaqItem[] = [
  {
    question: "How quickly can admissions respond?",
    answer:
      "Most inquiries receive a same-day or next-business-day callback. Response timing depends on referral documentation and staffing volume."
  },
  {
    question: "Can families participate in planning?",
    answer:
      "Yes. With resident consent, families can be included in care updates and transition planning discussions."
  },
  {
    question: "What details should not be submitted online?",
    answer:
      "Avoid submitting diagnosis information, medication lists, or detailed treatment history through general web forms."
  }
];

export function DesignSystemShowcase() {
  return (
    <div className="rhythm">
      <SectionHeading
        eyebrow="Design System"
        title="Professional, healthcare-ready UI primitives"
        subtitle="Use this reference to keep interfaces calm, consistent, and accessible across all pages."
      />

      <section className="grid gap-4 md:grid-cols-3">
        <Button>Primary Button</Button>
        <Button variant="secondary">Secondary Button</Button>
        <Button variant="ghost">Ghost Button</Button>
      </section>

      <section className="grid gap-5 md:grid-cols-3">
        <Card title="Primary">Use for high-priority calls-to-action and key interactions.</Card>
        <Card title="Secondary">Use for supportive actions and lower-emphasis decisions.</Card>
        <Card title="Spacing Rhythm">Wrap sections with `rhythm` for predictable vertical spacing.</Card>
      </section>

      <section className="card">
        <SectionHeading
          title="Form Controls"
          subtitle="Minimal, clear fields designed for admissions and general inquiry workflows."
          className="mb-6"
        />
        <div className="form-stack">
          <FormInput id="name" label="Full Name" placeholder="Jordan Smith" />
          <FormInput id="phone" label="Phone Number" type="tel" placeholder="(203) 555-0105" />
          <FormTextArea
            id="message"
            label="Message"
            placeholder="General question only. Please avoid private health details."
          />
        </div>
      </section>

      <section>
        <SectionHeading
          title="FAQ Accordion"
          subtitle="Native details/summary for accessibility and simple maintenance."
          className="mb-5"
        />
        <FaqAccordion items={faqItems} />
      </section>
    </div>
  );
}
