"use client";
import { title } from "@/components/primitives";
import { motion } from "framer-motion";
import Image from "next/image";

const sectionVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
};

const imageVariants = {
  hidden: { opacity: 0, scale: 0.9 },
  visible: { opacity: 1, scale: 1, transition: { duration: 0.8 } },
};

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-500 to-red-500 opacity-75"></div>
        <div className="relative py-24 px-6 md:px-12 lg:px-24 w-full text-white text-center">
          <motion.h1
            className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4`}
            initial={{ opacity: 0, y: -50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            About Us
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            Learn more about Parking Technical Services and our commitment to
            excellence in the parking industry.
          </motion.p>
        </div>
      </div>

      <div className="bg-white py-16 px-6 md:px-12 lg:px-24 w-full">
        <div className="max-w-6xl mx-auto text-gray-700 leading-loose">
          <motion.section
            className="bg-gray-100 p-8 rounded-lg shadow-lg"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={sectionVariants}
          >
            <div className="flex flex-col lg:flex-row items-center gap-8">
              <motion.div
                className="w-full lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={imageVariants}
              >
                <Image
                  src="https://i.imgur.com/u1fiTYz.png"
                  alt="Parking Technical Services"
                  width={800}
                  height={600}
                  className="rounded-lg shadow-lg"
                />
              </motion.div>
              <motion.div
                className="text-lg w-full lg:w-1/2"
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                variants={sectionVariants}
              >
                <p className="mb-4">
                  Parking Technical Services, established in 1990 and
                  headquartered in Riverside, California, has distinguished
                  itself as a premier provider of the most Modern Revenue and
                  Access Control systems with dependable installations and
                  services. Throughout its history, the company has maintained a
                  strong reputation for professionalism and customer
                  satisfaction. Under the leadership of its founder and Chairman
                  of the Board, Armando Castro, Parking Technical Services
                  remains committed to achieving its corporate objectives.
                </p>
              </motion.div>
            </div>
          </motion.section>
          <div className="mt-16 text-center">
            <p className="text-3xl font-bold mb-4">Parking Associations:</p>
            <ul className="list-disc pl-5 inline-block text-left">
              <li className="text-lg md:text-xl lg:text-2xl mb-2">
                NPA (National Parking Association)
              </li>
              <li className="text-lg md:text-xl lg:text-2xl">
                LAPA (Los Angeles Parking Association)
              </li>
            </ul>
          </div>

          <Image
            src="https://i.imgur.com/wgwkHab.jpeg"
            alt="Our Expertise"
            width={500}
            height={500}
            className="rounded-lg lg:w-1/3 lg:ml-auto"
          />
        </div>
      </div>
    </div>
  );
}
