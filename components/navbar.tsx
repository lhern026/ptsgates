"use client";

import { useEffect, useRef, useState } from "react";
import NextLink from "next/link";
import Image from "next/image";
import Dropdown from "./dropdown";
import { usePathname } from "next/navigation";

const navItems = [
  {
    label: "Access Control",
    href: "/accesscontrol",
    subitems: [
      { label: "Keri Systems", href: "/accesscontrol/kerisystems" },
      { label: "Secura Key", href: "/accesscontrol/securekey" },
    ],
  },
  {
    label: "Parking & EV",
    href: "/products",
    subitems: [
      { label: "Get My Parking", href: "/products/get-my-parking" },
      { label: "EV Chargers", href: "/products/ev-chargers", isDisabled: false },
    ],
  },
  {
    label: "Installation & Service",
    href: "/installationsandservices",
  },
  {
    label: "About PTS",
    href: "/about",
  },
];

export const Navbar = () => {
  const pathname = usePathname();
  const menuButton = useRef<HTMLButtonElement>(null);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const closeMenu = () => setIsMenuOpen(false);
  useEffect(() => {
    if (!isMenuOpen) return;
    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsMenuOpen(false);
        menuButton.current?.focus();
      }
    };
    document.addEventListener("keydown", onKeyDown);
    return () => document.removeEventListener("keydown", onKeyDown);
  }, [isMenuOpen]);

  return (
    <header className="site-header sticky top-0 z-50 border-b border-gray-200 bg-white">
      <nav aria-label="Main navigation" className="relative mx-auto flex min-h-[6rem] max-w-[1440px] items-center justify-between gap-6 px-6 lg:px-10">
        <NextLink href="/" onClick={closeMenu} className="shrink-0">
          <Image alt="Parking Technical Services home" src="https://i.imgur.com/CPqYkhH.png" width={240} height={104} priority className="h-auto w-[160px] sm:w-[180px]" />
        </NextLink>
        <div className="hidden items-center gap-6 min-[1100px]:flex">
          {navItems.map((item) => item.subitems ? (
            <Dropdown key={item.href} label={item.label} items={item.subitems} pathname={pathname} />
          ) : (
            <NextLink key={item.href} href={item.href} aria-current={pathname === item.href ? "page" : undefined} className="site-nav-link">{item.label}</NextLink>
          ))}
          <NextLink href="/contact-2" className="site-button">Request Quote</NextLink>
        </div>
        <button ref={menuButton} type="button" aria-label={isMenuOpen ? "Close menu" : "Open menu"} aria-expanded={isMenuOpen} aria-controls="mobile-navigation" onClick={() => setIsMenuOpen((open) => !open)} className="rounded-sm border border-gray-300 p-3 text-slate-800 min-[1100px]:hidden focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-blue-600">
          <svg aria-hidden="true" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5">
            {isMenuOpen ? <path d="m6 6 12 12M6 18 18 6" /> : <path d="M3 6h18M3 12h18M3 18h18" />}
          </svg>
        </button>
        {isMenuOpen && (
          <div id="mobile-navigation" className="absolute left-0 right-0 top-full max-h-[calc(100dvh-6rem)] overflow-y-auto border-b border-slate-200 bg-white px-6 pb-6 shadow-sm min-[1100px]:hidden">
            <ul>
              {navItems.map((item) => (
                <li key={item.href} className="border-b border-gray-200 py-5">
                  {item.subitems ? <>
                    <p className="text-xs font-medium tracking-widest text-gray-600">{item.label}</p>
                    <ul className="mt-2 space-y-1">
                      {item.subitems.map((subitem) => <li key={subitem.href}>
                        {subitem.isDisabled ? <span className="block px-3 py-2 text-sm text-gray-500">{subitem.label}</span> : <NextLink href={subitem.href} onClick={closeMenu} aria-current={pathname === subitem.href ? "page" : undefined} className="mobile-nav-link block rounded-md px-3 py-2 text-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">{subitem.label}</NextLink>}
                      </li>)}
                    </ul>
                  </> : <NextLink href={item.href} onClick={closeMenu} aria-current={pathname === item.href ? "page" : undefined} className="mobile-nav-link block py-2 text-sm font-semibold focus-visible:outline focus-visible:outline-2 focus-visible:outline-blue-600">{item.label}</NextLink>}
                </li>
              ))}
            </ul>
            <NextLink href="/contact-2" onClick={closeMenu} className="site-button mt-6 w-full">Request Quote</NextLink>
          </div>
        )}
      </nav>
    </header>
  );
};
