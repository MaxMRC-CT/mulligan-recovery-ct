import { CtaSection } from "@/components/cta-section";
import { PageHero } from "@/components/page-hero";
import { ContentImage } from "@/components/ui/content-image";

export const metadata = {
  title: "Programs"
};

export default function ProgramsPage() {
  return (
    <>
      <PageHero title="Residential Treatment" />
      <section className="section relative overflow-hidden bg-[#f7f6f3] pt-10">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background:repeating-linear-gradient(0deg,transparent,transparent_16px,rgba(17,17,17,0.02)_17px)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-8 hidden h-60 w-60 border border-primary/30 md:block" />
        <div className="container relative">
          <div className="grid gap-10 md:grid-cols-[0.92fr_1.08fr] md:items-start">
            <div className="relative border-l-4 border-primary/80 pl-6 md:pl-8">
              <p className="mt-2 max-w-3xl text-lg leading-relaxed text-neutral-800">
                Mulligan’s Residential Program is a structured, 24-hour staffed recovery residence for adults who no
                longer need inpatient care but still benefit from daily support and accountability. As a 12-bed program
                serving men ages 18 and older, we provide a safe, stable environment where individuals can reset,
                strengthen their recovery, and move forward with confidence.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                Our focus is on building independence, developing practical relapse prevention skills, and helping each
                resident reconnect with work, family, and community life at a steady, realistic pace.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                Whether you are a loved one searching for the right next step or a discharge planner coordinating
                continued care, this program offers the structure people need — with room for real, lasting growth.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                We are located in New Haven, just minutes from downtown and Yale New Haven Hospital, with convenient
                access to public bus transportation.
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
        <div className="container relative">
          <div className="rounded-[24px] border border-line bg-white p-8 shadow-[0_14px_34px_rgba(17,17,17,0.09)] md:p-12">
            <h2 className="text-center text-4xl font-bold text-[#0c1a3a]">Program Features</h2>
            <div className="mt-8 grid grid-cols-2 gap-x-6 gap-y-8 sm:grid-cols-3 lg:grid-cols-7">
              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 text-[#0c1a3a]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6Zm8 0a3 3 0 1 1 0-6 3 3 0 0 1 0 6ZM3 20v-1a4 4 0 0 1 4-4h2a4 4 0 0 1 4 4v1M13 20v-1a4 4 0 0 1 4-4h1a3 3 0 0 1 3 3v2" />
                  </svg>
                </div>
                <p className="mt-2 text-base font-medium text-neutral-700">24/7</p>
                <p className="mt-1 text-base text-neutral-700">Staff</p>
              </article>

              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 text-[#0c1a3a]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <rect x="3" y="5" width="18" height="14" rx="2" />
                    <path d="M8 10h8M8 14h8" />
                  </svg>
                </div>
                <p className="mt-2 text-base font-medium text-neutral-700">Clinical Groups</p>
              </article>

              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 text-[#0c1a3a]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M12 4a5 5 0 0 1 5 5v1a5 5 0 0 1-10 0V9a5 5 0 0 1 5-5Z" />
                    <path d="M4 20a8 8 0 0 1 16 0" />
                  </svg>
                </div>
                <p className="mt-2 text-base font-medium text-neutral-700">Individual Therapy</p>
              </article>

              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 text-[#0c1a3a]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <rect x="4" y="3" width="16" height="18" rx="2" />
                    <path d="M8 8h8M8 12h8M8 16h5" />
                    <path d="m15.5 14.5 2 2 3-3" />
                  </svg>
                </div>
                <p className="mt-2 text-base font-medium text-neutral-700">Case Management</p>
              </article>

              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 text-[#0c1a3a]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M4 17c2-3 4-4 8-4s6 1 8 4" />
                    <circle cx="8" cy="9" r="2.5" />
                    <circle cx="16" cy="9" r="2.5" />
                  </svg>
                </div>
                <p className="mt-2 text-base font-medium text-neutral-700">Peer Support Program</p>
              </article>

              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 text-[#0c1a3a]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <path d="M4 20h16M8 20v-8m8 8v-4M12 20V8" />
                    <circle cx="8" cy="9" r="2" />
                    <circle cx="12" cy="5" r="2" />
                    <circle cx="16" cy="13" r="2" />
                  </svg>
                </div>
                <p className="mt-2 text-base font-medium text-neutral-700">Life Skills &amp; Vocational Support</p>
              </article>

              <article className="flex flex-col items-center text-center">
                <div className="h-12 w-12 text-[#0c1a3a]">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" aria-hidden="true">
                    <rect x="5" y="3" width="14" height="18" rx="2" />
                    <path d="M9 3v3h6V3M8 11h8M8 15h8" />
                  </svg>
                </div>
                <p className="mt-2 text-base font-medium text-neutral-700">Discharge Planning</p>
              </article>
            </div>
          </div>
        </div>
      </section>
      <section className="section relative overflow-hidden bg-[#f7f6f3] pt-0">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 opacity-40 [background:repeating-linear-gradient(0deg,transparent,transparent_16px,rgba(17,17,17,0.02)_17px)]"
        />
        <div aria-hidden="true" className="pointer-events-none absolute -right-20 top-8 hidden h-60 w-60 border border-primary/30 md:block" />
        <div className="container relative">
          <div className="grid gap-10 md:grid-cols-[1.08fr_0.92fr] md:items-start">
            <div className="relative">
              <ContentImage
                src="/images/programs/group-room.jpg"
                alt="Residents meeting with a counselor in a calm living-room style setting"
                ratio="portrait"
                className="md:[&>div]:shadow-[0_20px_40px_rgba(17,17,17,0.18)]"
              />
              <div className="absolute -bottom-6 right-4 bg-primary px-5 py-4 text-white shadow-[0_14px_28px_rgba(214,124,45,0.42)] md:right-6">
                <p className="text-xl font-bold leading-tight">Steady structure. Real support.</p>
                <p className="mt-1 text-sm font-semibold tracking-wide text-white/90">One day at a time.</p>
              </div>
            </div>

            <div className="relative border-r-4 border-primary/80 pr-6 md:pr-8">
              <p className="mt-2 max-w-3xl text-lg leading-relaxed text-neutral-800">
                Men in our residential program live together in our 12-bed home in New Haven, where structure,
                accountability, and support are part of daily life. The setting is small by design, allowing each
                resident to receive individual attention while becoming part of a community focused on real change.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                From day one, our team helps residents settle in and begin rebuilding. That often starts with the
                basics: stability, routine, and a clear plan forward. We work alongside each person to address
                practical needs like employment, transportation, medical and mental health care, and reconnecting with
                family. Recovery becomes more sustainable when someone has a life worth protecting.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                Throughout their stay, residents participate in individual counseling, group therapy, and peer-led
                support. They meet regularly with their primary counselor to track progress and adjust goals as they
                grow. Family involvement is encouraged when appropriate, and residents are supported in building a
                sober network through local recovery meetings and community connections.
              </p>
              <p className="mt-5 max-w-3xl text-lg leading-relaxed text-neutral-800">
                As stability increases, residents begin preparing for the next step, whether that is outpatient
                services, recovery housing, or returning home with continued support. Our goal is simple: provide the
                structure and guidance needed now so each person can move forward with confidence and independence.
              </p>
            </div>
          </div>
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
