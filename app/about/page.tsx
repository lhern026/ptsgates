"use client";

import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: "easeOut" } },
};

const itemVariants = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.5, ease: "easeOut" } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.97 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, ease: "easeOut" },
  },
};

export default function AboutUsPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-neutral-50 font-sans text-neutral-800">
      {/* HERO */}
      <header className="relative w-full border-b border-neutral-300 bg-gradient-to-b from-neutral-50 to-neutral-100">
        <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 py-20 sm:py-28 flex flex-col items-center text-center">
          <motion.h1
            className="text-4xl sm:text-5xl font-extrabold tracking-tight uppercase"
            initial="hidden"
            animate="visible"
            variants={sectionVariants}
          >
            Parking Technical Services
          </motion.h1>
          <div className="w-12 h-[2px] bg-blue-700 mt-4 mb-6"></div>
          <motion.p
            className="mt-2 text-lg sm:text-xl max-w-2xl leading-relaxed text-neutral-700"
            initial="hidden"
            animate="visible"
            transition={{ delay: 0.2 }}
            variants={sectionVariants}
          >
            Since 1990, delivering precision-engineered parking and access
            control systems with an uncompromising commitment to quality.
          </motion.p>
        </div>
      </header>

      {/* MAIN CONTENT */}
      <main className="flex-grow w-full">
        {/* Overview */}
        <section className="py-20 border-b border-neutral-300">
          <div className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">
            <motion.div
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="https://i.imgur.com/u1fiTYz.png"
                alt="Team at Parking Technical Services"
                width={800}
                height={600}
                className="w-full h-auto object-cover"
              />
            </motion.div>
            <motion.div
              variants={itemVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              className="flex flex-col justify-center"
            >
              <h2 className="text-2xl font-bold uppercase mb-4">Our Story</h2>
              <div className="w-8 h-[2px] bg-blue-700 mb-6"></div>
              <p className="mb-4 leading-relaxed">
                Headquartered in Riverside, California, Parking Technical
                Services has set the standard in modern revenue and access
                control systems.
              </p>
              <p className="leading-relaxed">
                Under the leadership of founder Armando Castro, we remain
                committed to technical excellence and uncompromising service for
                our clients.
              </p>
            </motion.div>
          </div>
        </section>

        {/* Associations */}
        <section className="py-20 border-b border-neutral-300 bg-gradient-to-b from-neutral-100 to-neutral-50">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center">
            <motion.h2
              className="text-2xl font-bold uppercase mb-4"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Associations
            </motion.h2>
            <div className="w-12 h-[2px] bg-blue-700 mx-auto mb-8"></div>
            <motion.ul
              className="space-y-3 text-lg"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              {[
                {
                  name: "National Parking Association",
                  link: "https://weareparking.org/",
                },
                { name: "Los Angeles Parking Association", link: "#" },
              ].map((assoc) => (
                <li key={assoc.name}>
                  {assoc.link !== "#" ? (
                    <a
                      href={assoc.link}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="hover:text-blue-700 transition-colors"
                    >
                      {assoc.name}
                    </a>
                  ) : (
                    assoc.name
                  )}
                </li>
              ))}
            </motion.ul>
          </div>
        </section>

        {/* Expertise */}
        <section className="py-20">
          <div className="max-w-5xl mx-auto px-6 sm:px-10 text-center">
            <motion.h2
              className="text-2xl font-bold uppercase mb-4"
              variants={sectionVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              Decades of Expertise
            </motion.h2>
            <div className="w-12 h-[2px] bg-blue-700 mx-auto mb-10"></div>
            <motion.div
              className="max-w-3xl mx-auto"
              variants={imageVariants}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
            >
              <Image
                src="https://i.imgur.com/wgwkHab.jpeg"
                alt="Technicians at work"
                width={700}
                height={500}
                className="w-full h-auto object-cover"
              />
              <p className="mt-6 text-lg leading-relaxed">
                Our workforce is built on precision, technical mastery, and the
                discipline to solve complex challenges efficiently.
              </p>
            </motion.div>
          </div>
        </section>
      </main>
    </div>
  );
}
