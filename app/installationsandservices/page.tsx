"use client";

import React from "react";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import Image from "next/image";

const containerVariants = {
  hidden: { opacity: 0, scale: 0.8 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: { duration: 0.6, staggerChildren: 0.2 },
  },
};

const itemVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const hoverEffect = {
  scale: 1.05,
  boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.2)",
  transition: {
    duration: 0.3,
  },
};

export default function PastInstallationsPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col w-full bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-gradient-to-r from-blue-400 via-blue-500 to-red-500 py-12 px-6 md:px-12 lg:px-24 w-full text-white"
        variants={itemVariants}
      >
        <h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
        >
          Installations
        </h1>
      </motion.div>

      <motion.div
        className="py-12 px-6 md:px-12 lg:px-24 w-full text-gray-800"
        variants={containerVariants}
      >
        <motion.div className="max-w-4xl mx-auto mb-16" variants={itemVariants}>
          <section className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
            Our dedication ensures timely and dependable installations and
            maintenance for most of your parking equipment needs. We are
            committed to offering cost-effective solutions without sacrificing
            quality. Our mission is to exceed expectations by delivering
            exceptional service, responding swiftly to your needs, and providing
            unmatched expertise across various parking technologies. Trust PTS
            for reliable installations that seamlessly enhance your parking
            operations.
          </section>
        </motion.div>
        <motion.div
          className="bg-white rounded-lg shadow-md p-8 flex flex-col lg:flex-row items-center lg:items-start transition duration-300 hover:shadow-lg h-auto lg:h-96"
          variants={itemVariants}
        >
          <div className="lg:w-2/3 mb-4 lg:mb-0">
            <h3 className="text-3xl font-semibold mb-4">Jamison Properties</h3>
            <p className="text-gray-600 text-lg md:text-xl lg:text-2xl">
              Parking Technical Services has been dedicated to delivering
              installations and services to the Jamison Area in Koreatown for
              over 12 years. Our commitment to excellence remains steadfast as
              we continue to provide outstanding service to our customer base.
            </p>
          </div>
          <Image
            src="https://i.imgur.com/zOCQkdP.jpeg"
            alt="Our Expertise"
            width={500}
            height={400}
            className="rounded-lg lg:w-1/3"
          />
        </motion.div>
      </motion.div>

      <motion.div
        className="bg-gradient-to-r from-blue-400 via-blue-500 to-red-500 py-12 px-6 md:px-12 lg:px-24 w-full text-white"
        variants={itemVariants}
      >
        <h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
        >
          Service
        </h1>
      </motion.div>

      <motion.div
        className="py-12 px-6 md:px-12 lg:px-24 w-full text-gray-800"
        variants={containerVariants}
      >
        <motion.div
          className="max-w-full mx-auto mb-16"
          variants={itemVariants}
        >
          <section className="text-lg md:text-xl lg:text-2xl mb-6 leading-relaxed">
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
            <ul className="list-disc pl-0 ml-8 mt-8 mb-8">
              <li className="text-left">Scheidt & Bachmann</li>
              <li className="text-left">Amano</li>
              <li className="text-left">Federal APD</li>
              <li className="text-left">SysParc</li>
              <li className="text-left">Parking Boxx</li>
              <li className="text-left">Keri Systems</li>
              <li className="text-left">Secura Key</li>
            </ul>
            PTS is equipped and ready to install and maintain your preferred
            choice of parking and access control equipment. We customize
            solutions to meet your specific requirements, offering:
            <ul className="list-disc pl-0 ml-8 mt-8 mb-8">
              <li className="text-left">License Plate Recognition (LPR)</li>
              <li className="text-left">Proximity and/or RFID</li>
              <li className="text-left">
                Integration with Hotel PMS/Keycard (RFID and Magstripe)
              </li>
              <li className="text-left">License Plate Recognition (LPR)</li>

              <li className="text-left">Mobile Payment Applications</li>
              <li className="text-left">Pre-paid Reservations</li>
              <li className="text-left">Barcode Technology</li>
              <li className="text-left">
                Building Access Control, including elevator and after-hours
                door/grille control
              </li>
              <li className="text-left">Remote Monitoring</li>
              <li className="text-left">Phone Entry Systems</li>
              <li className="text-left">Protection Bollards</li>
              <li className="text-left">
                Trenching for running electrical and data conduit
              </li>
              <li className="text-left">Concrete Islands</li>
              <li className="text-left">
                Speed bumps and traffic control spike units
              </li>
              <li className="text-left">Vehicle Loop Ground Sensors</li>
              <li className="text-left">Parking Garage Lighting</li>
            </ul>
            We handle both installation and sales services in-house, ensuring
            your satisfaction is our primary focus. When you choose our expert
            team, you can expect top-notch workmanship at competitive rates.
            Rely on us for all your integrated parking and acccess control
            system needs.
          </section>
        </motion.div>
      </motion.div>
      <motion.div
        className="max-w-6xl mx-auto mt-16 text-center"
        variants={containerVariants}
      >
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
          Service Requests
        </h2>
        <p className="text-lg md:text-xl lg:text-2xl mb-8">
          Need assistance with your parking equipment? Contact Parking Technical
          Services today to request service and ensure your systems are running
          smoothly.
        </p>
        <a
          href="/contact"
          className="inline-block bg-blue-600 text-white text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
        >
          Contact Us
        </a>
      </motion.div>
    </motion.div>
  );
}
