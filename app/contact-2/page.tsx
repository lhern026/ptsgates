"use client";

import React, { useState } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Dialog, Transition } from "@headlessui/react";

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
  const [state, handleSubmit] = useForm("mldreblg");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isOpen, setIsOpen] = useState(false);

  const handleRecaptchaVerify = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const openModal = () => {
    setIsOpen(true);
  };

  const Card = () => (
    <motion.div
      className="bg-white p-8 rounded-lg shadow-lg text-center w-full max-w-lg flex-1"
      variants={itemVariants}
    >
      <motion.h2
        className="text-2xl font-extrabold mb-4 text-gray-800"
        variants={itemVariants}
      >
        Contact Information
      </motion.h2>

      <motion.p
        className="text-base text-gray-700 mb-2 font-medium"
        variants={itemVariants}
      >
        <span className="text-lg font-bold">Address</span>
      </motion.p>
      <motion.p
        className="text-base text-gray-700 font-medium"
        variants={itemVariants}
      >
        16226 Suttles Drive
      </motion.p>
      <motion.p
        className="text-base text-gray-700 font-medium"
        variants={itemVariants}
      >
        Riverside, CA 92504
      </motion.p>

      <motion.p
        className="text-base text-gray-700 mb-2 font-medium mt-6"
        variants={itemVariants}
      >
        <span className="text-lg font-bold">Phone Numbers</span>
      </motion.p>
      <motion.p
        className="text-base text-gray-700 font-medium"
        variants={itemVariants}
      >
        Toll Free: 888-282-4506
      </motion.p>
      <motion.p
        className="text-base text-gray-700 font-medium"
        variants={itemVariants}
      >
        Main Office: (951) 840-4324
      </motion.p>

      <Link href="/">
        <button className="mt-6 px-6 py-3 bg-blue-600 text-white rounded-full shadow-md hover:bg-blue-700 transition duration-300">
          Go to Home
        </button>
      </Link>
    </motion.div>
  );

  if (state.succeeded) {
    return (
      <Transition appear show={isOpen} as={React.Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
        >
          <div className="min-h-screen px-4 text-center">
            <div className="fixed inset-0 bg-black opacity-30" />

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>
            <Transition.Child
              as={React.Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                <Dialog.Title
                  as="h2"
                  className="text-2xl font-extrabold mb-4 text-gray-800"
                >
                  Thank You!
                </Dialog.Title>
                <div className="mt-2">
                  <p className="text-lg text-gray-700 mb-6 font-medium">
                    Your message has been successfully sent. We will get back to
                    you shortly.
                  </p>
                </div>

                <div className="mt-4">
                  <Link href="/">
                    <button
                      type="button"
                      className="inline-flex justify-center px-4 py-2 text-sm font-medium text-blue-900 bg-blue-100 border border-transparent rounded-md hover:bg-blue-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500"
                      onClick={closeModal}
                    >
                      Go to Home
                    </button>
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
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
        onSubmit={(e) => {
          e.preventDefault();
          if (recaptchaToken) {
            handleSubmit(e);
            openModal();
          } else {
            alert("Please complete the reCAPTCHA verification");
          }
        }}
        className="w-full max-w-lg p-9 bg-white rounded-lg shadow-lg flex-1"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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
            Services Needed:
          </label>
          <textarea
            id="message"
            name="message"
            className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
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

        <ReCAPTCHA
          sitekey="6LexwP0pAAAAAPBAgK2GNn_XBW-_WTsJ9f6yrlva"
          onChange={handleRecaptchaVerify}
        />

        <motion.button
          type="submit"
          disabled={state.submitting || !recaptchaToken}
          className="w-full py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-600 mt-4"
          variants={itemVariants}
        >
          Submit
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default ContactForm;
