"use client";

import { title } from "@/components/primitives";
import Image from "next/image";
import { motion } from "framer-motion";

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
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 px-6 md:px-12 lg:px-24 w-full text-white text-shadow-lg">
        <motion.h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          SecureKey
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto mb-8 text-shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Leading provider of secure key management and access control systems,
          ensuring the highest level of security and convenience.
        </motion.p>
      </div>

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
                  title: "Key Management",
                  description:
                    "Manage your keys securely and efficiently with our advanced key management systems, designed to ensure complete control over access and usage.",
                  image:
                    "https://source.unsplash.com/random/800x400?key-management",
                },
                {
                  title: "Access Control",
                  description:
                    "Our access control solutions provide comprehensive security, integrating various technologies to offer a seamless and secure experience.",
                  image:
                    "https://source.unsplash.com/random/800x400?access-control",
                },
                {
                  title: "Scalable Solutions",
                  description:
                    "Whether you need solutions for a small business or a large enterprise, our systems are designed to scale with your needs.",
                  image:
                    "https://source.unsplash.com/random/800x400?scalable-solutions",
                },
                {
                  title: "User-Friendly Interfaces",
                  description:
                    "Our systems feature intuitive interfaces, making it easy to manage security settings and monitor access in real-time.",
                  image:
                    "https://source.unsplash.com/random/800x400?user-friendly",
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
          className="max-w-6xl mx-auto mt-16 text-center"
          variants={container}
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Ready to enhance your security with SecureKey? Get in touch with us
            today to learn more about our tailored solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          >
            Contact Us
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
