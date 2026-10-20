import Link from "next/link";
import Image from "next/image";

const solutions = [
  ["Get My Parking", "/products/get-my-parking"],
  ["EV Chargers", "/products/ev-chargers"],
  ["Keri Systems", "/accesscontrol/kerisystems"],
  ["Secura Key", "/accesscontrol/securekey"],
];

export default function Footer() {
  return (
    <footer className="site-footer border-t border-slate-200 bg-slate-50 text-slate-700">
      <div className="mx-auto max-w-[1440px] px-6 pb-6 pt-14 lg:px-10 lg:pt-16">
        <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-[1.4fr_1fr_1fr_1.1fr] lg:gap-12">
          <div>
            <Link href="/" className="inline-block">
              <Image src="https://i.imgur.com/CPqYkhH.png" width={200} height={87} alt="Parking Technical Services home" className="h-auto w-[180px]" />
            </Link>
            <p className="mt-5 max-w-[260px] text-sm leading-7 text-slate-600">Parking systems, access control and EV charging solutions.</p>
          </div>
          <nav aria-label="Footer solutions">
            <h2 className="footer-label">Solutions</h2>
            <ul className="mt-4 space-y-1">
              {solutions.map(([label, href]) => <li key={href}><Link href={href} className="footer-link">{label}</Link></li>)}
            </ul>
          </nav>
          <nav aria-label="Footer company and service">
            <h2 className="footer-label">Company &amp; service</h2>
            <ul className="mt-4 space-y-1">
              <li><Link href="/about" className="footer-link">About PTS</Link></li>
              <li><Link href="/installationsandservices" className="footer-link">Installation &amp; Service</Link></li>
              <li><Link href="/contact" className="footer-link">Contact</Link></li>
              <li><Link href="/contact#service-request" className="footer-link">Request Service</Link></li>
            </ul>
          </nav>
          <div>
            <h2 className="footer-label">Let’s talk about your project</h2>
            <a href="tel:9518404324" className="footer-link mt-4 w-fit">(951) 840-4324</a>
            <Link href="/contact-2" className="site-button mt-5">Request Quote <span aria-hidden="true" className="ml-3">↗</span></Link>
          </div>
        </div>
        <div className="mt-12 flex flex-col gap-3 border-t border-slate-200 pt-6 text-xs tracking-wide text-slate-600 sm:flex-row sm:items-center sm:justify-between">
          <p>&copy; {new Date().getFullYear()} Parking Technical Services. All rights reserved.</p>
          <Link href="/" className="py-2 hover:text-blue-700 hover:underline">Parking Technical Services</Link>
        </div>
      </div>
    </footer>
  );
}
