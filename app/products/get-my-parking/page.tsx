import Image from "next/image";
import Link from "next/link";
import { FaArrowRight, FaCheckCircle, FaHeadset } from "react-icons/fa";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Get My Parking | Smart Parking Solutions",
  "Explore Get My Parking with PTS: ExpressLane ticketless access, mobile payments, digital permits, validations, AVA assistance, and parking analytics.",
  "/products/get-my-parking",
);

const solutions = [
  {
    name: "GMP App",
    title: "Your parking experience. Your brand.",
    description: "Bring discovery, reservations, parking access, and payments together in a mobile and web app branded for your business. Parkers can manage vehicles, payment methods, permits, and validations in one place.",
    image: "parking-app",
    width: 253,
    height: 495,
    alt: "Get My Parking branded mobile app example showing parking locations",
    imageClass: "max-h-[280px] w-auto",
  },
  {
    name: "GMP QR",
    title: "Scan, park, and pay. No app required.",
    description: "Give visitors an app-free way to pay through a branded web experience. QR and text-to-pay options help transient parkers start and manage their sessions from their phones.",
    image: "qr-payments",
    width: 354,
    height: 347,
    alt: "Get My Parking web app examples for QR parking and payment",
    imageClass: "max-h-[260px] w-auto",
  },
  {
    name: "GMP Partner Portal",
    title: "Simpler permits and validations.",
    description: "Give tenants, retailers, and corporate partners self-service tools to assign parking privileges, issue validations, manage parkers, receive invoices, and settle payments online.",
    image: "partner-portal",
    width: 406,
    height: 281,
    alt: "Get My Parking Partner Portal example for permits and validations",
    imageClass: "max-h-[250px] w-auto",
  },
  {
    name: "GMP IQ",
    title: "See the bigger picture.",
    description: "Bring session, revenue, permit, and promotion data into configurable dashboards. Explore trends across locations, customize reports, and set alerts to support day-to-day decisions.",
    image: "analytics",
    width: 295,
    height: 377,
    alt: "Get My Parking IQ example dashboard with parking analytics and reports",
    imageClass: "max-h-[280px] w-auto",
  },
];

const steps = [
  { title: "Drive in", description: "A camera reads the vehicle’s plate and starts the parking session." },
  { title: "Park & pay", description: "Parkers add a payment method online or through the branded parking app." },
  { title: "Drive out", description: "The system matches the session and opens the gate once payment is complete." },
];

const linkFocus = "focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-blue-600";

