"use client";

import { title } from "@/components/primitives";
import { motion, useAnimation } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { useInView } from "react-intersection-observer";
import { useEffect } from "react";
import { TextParallaxContent } from "../../../components/TextParallalContext";
import { FaCheckCircle } from "react-icons/fa";

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
        <Link
          href="https://www.scheidt-bachmann-usa.com/en/"
          target="_blank"
          className="flex justify-center w-full"
        >
          <Image
            src={"https://i.imgur.com/XDEdW4c.jpeg"}
            alt={"Keri Systems Logo"}
            width={200}
            height={200}
            className="w-1/3 h-1/3 rounded-lg"
          />
        </Link>
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
            <motion.div className="space-y-8" variants={container}>
              {[
                {
                  title: "Barrier",
                  description:
                    "Scheidt & Bachmann prioritizes reliable gate barrier systems to prevent operational failures and liability issues. They employ brushless DC motors for low-maintenance, energy-efficient operation in their entervo.barrier systems. The gate arm, constructed from lightweight aluminum profiles, withstands wind loads up to six meters long and detaches on contact with a vehicle to prevent damage and minimize inconvenience to drivers. Advanced sensor technology ensures timely stopping to avoid vehicle roof impacts, with cushioning to protect pedestrians. Laser scanners control longer barrier arms, optionally equipped with license plate recognition cameras for enhanced functionality.",
                  image: "https://i.imgur.com/6cu5yEj.jpg",
                  alt: "Parking Barrier",
                },
                {
                  title: "Pay Station",
                  description:
                    "Scheidt & Bachmann's automated pay stations serve as the pivotal interface between parking management and customers, defining the user experience with their modern design and user-centric functionality. These stations support diverse payment options including conventional tickets, 2D barcodes, RFID, and touchscreen input for license plates. They accommodate cash and card payments, including contactless and chip transactions, alongside mobile payments for convenience and reduced cash handling. Engineered for robust security against vandalism and theft, they feature secure cassettes for cash transport and efficient accounting systems. Additionally, their 'Green Efficiency' technology reduces power consumption by up to 70%, promoting both appeal and environmental sustainability.",
                  image: "https://i.imgur.com/nyS7Nmx.jpeg",
                  alt: "Parking Pay Station",
                },
                {
                  title: "Control Devices",
                  description:
                    "The entervo.entry and entervo.exit control devices by Scheidt & Bachmann are renowned for their versatility, user-friendly operation, reliability, and ease of maintenance.Key functionalities include:-Issuance of short-term parking tickets (barcode or magstripe) at entry points.-Verification of Scheidt & Bachmann system cards and third-party cards at both entry and exit points.-Control of barrier operations to manage vehicle access.-Capability to process various media types such as QR codes, UHF tags, RFID, and payment cards, reflecting evolving preferences alongside traditional paper tickets.",
                  image: "https://i.imgur.com/5Vu0XgO.jpeg",
                  alt: "Control Devices",
                },
                {
                  title: "Camera",
                  description:
                    "Scheidt & Bachmann revolutionizes parking convenience with smart solutions that eliminate tickets, leveraging advanced camera technology and artificial intelligence. Our systems employ deep learning for precise number plate recognition, allowing seamless entry and exit without physical tickets. Customers can pay effortlessly via cash, credit/debit card, or app, using their number plate for verification.Upon entry, state-of-the-art cameras capture the license plate, acting as a virtual ticket. Payment can be made at a pay station or via smartphone. At exit, LPR cameras recognize the plate, automatically opening the barrier once the fee is paid.",
                  image: "https://i.imgur.com/4Y4MP1L.jpeg",
                  alt: "Camera",
                },
              ].map((product, index) => (
                <motion.div
                  key={index}
                  className="flex flex-col lg:flex-row items-center lg:items-start bg-gray-100 rounded-lg shadow-md transform transition duration-300 hover:scale-105 hover:rotate-1 hover:shadow-2xl"
                  variants={item}
                >
                  <Image
                    src={product.image}
                    alt={product.alt}
                    width={600}
                    height={400}
                    quality={100}
                    className="w-full lg:w-1/3 h-80 object-cover rounded-lg lg:rounded-none lg:rounded-l-lg"
                  />
                  <div className="p-6 flex flex-col justify-center w-full lg:w-2/3">
                    <h3 className="text-2xl font-semibold mb-2 mt-4 lg:mt-0">
                      {product.title}
                    </h3>
                    <p className="text-gray-600">{product.description}</p>
                  </div>
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
              className="grid grid-cols-1 md:grid-cols-2 gap-8 text-lg md:text-xl lg:text-2xl text-gray-700"
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
                  className="flex flex-col items-start bg-gray-100 p-6 rounded-lg shadow-lg transform transition duration-300 hover:scale-105 hover:shadow-xl"
                  variants={listItem}
                >
                  <div className="flex items-center mb-4">
                    <FaCheckCircle className="text-blue-500 mr-2" />
                    <h3 className="font-semibold text-xl">{item.title}</h3>
                  </div>
                  <p>{item.description}</p>
                </motion.li>
              ))}
            </motion.ul>
          </div>
        </motion.div>
        <div className="flex justify-center py-12">
          <Link
            href="https://www.scheidt-bachmann-usa.com/en/"
            passHref
            target="_blank"
          >
            <motion.div
              whileHover={{
                scale: 1.05,
                boxShadow: "0px 10px 30px rgba(0, 0, 0, 0.3)",
                backgroundColor: "#1E40AF",
                transition: { duration: 0.3, yoyo: Infinity },
              }}
              className="bg-blue-600 text-white px-6 py-3 rounded-lg shadow-lg cursor-pointer"
            >
              Check out Scheidt & Bachmann
            </motion.div>
          </Link>
        </div>
      </div>
    </div>
  );
}
