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

const DocsPage = () => {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gradient-to-r from-blue-400 via-blue-500 to-red-500">
      <div className="flex-grow">
        <div className="py-16 px-6 md:px-12 lg:px-24 w-full text-white text-shadow-lg">
          <motion.h1
            className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Products: Scheidt-Bachmann
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto mb-8 text-shadow-md"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover how Scheidt-Bachmann revolutionized their parking solutions
            with the help of PTS.
          </motion.p>
        </div>

        <motion.div
          className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800 rounded-t-lg shadow-lg"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="max-w-6xl mx-auto">
            <motion.div
              className="grid grid-cols-1 md:grid-cols-2 gap-8"
              variants={container}
            >
              {[
                {
                  title: "Barrier",
                  description:
                    "The entervo.barrier gate is used for the access control of car parks.",
                  image: "https://i.imgur.com/uZ2x2rY.jpeg",
                  alt: "Parking Barrier",
                },
                {
                  title: "Pay Station",
                  description:
                    "Pay stations are the most direct point of contact between parking management and the end customer. They give the entire parking system a face.",
                  image: "https://i.imgur.com/MLyY3ap.jpeg",
                  alt: "Parking Pay Station",
                },
                {
                  title: "Control Devices",
                  description:
                    "The entervo.entry for entry lanes and entervo.exit for exit and transit lanes are characterized by their broad range of applications, simple operation, reliability, and maintenance-friendly technology.",
                  image: "https://i.imgur.com/eSWxCqd.jpeg",
                  alt: "Control Devices",
                },
                {
                  title: "Camera",
                  description:
                    "Advanced camera systems to enhance security and monitoring in parking areas.",
                  image: "https://i.imgur.com/4Y4MP1L.jpeg",
                  alt: "Camera",
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  className="p-6 bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
                  variants={item}
                >
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={600}
                    height={100}
                    quality={100}
                    className="w-full h-80 object-cover rounded-lg"
                  />
                  <h3 className="text-2xl font-semibold mb-2 mt-4">
                    {product.title}
                  </h3>
                  <p className="text-gray-600">{product.description}</p>
                </motion.div>
              ))}
            </motion.div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default DocsPage;
