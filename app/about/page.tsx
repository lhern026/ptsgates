"use client";
import { title } from "@/components/primitives";
import {
  FaHistory,
  FaBullseye,
  FaCogs,
  FaUsers,
  FaThumbsUp,
} from "react-icons/fa";
import Image from "next/image";
import { motion } from "framer-motion";

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
          {sections.map((section, index) => (
            <Section
              key={index}
              icon={section.icon}
              title={section.title}
              imageSrc={section.imageSrc}
              altText={section.altText}
              description={section.description}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

const sections = [
  {
    icon: <FaHistory className="text-4xl text-primary mr-4" />,
    title: "History of Parking Technical Services",
    imageSrc: "https://source.unsplash.com/random/400x400?parking",
    altText: "Parking Technical Services",
    description:
      "Located in Santa Fe Springs, California, Parking Technical Services (PTS) was founded over twenty years ago, as a result of an increasing demand for qualified personnel in the booming parking industry. Today, it is a well-established company with an impressive record in terms of professionalism, reliability, and quality of services. Through the years, PTS has lived up to the goal set by its founder and current Chairman of the Board, Armando Castro.",
  },
  {
    icon: <FaBullseye className="text-4xl text-primary mr-4" />,
    title: "Our Goal",
    imageSrc: "https://source.unsplash.com/random/400x400?goal",
    altText: "Our Goal",
    description:
      "Our goal is to provide excellent service at the most affordable prices, with a quick response to clients' requests and versatility. PTS takes great pride in being one of the very few, if not the only company that services every type of parking equipment, regardless of make, model, date of manufacture, and time of installation. From Amano, Falcon Omnihost, and Keri Systems to the modern and more recent WPS parking systems, PTS installs and services them all.",
  },
  {
    icon: <FaCogs className="text-4xl text-primary mr-4" />,
    title: "Our Expertise",
    imageSrc: "https://source.unsplash.com/random/400x400?expertise",
    altText: "Our Expertise",
    description:
      "What makes PTS your 'number one option' whenever your parking facility needs either service or an upgrade, is our highly qualified workforce that consists of technicians and engineers ready to address and resolve any problem, no matter how complex it may be.",
  },
  {
    icon: <FaUsers className="text-4xl text-primary mr-4" />,
    title: "Our Services",
    imageSrc: "https://source.unsplash.com/random/400x400?services",
    altText: "Our Services",
    description:
      "From electro-mechanical to sophisticated computerized equipment, PTS provides service, installation, and tech support in a manner unequaled by other companies in the parking industry.",
  },
  {
    icon: <FaThumbsUp className="text-4xl text-primary mr-4" />,
    title: "Our Guarantee",
    imageSrc: "https://source.unsplash.com/random/400x400?guarantee",
    altText: "Our Guarantee",
    description:
      "The concept is, in essence, quite simple: You need our service, you get it! Satisfaction guaranteed!",
  },
];

interface SectionProps {
  icon: React.ReactNode;
  title: string;
  imageSrc: string;
  altText: string;
  description: string;
}

const Section: React.FC<SectionProps> = ({
  icon,
  title,
  imageSrc,
  altText,
  description,
}) => {
  return (
    <motion.section
      className="mb-16"
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true }}
      variants={sectionVariants}
    >
      <div className="flex items-center mb-6">
        {icon}
        <h2 className="text-3xl font-semibold">{title}</h2>
      </div>
      <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-lg">
        <motion.div
          className="w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={imageVariants}
        >
          <Image
            src={imageSrc}
            alt={altText}
            width={400}
            height={400}
            className="rounded-lg shadow-lg"
          />
        </motion.div>
        <motion.p
          className="text-lg w-full lg:w-1/2"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true }}
          variants={sectionVariants}
        >
          {description}
        </motion.p>
      </div>
    </motion.section>
  );
};
