"use client";

import { useEffect, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import Dropdown from "./dropdown";

const navItems = [
  {
    label: "SECURITY ACCESS CONTROL",
    href: "/accesscontrol",
    subitems: [
      { label: "KERI SYSTEMS", href: "/accesscontrol/kerisystems" },
      { label: "SECURA KEY", href: "/accesscontrol/securekey" },
    ],
  },
  {
    label: "PARKING REVENUE CONTROL PRODUCTS",
    href: "/products",
    subitems: [
      { label: "SCHEIDT-BACHMANN", href: "/products/scheidt-bachmann/" },
      { label: "EV CHARGERS COMING SOON", href: "#", isDisabled: true },
    ],
  },
  {
    label: "INSTALLATIONS & SERVICES",
    href: "/installationsandservices",
  },
  {
    label: "ABOUT US",
    href: "/about",
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") setIsMenuOpen(false);
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav aria-label="Main navigation" className="relative mx-auto flex min-h-[6rem] max-w-[1600px] items-center justify-between gap-4 px-4 sm:px-6">
        <NextLink href="/" onClick={closeMenu} className="shrink-0">
          <Image alt="Parking Technical Services home" src="https://i.imgur.com/CPqYkhH.png" width={240} height={104} priority className="h-auto w-[190px] sm:w-[210px]" />
        </NextLink>
        <div className="hidden items-center gap-2 min-[1400px]:flex">
          {navItems.map((item) => item.subitems ? (
            <Dropdown key={item.href} label={item.label} items={item.subitems} />
          ) : (
            <NextLink key={item.href} href={item.href} className="rounded-md border px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">{item.label}</NextLink>
          ))}
          <NextLink href="/contact-2" className="whitespace-nowrap rounded-full bg-blue-600 px-5 py-2.5 text-sm font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Request Quote</NextLink>
        </div>
        <button type="button" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)} className="rounded-xl border-2 border-black px-4 py-3 text-black min-[1400px]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          <svg aria-hidden="true" width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
            {isMenuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
        {isMenuOpen && (
          <div id="mobile-navigation" className="absolute left-0 right-0 top-full max-h-[calc(100dvh-6rem)] overflow-y-auto border-b bg-white p-4 shadow-lg min-[1400px]:hidden">
            <ul className="space-y-3">
              {navItems.map((item) => (
                <li key={item.href} className="rounded-lg border border-gray-200 p-3">
                  {item.subitems ? <>
                    <p className="text-sm font-semibold text-gray-700">{item.label}</p>
                    <ul className="mt-2 space-y-1">
                      {item.subitems.map((subitem) => <li key={subitem.href}>
                        {subitem.isDisabled ? <span className="block px-3 py-2 text-sm text-gray-500">{subitem.label}</span> : <NextLink href={subitem.href} onClick={closeMenu} className="block rounded-md px-3 py-2 text-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">{subitem.label}</NextLink>}
                      </li>)}
                    </ul>
                  </> : <NextLink href={item.href} onClick={closeMenu} className="block py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">{item.label}</NextLink>}
                </li>
              ))}
            </ul>
            <NextLink href="/contact-2" onClick={closeMenu} className="mt-4 block rounded-lg bg-blue-600 px-4 py-3 text-center font-semibold text-white hover:bg-blue-700 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">Request Quote</NextLink>
          </div>
        )}
      </nav>
    </header>
  );
};
