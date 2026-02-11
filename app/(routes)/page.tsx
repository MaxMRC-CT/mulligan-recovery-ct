import Link from "next/link";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { StatsCarousel } from "@/components/sections/stats-carousel";
import { ContentImage } from "@/components/ui/content-image";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-90px)] overflow-hidden">
        <Image
          src="/images/home/hero.jpg"
          alt="A calm residential setting with natural light and welcoming shared space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container relative flex min-h-[calc(100svh-90px)] items-center py-12">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-white">Real People.</span>
              <span className="mt-5 block text-white">Real Recovery.</span>
              <span className="mt-5 block text-primary">
                Real{" "}
                <span className="relative inline-block">
                  Simple
                  <svg
                    viewBox="0 0 360 72"
                    className="pointer-events-none absolute -bottom-6 left-0 h-9 w-[130%]"
                    aria-hidden="true"
                  >
                    <path
                      d="M8 50 C 90 20, 240 22, 350 46"
                      fill="none"
                      stroke="#f28f42"
                      strokeWidth="10"
                      strokeLinecap="round"
                    />
                  </svg>
                </span>
                .
              </span>
            </h1>
            <div className="mt-16 flex flex-wrap gap-3 md:mt-24">
              <Link href="/admissions" className="btn-secondary bg-white/90">
                See if Mulligan is right for you
              </Link>
              <Link href="/contact" className="btn-primary">
                Talk to someone today
              </Link>
            </div>
          </div>
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
