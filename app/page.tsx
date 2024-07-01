"use client";

import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { FaCheckCircle, FaLock, FaClock } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

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

const features = [
  {
    icon: <FaCheckCircle className="text-4xl text-blue-500 mb-4 mx-auto" />,
    title: "Professionalism & Reliability",
    description:
      "With over thirty years of experience, our team is known for its professionalism, reliability, and quality of services. We address and resolve parking revenue control system issues, no matter how complex.",
  },
  {
    icon: <FaLock className="text-4xl text-blue-500 mb-4 mx-auto" />,
    title: "Enhanced Security",
    description:
      "Our advanced security features prevent unauthorized access and ensure the safety of parked vehicles, making us a reliable choice for all your parking system needs.",
  },
  {
    icon: <FaClock className="text-4xl text-blue-500 mb-4 mx-auto" />,
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

const Home = () => {
  const imageUrls = [
    "https://i.imgur.com/aTB62po.jpeg",
    "https://i.imgur.com/j3Obu3L.jpeg",
    "https://i.imgur.com/w1hU99Y.jpeg",
    "https://i.imgur.com/kxqa6u1.jpeg",
    "https://i.imgur.com/YmeLknf.jpeg",
    "https://i.imgur.com/9b2dKhr.jpeg",
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
    <div
      className="flex flex-col"
      style={{
        fontFamily:
          'Inter var, ui-sans-serif, system-ui, -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, "Noto Sans", sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji"',
      }}
    >
      <main className="w-full">
        {/* Hero Section */}
        <section className="relative h-screen text-white w-full">
          <Slider {...sliderSettings}>
            {imageUrls.map((image, index) => (
              <div key={index}>
                <div
                  className="flex items-center justify-center h-screen bg-cover bg-center relative"
                  style={{ backgroundImage: `url(${image})` }}
                >
                  <div className="absolute inset-0 opacity-50"></div>
                  <div className="relative z-10 p-8 rounded-lg text-center max-w-2xl mx-auto">
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
                      Innovative solutions for Modern parking needs.
                    </motion.p>
                    <Link href="/contact-2" passHref>
                      <motion.span
                        className="px-6 py-3 text-lg font-semibold bg-blue-500 hover:bg-blue-700 transition duration-300 rounded-full shadow-lg text-white cursor-pointer"
                        initial={{ scale: 1 }}
                        whileHover={{ scale: 1.1 }}
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
              {features.map((feature, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                >
                  {feature.icon}
                  <h3 className="text-2xl font-semibold mb-2">
                    {feature.title}
                  </h3>
                  <p className="text-gray-600">{feature.description}</p>
                </motion.div>
              ))}
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
              className="text-3xl md:text-4xl font-bold mb-6 text-gray-800"
              variants={itemVariants}
            >
              How It Works
            </motion.h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {howItWorksItems.map((item, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-white rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300"
                  variants={itemVariants}
                >
                  <Image
                    src={item.imageUrl}
                    alt={item.alt}
                    width={403}
                    height={303}
                    className="w-full h-48 object-cover mb-4 rounded-lg"
                  />
                  <h3 className="text-2xl font-semibold mb-2 text-gray-900">
                    {item.title}
                  </h3>
                  <p className="text-gray-700">{item.description}</p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </section>

        {/* Call-to-Action Section */}
        <section
          className="py-16 bg-cover bg-center text-white"
          style={{
            backgroundImage: "url('https://i.imgur.com/B4cShUu.jpeg')",
          }}
        >
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center bg-black bg-opacity-50 rounded-lg py-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 text-white">
              Ready to Upgrade Your Parking and Access Control System?
            </h2>
            <p className="text-lg md:text-xl mb-6 text-white">
              Contact us today to learn more about our advanced parking revenue
              control solutions.
            </p>
            <Link href="/contact-2" passHref>
              <motion.span
                className="px-6 py-3 text-lg font-semibold bg-white text-primary rounded-full shadow-lg transition duration-300 cursor-pointer"
                initial={{ scale: 1 }}
                whileHover={{ scale: 1.1 }}
              >
                Contact Us
              </motion.span>
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Home;
