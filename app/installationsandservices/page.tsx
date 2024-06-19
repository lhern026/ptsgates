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
  rotate: 2,
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
          Past Installations
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto">
          Showcasing our recent installations and satisfied customers.
        </p>
      </motion.div>

      <motion.div
        className="py-12 px-6 md:px-12 lg:px-24 w-full text-gray-800"
        variants={containerVariants}
      >
        <motion.div className="max-w-4xl mx-auto mb-16" variants={itemVariants}>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Customers
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            We take pride in our work and our customers are our top priority.
            Here are some of our recent installations.
          </p>
        </motion.div>

        <motion.div
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-12"
          variants={containerVariants}
        >
          {[
            {
              image: "https://source.unsplash.com/random/400x300?parking",
              title: "Customer A",
              description:
                "We installed a state-of-the-art parking gate system for Customer A, enhancing their security and operational efficiency.",
            },
            {
              image: "https://source.unsplash.com/random/400x300?building",
              title: "Customer B",
              description:
                "For Customer B, we provided a comprehensive upgrade to their existing parking facilities, ensuring smooth and reliable access control.",
            },
            {
              image: "https://source.unsplash.com/random/400x300?city",
              title: "Customer C",
              description:
                "Customer C benefited from our custom solutions tailored to their unique parking needs, resulting in improved customer satisfaction.",
            },
            {
              image: "https://source.unsplash.com/random/400x300?technology",
              title: "Customer D",
              description:
                "We delivered cutting-edge technology and exceptional service to Customer D, ensuring their parking system is top-notch.",
            },
          ].map((installation, index) => (
            <motion.div
              key={index}
              className="bg-white p-6 rounded-lg shadow-lg transform transition duration-300"
              variants={itemVariants}
              whileHover={hoverEffect}
            >
              <Image
                src={installation.image}
                alt={installation.title}
                width={400}
                height={300}
                className="w-full h-60 object-cover rounded-lg mb-4"
              />
              <h3 className="text-2xl font-bold mb-4 text-center">
                {installation.title}
              </h3>
              <p className="text-lg text-gray-600 text-center">
                {installation.description}
              </p>
            </motion.div>
          ))}
        </motion.div>
      </motion.div>
    </motion.div>
  );
}
