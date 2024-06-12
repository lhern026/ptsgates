"use client";

import React from "react";
import VerticalAccordion from "../components/verticalAccordion";
import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Image from "next/image";
import Slider from "react-slick";
import { FaCheckCircle, FaLock, FaClock } from "react-icons/fa";
import { motion } from "framer-motion";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
};
export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const imageUrls = [
    "https://i.imgur.com/PA7Jl6K.jpeg",
    "https://i.imgur.com/XULqRUX.jpeg",
    "https://i.imgur.com/LVRajBQ_d.webp?maxwidth=760&fidelity=grand",
  ];
  const images = [
    "https://i.imgur.com/PA7Jl6K.jpeg",
    "https://i.imgur.com/XULqRUX.jpeg",
    "https://i.imgur.com/LVRajBQ_d.webp?maxwidth=760&fidelity=grand",
  ];
  const containerVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.6, staggerChildren: 0.3 },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="h-screen text-white relative">
          <Slider {...sliderSettings}>
            {imageUrls.map((image, index) => (
              <div key={index}>
                <div
                  className="bg-cover bg-center h-screen flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                >
                  <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg text-center">
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-4"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Revolutionary Parking Gates
                    </motion.h1>
                    <motion.p
                      className="text-lg md:text-xl mb-6"
                      initial={{ opacity: 0, y: 50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Innovative solutions for modern parking needs.
                    </motion.p>
                    <Link
                      href="/contact"
                      className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                        className: "px-6 py-3 text-lg font-semibold",
                      })}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              Why Choose Our Parking Gates?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <FaCheckCircle className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Reliable Performance
                </h3>
                <p className="text-gray-600">
                  Our parking gates are designed for durability and consistent
                  performance, ensuring smooth operation at all times.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <FaLock className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Enhanced Security
                </h3>
                <p className="text-gray-600">
                  Advanced security features to prevent unauthorized access and
                  ensure the safety of parked vehicles.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <FaClock className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">Cost-Effective</h3>
                <p className="text-gray-600">
                  Optimize your parking management and reduce costs with our
                  efficient and scalable solutions.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-100">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6"
              variants={itemVariants}
            >
              How It Works
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Step 1: Entry"
                  width={403}
                  height={303}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Step 1: Entry</h3>
                <p className="text-gray-600">
                  Vehicles approach the gate and input their details to gain
                  access.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Step 2: Processing"
                  width={404}
                  height={304}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">
                  Step 2: Processing
                </h3>
                <p className="text-gray-600">
                  Our system verifies the details and processes the entry
                  request.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Step 3: Park"
                  width={405}
                  height={305}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Step 3: Park</h3>
                <p className="text-gray-600">
                  The gate opens, allowing the vehicle to enter and park
                  securely.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
        {/* Testimonials Section */}
        <VerticalAccordion />

        {/* Call-to-Action Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Parking?
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Contact us today to learn more about our advanced parking gate
              solutions.
            </p>
            <Link
              href="/contact"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                className:
                  "px-6 py-3 text-lg font-semibold bg-white text-primary",
              })}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
