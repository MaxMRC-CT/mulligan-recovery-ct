import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Contact"
};

export default function ContactPage() {
  return (
    <>
      <PageHero
        title="Contact admissions"
        subtitle="Complete this short form and our team will follow up. For your privacy, do not include diagnosis, medications, or detailed treatment history."
      />
      <section className="section pt-0">
        <div className="container grid gap-8 lg:grid-cols-2">
          <form className="rounded-2xl border border-line bg-white p-8 shadow-card" aria-describedby="form-disclaimer">
            <h2 className="text-2xl font-semibold text-[#18414f]">Admissions Inquiry</h2>
            <p id="form-disclaimer" className="mt-3 text-sm text-[#496876]">
              This form is for general contact only and is not monitored for medical emergencies.
            </p>
            <div className="mt-6 space-y-4">
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Full Name</span>
                <input
                  className="focus-ring w-full rounded-xl border border-line px-3 py-2"
                  name="name"
                  type="text"
                  autoComplete="name"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Phone</span>
                <input
                  className="focus-ring w-full rounded-xl border border-line px-3 py-2"
                  name="phone"
                  type="tel"
                  autoComplete="tel"
                  required
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">Email (optional)</span>
                <input
                  className="focus-ring w-full rounded-xl border border-line px-3 py-2"
                  name="email"
                  type="email"
                  autoComplete="email"
                />
              </label>
              <label className="block">
                <span className="mb-1 block text-sm font-medium">How can we help?</span>
                <textarea
                  className="focus-ring min-h-28 w-full rounded-xl border border-line px-3 py-2"
                  name="message"
                  placeholder="General question or callback request"
                />
              </label>
            </div>
            <p className="mt-4 text-xs text-[#496876]">
              By submitting, you agree to be contacted by Mulligan Recovery Centers of CT regarding admissions and
              services.
            </p>
            <button className="focus-ring mt-5 rounded-xl bg-brand px-5 py-3 text-sm font-semibold text-white hover:bg-brand-dark" type="submit">
              Submit Request
            </button>
          </form>

          <div className="space-y-5">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-semibold text-[#18414f]">Location</h2>
              <p className="mt-2 text-sm text-[#355666]">123 Recovery Way, New Haven, CT 06510</p>
            </div>
            <div className="overflow-hidden rounded-2xl border border-line bg-white shadow-card">
              <iframe
                title="Map placeholder"
                src="https://www.google.com/maps?q=New+Haven+CT&output=embed"
                className="h-[360px] w-full border-0"
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
