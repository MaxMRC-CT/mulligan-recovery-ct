import Image from "next/image";
import Link from "next/link";
import { PageHero } from "@/components/page-hero";

export const metadata = {
  title: "Insurance & Payment"
};

export default function InsurancePaymentPage() {
  return (
    <>
      <PageHero title="Insurance & Payment" />

      <section className="section bg-[#f7f5f1]">
        <div className="container">
          <div className="mx-auto max-w-4xl rounded-2xl border border-line bg-white p-7 shadow-[0_12px_28px_rgba(17,17,17,0.06)] sm:p-10">
            <p className="max-w-3xl text-base leading-8 text-neutral-700 sm:text-lg">
              We are committed to making treatment accessible for people and families across Connecticut. We currently
              accept Connecticut Medicaid (HUSKY Health) and self-pay options. Our team can help explain eligibility
              and next steps.
            </p>

            <div className="mt-10 border-t border-line pt-8">
              <h2 className="text-2xl font-semibold tracking-tight text-neutral-900">Accepted Coverage</h2>

              <div className="mt-6 grid items-start gap-8 md:grid-cols-[minmax(0,1fr)_auto]">
                <div>
                  <ul className="list-disc space-y-4 pl-6 text-lg text-neutral-900 marker:text-primary">
                    <li>Connecticut Medicaid (HUSKY Health)</li>
                    <li>Self Pay</li>
                  </ul>
                </div>
                <div className="inline-flex p-1">
                  <Image
                    src="/images/insurance-payment/husky-health-logo.png"
                    alt="HUSKY Health Connecticut logo"
                    width={300}
                    height={166}
                    className="h-auto w-[210px] sm:w-[250px]"
                  />
                </div>
              </div>

              <p className="mt-6 max-w-3xl text-base leading-8 text-neutral-700">
                If you&apos;re unsure about your coverage or eligibility, our team can walk you through your options
                and answer any questions.
              </p>

              <div className="mt-8">
                <Link
                  href="/admissions"
                  className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-semibold text-black transition hover:bg-primary-600 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary focus-visible:ring-offset-2"
                >
                  Contact Admissions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
