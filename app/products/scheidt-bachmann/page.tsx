"use client";

import { title } from "@/components/primitives";
import Footer from "@/components/footer";
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
  hidden: { opacity: 0, y: 20 },
  visible: { opacity: 1, y: 0 },
};

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex-grow">
        <div className="py-16 px-6 md:px-12 lg:px-24 w-full text-white">
          <motion.h1
            className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            Client Success Story: Scheidt-Bachmann
          </motion.h1>
          <motion.p
            className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto mb-8"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
          >
            Discover how Scheidt-Bachmann revolutionized their parking solutions
            with the help of PTS.
          </motion.p>
        </div>

        <motion.div
          className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800"
          initial="hidden"
          animate="visible"
          variants={container}
        >
          <div className="max-w-4xl mx-auto">
            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              variants={item}
            >
              Background
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-6"
              variants={item}
            >
              Scheidt-Bachmann, a leading provider of innovative parking
              solutions, faced challenges in managing and maintaining their
              diverse parking systems. They needed a reliable partner to enhance
              their operational efficiency and customer satisfaction.
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              variants={item}
            >
              The Challenge
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-6"
              variants={item}
            >
              With an extensive range of parking equipment and a growing number
              of installations, Scheidt-Bachmann required a partner capable of
              servicing various systems, ensuring minimal downtime, and
              providing exceptional support.
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              variants={item}
            >
              Our Solution
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-6"
              variants={item}
            >
              PTS stepped in with a comprehensive service plan tailored to
              Scheidt-Bachmann&apos;s needs. Our team of expert technicians and
              engineers provided round-the-clock support, regular maintenance,
              and rapid response to any issues, ensuring seamless operations.
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              variants={item}
            >
              The Results
            </motion.h2>
            <motion.p
              className="text-lg md:text-xl lg:text-2xl mb-6"
              variants={item}
            >
              Thanks to PTS&apos;s dedicated service, Scheidt-Bachmann
              experienced a significant reduction in system downtime, enhanced
              customer satisfaction, and improved operational efficiency. Our
              partnership has enabled them to focus on their core business while
              we handle their parking solutions.
            </motion.p>

            <motion.h2
              className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6"
              variants={item}
            >
              Client Testimonial
            </motion.h2>
            <motion.blockquote
              className="text-lg md:text-xl lg:text-2xl italic border-l-4 border-primary pl-4"
              variants={item}
            >
              &quot;PTS has been an invaluable partner in our journey. Their
              expertise and dedication have transformed our operations, allowing
              us to deliver superior service to our clients. We couldn&apos;t
              have asked for a better partner.&quot; - Scheidt-Bachmann
            </motion.blockquote>
          </div>
        </motion.div>
      </div>
    </div>
  );
}
