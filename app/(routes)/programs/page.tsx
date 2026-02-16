import localFont from "next/font/local";
import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ContentImage } from "@/components/ui/content-image";

const handwritten = localFont({
  src: "../../fonts/Valen Valentine Script.otf",
  display: "swap"
});

export const metadata = {
  title: "Programs"
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero
        title="Low-Intensity Residential Program"
        showEyebrow={false}
      />
      <section className="section relative overflow-hidden bg-[#f7f6f3] pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background:repeating-linear-gradient(0deg,transparent,transparent_16px,rgba(17,17,17,0.02)_17px)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-8 hidden h-60 w-60 border border-primary/30 md:block" />
        <div className="container relative">
          <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-start">
            <div className="relative border-l-4 border-primary/80 pl-6 md:pl-8">
              <h2
                className={`${handwritten.className} relative inline-block whitespace-nowrap text-5xl leading-[0.95] text-neutral-900 [text-shadow:0.6px_0.6px_0_rgba(17,17,17,0.22)] md:text-7xl`}
              >
                Residential Program
                <svg
                  viewBox="0 0 640 92"
                  className="pointer-events-none absolute -bottom-9 left-0 h-10 w-[101%]"
                  aria-hidden="true"
                >
                  <path d="M10 56 C 170 18, 450 18, 630 58" fill="none" stroke="#d67c2d" strokeWidth="9" strokeLinecap="round" />
                  <path d="M14 68 C 184 34, 440 34, 626 68" fill="none" stroke="#d67c2d" strokeWidth="3" strokeLinecap="round" opacity="0.9" />
                </svg>
              </h2>
              <p className="mt-10 max-w-3xl text-lg leading-relaxed text-neutral-800">
                Mulligan’s residential program is a structured, 24-hour staffed recovery residence for adults who no
                longer need inpatient care but still need daily support. It gives people a safe place to stabilize,
                reset, and keep moving forward with confidence. We are a 12-bed facility serving males ages 18+.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                We focus on building independence, strengthening relapse prevention skills, and helping each person
                reconnect to community life in Connecticut at a steady, realistic pace.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                Whether you are a loved one searching for the right next step or a discharge planner coordinating care,
                this program offers clear structure with room for real growth.
              </p>
            </div>

            <div className="relative">
              <ContentImage
                src="/images/programs/hero.jpg"
                alt="A warm, structured residential treatment setting with shared seating"
                ratio="portrait"
                className="md:[&>div]:shadow-[0_20px_40px_rgba(17,17,17,0.18)]"
              />
              <div className="absolute -bottom-6 right-4 bg-primary px-5 py-4 text-white shadow-[0_14px_28px_rgba(214,124,45,0.42)] md:right-6">
                <p className="text-xl font-bold leading-tight">Structure without overwhelm.</p>
                <p className="mt-1 text-sm font-semibold tracking-wide text-white/90">Real support, day by day.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="section relative overflow-hidden bg-[#f2efe9] pt-0">
        <svg
          aria-hidden="true"
          viewBox="0 0 1200 420"
          className="pointer-events-none absolute inset-x-0 top-16 h-[420px] w-full opacity-[0.05]"
        >
          <path d="M0 260 C 200 140, 360 140, 560 250 C 760 360, 940 360, 1200 180" fill="none" stroke="#111111" strokeWidth="64" />
        </svg>
        <div className="container relative">
          <div className="grid gap-6 md:grid-cols-3 md:items-start">
            <article className="rounded-[24px] bg-white p-8 shadow-[0_14px_34px_rgba(17,17,17,0.09)] md:translate-y-0">
              <h2 className="text-2xl font-semibold text-neutral-900">Who This Is For</h2>
              <ul className="mt-4 list-disc space-y-2 pl-5 text-neutral-700">
                <li>People stepping down from detox or residential treatment</li>
                <li>People whose home environment is not supportive of recovery</li>
                <li>People who need consistent structure to maintain sobriety</li>
              </ul>
            </article>

            <article className="rounded-[24px] bg-white p-8 shadow-[0_14px_34px_rgba(17,17,17,0.09)] md:translate-y-8">
              <h2 className="text-2xl font-semibold text-neutral-900">What to Expect</h2>
              <ul className="mt-4 grid list-disc gap-y-2 pl-5 text-neutral-700 md:grid-cols-2 md:gap-x-8">
                <li>24/7 staff support</li>
                <li>Weekly individual and group counseling</li>
                <li>Medication management support</li>
                <li>Peer support and recovery meetings</li>
                <li>Life skills and vocational support</li>
                <li>Family involvement when appropriate</li>
                <li>Discharge planning from day one</li>
              </ul>
            </article>

            <article className="rounded-[24px] bg-white p-8 shadow-[0_14px_34px_rgba(17,17,17,0.09)] md:translate-y-16">
              <h2 className="text-2xl font-semibold text-neutral-900">Location</h2>
              <p className="mt-4 text-neutral-700">
                We are located in New Haven, just minutes from downtown and Yale New Haven Hospital, with easy access
                to public bus transportation.
              </p>
            </article>
          </div>

          <p className="mt-10 text-neutral-700">
            Recovery is built through stability, structure, and hope. Our team helps each resident prepare for
            independent living with practical support, clear expectations, and a community that believes long-term
            change is possible.
          </p>
        </div>
      </section>
      <CtaSection
        heading="Need help deciding if this is the right next step?"
        body="We can walk you through fit, timing, and the admissions process with clear, practical guidance."
        primaryHref="/admissions"
        primaryLabel="Start admissions"
        secondaryHref="/contact"
        secondaryLabel="Talk to someone today"
      />
    </>
  );
}
