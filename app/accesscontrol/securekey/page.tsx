"use client";

import { title } from "@/components/primitives";
import { motion, Variants } from "framer-motion";
import Image from "next/image";
import { TextParallaxContent } from "../../../components/TextParallalContext";
import { FaCheckCircle } from "react-icons/fa";

const container: Variants = {
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

const item: Variants = {
  hidden: { opacity: 0, y: 20, scale: 0.9 },
  visible: { opacity: 1, y: 0, scale: 1 },
};

const listItem: Variants = {
  hidden: { opacity: 0, x: -20 },
  visible: { opacity: 1, x: 0 },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50">
      <motion.div
        className="flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 w-full bg-gradient-to-r from-gray-100 via-blue-100 to--500 text-white text-shadow-lg animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={"https://i.imgur.com/XeQ6mls.jpeg"}
          alt={"SecuraKey Logo"}
          width={200}
          height={200}
          className="w-1/3 h-1/3 rounded-lg shadow-lg"
        />

        <motion.h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center text-black mt-8`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SecuraKey Store
        </motion.h1>

        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-center text-black max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          As a trusted dealership of SecuraKey, a renowned leader in access
          control and RFID solutions, we are dedicated to providing cutting-edge
          technology that enhances security and convenience for our clients. Our
          dealership allows us to deliver top-tier products and comprehensive
          solutions, ensuring we meet the evolving needs of modern access
          control systems. With offerings such as the NOVA.16 multi-reader
          access control system and the eACCESS entry control systems, SecuraKey
          consistently sets the standard for reliability and performance in the
          industry​.
        </motion.p>
      </motion.div>
      <TextParallaxContent
        imgUrl="https://i.imgur.com/54Qw4zx.jpeg"
        subheading="Providing Innovative and Reliable Security Systems for Over 38 Years"
        heading="SecuraKey: Leading the Way in Access Control and RFID Solutions"
      />
      <motion.div
        className="bg-white max-w-full md:px-12 lg:px-24 text-gray-800 rounded-t-lg shadow-lg"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        <motion.div
          className="bg-white max-w-full py-2 px-6 md:px-12  mt-16 text-gray-800 rounded-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-600">
            Solutions Overview
          </h2>
          <motion.ul
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 text-lg md:text-xl lg:text-2xl text-gray-700"
            initial="hidden"
            animate="visible"
            variants={container}
          >
            {[
              "Proximity Readers",
              "Contactless Readers",
              "Touch Readers",
              "Low Frequency (Radio Key) Cards & Keytags",
              "High Frequency (e*Tag) Cards & Keytags",
              "Barium Ferrite Cards & Keytags",
              "Wiegand Cards & Keytags",
              "Select Engineered Systems Cards & Keytags",
              "Modern Electronics Systems Cards & Keytags",
              "Touchcard, e*Tag Custom Options",
              "Programming Tools",
              "Wiegand Interface Products",
              "Wireless Accessories",
              "Parts",
              "OEM Products",
              "Card Finder",
            ].map((item, index) => (
              <motion.li
                key={index}
                className="flex items-center space-x-4 bg-white p-4 rounded-lg shadow-lg hover:shadow-xl transition duration-300"
                variants={listItem}
              >
                <FaCheckCircle className="text-blue-500" />
                <span>{item}</span>
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
            Need assistance with your parking equipment? Contact Parking
            Technical Services today to request service and ensure your systems
            are running smoothly.
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
