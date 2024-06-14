"use client";

import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
  NavbarMenuItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
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

const menuVariants = {
  hidden: { opacity: 0, y: -20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const mobileMenuVariants = {
  hidden: { height: 0, opacity: 0 },
  visible: {
    height: "auto",
    opacity: 1,
    transition: { duration: 0.5, when: "beforeChildren", staggerChildren: 0.1 },
  },
};

const mobileItemVariants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0, transition: { duration: 0.5 } },
};

export const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const handleLinkClick = () => {
    setIsMenuOpen(false);
  };

  return (
    <NextUINavbar
      isBordered
      className="bg-white fixed w-full z-50 border-solid  border-sky-500"
      style={{ height: "110px" }} // Increased height
    >
      <div className="flex justify-between items-center w-full  my-6 ">
        <NavbarBrand as="li" className="flex  ">
          <NextLink className="flex justify-start   " href="/">
            <Image
              alt="logo"
              className="w-full "
              height={300} // Adjusted height for better visibility
              src="https://i.imgur.com/u1fiTYz.png"
              width={300} // Adjusted width for better visibility
              style={{ objectFit: "contain" }} // Ensure the image fits well
            />
          </NextLink>
        </NavbarBrand>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-3xl p-4 focus:outline-none rounded-2xl border-2 border-dashed border-black bg-white px-8 py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <div className="flex flex-col items-center justify-center space-y-1">
            <span
              className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "transform rotate-45 translate-y-1.5" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-current transition-opacity duration-300 ${
                isMenuOpen ? "opacity-0" : ""
              }`}
            ></span>
            <span
              className={`block w-8 h-0.5 bg-current transition-transform duration-300 ${
                isMenuOpen ? "transform -rotate-45 -translate-y-1.5" : ""
              }`}
            ></span>
          </div>
        </button>
      </div>

      {/* Hide NavbarContent on medium and smaller screens */}
      <NavbarContent className="hidden lg:flex gap-1 justify-center w-full  ">
        <ul className="flex gap-10">
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
                <motion.div
                  whileHover={{ scale: 1.1 }}
                  whileTap={{ scale: 0.95 }}
                  className="px-2 py-1 font-medium bg-blue-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none "
                >
                  <NextLink href={item.href}>{item.label}</NextLink>
                </motion.div>
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
        >
          Request Quote
        </Link>
      </NavbarContent>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            className="flex flex-col md:hidden bg-white p-6 shadow-lg w-full absolute top-16 left-0 z-50"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={mobileMenuVariants}
          >
            <div className="flex flex-col gap-4">
              {navItems.map((item) => (
                <motion.div
                  key={item.href}
                  className="relative group text-gray-700 hover:text-primary py-4 rounded-2xl border-2 border-dashed border-black bg-white px-8 py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
                  onClick={handleLinkClick}
                  role="button"
                  tabIndex={0}
                  onKeyPress={(e) => {
                    if (e.key === "Enter") handleLinkClick();
                  }}
                  variants={mobileItemVariants}
                >
                  {item.subitems ? (
                    <>
                      <button className="text-gray-700 hover:text-primary py-4 rounded-2xl border-2 border-dashed border-black bg-white px-8 py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
                        {item.label}
                      </button>
                      <div className="ml-4">
                        {item.subitems.map((subitem) => (
                          <div
                            key={subitem.href}
                            className={`py-4 ${
                              subitem.isDisabled
                                ? "cursor-not-allowed text-gray-400"
                                : "cursor-pointer"
                            }`}
                          >
                            {subitem.isDisabled ? (
                              <span className="px-6 py-2 font-medium bg-indigo-500 text-white w-fit transition-all shadow-[3px_3px_0px_black] hover:shadow-none hover:translate-x-[3px] hover:translate-y-[3px]">
                                {subitem.label}
                              </span>
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
                        className="text-gray-700 hover:text-primary hover:bg-red-100 py-4 cursor-pointer"
                        href={item.href}
                      >
                        {item.label}
                      </NextLink>
                    </NavbarMenuItem>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </NextUINavbar>
  );
};
