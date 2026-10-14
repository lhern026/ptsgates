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
            Our dedication ensures timely and dependable installations and
            maintenance for most of your parking equipment needs. We are
            committed to offering cost-effective solutions without sacrificing
            quality. Our mission is to exceed expectations by delivering
            exceptional service, responding swiftly to your needs, and providing
            unmatched expertise across various parking technologies. Trust PTS
            for reliable installations that seamlessly enhance your parking
            operations.
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
              Parking Technical Services has been dedicated to delivering
              Automated revenue control parking and access control systems
              installations and services to Jamison Properties area in Korea
              town for over 15 years. Our commitment to excellence remains
              steadfast as we continue to provide outstanding service to our
              customer base.
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
            At Parking Technical Services, we recognize the critical importance
            of parking revenue. We are deeply committed to delivering
            exceptional service, drawing on over 30 years of industry experience
            across Southern California. Our dedication ensures that we
            consistently meet our goal of providing prompt and outstanding
            service at competitive rates. PTS guarantees thorough maintenance
            and reliable operation of your parking equipment. Our mission is to
            deliver outstanding service at affordable rates, offering prompt
            responses to client needs and unparalleled versatility. PTS takes
            pride in their unique ability to service a comprehensive range of
            parking equipment brands, including:
            </p>

          {/* Brands */}
          <div className="mt-12">

            <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
              {[
  "Scheidt & Bachmann",
  "Amano",
  "Federal APD",
  "SysParc",
  "Parking Boxx",
  "Keri Systems",
  "Secura Key"
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
            <p className="text-lg leading-relaxed text-neutral-700">
            PTS is equipped and ready to install and maintain your preferred
            choice of parking and access control equipment. We customize
            solutions to meet your specific requirements, offering:
            </p>
            <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />
            <ul className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
              {[
  "License Plate Recognition (LPR)",
  "Proximity and/or RFID",
  "Integration with Hotel PMS/Keycard (RFID and Magstripe)",
  "Mobile Payment Applications",
  "Pre-paid Reservations",
  "Barcode Technology",
  "Building Access Control, including elevator and after-hours door/grille control",
  "Remote Monitoring",
  "Phone Entry Systems",
  "Protection Bollards",
  "Trenching for running electrical and data conduit",
  "Concrete Islands",
  "Speed bumps and traffic control spike units",
  "Vehicle Loop Ground Sensors",
  "Parking Garage Lighting"
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
          <p className="mt-8 text-lg leading-relaxed text-neutral-700">
            We handle both installation and sales services in-house, ensuring
            your satisfaction is our primary focus. When you choose our expert
            team, you can expect top-notch workmanship at competitive rates.
            Rely on us for all your integrated parking and access control system
            needs.
          </p>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="py-12 px-6 sm:px-10 lg:px-16">
        <motion.div className="max-w-6xl mx-auto text-center" variants={item}>
          <h3 className="text-3xl md:text-4xl font-bold mb-4">
            Service Requests
          </h3>
          <p className="text-lg md:text-xl mb-8 text-neutral-700">
          Need assistance with your parking equipment? Contact Parking Technical
          Services today to request service and ensure your systems are running
          smoothly.
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
