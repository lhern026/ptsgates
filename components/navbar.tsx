"use client";

import React from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarMenu,
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
  return (
    <NextUINavbar isBordered className="bg-white shadow-lg fixed w-full z-50">
      <div className="flex justify-between items-center w-full">
        <NavbarBrand as="li" className="flex items-center gap-3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src="https://i.imgur.com/u1fiTYz.png"
              width={150}
              height={150}
              alt="logo"
            />
            <p className="font-bold text-xl text-gray-800"></p>
          </NextLink>
        </NavbarBrand>
        <NavbarMenuToggle className="md:hidden text-3xl p-4" />{" "}
        {/* Increased size here */}
      </div>

      <NavbarContent className="hidden md:flex gap-6 justify-center w-full py-4">
        <ul className="flex gap-8">
          {navItems.map((item) => (
            <NavbarItem key={item.href} className="relative group">
              {item.subitems ? (
                <Dropdown
                  label={item.label}
                  items={item.subitems.map((subitem) => ({
                    label: subitem.label,
                    href: subitem.href,
                    isDisabled: subitem.isDisabled,
                  }))}
                />
              ) : (
                <NextLink
                  href={item.href}
                  className="text-gray-700 hover:text-primary"
                >
                  {item.label}
                </NextLink>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden md:flex basis-1/5 justify-end items-center gap-4">
        <Link
          href="/contact"
          target="_blank"
          isExternal
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
        >
          Request Quote
        </Link>
        <ThemeSwitch />
      </NavbarContent>

      <NavbarContent className="flex md:hidden justify-end items-center gap-4">
        <ThemeSwitch />
      </NavbarContent>

      <NavbarMenu>
        <div className="mx-4 mt-2 flex flex-col gap-2">
          {navItems.map((item) =>
            item.subitems ? (
              <div key={item.href} className="relative group">
                <button className="text-gray-700 hover:text-primary py-2">
                  {item.label}
                </button>
                <div className="ml-4">
                  {item.subitems.map((subitem, index) => (
                    <div
                      key={index}
                      className={`py-2 hover:bg-gray-100 ${
                        subitem.isDisabled
                          ? "cursor-not-allowed text-gray-400"
                          : "cursor-pointer"
                      }`}
                    >
                      {subitem.isDisabled ? (
                        <span>{subitem.label}</span>
                      ) : (
                        <NextLink href={subitem.href}>{subitem.label}</NextLink>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            ) : (
              <NavbarMenuItem key={item.href}>
                <NextLink
                  href={item.href}
                  className="text-gray-700 hover:text-primary py-2"
                >
                  {item.label}
                </NextLink>
              </NavbarMenuItem>
            )
          )}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
