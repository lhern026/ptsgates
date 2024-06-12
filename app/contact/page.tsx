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

  if (state.succeeded) {
    return (
      <motion.div
        className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md text-center"
        initial={{ opacity: 0, scale: 0.8 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <h2 className="text-2xl font-bold mb-4 text-gray-700">Thank You!</h2>
        <p className="text-lg text-gray-600 mb-6">
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
      className="flex flex-col items-center justify-center min-h-screen bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16 px-6"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <motion.form
        onSubmit={handleSubmit}
        className="max-w-md mx-auto p-8 bg-white rounded-lg shadow-md"
        variants={containerVariants}
      >
        <motion.h2
          className="text-2xl font-bold mb-6 text-center text-gray-700"
          variants={itemVariants}
        >
          Contact Us
        </motion.h2>

        <motion.div className="mb-4" variants={itemVariants}>
          <label htmlFor="name" className="block text-gray-600 mb-2">
            Name
          </label>
          <input
            id="name"
            type="text"
            name="name"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
          <label htmlFor="email" className="block text-gray-600 mb-2">
            Email Address
          </label>
          <input
            id="email"
            type="email"
            name="email"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
          <label htmlFor="phone" className="block text-gray-600 mb-2">
            Phone Number
          </label>
          <input
            id="phone"
            type="tel"
            name="phone"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
          <label htmlFor="message" className="block text-gray-600 mb-2">
            Message
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-primary"
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
          Submitsss
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default ContactForm;
