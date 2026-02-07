import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

const trustItems = [
  {
    title: "Licensed Residential Program",
    body: "State licensure and program standards are reviewed regularly. Add current license identifiers before launch."
  },
  {
    title: "Clinical Oversight",
    body: "Care planning and level-of-care decisions are guided by licensed clinical leadership and ASAM criteria."
  },
  {
    title: "Family Communication",
    body: "With resident authorization, we provide structured updates and transition planning with family supports."
  },
  {
    title: "HIPAA-Aware Intake",
    body: "Web inquiries are limited to general contact information. Secure PHI collection should occur in approved workflows only."
  }
];

export function TrustSignals() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Why Families and Referrers Choose Mulligan"
          title="Trust indicators that support confident placement decisions"
          subtitle="Replace placeholders with verified credentials, payer contracts, and audited outcomes before go-live."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-2">
          {trustItems.map((item) => (
            <Card key={item.title} title={item.title}>
              <p>{item.body}</p>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
}
