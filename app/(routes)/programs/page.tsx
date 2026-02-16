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
        title="ASAM Level 3.1: Low-Intensity Residential"
        subtitle="A supportive residential environment for adults who need structure, recovery coaching, and coordinated care while strengthening independence."
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
                Our residential program is built for adults who need steady structure and meaningful support while
                strengthening independent recovery. Residents live in a calm environment with clear routines, scheduled
                groups, and focused clinical guidance.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                Care emphasizes accountability, practical life skills, and coordinated planning for what comes next.
                The goal is not just short-term stability, but a durable path forward that can be sustained in daily
                life.
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
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-2">
          {[
            "Daily schedule with clinical groups and recovery skill-building",
            "Case management and discharge planning with community handoff",
            "Medication coordination with external prescribers",
            "Peer-based recovery engagement and accountability planning",
            "Family involvement when authorized by the resident",
            "Relapse prevention and return-to-work/readiness planning"
          ].map((item) => (
            <div key={item} className="rounded-md border border-line bg-white p-6 shadow-[0_12px_28px_rgba(17,17,17,0.08)]">
              <p className="font-medium text-neutral-700">{item}</p>
            </div>
          ))}
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-2">
          <ContentImage
            src="/images/programs/daily-structure.jpg"
            alt="A small group session in a bright room with adults listening and participating"
            caption="Daily structure helps people rebuild routines without overwhelm."
          />
          <ContentImage
            src="/images/programs/group-room.jpg"
            alt="A calm group room prepared for counseling and recovery discussion"
            caption="Shared spaces support accountability and connection."
          />
        </div>
      </section>
      <section className="section bg-white">
        <div className="container prose-md rounded-md border border-line p-8">
          <h2>Who is this level of care for?</h2>
          <p>
            ASAM 3.1 may be appropriate for individuals who require a stable living setting and consistent recovery
            support but do not need 24-hour nursing or acute medical services.
          </p>
          <p>
            Final placement is based on screening, referral documentation, and clinical appropriateness.
          </p>
        </div>
      </section>
      <section className="section pt-0">
        <div className="container grid gap-5 md:grid-cols-3">
          <article className="card">
            <h2 className="text-lg font-semibold text-neutral-900">Length of Stay Planning</h2>
            <p className="mt-3 text-neutral-700">
              Duration is individualized based on engagement, stability goals, and referral-team coordination.
            </p>
          </article>
          <article className="card">
            <h2 className="text-lg font-semibold text-neutral-900">Continuing Care Handoff</h2>
            <p className="mt-3 text-neutral-700">
              Discharge plans include outpatient linkage, support meetings, and accountable follow-up recommendations.
            </p>
          </article>
          <article className="card">
            <h2 className="text-lg font-semibold text-neutral-900">Referral Communication</h2>
            <p className="mt-3 text-neutral-700">
              With consent and applicable releases, care updates can be coordinated with external providers.
            </p>
          </article>
        </div>
      </section>
      <CtaSection
        heading="Need help deciding if this level of care fits?"
        body="Our team can review needs and recommend the clearest next step."
        primaryHref="/admissions"
        primaryLabel="See if Mulligan is right for you"
      />
    </>
  );
}
