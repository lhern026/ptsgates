"use client";

import React, { useMemo } from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaLock, FaClock } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

// ---------- Data ----------
const features = [
  {
    icon: <FaCheckCircle className="text-4xl text-slate-800 mb-4 mx-auto" />,
    title: "Professionalism & Reliability",
    description:
      "Thirty-plus years. Consistent delivery. We resolve complex revenue control issues with disciplined process.",
  },
  {
    icon: <FaLock className="text-4xl text-slate-800 mb-4 mx-auto" />,
    title: "Enhanced Security",
    description:
      "Hardened access, audited flows, and exception handling to reduce loss and downtime.",
  },
  {
    icon: <FaClock className="text-4xl text-slate-800 mb-4 mx-auto" />,
    title: "Cost-Effective Solutions",
    description:
      "Lean service model. Fast response. Broad equipment coverage to keep TCO low.",
  },
];

const howItWorksItems = [
  {
    imageUrl: "https://i.imgur.com/JW8eKw2.jpeg",
    alt: "Service & Installation for parking systems",
    title: "Service & Installation",
    description:
      "From electro-mechanical to computerized systems. Precise install. Clear documentation. Reliable support.",
  },
  {
    imageUrl: "https://i.imgur.com/uKEyZSe.jpeg",
    alt: "Our goal for parking technical services",
    title: "Our Goal",
    description:
      "Deliver excellent service at fair prices. Respond fast. Protect revenue with preventative practice.",
  },
  {
    imageUrl: "https://i.imgur.com/Zw3NNCa.jpeg",
    alt: "Our expertise in parking solutions",
    title: "Our Expertise",
    description:
      "Technicians and engineers with deep vendor coverage. We solve hard problems quickly.",
  },
];

const heroImageUrls = [
  "https://i.imgur.com/aTB62po.jpeg",
  "https://i.imgur.com/j3Obu3L.jpeg",
  "https://i.imgur.com/w1hU99Y.jpeg",
  "https://i.imgur.com/kxqa6u1.jpeg",
  "https://i.imgur.com/YmeLknf.jpeg",
  "https://i.imgur.com/9b2dKhr.jpeg",
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
  const prefersReduced =
    typeof window !== "undefined" &&
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  const sliderSettings = useMemo(
    () => ({
      dots: true,
      infinite: true,
      speed: prefersReduced ? 0 : 600,
      slidesToShow: 1,
      slidesToScroll: 1,
      autoplay: prefersReduced ? false : true,
      autoplaySpeed: 4500,
      arrows: false,
      fade: true,
      cssEase: "linear",
      pauseOnHover: false,
      pauseOnFocus: false,
      appendDots: (dots: React.ReactNode) => (
        <div className="!bottom-8">
          <ul className="m-0 flex items-center justify-center gap-3">{dots}</ul>
        </div>
      ),
      customPaging: () => (
        <div className="w-2.5 h-2.5 rounded-full bg-white/60 ring-1 ring-white/40 transition-opacity duration-200 slick-dot" />
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

      <main id="main" className="flex-grow">
        {/* Hero */}
        <section className="relative h-screen w-full text-white overflow-hidden">
          <Slider {...sliderSettings}>
            {heroImageUrls.map((image, index) => (
              <div
                key={index}
                className="h-screen outline-none focus:outline-none"
              >
                <div
                  className="flex items-center justify-center h-full bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${image})` }}
                  aria-hidden="true"
                >
                  <div className="absolute inset-0 bg-black/65" />
                  <div className="relative z-10 px-4 sm:px-6 text-center max-w-3xl lg:max-w-4xl mx-auto">
                    <motion.h1
                      className="text-[clamp(2rem,6vw,4rem)] font-extrabold tracking-tight mb-4 text-white"
                      variants={heroTextItemVariants}
                      initial="hidden"
                      animate="visible"
                    >
                      Parking Technical Services
                    </motion.h1>
                    <motion.p
                      className="text-[clamp(1rem,2.2vw,1.375rem)] mb-8 text-slate-100"
                      variants={heroTextItemVariants}
                      initial="hidden"
                      animate="visible"
                      transition={{ delay: 0.12 }}
                    >
                      Modern parking systems and access control. Built for
                      uptime.
                    </motion.p>
                    <Link
                      href="/contact-2"
                      aria-label="Get started with our parking solutions"
                      prefetch
                    >
                      <motion.span
                        className="inline-block px-7 py-3 text-base font-semibold bg-white text-slate-900 rounded-md ring-1 ring-slate-300 hover:bg-slate-100 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-200"
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

          <style jsx global>{`
            .slick-dots {
              position: absolute;
            }
            .slick-dots li.slick-active .slick-dot {
              opacity: 1;
              background: white;
            }
            .slick-dots li .slick-dot {
              opacity: 0.6;
            }
          `}</style>
        </section>

        {/* Features */}
        <section className="py-16 sm:py-20 bg-white">
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
              Why Choose Us
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {features.map((feature) => (
                <motion.article
                  key={feature.title}
                  className="p-6 lg:p-7 bg-white rounded-none border border-slate-200 hover:border-slate-300 transition-colors"
                  variants={itemVariants}
                >
                  <div className="flex flex-col items-center text-center">
                    {feature.icon}
                    <h3 className="text-lg font-semibold mt-2 mb-2 tracking-wide uppercase">
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
        <section className="py-16 sm:py-20 bg-white">
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
              Our Approach
            </motion.h2>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8">
              {howItWorksItems.map((item) => (
                <motion.article
                  key={item.title}
                  className="bg-white border border-slate-200 rounded-none overflow-hidden"
                  variants={itemVariants}
                >
                  <div className="relative aspect-[16/9] w-full">
                    <Image
                      src={item.imageUrl}
                      alt={item.alt}
                      fill
                      className="object-cover"
                      sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                      loading="lazy"
                    />
                  </div>
                  <div className="p-6 lg:p-7">
                    <h3 className="text-lg font-semibold mb-2 tracking-wide uppercase">
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
          className="py-20 sm:py-24"
          style={{
            backgroundImage: `
              radial-gradient(60% 50% at 50% 0%, rgba(17,24,39,0.06) 0%, rgba(17,24,39,0) 60%),
              linear-gradient(180deg, #f7f7f7 0%, #e9edf1 100%)
            `,
          }}
          aria-label="Call to action to upgrade parking system"
        >
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <motion.div
              className="bg-white/90 p-10 sm:p-14 lg:p-16 backdrop-blur-sm border border-slate-200"
              initial={{ opacity: 0, scale: 0.98 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, amount: 0.25 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
            >
              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-extrabold mb-4 tracking-tight text-slate-900">
                Modernize Your Parking System
              </h2>
              <p className="text-lg md:text-xl mb-8 text-slate-700">
                Reliable revenue control and access infrastructure.
              </p>
              <Link
                href="/contact-2"
                aria-label="Contact us now for parking solutions"
                prefetch
              >
                <span className="inline-block px-8 py-3 text-base font-medium bg-slate-900 text-white rounded-md ring-1 ring-slate-900/10 hover:bg-slate-800 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-300">
                  Contact Us
                </span>
              </Link>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
