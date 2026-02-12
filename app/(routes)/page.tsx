import Link from "next/link";
import Image from "next/image";
import { CtaSection } from "@/components/cta-section";
import { StatsCarousel } from "@/components/sections/stats-carousel";
import { ContentImage } from "@/components/ui/content-image";

export default function HomePage() {
  return (
    <>
      <section className="relative min-h-[calc(100svh-112px)] overflow-hidden">
        <Image
          src="/images/home/hero.jpg"
          alt="A calm residential setting with natural light and welcoming shared space"
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
        <div className="absolute inset-0 bg-black/45" />
        <div className="container relative flex min-h-[calc(100svh-112px)] items-center py-14">
          <div className="max-w-4xl">
            <h1 className="text-5xl font-extrabold leading-[0.95] tracking-tight sm:text-6xl md:text-7xl lg:text-8xl">
              <span className="block text-white">Real People.</span>
              <span className="mt-5 block text-primary">Real Recovery.</span>
              <span className="mt-5 block text-white">
                Real{" "}
                <span className="relative inline-block">
                  Simple
                  <svg
                    viewBox="0 0 600 96"
                    className="pointer-events-none absolute -bottom-7 -left-[22%] h-10 w-[150%]"
                    aria-hidden="true"
                  >
                    <path
                      d="M6 60 C 170 14, 430 14, 594 60"
                      fill="none"
                      stroke="#f28f42"
                      strokeWidth="12"
                      strokeLinecap="round"
                    />
                    <path
                      d="M12 72 C 185 32, 422 32, 588 70"
                      fill="none"
                      stroke="#f28f42"
                      strokeWidth="4"
                      strokeLinecap="round"
                      opacity="0.9"
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

      <section className="section relative overflow-hidden bg-[#f7f6f3] pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background:repeating-linear-gradient(0deg,transparent,transparent_16px,rgba(17,17,17,0.02)_17px)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-8 hidden h-60 w-60 border border-primary/30 md:block" />
        <div className="container relative">
          <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-start">
            <div className="relative">
              <ContentImage
                src="/images/home/what-we-do-overlay.jpg"
                alt="An adult in a counseling session listening and speaking with support staff"
                className="md:[&>div]:aspect-[4/5] md:[&>div]:shadow-[0_20px_40px_rgba(17,17,17,0.18)]"
              />
              <div className="absolute -bottom-6 right-4 bg-primary px-5 py-4 text-white shadow-[0_14px_28px_rgba(214,124,45,0.42)] md:right-6">
                <p className="text-xl font-bold leading-tight">Recovery is personal.</p>
                <p className="mt-1 text-sm font-semibold tracking-wide text-white/90">Support is real. Progress is possible.</p>
              </div>
            </div>

            <div className="relative border-l-4 border-primary/80 pl-6 md:pl-8">
              <h2 className="text-3xl font-bold leading-tight text-neutral-900 md:text-5xl">What we do</h2>
              <svg
                viewBox="0 0 180 80"
                className="pointer-events-none mt-3 h-12 w-36 text-neutral-900"
                aria-hidden="true"
              >
                <path d="M8 8 C 68 14, 82 40, 108 66" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
                <path d="M95 56 L 108 68 L 95 74" fill="none" stroke="currentColor" strokeWidth="5" strokeLinecap="round" />
              </svg>
              <p className="mt-2 max-w-3xl text-lg leading-relaxed text-neutral-800">
                At Mulligan Recovery Centers of Connecticut, we provide a safe and structured place for people who are
                ready to step away from the chaos of addiction and focus on rebuilding their lives. Our residential
                program gives individuals the time, support, and stability needed to reset, surrounded by caring
                professionals and a community of peers who understand the journey. Recovery here is not rushed. It is
                strengthened day by day through guidance, accountability, and real human connection.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                We believe lasting change happens in an environment grounded in respect, dignity, and hope. Our team
                works closely with each person to build healthy routines, practical life skills, and the confidence
                needed to move forward. This is about more than stopping substance use. It is about rediscovering
                purpose, repairing relationships, and creating a future that feels meaningful and sustainable. At
                Mulligan CT, recovery is personal, supportive, and absolutely possible.
              </p>
            </div>
          </div>
        </div>
      </section>

      <StatsCarousel />

      <section className="section bg-white">
        <div className="container grid gap-8 md:grid-cols-2 md:items-start">
          <div className="relative rounded-[10px] border border-[#ece7df] bg-[#fbfaf8] p-7 shadow-[0_12px_32px_rgba(17,17,17,0.07)]">
            <div aria-hidden="true" className="absolute right-6 top-6 h-2.5 w-2.5 rounded-full bg-primary/70" />
            <h2 className="section-heading">Who we serve</h2>
            <ul className="mt-4 space-y-2 text-neutral-700">
              <li>Individuals seeking a stable next step in recovery</li>
              <li>Families looking for clarity and honesty</li>
              <li>Professionals referring patients who need structure, not acuity</li>
            </ul>
          </div>
          <div className="card rounded-[10px] border-[#ece7df] bg-[#fbfaf8] shadow-[0_12px_32px_rgba(17,17,17,0.07)]">
            <h3 className="text-xl font-semibold text-neutral-900">Connecticut roots. New Haven focus.</h3>
            <p className="mt-3 text-neutral-700">
              Built by people who understand recovery personally and professionally. We keep next steps clear and
              practical.
            </p>
          </div>
        </div>
      </section>

      <section className="section pt-2">
        <div className="container grid gap-5 md:grid-cols-3">
          <ContentImage
            src="/images/home/support-connection.jpg"
            alt="Two adults in a supportive one-on-one conversation"
            caption="Connection and trust support steady progress."
            className="md:translate-y-4 md:[&>div]:rounded-[10px] md:[&>div]:shadow-[0_12px_26px_rgba(17,17,17,0.1)]"
          />
          <ContentImage
            src="/images/home/support-environment.jpg"
            alt="A quiet, well-lit common room in a residential care environment"
            caption="Calm spaces help people focus on recovery."
            className="md:[&>div]:rounded-[10px] md:[&>div]:shadow-[0_12px_26px_rgba(17,17,17,0.1)]"
          />
          <ContentImage
            src="/images/home/support-professional.jpg"
            alt="A counselor meeting with an adult client in a neutral office"
            caption="Professional guidance with clear next steps."
            className="md:translate-y-6 md:[&>div]:rounded-[10px] md:[&>div]:shadow-[0_12px_26px_rgba(17,17,17,0.1)]"
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
