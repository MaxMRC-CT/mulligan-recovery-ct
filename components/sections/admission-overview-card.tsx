export function AdmissionOverviewCard() {
  return (
    <section className="section bg-[#f2efe9] py-12">
      <div className="container">
        <div className="rounded-[24px] border border-line bg-white p-8 shadow-[0_14px_34px_rgba(17,17,17,0.09)] md:p-12">
          <div className="grid gap-10 md:grid-cols-2 md:gap-12">
            <article>
              <h2 className="text-2xl font-semibold text-neutral-900">Admission Requirements</h2>
              <ul className="mt-5 space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                  <span>Men age 18 or older</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                  <span>Must have active Connecticut Medicaid (HUSKY) or be eligible for medical assistance</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                  <span>
                    Must be appropriate for a structured residential level of care (we can help guide people who may
                    need a higher level of support)
                  </span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                  <span>Must complete a pre-screening and phone interview</span>
                </li>
              </ul>
            </article>

            <article>
              <h2 className="text-2xl font-semibold text-neutral-900">We Welcome Those Who</h2>
              <ul className="mt-5 space-y-3 text-neutral-700">
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                  <span>Have completed inpatient treatment and need a safe, structured, drug-free next step</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                  <span>Have lost housing or need a stable place to reset</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                  <span>Need to relocate from an unsafe environment</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                  <span>Need a place to rebuild routines and prepare for independent living</span>
                </li>
                <li className="flex gap-3">
                  <span aria-hidden="true" className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-primary-dark" />
                  <span>Want a recovery community for accountability and support</span>
                </li>
              </ul>
            </article>
          </div>
        </div>
      </div>
    </section>
  );
}
