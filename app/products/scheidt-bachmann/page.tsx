"use client";

import { title } from "@/components/primitives";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TextParallaxContent } from "../../../components/TextParallalContext";

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

export default function AboutPage() {
  const controlsHardware = useAnimation();
  const [refHardware, inViewHardware] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  const controlsSoftware = useAnimation();
  const [refSoftware, inViewSoftware] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (inViewHardware) {
      controlsHardware.start("visible");
    }
  }, [controlsHardware, inViewHardware]);

  useEffect(() => {
    if (inViewSoftware) {
      controlsSoftware.start("visible");
    }
  }, [controlsSoftware, inViewSoftware]);

  return (
    <div className="min-h-screen flex flex-col w-full bg-gradient-to-r">
      <motion.div
        className="flex flex-col items-center py-16 px-6 md:px-12 lg:px-24 w-full bg-gradient-to-r from-gray-100 via-blue-100 to--500 text-white text-shadow-lg animate-gradient"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.6 }}
      >
        <Image
          src={"https://i.imgur.com/XDEdW4c.jpeg"}
          alt={"Keri Systems Logo"}
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
          Scheidt & Bachmann
        </motion.h1>
        <motion.p
          className="text-xl md:text-2xl lg:text-3xl text-center text-black max-w-3xl mx-auto mt-4"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          Parking Technical Services proudly serves as a Channel Partner of
          Scheidt & Bachmann, renowned for their extensive expertise in service
          and cutting-edge parking equipment. This strategic alliance allows us
          to integrate their state-of-the-art technologies and innovative
          solutions into our service offerings throughout all of Southern
          California. By combining Scheidt & Bachmann's industry-leading
          products with our commitment to exceptional service, we ensure that
          our clients receive reliable, efficient, and forward-thinking parking
          systems tailored to meet their needs and enhance overall operational
          efficiency and Parking Revenue.
        </motion.p>
      </motion.div>
      <div className="flex-grow">
        <TextParallaxContent
          imgUrl="https://i.imgur.com/6wPwRJN.jpeg"
          subheading=""
          heading="Hardware"
        />
        <motion.div
          ref={refHardware}
          className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800 rounded-t-lg min-h-screen flex flex-col w-full bg-gray-50 shadow-lg"
          initial="hidden"
          animate={controlsHardware}
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
                  image: "https://i.imgur.com/nyS7Nmx.jpeg",
                  alt: "Parking Pay Station",
                },
                {
                  title: "Control Devices",
                  description:
                    "The entervo.entry for entry lanes and entervo.exit for exit and transit lanes are characterized by their broad range of applications, simple operation, reliability, and maintenance-friendly technology.",
                  image: "https://i.imgur.com/5Vu0XgO.jpeg",
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
        <TextParallaxContent
          imgUrl="https://i.imgur.com/dgHPO4S.jpeg"
          subheading=""
          heading="Software"
        />
        <motion.div
          ref={refSoftware}
          className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800 rounded-t-lg min-h-screen flex flex-col w-full bg-gray-50 shadow-lg"
          initial="hidden"
          animate={controlsSoftware}
          variants={container}
        >
          <div className="max-w-6xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6 text-center text-blue-600">
              Software Solutions
            </h2>
            <motion.ul
              className="list-none pl-0 text-lg md:text-xl lg:text-2xl text-gray-700 space-y-6 leading-relaxed"
              initial="hidden"
              animate="visible"
              variants={container}
            >
              {[
                {
                  title: "Product Integration",
                  description:
                    "Seamlessly integrate various parking management products for a unified solution.",
                },
                {
                  title: "Cloud Solutions",
                  description:
                    "Utilize cloud technology for efficient and scalable parking management.",
                },
                {
                  title: "Mobile Access",
                  description:
                    "Enable users to access and manage parking facilities through mobile devices.",
                },
                {
                  title: "User Management",
                  description:
                    "Efficiently manage user profiles, access rights, and permissions.",
                },
                {
                  title: "Analytics and Reporting",
                  description:
                    "Gain insights into parking usage and performance with detailed analytics and reports.",
                },
                {
                  title: "Technical Support",
                  description:
                    "Receive dedicated technical support for seamless parking operations.",
                },
              ].map((item, index) => (
                <motion.li
                  key={index}
                  className="flex flex-col items-start bg-gray-100 p-4 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                  variants={listItem}
                >
                  <span className="text-2xl text-blue-500 mb-2">✓</span>
                  <h3 className="font-semibold text-xl mb-1">{item.title}</h3>
                  <p>{item.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
