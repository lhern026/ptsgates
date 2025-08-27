"use client";

import React, { useEffect } from "react";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle } from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 14 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function PastInstallationsPage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <motion.div
      className="flex flex-col w-full bg-neutral-50 text-neutral-900"
      initial="hidden"
      animate="visible"
      variants={container}
    >
      {/* INSTALLATIONS HERO */}
      <header className="w-full border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 text-center">
          <h1
            className={`${title?.() ?? ""} text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`}
          >
            Installations
          </h1>
          <div className="mx-auto mt-4 h-[2px] w-12 bg-blue-700" />
        </div>
      </header>

      {/* INTRO */}
      <section className="py-12 px-6 sm:px-10 lg:px-16">
        <motion.div className="max-w-4xl mx-auto" variants={item}>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-700 text-center">
            Timely, dependable installations and maintenance across modern
            parking systems. Cost-effective without cutting corners. Disciplined
            service, fast response, and broad vendor coverage so your operations
            stay reliable.
          </p>
        </motion.div>

        {/* FEATURED INSTALLATION */}
        <motion.article
          className="mt-10 max-w-7xl mx-auto grid lg:grid-cols-5 border border-neutral-200 bg-white rounded-[6px] overflow-hidden"
          variants={item}
        >
          <div className="lg:col-span-3 p-6 md:p-8">
            <h3 className="text-2xl md:text-3xl font-semibold mb-3">
              Jamison Properties
            </h3>
            <p className="text-neutral-700 text-base md:text-lg leading-relaxed">
              For 15+ years we’ve delivered automated revenue control and access
              control installations and service for Jamison Properties in
              Koreatown. Consistent quality, clear communication, and
              on-schedule delivery for a demanding urban portfolio.
            </p>
          </div>
          <div className="relative lg:col-span-2 min-h-[240px]">
            <Image
              src="https://i.imgur.com/zOCQkdP.jpeg"
              alt="Jamison Properties parking installation"
              fill
              className="object-cover"
              sizes="(max-width:1024px) 100vw, 40vw"
              priority
            />
          </div>
        </motion.article>
      </section>

      {/* SERVICE HERO */}
      <header className="w-full border-t border-b border-neutral-200 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-14 text-center">
          <h2
            className={`${title?.() ?? ""} text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight`}
          >
            Service
          </h2>
          <div className="mx-auto mt-4 h-[2px] w-12 bg-blue-700" />
        </div>
      </header>

      {/* SERVICE CONTENT */}
      <section className="py-12 px-6 sm:px-10 lg:px-16">
        <motion.div className="max-w-6xl mx-auto" variants={item}>
          <p className="text-lg md:text-xl leading-relaxed text-neutral-700 text-center">
            Over 30 years across Southern California. Fast, disciplined support
            at competitive rates. Thorough maintenance and reliable operation to
            protect revenue.
          </p>

          {/* Brands */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-center">
              Brands We Service
            </h3>
            <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
                "Scheidt & Bachmann",
                "Amano",
                "Federal APD",
                "SysParc",
                "Parking Boxx",
                "Keri Systems",
                "Secura Key",
              ].map((brand) => (
                <li
                  key={brand}
                  className="flex items-start gap-3 bg-white border border-neutral-200 rounded-[6px] p-3"
                >
                  <FaCheckCircle className="text-blue-700 mt-0.5" aria-hidden />
                  <span>{brand}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Capabilities */}
          <div className="mt-12">
            <h3 className="text-2xl font-bold uppercase tracking-wide text-center">
              Capabilities
            </h3>
            <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
                "License Plate Recognition (LPR)",
                "Proximity / RFID",
                "Hotel PMS / Keycard integration",
                "Mobile payment apps",
                "Pre-paid reservations",
                "Barcode technology",
                "Building access control incl. elevators and after-hours",
                "Remote monitoring",
                "Phone entry systems",
                "Protection bollards",
                "Electrical/data trenching",
                "Concrete islands",
                "Speed bumps and spike units",
                "Vehicle loop ground sensors",
                "Garage lighting",
              ].map((cap) => (
                <li
                  key={cap}
                  className="flex items-start gap-3 bg-white border border-neutral-200 rounded-[6px] p-3"
                >
                  <FaCheckCircle className="text-blue-700 mt-0.5" aria-hidden />
                  <span>{cap}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 sm:px-10 lg:px-16">
        <motion.div className="max-w-6xl mx-auto text-center" variants={item}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Service Requests
          </h3>
          <p className="text-lg md:text-xl mb-8 text-neutral-700">
            Need assistance with your parking equipment? Request service and
            keep systems running.
          </p>
          <Link
            href="/contact"
            className="inline-block px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-[4px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
            Contact Us
          </Link>
        </motion.div>
      </section>
    </motion.div>
  );
}
