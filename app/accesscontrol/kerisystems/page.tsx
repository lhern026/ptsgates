"use client";

import { motion } from "framer-motion";
import Link from "next/link";
import { TextParallaxContent } from "../../../components/TextParallalContext";
import { FaCheckCircle } from "react-icons/fa";

const container = {
  hidden: { opacity: 0, y: 16 },
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
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-neutral-50 text-neutral-900">
      {/* HERO */}
      <header className="w-full border-b border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20 text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            Keri Systems
          </motion.h1>
          <div className="mx-auto mt-4 h-[2px] w-12 bg-blue-700" />
          <motion.p
            className="mt-4 text-lg sm:text-xl max-w-3xl mx-auto leading-relaxed text-neutral-700"
            initial="hidden"
            animate="visible"
            variants={item}
          >
            As a trusted dealership of Keri Systems we deliver integrated access
            control built for reliability, security, and clean operations.
          </motion.p>
        </div>
      </header>

      {/* PARALLAX STRIPE */}
      <TextParallaxContent
        imgUrl="https://i.imgur.com/lxsoWhI.jpeg"
        subheading="Empowering security with precise, modern control"
        heading="Redefining Access Control"
      />

      {/* SOLUTIONS OVERVIEW */}
      <section className="bg-white">
        <motion.div
          className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-16 sm:py-20"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.2 }}
          variants={container}
        >
          <h2 className="text-2xl sm:text-3xl font-bold uppercase text-center">
            Solutions Overview
          </h2>
          <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />

          <ul className="mt-10 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              "Overview",
              "NXT Hardware Platform",
              "Management Software",
              "Doors.NET™ Platform",
              "Borealis Cloud Solution",
              "Doors32 Software",
              "Hardware",
              "Controllers",
              "Credentials",
              "Readers",
              "Product Integrations",
              "Telephone Entry Panels",
              "Wireless Locks",
              "Mobile Access",
            ].map((label) => (
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
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.25 }}
          variants={container}
        >
          <h3 className="text-2xl sm:text-3xl font-bold uppercase">
            Contact Us
          </h3>
          <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />
          <p className="mt-4 text-lg max-w-3xl mx-auto leading-relaxed text-neutral-700">
            Need help with building access control? Get a free consultation and
            quote.
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
