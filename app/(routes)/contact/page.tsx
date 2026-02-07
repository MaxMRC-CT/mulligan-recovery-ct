import { PageHero } from "@/components/page-hero";
import { ContactForm } from "@/components/contact-form";

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
          <ContactForm />

          <div className="space-y-5">
            <div className="rounded-2xl border border-line bg-white p-6 shadow-card">
              <h2 className="text-xl font-semibold text-[#18414f]">Location</h2>
              <p className="mt-2 text-sm text-[#355666]">123 Recovery Way, New Haven, CT 06510</p>
              <p className="mt-2 text-sm text-[#355666]">Admissions phone: (203) 555-0173</p>
              <p className="mt-1 text-sm text-[#355666]">Referral partners: referrals@mulliganrecoveryct.org</p>
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
