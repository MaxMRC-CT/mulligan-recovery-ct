import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Crisis and Support"
};

export default function CrisisSupportPage() {
  return (
    <>
      <PageHero
        title="Crisis and support resources"
        subtitle="Immediate help resources for mental health and substance use crises in Connecticut."
      />
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-2">
          <article className="card">
            <h2 className="text-xl font-semibold text-neutral-900">Emergency</h2>
            <p className="mt-3 text-neutral-700">If someone is in immediate danger, call 911.</p>
          </article>
          <article className="card">
            <h2 className="text-xl font-semibold text-neutral-900">988 Suicide & Crisis Lifeline</h2>
            <p className="mt-3 text-neutral-700">Call or text 988 any time for urgent emotional support.</p>
          </article>
          <article className="card">
            <h2 className="text-xl font-semibold text-neutral-900">SAMHSA National Helpline</h2>
            <p className="mt-3 text-neutral-700">1-800-662-HELP (4357) for treatment referral and information.</p>
          </article>
          <article className="card">
            <h2 className="text-xl font-semibold text-neutral-900">Connecticut 211</h2>
            <p className="mt-3 text-neutral-700">Dial 211 for local behavioral health and social support services.</p>
          </article>
        </div>
      </section>
    </>
  );
}
