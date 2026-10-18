import { pageMetadata } from "@/config/seo";
import Link from "next/link";
import Image from "next/image";

export const metadata = pageMetadata(
  "EV Chargers — Coming Soon",
  "Explore upcoming ChargePoint EV charging options with PTS and ask about Get My Parking configurations for a connected parking and charging payment experience.",
  "/products/ev-chargers",
);

export default function EVChargersPage() {
  return (
    <div className="bg-slate-50 text-slate-900">
      <section className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16 lg:py-24">
        <div>
          <p className="mb-6 inline-flex items-center gap-2 rounded-full border border-blue-200 bg-blue-50 px-4 py-2 text-xs font-semibold uppercase tracking-widest text-blue-800">
            <span className="h-2 w-2 rounded-full bg-blue-600" aria-hidden="true" />
            Coming Soon
          </p>
          <h1 className="text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            Park. Charge.<br />
            <span className="text-blue-700">Pay together.</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
            We’re preparing ChargePoint EV charging options for Parking Technical
            Services customers. Ask our team about pairing charging with Get My
            Parking to create a more convenient parking and payment experience
            for your property.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <Link href="/contact-2" className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-700">
              Ask About EV Charging
            </Link>
            <Link href="/products/get-my-parking" className="inline-flex items-center justify-center rounded-md border border-slate-300 bg-white px-6 py-3.5 font-semibold transition-colors hover:bg-slate-100">
              Explore Parking Products
            </Link>
          </div>
          <div className="mt-8 border-t border-slate-200 pt-6">
            <Image src="/images/ev-chargers/chargepoint-logo.svg" width={158} height={30} alt="ChargePoint" className="h-auto w-[180px]" priority />
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">
            Launch timing, charger models, and integration availability will be confirmed for each project.
          </p>
        </div>

        <div className="relative overflow-hidden rounded-2xl border border-slate-200 bg-white">
          <div className="flex items-center justify-between border-b border-slate-200 px-6 py-4 text-xs font-semibold uppercase tracking-widest text-slate-500">
            <span>Parking Technical Services</span>
            <span className="text-blue-700">EV</span>
          </div>
          <div className="relative flex min-h-[320px] items-center justify-center bg-gradient-to-b from-white to-blue-50 px-6 py-10 sm:min-h-[400px]">
            <svg viewBox="0 0 360 340" className="h-auto w-full max-w-[350px]" fill="none" aria-hidden="true">
              <ellipse cx="180" cy="310" rx="120" ry="14" fill="#dbeafe" />
              <path d="M252 118h16c20 0 31 14 31 35v75c0 23-11 38-30 38s-30-15-30-36v-34" stroke="#334155" strokeWidth="9" strokeLinecap="round" />
              <path d="M230 174h19v28h-19z" fill="#334155" />
              <path d="M235 168v-10m9 10v-10" stroke="#334155" strokeWidth="5" strokeLinecap="round" />
              <rect x="100" y="43" width="140" height="253" rx="17" fill="white" stroke="#94a3b8" strokeWidth="2" />
              <path d="M116 43h108a16 16 0 0 1 16 16v18H100V59a16 16 0 0 1 16-16Z" fill="#1d4ed8" />
              <rect x="121" y="96" width="98" height="92" rx="9" fill="#0f172a" />
              <path d="m178 110-29 38h22l-8 28 30-40h-23l8-26Z" fill="#60a5fa" />
              <rect x="145" y="209" width="50" height="7" rx="3.5" fill="#cbd5e1" />
              <circle cx="170" cy="242" r="9" fill="#dbeafe" stroke="#2563eb" strokeWidth="2" />
              <path d="M92 297h156v10H92z" fill="#334155" />
              <path d="M71 107V86m-10 10h20m191-45v-16m-8 8h16" stroke="#93c5fd" strokeWidth="2" strokeLinecap="round" />
            </svg>
          </div>
          <p className="border-t border-slate-200 px-6 py-4 text-center text-xs leading-relaxed text-slate-500">
            Concept illustration. Product lineup to be announced.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-14 sm:py-20" aria-labelledby="park-charge-heading">
        <div className="mx-auto max-w-7xl">
          <div className="flex flex-wrap items-center gap-x-8 gap-y-5">
            <Image src="/images/ev-chargers/chargepoint-logo.svg" width={158} height={30} alt="ChargePoint" className="h-auto w-[180px]" />
            <span className="text-sm font-medium text-slate-500">with</span>
            <Link href="/products/get-my-parking" aria-label="Explore Get My Parking" className="rounded-sm focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600">
              <Image src="/images/get-my-parking/logo-original.webp" width={681} height={230} alt="Get My Parking" className="h-auto w-[150px]" />
            </Link>
          </div>
          <p className="mt-8 text-xs font-semibold uppercase tracking-widest text-blue-700">A connected parking and charging experience</p>
          <h2 id="park-charge-heading" className="mt-3 max-w-3xl text-3xl font-bold tracking-tight sm:text-4xl">One visit. One convenient payment.</h2>
          <p className="mt-5 max-w-3xl text-lg leading-relaxed text-slate-600">
            With a compatible Get My Parking EV configuration, customers can manage
            their parking and charging sessions through one app and pay for both
            in a single online transaction. PTS can review ChargePoint equipment
            and integration requirements to help plan the right setup for your facility.
          </p>
          <ol className="mt-10 grid gap-5 md:grid-cols-3">
            {[
              ["Park", "Access parking and find available charging locations through the configured parking app."],
              ["Charge", "Start and manage a charging session at a compatible station."],
              ["Pay together", "Combine parking and charging into one online payment with a supported setup."],
            ].map(([heading, description], index) => (
              <li key={heading} className="rounded-xl border border-slate-200 bg-slate-50 p-6">
                <p className="text-xs font-semibold tracking-widest text-blue-700">0{index + 1}</p>
                <h3 className="mt-3 text-xl font-semibold">{heading}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{description}</p>
              </li>
            ))}
          </ol>
          <p className="mt-6 max-w-3xl text-sm leading-relaxed text-slate-500">
            Combined payments depend on charger compatibility, network access,
            software configuration, and enabled integrations. PTS will confirm
            support for the selected ChargePoint equipment before quoting an integrated solution.
          </p>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-white px-6 py-10 sm:py-12">
        <div className="mx-auto flex max-w-7xl flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
          <div>
            <h2 className="text-xl font-semibold">Have an EV charging question?</h2>
            <p className="mt-2 max-w-2xl leading-relaxed text-slate-600">
              Tell our team what you’re looking for. We’ll help with your inquiry
              and share the information currently available.
            </p>
          </div>
          <a href="tel:9518404324" className="w-fit shrink-0 rounded-md border border-slate-300 px-5 py-3 font-semibold text-blue-700 transition-colors hover:bg-blue-50">
            Call (951) 840-4324
          </a>
        </div>
      </section>
    </div>
  );
}
