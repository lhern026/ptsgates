"use client";

import React, { useMemo } from "react";
import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { CheckBadgeIcon, LockClosedIcon, ClockIcon } from "@heroicons/react/24/outline";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// ---------- Data ----------
const features = [
  {
    icon: <CheckBadgeIcon className="mb-6 h-8 w-8 text-slate-700" strokeWidth={1.2} aria-hidden="true" />,
    title: "Professionalism & Reliability",
    description:
      "With over thirty years of experience, our team is known for its professionalism, reliability, and quality of services. We address and resolve parking revenue control system issues, no matter how complex.",
  },
  {
    icon: <LockClosedIcon className="mb-6 h-8 w-8 text-slate-700" strokeWidth={1.2} aria-hidden="true" />,
    title: "Enhanced Security",
    description:
      "Our advanced security features prevent unauthorized access and ensure the safety of parked vehicles, making us a reliable choice for all your parking system needs.",
  },
  {
    icon: <ClockIcon className="mb-6 h-8 w-8 text-slate-700" strokeWidth={1.2} aria-hidden="true" />,
    title: "Cost-Effective Solutions",
    description:
      "We provide excellent service at the most affordable prices, with a quick response to clients' requests and versatility, servicing most types of parking revenue control systems.",
  },
];

const howItWorksItems = [
  {
    imageUrl: "https://i.imgur.com/JW8eKw2.jpeg",
    alt: "Service & Installation",
    title: "Service & Installation",
    description:
      "From electro-mechanical to sophisticated computerized access control and parking equipment, we provide service, installation, and tech support in a manner unequaled by other companies in the parking industry.",
  },
  {
    imageUrl: "https://i.imgur.com/uKEyZSe.jpeg",
    alt: "Our Goal",
    title: "Our Goal",
    description:
      "We aim to provide excellent service at the most affordable prices, with quick responses to client requests and versatility in servicing most types of parking equipment to prevent revenue loss.",
  },
  {
    imageUrl: "https://i.imgur.com/Zw3NNCa.jpeg",
    alt: "Our Expertise",
    title: "Our Expertise",
    description:
      "Our highly qualified workforce consists of technicians and engineers ready to address and resolve most parking issues in a timely manner, no matter how complex it may be.",
  },
];

const heroImageUrls = [
  "/images/home/parking-01.webp",
  "/images/home/parking-02.webp",
  "/images/home/parking-03.webp",
  "/images/home/parking-04.webp",
  "/images/home/parking-05.webp",
];

// ---------- Motion ----------
const sectionContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12,
      when: "beforeChildren",
      duration: 0.4,
    },
  },
};
const itemVariants = {
  hidden: { opacity: 0, y: 18 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};
const heroTextItemVariants = {
  hidden: { opacity: 0, y: -18 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const Home = () => {
  const prefersReduced = useReducedMotion();

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: prefersReduced ? 0 : 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: false,
      autoplaySpeed: 4500,
      arrows: false,
      lazyLoad: "ondemand" as const,
      fade: true,
      cssEase: "linear",
      pauseOnHover: true,
      pauseOnFocus: true,
      appendDots: (dots: React.ReactNode) => (
        <div className="!bottom-8">
          <ul className="m-0 flex items-center justify-center gap-3">{dots}</ul>
        </div>
      ),
      customPaging: (index: number) => (
        <button type="button" aria-label={`Show parking photo ${index + 1}`}>
          <span aria-hidden="true" className="slick-dot" />
        </button>
      ),
    }),
    [prefersReduced]
  );

  return (
    <div className="flex flex-col min-h-screen font-sans antialiased bg-white text-slate-900 selection:bg-slate-900 selection:text-white">
      <a
        href="#main"
        className="sr-only focus:not-sr-only focus:fixed focus:top-3 focus:left-3 focus:bg-black focus:text-white focus:px-3 focus:py-2 focus:rounded"
      >
        Skip to content
      </a>

      <div id="main" className="flex-grow">
        {/* Hero */}
        <section className="home-hero relative w-full overflow-hidden text-white">
          <Slider {...sliderSettings}>
            {heroImageUrls.map((image, index) => (
              <div
                key={index}
                className="home-hero-slide outline-none focus:outline-none"
              >
                <div className="relative flex h-full items-center justify-center">
                  <Image src={image} alt="" fill sizes="100vw" quality={90} priority={index === 0} className="object-cover" />
                  <div className="home-hero-shade absolute inset-0" />
                  <div className="relative z-10 mx-auto max-w-6xl px-6 text-center">
                    <motion.h1
                      className="text-[clamp(2.75rem,5.5vw,5.5rem)] mb-6 text-white"
                      variants={heroTextItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      Parking Technical Services
                    </motion.h1>
                    <motion.p
                      className="text-[clamp(1rem,1.8vw,1.25rem)] mb-10 text-slate-100"
                      variants={heroTextItemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.12 }}
                    >
                      Innovative solutions for Modern parking needs.
                    </motion.p>
                    <Link
                      href="/contact-2"
                      aria-label="Get started with our parking solutions"
                      prefetch
                    >
                      <motion.span
                        className="home-hero-action inline-block px-8 py-3.5 text-sm font-medium"
                        initial={{ opacity: 0, scale: 0.94 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ delay: 0.22, duration: 0.35 }}
                      >
                        Get Started
                      </motion.span>
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>


        </section>

        {/* Features */}
        <section className="py-20 sm:py-28 bg-white">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionContainerVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12 sm:mb-16"
              variants={itemVariants}
            >
              Why Choose Parking Technical Services?
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature) => (
                <motion.article
                  key={feature.title}
                  className="border-t border-slate-200 px-6 py-8 lg:px-8 lg:py-10"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="mb-4 text-lg font-medium">
                      {feature.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        <hr className="border-t border-slate-200" aria-hidden="true" />

        {/* How It Works */}
        <section className="py-20 sm:py-28 bg-white">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.15 }}
            variants={sectionContainerVariants}
          >
            <motion.h2
              className="text-2xl sm:text-3xl font-bold tracking-tight text-center mb-12 sm:mb-16"
              variants={itemVariants}
            >
              How It Works
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {howItWorksItems.map((item) => (
                <motion.article
                  key={item.title}
                  className="overflow-hidden bg-white"
                  variants={itemVariants}
                >
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-sm">
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="px-1 pb-2 pt-7 lg:pt-8">
                    <h3 className="mb-4 text-lg font-medium">
                      {item.title}
                    </h3>
                    <p className="text-slate-600 leading-relaxed">
                      {item.description}
                    </p>
                  </div>
                </motion.article>
              ))}
            </div>
          </motion.div>
        </section>

        {/* CTA — German gradients */}
        <section
          className="border-t border-slate-200 bg-slate-50 py-20 sm:py-28"
          aria-label="Call to action to upgrade parking system"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              className="py-2 sm:py-6"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
              Ready to Upgrade Your Parking and Access Control System?
            </h2>
              <p className="text-lg md:text-xl mb-8 text-slate-700">
              Contact us today to learn more about our advanced parking revenue
              control solutions.
            </p>
              <Link
                href="/contact-2"
                aria-label="Contact us now for parking solutions"
                prefetch
              >
                <span className="site-button">
                  Contact Us
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      </div>
    </div>
  );
};

export default Home;
