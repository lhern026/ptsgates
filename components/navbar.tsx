"use client";

import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenuToggle,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import Dropdown from "../components/dropdown"; // Import the custom dropdown

const navItems = [
  {
    label: "Access control",
    href: "/accesscontrol",
    subitems: [
      { label: "Keri Systems", href: "/accesscontrol/kerisystems" },
      { label: "Secure Key", href: "/accesscontrol/securekey" },
    ],
  },
  {
    label: "Products",
    href: "/products",
    subitems: [
      { label: "scheidt-bachmann", href: "/products/scheidt-bachmann/" },
      { label: "Ev chargers coming soon", href: "#", isDisabled: true },
    ],
  },
  {
    label: "Installations and Services",
    href: "/installationsandservices",
  },
  {
    label: "About us",
    href: "/about",
  },
];

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <NextUINavbar isBordered className="bg-white shadow-lg fixed w-full z-50">
      <div className="flex justify-between items-center w-full px-4">
        <NavbarBrand as="li" className="flex items-center gap-3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              alt="logo"
              height={150}
              src="https://i.imgur.com/u1fiTYz.png"
              width={150}
            />
          </NextLink>
        </NavbarBrand>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-3xl p-2 focus:outline-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex flex-col items-center justify-center space-y-1">
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-6 h-0.5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Hide NavbarContent on medium and smaller screens */}
      <NavbarContent className="hidden lg:flex gap-6 justify-center w-full py-4">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <NavbarItem key={item.href} className="relative group">
              {item.subitems ? (
                <Dropdown
                  items={item.subitems.map((subitem) => ({
                    href: subitem.href,
                    isDisabled: subitem.isDisabled,
                    label: subitem.label,
                  }))}
                  label={item.label}
                />
              ) : (
                <NextLink
                  className="text-gray-700 hover:text-primary"
                  href={item.href}
                >
                  {item.label}
                </NextLink>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      {/* Hide the request quote link and theme switch on medium and smaller screens */}
      <NavbarContent className="hidden lg:flex basis-1/5 justify-end items-center gap-4">
        <Link
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/contact"
          isExternal
          target="_blank"
        >
          Request Quote
        </Link>
      </NavbarContent>

      {/* Mobile Menu */}
      {isMenuOpen && (
        <div className="flex flex-col md:hidden bg-white p-4 shadow-lg w-full absolute top-16 left-0 z-50">
          <div className="flex flex-col gap-4">
            {navItems.map((item) => (
              <div
                key={item.href}
                className="relative group"
                onClick={handleLinkClick}
                role="button"
                tabIndex={0}
                onKeyPress={(e) => {
                  if (e.key === "Enter") handleLinkClick();
                }}
              >
                {item.subitems ? (
                  <>
                    <button className="text-gray-700 hover:text-primary py-2">
                      {item.label}
                    </button>
                    <div className="ml-4 ">
                      {item.subitems.map((subitem) => (
                        <div
                          key={subitem.href}
                          className={`py-8  ${
                            subitem.isDisabled
                              ? "cursor-not-allowed text-gray-400"
                              : "cursor-pointer"
                          }`}
                        >
                          {subitem.isDisabled ? (
                            <span>{subitem.label}</span>
                          ) : (
                            <NextLink
                              className="hover:bg-blue-100 border-style: dotted"
                              href={subitem.href}
                            >
                              {subitem.label}
                            </NextLink>
                          )}
                        </div>
                      ))}
                    </div>
                  </>
                ) : (
                  <NavbarMenuItem key={item.href}>
                    <NextLink
                      className="text-gray-700 hover:text-primary hover:bg-red-100 py-2 cursor-pointer"
                      href={item.href}
                    >
                      {item.label}s
                    </NextLink>
                  </NavbarMenuItem>
                )}
              </div>
            ))}
          </div>
        </div>
      )}
    </NextUINavbar>
  );
};
