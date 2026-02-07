import { credentialPlaceholders, outcomesPlaceholders, payerPlaceholders } from "@/lib/launch-placeholders";
import { SectionHeading } from "@/components/ui/section-heading";

export function LaunchReadiness() {
  return (
    <section className="section bg-white">
      <div className="container">
        <SectionHeading
          eyebrow="Launch Readiness"
          title="Credential, payer, and outcomes publication slots"
          subtitle="Operational placeholders are intentionally explicit so legal, compliance, and leadership can approve final language before go-live."
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          <article className="card">
            <h3 className="text-lg font-semibold text-neutral-900">Credentials and Governance</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              {credentialPlaceholders.map((item) => (
                <li key={item.label}>
                  <p className="font-semibold text-neutral-900">{item.label}</p>
                  <p>{item.value}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold text-neutral-900">Payer Roster Disclosure</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              {payerPlaceholders.map((item) => (
                <li key={item.payer}>
                  <p className="font-semibold text-neutral-900">{item.payer}</p>
                  <p>Status: {item.status}</p>
                  <p>Effective: {item.effectiveDate}</p>
                  <p>{item.notes}</p>
                </li>
              ))}
            </ul>
          </article>

          <article className="card">
            <h3 className="text-lg font-semibold text-neutral-900">Outcomes Methodology</h3>
            <ul className="mt-4 space-y-3 text-sm text-neutral-700">
              {outcomesPlaceholders.map((item) => (
                <li key={item.metric}>
                  <p className="font-semibold text-neutral-900">{item.metric}</p>
                  <p>{item.definition}</p>
                  <p>{item.status}</p>
                </li>
              ))}
            </ul>
          </article>
        </div>
      </div>
    </section>
  );
}
