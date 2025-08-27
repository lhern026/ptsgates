"use client";

import { title } from "@/components/primitives";
import { motion, useAnimation, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TextParallaxContent } from "../../../components/TextParallalContext";
import { FaCheckCircle } from "react-icons/fa";

// Variants
const section = {
  hidden: { opacity: 0, y: 12 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.45,
      ease: "easeOut",
      delay: d,
      when: "beforeChildren",
      staggerChildren: 0.06,
    },
  }),
};
const item = {
  hidden: { opacity: 0, y: 8 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.35 } },
};
const heroItem = {
  hidden: { opacity: 0, y: -10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

// Data
const hardwareProducts = [
  {
    title: "Barrier Gate",
    description:
      "Brushless DC motors for low-maintenance, efficient operation. Aluminum gate arm withstands wind up to six meters and detaches on impact to minimize damage. Sensors stop in time to avoid roof strikes, with cushioning for pedestrians. Optional LPR cameras and laser scanners coordinate longer arms.",
    image: "https://i.imgur.com/6cu5yEj.jpg",
    alt: "Parking barrier gate",
  },
  {
    title: "Pay Station",
    description:
      "Modern, secure pay stations with tickets, 2D barcodes, RFID, and plate entry. Cash and card, including contactless and mobile. Anti-tamper cassettes and accounting. Green Efficiency mode cuts power up to 70%.",
    image: "https://i.imgur.com/nyS7Nmx.jpeg",
    alt: "Automated pay station",
  },
  {
    title: "Control Devices",
    description:
      "entervo.entry and entervo.exit: issue tickets, validate cards, control barriers. Handle QR, UHF, RFID, and payment cards in addition to paper tickets.",
    image: "https://i.imgur.com/5Vu0XgO.jpeg",
    alt: "Entry and exit control devices",
  },
  {
    title: "LPR Camera Systems",
    description:
      "Ticketless flow using deep-learning plate recognition. Plate acts as the virtual ticket. Pay at station or phone; barrier opens automatically after payment.",
    image: "https://i.imgur.com/4Y4MP1L.jpeg",
    alt: "License plate recognition camera",
  },
];

const softwareSolutions = [
  {
    title: "Product Integration",
    description:
      "Unify devices and subsystems for consistent operations and shared data.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Manage from anywhere. Scale without on-site servers to reduce cost.",
  },
  {
    title: "Mobile Access & Payment",
    description: "Entry, exit, and payment from intuitive mobile interfaces.",
  },
  {
    title: "User Management",
    description: "Roles, rights, and permissions with clear auditability.",
  },
  {
    title: "Analytics & Reporting",
    description:
      "Usage, revenue, and performance insights with configurable reports.",
  },
  {
    title: "Technical Support",
    description: "Expert assistance to minimize downtime and keep SLAs intact.",
  },
];

export default function AboutSAndBPage() {
  const prefersReducedMotion = useReducedMotion();

  const controlsHardware = useAnimation();
  const [refHardware, inViewHardware] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  const controlsSoftware = useAnimation();
  const [refSoftware, inViewSoftware] = useInView({
    triggerOnce: true,
    threshold: 0.15,
  });

  useEffect(() => {
    if (inViewHardware) controlsHardware.start("visible");
  }, [controlsHardware, inViewHardware]);

  useEffect(() => {
    if (inViewSoftware) controlsSoftware.start("visible");
  }, [controlsSoftware, inViewSoftware]);

  return (
    <div className="min-h-screen flex flex-col bg-neutral-50 text-neutral-900 antialiased">
      {/* HERO */}
      <motion.section
        className="flex flex-col items-center justify-center px-6 md:px-12 pt-16 pb-20 sm:pt-20 sm:pb-24 bg-gradient-to-b from-neutral-50 to-neutral-100 border-b border-neutral-300 text-center"
        initial="hidden"
        animate="visible"
        variants={section}
      >
        <Link
          href="https://www.scheidt-bachmann-usa.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          className="block mb-8 sm:mb-10"
          aria-label="Scheidt & Bachmann website"
        >
          <Image
            src="https://i.imgur.com/XDEdW4c.jpeg"
            alt="Scheidt & Bachmann logo"
            width={240}
            height={96}
            className="mx-auto h-auto w-auto rounded-sm"
            priority
          />
        </Link>

        <motion.h1
          className={`${title?.({ size: "xl" }) ?? ""} text-4xl md:text-5xl font-extrabold tracking-tight`}
          variants={heroItem}
        >
          Scheidt & Bachmann
        </motion.h1>
        <div className="mx-auto mt-4 h-[2px] w-12 bg-blue-700" />
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-neutral-700"
          variants={heroItem}
        >
          Channel Partner for Southern California. We integrate entervo hardware
          and software with disciplined service.
        </motion.p>
        <motion.p
          className="mt-3 text-lg max-w-3xl mx-auto leading-relaxed text-neutral-700"
          variants={heroItem}
        >
          Reliable systems. Clear operations. Revenue protection.
        </motion.p>
      </motion.section>

      {/* PARALLAX: HARDWARE */}
      <TextParallaxContent
        imgUrl="https://i.imgur.com/6wPwRJN.jpeg"
        subheading="State-of-the-art parking systems"
        heading="Innovative Hardware"
      />

      {/* HARDWARE DETAILS */}
      <motion.section
        ref={refHardware}
        className="w-full bg-white py-16 sm:py-20 px-6 md:px-12 lg:px-20"
        initial="hidden"
        animate={controlsHardware}
        variants={section}
      >
        <div className="max-w-6xl mx-auto space-y-10 md:space-y-12">
          {hardwareProducts.map((p, i) => (
            <motion.article
              key={p.title}
              className="grid lg:grid-cols-5 gap-0 overflow-hidden border border-neutral-200 rounded-[6px] bg-white"
              variants={item}
            >
              <div className="relative lg:col-span-2 aspect-[16/9] lg:aspect-auto lg:h-full">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  className="object-cover"
                  sizes="(max-width:1024px) 100vw, 40vw"
                  priority={i === 0}
                />
              </div>
              <div className="lg:col-span-3 p-6 md:p-8">
                <h3 className="text-2xl font-semibold mb-3 text-neutral-900">
                  {p.title}
                </h3>
                <p className="text-neutral-700 leading-relaxed">
                  {p.description}
                </p>
              </div>
            </motion.article>
          ))}
        </div>
      </motion.section>

      {/* PARALLAX: SOFTWARE */}
      <TextParallaxContent
        imgUrl="https://i.imgur.com/dgHPO4S.jpeg"
        subheading="Intelligent and connected"
        heading="Advanced Software"
      />

      {/* SOFTWARE DETAILS */}
      <motion.section
        ref={refSoftware}
        className="w-full bg-neutral-100 py-16 sm:py-20 px-6 md:px-12 lg:px-20 border-t border-neutral-200"
        initial="hidden"
        animate={controlsSoftware}
        variants={section}
      >
        <div className="max-w-5xl mx-auto">
          <motion.h2
            className="text-2xl sm:text-3xl font-bold uppercase text-center"
            variants={item}
          >
            Comprehensive Software Features
          </motion.h2>
          <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />

          <motion.ul
            className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8"
            variants={
              prefersReducedMotion
                ? {}
                : { visible: { transition: { staggerChildren: 0.06 } } }
            }
          >
            {softwareSolutions.map((s) => (
              <motion.li
                key={s.title}
                className="bg-white border border-neutral-200 rounded-[6px] p-6"
                variants={item}
              >
                <div className="flex items-start gap-3 mb-2">
                  <FaCheckCircle className="text-blue-700 mt-0.5" aria-hidden />
                  <h3 className="text-xl font-semibold">{s.title}</h3>
                </div>
                <p className="text-neutral-700 leading-relaxed">
                  {s.description}
                </p>
              </motion.li>
            ))}
          </motion.ul>
        </div>
      </motion.section>

      {/* EXTERNAL LINK */}
      <section className="w-full bg-white text-center py-12 sm:py-16 px-6">
        <Link
          href="https://www.scheidt-bachmann-usa.com/en/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Explore Scheidt & Bachmann solutions"
          className="inline-block px-8 py-3 text-sm font-semibold bg-neutral-900 text-white rounded-[4px] hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400"
        >
          Explore Scheidt &amp; Bachmann
        </Link>
      </section>

      {/* CTA */}
      <motion.section
        className="w-full bg-blue-700 text-white py-16 sm:py-20 px-6 md:px-12 text-center"
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={section}
      >
        <div className="max-w-3xl mx-auto">
          <motion.h2
            className="text-3xl sm:text-4xl font-bold mb-4"
            variants={item}
          >
            Ready to Discuss Your Parking System?
          </motion.h2>
          <motion.p
            className="text-lg sm:text-xl mb-8 opacity-95 leading-relaxed"
            variants={item}
          >
            Get a complimentary consultation on Scheidt &amp; Bachmann
            solutions.
          </motion.p>
          <motion.div variants={item}>
            <Link
              href="/contact-2"
              aria-label="Get a free consultation"
              className="inline-block px-10 py-3 text-sm font-semibold bg-white text-blue-700 rounded-[4px] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/70"
            >
              Get a Free Consultation
            </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
