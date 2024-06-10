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
import { Button } from "@nextui-org/button";
import { Link } from "@nextui-org/link";
import { Input } from "@nextui-org/input";
import { button as buttonStyles } from "@nextui-org/theme";
import { link as linkStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import clsx from "clsx";
import Image from "next/image";

import { siteConfig } from "@/config/site";
import { ThemeSwitch } from "@/components/theme-switch";
import {
  TwitterIcon,
  GithubIcon,
  DiscordIcon,
  HeartFilledIcon,
  SearchIcon,
  Logo,
} from "@/components/icons";
import Dropdown from "../components/dropdown"; // Import the custom dropdown

export const Navbar = () => {
  return (
    <NextUINavbar className="bg-white shadow-lg fixed top-0 w-full z-50">
      <div className="flex justify-between items-center w-full px-6 py-4">
        <NavbarBrand as="li" className="flex items-center gap-3">
          <NextLink className="flex justify-start items-center gap-1" href="/">
            <Image
              src="https://i.imgur.com/NJO8gUO.png"
              width={50}
              height={50}
              alt="logo"
            />
            <p className="font-bold text-xl text-gray-800">PTS</p>
          </NextLink>
        </NavbarBrand>
        <NavbarMenuToggle className="md:hidden" />
      </div>

      <NavbarContent className="hidden md:flex gap-6 justify-center w-full py-2">
        <ul className="flex gap-8">
          {siteConfig.navItems.map((item) => (
            <NavbarItem key={item.href} className="relative group">
              <Dropdown
                label={item.label}
                items={[
                  { label: "Subitem 1", href: `${item.href}/subitem1` },
                  { label: "Subitem 2", href: `${item.href}/subitem2` },
                  { label: "Subitem 3", href: `${item.href}/subitem3` },
                ]}
              />
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
          {siteConfig.navMenuItems.map((item, index) => (
            <NavbarMenuItem key={`${item}-${index}`}>
              <Link
                color={
                  index === 2
                    ? "primary"
                    : index === siteConfig.navMenuItems.length - 1
                      ? "danger"
                      : "foreground"
                }
                href={item.href}
                size="lg"
              >
                {item.label}
              </Link>
            </NavbarMenuItem>
          ))}
        </div>
      </NavbarMenu>
    </NextUINavbar>
  );
};
