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
      "Scheidt & Bachmann prioritizes reliable gate barrier systems to prevent operational failures and liability issues. They employ brushless DC motors for low-maintenance, energy-efficient operation in their entervo.barrier systems. The gate arm, constructed from lightweight aluminum profiles, withstands wind loads up to six meters long and detaches on contact with a vehicle to prevent damage and minimize inconvenience to drivers. Advanced sensor technology ensures timely stopping to avoid vehicle roof impacts, with cushioning to protect pedestrians. Laser scanners control longer barrier arms, optionally equipped with license plate recognition cameras for enhanced functionality.",
    image: "https://i.imgur.com/6cu5yEj.jpg",
    alt: "Parking Barrier",
  },
  {
    title: "Pay Station",
    description:
      "Scheidt & Bachmann's automated pay stations serve as the pivotal interface between parking management and customers, defining the user experience with their modern design and user-centric functionality. These stations support diverse payment options including conventional tickets, 2D barcodes, RFID, and touchscreen input for license plates. They accommodate cash and card payments, including contactless and chip transactions, alongside mobile payments for convenience and reduced cash handling. Engineered for robust security against vandalism and theft, they feature secure cassettes for cash transport and efficient accounting systems. Additionally, their 'Green Efficiency' technology reduces power consumption by up to 70%, promoting both appeal and environmental sustainability.",
    image: "https://i.imgur.com/nyS7Nmx.jpeg",
    alt: "Parking Pay Station",
  },
  {
    title: "Control Devices",
    description:
      "The entervo.entry and entervo.exit control devices by Scheidt & Bachmann are renowned for their versatility, user-friendly operation, reliability, and ease of maintenance.Key functionalities include:-Issuance of short-term parking tickets (barcode or magstripe) at entry points.-Verification of Scheidt & Bachmann system cards and third-party cards at both entry and exit points.-Control of barrier operations to manage vehicle access.-Capability to process various media types such as QR codes, UHF tags, RFID, and payment cards, reflecting evolving preferences alongside traditional paper tickets.",
    image: "https://i.imgur.com/5Vu0XgO.jpeg",
    alt: "Control Devices",
  },
  {
    title: "Camera",
    description:
      "Scheidt & Bachmann revolutionizes parking convenience with smart solutions that eliminate tickets, leveraging advanced camera technology and artificial intelligence. Our systems employ deep learning for precise number plate recognition, allowing seamless entry and exit without physical tickets. Customers can pay effortlessly via cash, credit/debit card, or app, using their number plate for verification.Upon entry, state-of-the-art cameras capture the license plate, acting as a virtual ticket. Payment can be made at a pay station or via smartphone. At exit, LPR cameras recognize the plate, automatically opening the barrier once the fee is paid.",
    image: "https://i.imgur.com/4Y4MP1L.jpeg",
    alt: "Camera",
  },
];

const softwareSolutions = [
  {
    title: "Product Integration",
    description:
      "Seamlessly integrate various parking management products for a unified solution.",
  },
  {
    title: "Cloud Solutions",
    description:
      "Utilize cloud technology for efficient and scalable parking management.",
  },
  {
    title: "Mobile Access",
    description: "Enable users to access and manage parking facilities through mobile devices.",
  },
  {
    title: "User Management",
    description: "Efficiently manage user profiles, access rights, and permissions.",
  },
  {
    title: "Analytics and Reporting",
    description:
      "Gain insights into parking usage and performance with detailed analytics and reports.",
  },
  {
    title: "Technical Support",
    description: "Receive dedicated technical support for seamless parking operations.",
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
          className={`${title?.({ size: "lg" }) ?? ""} text-4xl md:text-5xl font-extrabold tracking-tight`}
          variants={heroItem}
        >
          Scheidt & Bachmann
        </motion.h1>
        <div className="mx-auto mt-4 h-[2px] w-12 bg-blue-700" />
        <motion.p
          className="mt-4 text-lg md:text-xl max-w-3xl mx-auto leading-relaxed text-neutral-700"
          variants={heroItem}
        >
          Parking Technical Services proudly serves as a Channel Partner of
          Scheidt & Bachmann, renowned for their extensive expertise in service
          and cutting-edge parking equipment. This strategic alliance allows us
          to integrate their state-of-the-art parking systems and innovative
          solutions to our customer base throughout all of Southern California.
          By combining Scheidt & Bachmann's industry-leading products with our
          commitment to exceptional service, we ensure that our clients receive
          reliable, efficient, and forward-thinking parking systems tailored to
          meet their needs and enhance overall operational efficiency and
          Parking Revenue.
        </motion.p>

      </motion.section>

      {/* PARALLAX: HARDWARE */}
      <TextParallaxContent
        imgUrl="https://i.imgur.com/6wPwRJN.jpeg"
        subheading=""
        heading="Hardware"
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
              className="grid lg:grid-cols-5 items-center overflow-hidden border border-neutral-200 rounded-xl bg-white"
              variants={item}
            >
              <div className="relative lg:col-span-2 h-64 sm:h-80 lg:h-72 bg-neutral-50 border-b lg:border-b-0 lg:border-r border-neutral-200">
                <Image
                  src={p.image}
                  alt={p.alt}
                  fill
                  quality={90}
                  className="object-contain p-6 sm:p-8"
                  sizes="(max-width: 1023px) 100vw, (max-width: 1440px) 40vw, 460px"
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
        subheading=""
        heading="Software"
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
              Software Solutions
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
              Check out Scheidt & Bachmann
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
                Contact Us
              </motion.h2>
          <motion.p
            className="text-lg sm:text-xl mb-8 opacity-95 leading-relaxed"
            variants={item}
          >
                Need assistance with your building access control equipment?
                Contact Parking Technical Services today for a free consultation
                and quote.
              </motion.p>
          <motion.div variants={item}>
            <Link
              href="/contact-2"
              aria-label="Get a free consultation"
              className="inline-block px-10 py-3 text-sm font-semibold bg-white text-blue-700 rounded-[4px] hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-white/70"
            >
                Contact Us
              </Link>
          </motion.div>
        </div>
      </motion.section>
    </div>
  );
}
