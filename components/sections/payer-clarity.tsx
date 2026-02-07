import { Card } from "@/components/ui/card";
import { SectionHeading } from "@/components/ui/section-heading";

export function PayerClarity() {
  return (
    <section className="section pt-0">
      <div className="container">
        <SectionHeading
          eyebrow="Payer Clarity"
          title="What to expect before admission"
          subtitle="Set expectations early to reduce avoidable delays and improve authorization readiness."
        />
        <div className="mt-8 grid gap-5 md:grid-cols-3">
          <Card title="Verification Window">
            <p>Most benefits checks are initiated same day during business hours with follow-up as payer responses arrive.</p>
          </Card>
          <Card title="Common Requirements">
            <p>Policy eligibility, authorization requirements, referral records, and level-of-care alignment documentation.</p>
          </Card>
          <Card title="Private-Pay Option">
            <p>If coverage is unavailable, we provide transparent private-pay estimates and discuss next-best alternatives.</p>
          </Card>
        </div>
      </div>
    </section>
  );
}
