"use client";

import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { TextParallaxContent } from "../../../components/TextParallalContext";
import { FaCheckCircle } from "react-icons/fa";

// Motion
const sectionContainer: Variants = {
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
const item: Variants = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};
const heroText: Variants = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Data
const securaKeySolutions = [
  "Proximity Readers",
  "Contactless Readers",
  "Touch Readers",
  "Low Frequency (Radio Key) Cards & Keytags",
  "High Frequency (e*Tag) Cards & Keytags",
  "Barium Ferrite Cards & Keytags",
  "Wiegand Cards & Keytags",
  "Select Engineered Systems Cards & Keytags",
  "Modern Electronics Systems Cards & Keytags",
  "Touchcard / e*Tag Custom Options",
  "Programming Tools",
  "Wiegand Interface Products",
  "Wireless Accessories",
  "Parts",
  "OEM Products",
  "Card Finder",
];

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 antialiased">
      {/* HERO */}
      <header className="w-full border-b border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase"
            variants={heroText}
            initial="hidden"
            animate="visible"
          >
            SecuraKey
          </motion.h1>
          <div className="mx-auto mt-4 h-[2px] w-12 bg-blue-700" />
          <motion.p
            className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-neutral-700"
            variants={heroText}
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.15 }}
          >
          As a trusted dealership of SecuraKey, a renowned leader in access
          control and RFID solutions, we are dedicated to providing cutting-edge
          technology that enhances security and convenience for our clients. Our
          dealership allows us to deliver top-tier products and comprehensive
          solutions, ensuring we meet the evolving needs of modern access
          control systems. With offerings such as the NOVA.16 multi-reader
          access control system and the eACCESS entry control systems, SecuraKey
          consistently sets the standard for reliability and performance in the
          industry.
        </motion.p>

        </div>
      </header>

      {/* PARALLAX STRIPE */}
      <TextParallaxContent
        imgUrl="https://i.imgur.com/54Qw4zx.jpeg"
        subheading="Providing Innovative and Reliable Security Systems for Over 38 Years"
        heading="SecuraKey: Leading the Way in Access Control and RFID Solutions"
      />

      {/* SOLUTIONS */}
      <section className="bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
        >
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-center">
          Solutions Overview
        </h2>
          <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />

          <ul className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {securaKeySolutions.map((label) => (
              <motion.li
                key={label}
                className="flex items-start gap-3 bg-white border border-neutral-200 rounded-[6px] p-4"
                variants={item}
              >
                <FaCheckCircle className="mt-0.5 shrink-0 text-blue-700" />
                <span className="leading-snug">{label}</span>
              </motion.li>
            ))}
          </ul>
        </motion.div>
      </section>

      {/* CTA */}
      <section className="bg-neutral-100 border-t border-neutral-300">
        <motion.div
          className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-center"
          variants={sectionContainer}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
        >
          <h3 className="text-2xl sm:text-3xl font-bold uppercase">
          Contact Us
        </h3>
          <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />
          <p className="mt-4 text-lg max-w-3xl mx-auto leading-relaxed text-neutral-700">
          Need assistance with your building access control equipment? Contact
          Parking Technical Services today for a free consultation and quote.
        </p>
          <Link
            href="/contact-2"
            className="mt-8 inline-block px-6 py-3 text-sm font-semibold bg-blue-600 text-white rounded-[4px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
          >
          Contact Us
        </Link>
        </motion.div>
      </section>
    </div>
  );
}