export default function GetMyParkingPage() {
  return (
    <div className="bg-white text-slate-900">
      <section className="border-b border-slate-200 bg-slate-50">
        <div className="mx-auto grid max-w-7xl items-center gap-12 px-6 py-14 sm:py-20 lg:grid-cols-[1.15fr_1fr] lg:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Parking revenue control products</p>
            <h1 className="mt-5 text-4xl font-bold tracking-tight sm:text-5xl lg:text-6xl">Get My Parking</h1>
            <p className="mt-4 text-2xl font-semibold leading-snug text-slate-800 sm:text-3xl">A smarter way to park.<br /><span className="text-blue-700">From entry to exit.</span></p>
            <p className="mt-6 max-w-xl text-lg leading-relaxed text-slate-600">
              Parking Technical Services brings Get My Parking solutions to your facility: ticketless access, digital payments, and connected management tools for gated and ungated parking.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact-2" className={`inline-flex items-center gap-3 rounded-md bg-blue-600 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-blue-700 ${linkFocus}`}>
                Request a Quote <FaArrowRight aria-hidden="true" className="text-sm" />
              </Link>
              <a href="#solutions" className={`inline-flex items-center rounded-md border border-slate-300 bg-white px-6 py-3.5 font-semibold transition-colors hover:bg-slate-100 ${linkFocus}`}>Explore Solutions</a>
            </div>
            <p className="mt-6 text-sm text-slate-500">For commercial properties, parking facilities, and residential communities.</p>
          </div>
          <div className="overflow-hidden rounded-2xl border border-slate-200 bg-white">
            <div className="flex flex-wrap items-center justify-between gap-3 border-b border-slate-100 px-6 py-4">
              <Image src="/images/get-my-parking/logo.webp" width={190} height={85} alt="Get My Parking" className="h-auto w-[140px]" priority />
              <span className="rounded-full bg-blue-50 px-3 py-1.5 text-xs font-semibold text-blue-800">Your brand. One platform.</span>
            </div>
            <div className="grid grid-cols-[1fr_1fr] items-center gap-5 px-6 py-8 sm:gap-8 sm:px-10">
              <Image src="/images/get-my-parking/parking-app.webp" width={253} height={495} alt="Example of a Get My Parking app customized with an operator’s branding" className="mx-auto h-auto max-h-[330px] w-auto" sizes="(max-width: 640px) 40vw, 170px" priority />
              <ul className="space-y-6 text-sm font-medium text-slate-700">
                {["Ticketless access", "Mobile & web payments", "Digital permits", "Connected reporting"].map((feature) => (
                  <li key={feature} className="flex flex-col items-start gap-2"><FaCheckCircle className="text-emerald-600" aria-hidden="true" />{feature}</li>
                ))}
              </ul>
            </div>
            <p className="border-t border-slate-100 px-6 py-3 text-center text-xs leading-relaxed text-slate-500">Illustrative product interface. Branding and setup vary by facility.</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-7xl px-6 py-14 sm:py-20" aria-labelledby="expresslane-heading">
        <div className="grid items-start gap-6 md:grid-cols-2 md:gap-16">
          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">GMP AI ExpressLane</p>
            <h2 id="expresslane-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Keep traffic moving.<br />Leave paper tickets behind.</h2>
          </div>
          <p className="text-lg leading-relaxed text-slate-600">ExpressLane combines license plate recognition with AI-assisted vehicle matching to connect entry, payment, and exit. Registered parkers and visitors can use digital access and payment options suited to the location.</p>
        </div>
        <div className="mt-10 overflow-hidden rounded-xl border border-slate-200">
          <div className="bg-white px-3 py-7 sm:px-12 sm:py-10">
            <Image src="/images/get-my-parking/expresslane.webp" width={833} height={178} alt="ExpressLane journey: a vehicle enters through a camera-controlled gate, parks, and exits through a matched parking session" className="mx-auto h-auto w-full max-w-[833px]" sizes="(max-width: 900px) 90vw, 833px" />
          </div>
          <ol className="grid border-t border-slate-200 bg-slate-50 md:grid-cols-3">
            {steps.map((step, index) => (
              <li key={step.title} className="border-b border-slate-200 p-6 last:border-b-0 md:border-b-0 md:border-r md:last:border-r-0 sm:p-8">
                <span className="text-xs font-semibold tracking-widest text-blue-700">0{index + 1}</span>
                <h3 className="mt-2 text-xl font-semibold">{step.title}</h3>
                <p className="mt-3 leading-relaxed text-slate-600">{step.description}</p>
              </li>
            ))}
          </ol>
        </div>
      </section>

      <section id="solutions" className="scroll-mt-28 border-y border-slate-200 bg-slate-50 px-6 py-14 sm:py-20" aria-labelledby="solutions-heading">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Connected parking solutions</p>
          <h2 id="solutions-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">One platform. More ways to park.</h2>
          <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">Build the parking experience around your property, your partners, and your customers.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            {solutions.map((solution) => (
              <article key={solution.name} className="flex flex-col overflow-hidden rounded-xl border border-slate-200 bg-white">
                <div className="flex h-[310px] items-center justify-center border-b border-slate-100 p-5">
                  <Image src={`/images/get-my-parking/${solution.image}.webp`} width={solution.width} height={solution.height} alt={solution.alt} className={`max-w-full object-contain ${solution.imageClass}`} sizes="(max-width: 767px) 80vw, 400px" />
                </div>
                <div className="p-6 sm:p-8">
                  <p className="text-xs font-semibold uppercase tracking-widest text-blue-700">{solution.name}</p>
                  <h3 className="mt-3 text-2xl font-semibold tracking-tight">{solution.title}</h3>
                  <p className="mt-4 leading-relaxed text-slate-600">{solution.description}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto grid max-w-7xl gap-10 px-6 py-14 sm:py-20 lg:grid-cols-2 lg:gap-16" aria-labelledby="support-heading">
        <div>
          <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-xl text-blue-700"><FaHeadset aria-hidden="true" /></div>
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">AVA & lane activity</p>
          <h2 id="support-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">Help at the gate.<br />Control from anywhere.</h2>
          <p className="mt-5 text-lg leading-relaxed text-slate-600">AVA is Get My Parking’s AI virtual attendant for ExpressLane. It provides multilingual, 24/7 assistance for routine parking questions, with escalation to your designated team when human help is needed.</p>
        </div>
        <div className="rounded-xl border border-slate-200 bg-slate-50 p-6 sm:p-8">
          <h3 className="text-2xl font-semibold">More visibility for your team</h3>
          <ul className="mt-6 space-y-5">
            {[
              ["Real-time lane monitoring", "See entry and exit activity from a centralized dashboard."],
              ["Remote gate control", "Help parkers and manage access without dispatching staff to every lane."],
              ["Location-specific assistance", "Configure AVA with your facility’s policies, pricing, and event details."],
              ["Human support when needed", "Escalate issues to your operations team or selected support provider."],
            ].map(([heading, description]) => (
              <li key={heading} className="flex gap-3"><FaCheckCircle className="mt-1 shrink-0 text-blue-700" aria-hidden="true" /><div><h4 className="font-semibold">{heading}</h4><p className="mt-1 leading-relaxed text-slate-600">{description}</p></div></li>
            ))}
          </ul>
        </div>
      </section>

      <section className="border-t border-slate-200 bg-slate-50 px-6 py-14 sm:py-20" aria-labelledby="hardware-heading">
        <div className="mx-auto max-w-7xl">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-blue-700">Connected hardware</p>
          <h2 id="hardware-heading" className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">The right setup for your facility.</h2>
          <p className="mt-4 max-w-3xl text-lg leading-relaxed text-slate-600">PTS can help plan a parking system around your lanes, payment needs, and existing infrastructure. Equipment selection and compatibility are reviewed for each project.</p>
          <div className="mt-10 grid gap-6 md:grid-cols-2">
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="relative h-64 sm:h-80"><Image src="/images/get-my-parking/payment-kiosk.webp" alt="LamasaTech Zentron outdoor payment kiosk shown in the supplied product brochure" fill className="object-contain p-5" sizes="(max-width: 767px) 90vw, 550px" /></div>
              <div className="border-t border-slate-100 p-6 sm:p-8"><h3 className="text-2xl font-semibold">Payment kiosks & displays</h3><p className="mt-3 leading-relaxed text-slate-600">Outdoor display and payment equipment can guide visitors through the parking journey and provide an in-lane payment option.</p></div>
            </article>
            <article className="overflow-hidden rounded-xl border border-slate-200 bg-white">
              <div className="relative h-64 sm:h-80"><Image src="/images/get-my-parking/lpr-camera.webp" alt="INEX IZA500GR license plate recognition camera from the supplied product datasheet" fill className="object-contain p-8" sizes="(max-width: 767px) 90vw, 450px" /></div>
              <div className="border-t border-slate-100 p-6 sm:p-8"><h3 className="text-2xl font-semibold">License plate recognition</h3><p className="mt-3 leading-relaxed text-slate-600">LPR cameras connect vehicle entry and exit events to digital parking sessions, supporting ticketless access and lane management.</p></div>
            </article>
          </div>
          <p className="mt-5 text-sm leading-relaxed text-slate-500">Product images are illustrative. Features, integrations, hardware, and support options depend on the selected configuration.</p>
        </div>
      </section>

      <section className="bg-blue-700 px-6 py-14 text-white sm:py-20">
        <div className="mx-auto max-w-3xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">Let’s connect your parking operation.</h2>
          <p className="mt-5 text-lg leading-relaxed text-blue-50">Talk with Parking Technical Services about Get My Parking solutions for your property. We’ll help you explore the right approach for your facility.</p>
          <div className="mt-8 flex flex-wrap justify-center gap-3">
            <Link href="/contact-2" className="rounded-md bg-white px-7 py-3.5 font-semibold text-blue-700 transition-colors hover:bg-blue-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Request a Quote</Link>
            <a href="tel:9518404324" className="rounded-md border border-blue-300 px-7 py-3.5 font-semibold transition-colors hover:bg-blue-800 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-white">Call (951) 840-4324</a>
          </div>
        </div>
      </section>
    </div>
  );
}
