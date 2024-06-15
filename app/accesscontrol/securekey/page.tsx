"use client";

import { title } from "@/components/primitives";
import { motion } from "framer-motion";
import Image from "next/image";

const container = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      delay: 0.2,
      staggerChildren: 0.1,
    },
  },
};

const item = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const listItem = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

const hoverEffect = {
  hover: {
    scale: 1.05,
    rotate: 2,
    boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
    transition: {
      duration: 0.3,
    },
  },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50">
      <motion.div
        className="flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 w-full bg-gradient-to-r from-gray-100 via-blue-100 to-gray-500 text-white text-shadow-lg animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={"https://i.imgur.com/XeQ6mls.jpeg"}
          alt={"SecuraKey Logo"}
          width={200}
          height={200}
          className="w-1/3 h-1/3 rounded-lg"
        />
        <motion.h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-black mt-8`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SecuraKey Superstore
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-center text-black max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          DF Supply, Inc. is the Leading SecuraKey Access Control Systems and
          Accessories Distributor.
        </motion.p>
      </motion.div>
      <motion.div
        className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800 rounded-t-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div
          className="bg-white py-16 px-6 md:px-12 lg:px-24 mt-16 text-gray-800 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-600">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {[
                {
                  title: "Proximity Readers",
                  description:
                    "Explore our range of Proximity Readers, ideal for various access control needs.",
                  image:
                    "https://source.unsplash.com/random/800x400?proximity-reader",
                },
                {
                  title: "Contactless Readers",
                  description:
                    "Our Contactless Readers offer high security and convenience for modern access control systems.",
                  image:
                    "https://source.unsplash.com/random/800x400?contactless-reader",
                },
                {
                  title: "RK600 Series",
                  description:
                    "Check out the reliable and versatile RK600 Series for robust access control.",
                  image: "https://source.unsplash.com/random/800x400?rk600",
                },
                {
                  title: "NOVA.16 Proximity Readers",
                  description:
                    "NOVA.16 Proximity Readers provide cutting-edge technology for enhanced security.",
                  image:
                    "https://source.unsplash.com/random/800x400?nova-proximity-reader",
                },
              ].map((solution, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
                  variants={item}
                  whileHover="hover"
                >
                  <Image
                    src={solution.image}
                    alt={solution.title}
                    width={600}
                    height={400}
                    loading="lazy"
                    className="w-full h-60 object-cover rounded-lg"
                  />
                  <h3 className="text-2xl font-semibold mb-2 mt-4">
                    {solution.title}
                  </h3>
                  <p className="text-gray-600">{solution.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </motion.div>
        <motion.div
          className="bg-white py-16 px-6 md:px-12 lg:px-24 mt-16 text-gray-800 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-600">
            Solutions Overview
          </h2>
          <motion.ul
            className="list-disc pl-6 text-lg md:text-xl lg:text-2xl text-gray-700 space-y-4"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {[
              "Overview",
              "Solutions Overview",
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
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-start"
                variants={listItem}
              >
                <span className="text-2xl text-blue-500 mr-2">✓</span>
                {item}
              </motion.li>
            ))}
          </motion.ul>
        </motion.div>
        <motion.div
          className="max-w-6xl mx-auto mt-16 text-center"
          variants={container}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Ready to enhance your security with SecuraKey? Get in touch with us
            today to learn more about our tailored solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
