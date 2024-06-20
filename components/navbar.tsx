"use client";

import React, { useState } from "react";
import {
  Navbar as NextUINavbar,
  NavbarContent,
  NavbarBrand,
  NavbarItem,
} from "@nextui-org/navbar";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import NextLink from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import Dropdown from "../components/dropdown";

const navItems = [
  {
    label: "ACCESS CONTROL",
    href: "/accesscontrol",
    subitems: [
      { label: "KERI SYSTEMS", href: "/accesscontrol/kerisystems" },
      { label: "SECURA KEY", href: "/accesscontrol/securekey" },
    ],
  },
  {
    label: "PRODUCTS",
    href: "/products",
    subitems: [
      { label: "SCHEIDT-BACHMANN", href: "/products/scheidt-bachmann/" },
      { label: "EV CHARGERS COMING SOON", href: "#", isDisabled: true },
    ],
  },
  {
    label: "INSTALLATIONS AND SERVICES",
    href: "/installationsandservices",
  },
  {
    label: "ABOUT US",
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
      className="flex justify-between"
      style={{ height: "7.5rem" }}
    >
      <div className="flex flex-row items-center w-full h-2 start-px">
        <NavbarBrand as="li" className="flex size-max">
          <NextLink className=" " href="/">
            <Image
              alt="logo"
              className="h-60 w-60" // Adjusted height
              height={104} // Adjusted height
              src="https://i.imgur.com/CPqYkhH.png"
              width={174} // Adjusted width
              style={{ objectFit: "contain" }}
              quality={100}
            />
          </NextLink>
        </NavbarBrand>
        <button
          aria-label="Toggle menu"
          className="md:hidden text-3xl p-4 focus:outline-none rounded-2xl border-2 border-solid border-black bg-white px-8 py-4 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none"
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

      <NavbarContent className="hidden lg:flex h-1">
        <ul className="flex gap-6">
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
                <button className="px-2 py-1.5 font-small bg-white text-black rounded-md border hover:bg-gray-100">
                  <NextLink href={item.href}>{item.label}</NextLink>
                </button>
              )}
            </NavbarItem>
          ))}
        </ul>
      </NavbarContent>

      <NavbarContent className="hidden lg:flex gap-1">
        <NextLink
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
          })}
          href="/contact"
        >
          Request Quote
        </NextLink>
      </NavbarContent>

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
                  className="relative group text-gray-700 hover:text-primary py-4 rounded-xl border border-gray-200 bg-white px-4 font-semibold text-black transition-transform duration-300 hover:scale-105"
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
                      <span className="w-full text-left text-gray-700 py-2 rounded-md border-b border-gray-200 bg-white px-2 font-semibold transition-colors duration-300">
                        {item.label}
                      </span>
                      <div className="ml-4 mt-2">
                        {item.subitems.map((subitem) => (
                          <div
                            key={subitem.href}
                            className={`py-2 ${
                              subitem.isDisabled
                                ? "cursor-not-allowed text-gray-400"
                                : "cursor-pointer text-gray-700 hover:text-primary"
                            }`}
                          >
                            {subitem.isDisabled ? (
                              <span className="block px-4 py-2 font-medium bg-indigo-500 text-white rounded-md transition-all shadow-lg">
                                {subitem.label}
                              </span>
                            ) : (
                              <NextLink
                                className="block px-4 py-2 transition-colors duration-300 rounded-md hover:bg-gray-100"
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
                    <NextLink
                      className="block w-full text-left px-4 py-2 rounded-md hover:bg-gray-100 transition-colors duration-300"
                      href={item.href}
                    >
                      {item.label}
                    </NextLink>
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
