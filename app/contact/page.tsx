"use client";

import React from "react";
import Link from "next/link";
import { button as buttonStyles } from "@nextui-org/theme";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";

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

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkrrkro");

  const Card = () => (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-md"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.h2
        className="text-2xl font-extrabold mb-4 text-gray-800"
        variants={itemVariants}
      >
        Contact Information
      </motion.h2>
      <motion.p
        className="text-lg text-gray-700 mb-6 font-medium"
        variants={itemVariants}
      >
        info@parkingtechnicalservices.com
      </motion.p>
      <motion.p
        className="text-lg text-gray-700 mb-6 font-medium"
        variants={itemVariants}
      >
        123 Parking Lane, Suite 100, Parkville, USA
      </motion.p>
      <motion.p
        className="text-lg text-gray-700 mb-6 font-medium"
        variants={itemVariants}
      >
        Phone: (555) 123-4567
      </motion.p>
      <Link
        href="/"
        className={buttonStyles({
          color: "primary",
          radius: "full",
          variant: "shadow",
          className: "px-6 py-3 text-lg font-semibold",
        })}
      >
        Go to Home
      </Link>
    </motion.div>
  );

  if (state.succeeded) {
    return (
      <motion.div
        className="bg-white p-8 rounded-lg shadow-md text-center max-w-full"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-extrabold mb-4 text-gray-800">
          Thank You!
        </h2>
        <p className="text-lg text-gray-700 mb-6 font-medium">
          Your message has been successfully sent. We will get back to you
          shortly.
        </p>
        <Link
          href="/"
          className={buttonStyles({
            color: "primary",
            radius: "full",
            variant: "shadow",
            className: "px-6 py-3 text-lg font-semibold",
          })}
        >
          Go to Home
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.div
      className="flex flex-col lg:flex-row max-w-full justify-center items-center lg:items-start bg-gradient-to-r from-blue-400 via-blue-500 to-red-100 py-16 px-6 gap-8"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <Card />
      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg p-9 bg-white rounded-lg shadow-lg"
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl font-extrabold mb-6 text-center text-gray-800"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>

        <motion.div className="mb-4" variants={itemVariants}>
          <label
            htmlFor="name"
            className="block text-gray-700 mb-2 font-medium"
          >
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your name"
            required
          />
          <ValidationError
            prefix="Name"
            field="name"
            errors={state.errors}
            className="text-red-500 text-sm mt-2"
          />
        </motion.div>

        <motion.div className="mb-4" variants={itemVariants}>
          <label
            htmlFor="email"
            className="block text-gray-700 mb-2 font-medium"
          >
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your email"
            required
          />
          <ValidationError
            prefix="Email"
            field="email"
            errors={state.errors}
            className="text-red-500 text-sm mt-2"
          />
        </motion.div>

        <motion.div className="mb-4" variants={itemVariants}>
          <label
            htmlFor="phone"
            className="block text-gray-700 mb-2 font-medium"
          >
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your phone number"
            required
          />
          <ValidationError
            prefix="Phone"
            field="phone"
            errors={state.errors}
            className="text-red-500 text-sm mt-2"
          />
        </motion.div>

        <motion.div className="mb-6" variants={itemVariants}>
          <label
            htmlFor="message"
            className="block text-gray-700 mb-2 font-medium"
          >
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
            placeholder="Your message"
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
            className="text-red-500 text-sm mt-2"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={state.submitting}
          className="w-full py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
          variants={itemVariants}
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default ContactForm;
