import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="border-t border-slate-200 bg-slate-50 py-10 text-slate-700">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col gap-8 sm:flex-row sm:items-center sm:justify-between">
          <Link href="/" className="w-fit">
            <Image src="https://i.imgur.com/CPqYkhH.png" width={200} height={87} alt="Parking Technical Services home" className="h-auto w-[200px]" />
          </Link>
          <div className="flex flex-wrap items-center gap-4 text-sm font-semibold">
            <Link href="/contact" className="hover:text-blue-700 hover:underline">Contact</Link>

          </div>
        </div>
        <p className="mt-8 border-t border-slate-200 pt-6 text-sm text-slate-600">&copy; 2024 PTS. All rights reserved.</p>
      </div>
    </footer>
  );
}
