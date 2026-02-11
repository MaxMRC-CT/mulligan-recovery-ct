import Link from "next/link";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { StatsCarousel } from "@/components/sections/stats-carousel";
import { ContentImage } from "@/components/ui/content-image";

export default function HomePage() {
  return (
    <>
      <PageHero
        title="Real people. Real recovery. Kept simple."
        subtitle="Mulligan Recovery Centers provides low-intensity residential treatment in Connecticut for people who want structure, dignity, and a clear path forward."
      />

      <section className="section pt-0">
        <div className="container">
          <ContentImage
            src="/images/home/hero.jpg"
            alt="A calm residential setting with natural light and welcoming shared space"
            ratio="hero"
            caption="A calm environment can make difficult decisions feel more manageable."
          />
        </div>
      </section>

      <section className="section pt-0">
        <div className="container rounded-2xl border border-line bg-neutral-50 p-8">
          <h2 className="section-heading">What we do</h2>
          <p className="section-subheading">
            We help adults who need more support than outpatient care, but not the disruption of high-intensity
            inpatient treatment.
          </p>
          <p className="mt-3 max-w-3xl text-neutral-700">
            Low-intensity residential care means you live on site, attend scheduled groups and sessions, and build
            daily structure without hospital-level intensity.
          </p>
          <div className="mt-6 flex flex-wrap gap-3">
            <Link href="/contact" className="btn-primary">
              Talk to someone today
            </Link>
            <Link href="/admissions" className="btn-secondary">
              See if Mulligan is right for you
            </Link>
          </div>
        </div>
      </section>

      <StatsCarousel />

      <section className="section bg-white">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start">
          <div>
            <h2 className="section-heading">Who we serve</h2>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>Individuals seeking a stable next step in recovery</li>
              <li>Families looking for clarity and honesty</li>
              <li>Professionals referring patients who need structure, not acuity</li>
            </ul>
          </div>
          <div className="card">
            <h3 className="text-xl font-semibold text-neutral-900">Connecticut roots. New Haven focus.</h3>
            <p className="mt-3 text-neutral-700">
              Built by people who understand recovery personally and professionally. We keep next steps clear and
              practical.
            </p>
            <div className="mt-6 flex flex-wrap gap-3">
              <Link href="/contact" className="btn-primary">
                Talk to someone today
              </Link>
              <Link href="/admissions" className="btn-secondary">
                See if Mulligan is right for you
              </Link>
            </div>
          </div>
        </div>
      </section>

      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-3">
          <ContentImage
            src="/images/home/support-connection.jpg"
            alt="Two adults in a supportive one-on-one conversation"
            caption="Connection and trust support steady progress."
          />
          <ContentImage
            src="/images/home/support-environment.jpg"
            alt="A quiet, well-lit common room in a residential care environment"
            caption="Calm spaces help people focus on recovery."
          />
          <ContentImage
            src="/images/home/support-professional.jpg"
            alt="A counselor meeting with an adult client in a neutral office"
            caption="Professional guidance with clear next steps."
          />
        </div>
      </section>

      <CtaSection
        heading="You do not have to figure this out alone"
        body="Share only basic contact details. Do not submit diagnosis details, medications, or other private medical information through online forms."
        primaryHref="/contact"
        primaryLabel="Talk to someone today"
        secondaryHref="/admissions"
        secondaryLabel="See if Mulligan is right for you"
      />
    </>
  );
}
