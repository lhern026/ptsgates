import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-14 text-slate-700">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 md:flex-row md:items-center md:justify-between">
          <Link href="/" className="w-fit">
            <Image src="https://i.imgur.com/CPqYkhH.png" width={200} height={87} alt="Parking Technical Services home" className="h-auto w-[160px]" />
          </Link>
          <div className="flex flex-wrap items-center gap-6 text-sm font-medium">
            <Link href="/contact" className="hover:text-blue-700 hover:underline">Contact</Link>
            <Link href="/contact#service-request" className="hover:text-blue-700 hover:underline">Request Service</Link>
            <Link href="/contact-2" className="site-button">Request Quote</Link>

          </div>
        </div>
        <p className="mt-10 border-t border-slate-200 pt-6 text-xs tracking-wide text-slate-600">&copy; 2024 PTS. All rights reserved.</p>
      </div>
    </footer>
  );
}
