"use client";

import React from "react";
import { motion } from "framer-motion";
import { title } from "@/components/primitives";
import {
  FaTools,
  FaCogs,
  FaClock,
  FaWrench,
  FaClipboardCheck,
} from "react-icons/fa";
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

export default function PricingPage() {
  return (
    <motion.div
      className="min-h-screen flex flex-col w-full bg-gray-50"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.div
        className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 px-6 md:px-12 lg:px-24 w-full text-white"
        variants={itemVariants}
      >
        <h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
        >
          Installations and Services
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto">
          Comprehensive solutions for all your parking gate system needs.
        </p>
      </motion.div>

      <motion.div
        className="py-12 px-6 md:px-12 lg:px-24 w-full text-gray-800"
        variants={containerVariants}
      >
        <motion.div className="max-w-4xl mx-auto mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            We offer a range of services to ensure your parking gate systems are
            always operational and up-to-date. Our services include
            installation, maintenance, upgrades, and emergency repairs, all
            tailored to meet your specific needs.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12"
          variants={containerVariants}
        >
          {[
            {
              icon: <FaTools className="text-4xl text-primary mb-4" />,
              title: "Installation Services",
              description:
                "Our team of experienced technicians ensures seamless installation of parking gate systems tailored to your specific needs.",
            },
            {
              icon: <FaCogs className="text-4xl text-primary mb-4" />,
              title: "Maintenance and Support",
              description:
                "Regular maintenance is crucial for the longevity and reliability of your parking gate systems. We offer comprehensive maintenance plans.",
            },
            {
              icon: <FaClipboardCheck className="text-4xl text-primary mb-4" />,
              title: "System Upgrades",
              description:
                "Keep your parking gate systems up-to-date with the latest technology advancements.",
            },
            {
              icon: <FaClock className="text-4xl text-primary mb-4" />,
              title: "Emergency Repair Services",
              description:
                "Our emergency repair services are available 24/7 to minimize downtime and inconvenience.",
            },
            {
              icon: <FaWrench className="text-4xl text-primary mb-4" />,
              title: "Custom Solutions",
              description:
                "Every parking facility has unique requirements. We offer custom solutions tailored to your specific needs.",
            },
          ].map((service, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg"
              variants={itemVariants}
            >
              {service.icon}
              <h3 className="text-2xl font-bold mb-4">{service.title}</h3>
              <p className="text-lg text-gray-600">{service.description}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div className="max-w-4xl mx-auto mt-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-lg md:text-xl lg:text-2xl text-gray-600">
            <li className="mb-4">Experienced and professional technicians</li>
            <li className="mb-4">
              Comprehensive maintenance and support plans
            </li>
            <li className="mb-4">Rapid response to emergency repair needs</li>
            <li className="mb-4">
              Customized solutions to meet your specific requirements
            </li>
            <li className="mb-4">
              Up-to-date with the latest technology advancements
            </li>
          </ul>
        </motion.div>

        <motion.div
          className="bg-white py-12 px-6 md:px-12 lg:px-24 mt-16 text-gray-800"
          variants={containerVariants}
        >
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Client Testimonials
            </h2>
            <div className="flex flex-col md:flex-row gap-12">
              <motion.div className="flex-1" variants={itemVariants}>
                <p className="text-lg md:text-xl lg:text-2xl italic">
                  &quot;PTS has been an invaluable partner in our journey. Their
                  expertise and dedication have transformed our operations,
                  allowing us to deliver superior service to our clients.&quot;
                  <br />
                  <span className="font-bold">- Scheidt-Bachmann</span>
                </p>
              </motion.div>
              <motion.div className="flex-1" variants={itemVariants}>
                <Image
                  src="https://source.unsplash.com/random/400x400"
                  alt="Client Image"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
            </div>
          </div>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto mt-16 text-center"
          variants={itemVariants}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Contact us today to learn more about our services and how we can
            help you achieve your parking system goals.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
