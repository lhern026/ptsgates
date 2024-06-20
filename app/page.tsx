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
import HorizontalScrollCarousel from "../components/HorizontalScrollCarousel";

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
    "https://i.imgur.com/0epHULV.jpeg",
    "https://i.imgur.com/XULqRUX.jpeg",
    "https://i.imgur.com/m7sAthF.jpeg",
    "https://i.imgur.com/PA7Jl6K.jpeg",
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
    <div className="min-h-screen flex flex-col w-full ">
      <main className="flex-grow w-full">
        {/* Hero Section */}
        <section className="relative h-screen text-white w-full">
          <Slider {...sliderSettings}>
            {imageUrls.map((image, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-center h-screen bg-cover bg-center"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="bg-gradient-to-r from-black/70 to-transparent p-8 rounded-lg text-center max-w-2xl mx-auto">
                    <motion.h1
                      className="text-4xl md:text-6xl font-bold mb-4"
                      initial={{ opacity: 0, y: -50 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.6 }}
                    >
                      Parking Technical Services
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
                        className:
                          "px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-700 transition duration-300",
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
              Why Choose Parking Technical Services?
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <FaCheckCircle className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Professionalism & Reliability
                </h3>
                <p className="text-gray-600">
                  With over thirty years of experience, our team is known for
                  its professionalism, reliability, and quality of services. We
                  address and resolve parking revenue control system issues, no
                  matter how complex.
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
                  Our advanced security features prevent unauthorized access and
                  ensure the safety of parked vehicles, making us a reliable
                  choice for all your parking system needs.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <FaClock className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Cost-Effective Solutions
                </h3>
                <p className="text-gray-600">
                  We provide excellent service at the most affordable prices,
                  with a quick response to clients' requests and versatility,
                  servicing most types of parking revenue control systems.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>
        {/* How It Works Section */}
        <section className="py-16 bg-gray-100 bg-cover bg-center">
          <motion.div
            className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center"
            initial="hidden"
            animate="visible"
            variants={containerVariants}
          >
            <motion.h2
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              variants={itemVariants}
            >
              How It Works
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <motion.div
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <Image
                  src="https://i.imgur.com/JW8eKw2.jpeg"
                  alt="Parking Technical Services"
                  width={403}
                  height={303}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Service & Installation
                </h3>
                <p className="text-gray-700">
                  From electro-mechanical to sophisticated computerized access
                  control and parking equipment, we provide service,
                  installation, and tech support in a manner unequaled by other
                  companies in the parking industry.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <Image
                  src="https://i.imgur.com/uKEyZSe.jpeg"
                  alt="Our Goal"
                  width={404}
                  height={304}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Our Goal
                </h3>
                <p className="text-gray-700">
                  We aim to provide excellent service at the most affordable
                  prices, with quick responses to client requests and
                  versatility in servicing most types of parking equipment to
                  prevent revenue loss.
                </p>
              </motion.div>
              <motion.div
                className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                variants={itemVariants}
              >
                <Image
                  src="https://i.imgur.com/Zw3NNCa.jpeg"
                  alt="Our Expertise"
                  width={405}
                  height={305}
                  className="w-full h-48 object-cover mb-4 rounded-lg"
                />
                <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                  Our Expertise
                </h3>
                <p className="text-gray-700">
                  Our highly qualified workforce consists of technicians and
                  engineers ready to address and resolve most parking issues in
                  a timely manner, no matter how complex it may be.
                </p>
              </motion.div>
            </div>
          </motion.div>
        </section>

        {/* Testimonials Section */}

        {/* Call-to-Action Section */}
        <section
          className="py-16 bg-primary text-white bg-cover bg-center"
          style={{
            backgroundImage: "url('https://i.imgur.com/B4cShUu.jpeg')",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-black">
              Ready to Upgrade Your Parking and Access Control System?
            </h2>
            <p className="text-lg md:text-xl mb-6 text-black">
              Contact us today to learn more about our advanced parking revenue
              control solutions.
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
