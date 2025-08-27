"use client";

import React, { useState, useEffect, Fragment } from "react";
import Link from "next/link";
import { useForm, ValidationError } from "@formspree/react";
import { motion } from "framer-motion";
import ReCAPTCHA from "react-google-recaptcha";
import { Dialog, Transition } from "@headlessui/react";
import {
  MapPinIcon,
  PhoneIcon,
  EnvelopeIcon, // Example, can be added to card
  CheckCircleIcon,
} from "@heroicons/react/24/outline"; // Using outline icons

// Framer Motion Variants
const pageContainerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      duration: 0.5,
      staggerChildren: 0.2, // Stagger children of the main container
      when: "beforeChildren",
    },
  },
};

const cardItemVariants = {
  hidden: { opacity: 0, y: 20, scale: 0.95 },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

const formItemVariants = {
  hidden: { opacity: 0, y: 15 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4, ease: "easeOut" } },
};

// ReCAPTCHA Site Key - Prioritize environment variable
const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || // Use your environment variable name
  "6LexwP0pAAAAAPBAgK2GNn_XBW-_WTsJ9f6yrlva"; // Fallback if ENV var not set (not recommended for production)

function ContactForm() {
  const [formState, handleSubmitToFormspree] = useForm("mldreblg"); // Your Formspree form ID
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [isSuccessModalOpen, setIsSuccessModalOpen] = useState(false);

  useEffect(() => {
    if (formState.succeeded) {
      setIsSuccessModalOpen(true);
      setRecaptchaToken(null); // Reset ReCAPTCHA token for potential future submissions
      // Optionally reset ReCAPTCHA widget itself if lib supports it: grecaptcha.reset();
    }
  }, [formState.succeeded]);

  const handleRecaptchaChange = (token: string | null) => {
    setRecaptchaToken(token);
  };

  const closeSuccessModal = () => {
    setIsSuccessModalOpen(false);
    // You might want to reset the form if the user could submit again without navigating
    // For example, using formspree's reset method if available: formState.reset?.()
    // Or simply rely on navigation to clear state.
  };

  const handleFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (!recaptchaToken) {
      alert("Please complete the reCAPTCHA verification."); // Consider a less obtrusive error display
      return;
    }
    // You can pass the recaptcha token to formspree if it supports it
    // (check Formspree docs for how to integrate reCAPTCHA with server-side validation)
    // For client-side only (less secure), Formspree might not use this token directly.
    // The primary purpose here is UI-level spam prevention before hitting Formspree.
    await handleSubmitToFormspree(event);
  };

  const ContactInfoCard = () => (
    <motion.div
      className="w-full max-w-lg bg-white p-8 sm:p-10 rounded-xl shadow-2xl" // Enhanced shadow and padding
      variants={cardItemVariants} // Use item variant for the card itself
    >
      <motion.h2
        className="text-2xl sm:text-3xl font-bold mb-8 text-slate-800 text-center sm:text-left"
        variants={formItemVariants} // Animate heading
      >
        Contact Information
      </motion.h2>

      <motion.div
        className="space-y-6 text-slate-700"
        variants={formItemVariants}
      >
        <div className="flex items-start space-x-4">
          <MapPinIcon className="h-7 w-7 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              Address
            </h3>
            <p className="text-slate-600">16226 Suttles Drive</p>
            <p className="text-slate-600">Riverside, CA 92504</p>
          </div>
        </div>

        <div className="flex items-start space-x-4">
          <PhoneIcon className="h-7 w-7 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-1">
              Phone Numbers
            </h3>
            <p className="text-slate-600">
              Toll Free:{" "}
              <a
                href="tel:888-282-4506"
                className="hover:text-blue-600 transition-colors"
              >
                888-282-4506
              </a>
            </p>
            <p className="text-slate-600">
              Main Office:{" "}
              <a
                href="tel:951-840-4324"
                className="hover:text-blue-600 transition-colors"
              >
                (951) 840-4324
              </a>
            </p>
          </div>
        </div>
        {/* Optional Email Section
         <div className="flex items-start space-x-4">
          <EnvelopeIcon className="h-7 w-7 text-blue-600 mt-0.5 shrink-0" />
          <div>
            <h3 className="text-lg font-semibold text-slate-800 mb-1">Email</h3>
            <p className="text-slate-600">
                <a href="mailto:info@yourdomain.com" className="hover:text-blue-600 transition-colors">
                info@yourdomain.com
                </a>
            </p>
          </div>
        </div> */}
      </motion.div>

      <motion.div
        variants={formItemVariants}
        className="mt-10 text-center sm:text-left"
      >
        <Link href="/">
          <button className="w-full sm:w-auto px-8 py-3 bg-blue-600 text-white font-semibold rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300">
            Back to Home
          </button>
        </Link>
      </motion.div>
    </motion.div>
  );

  // Success Modal
  if (formState.succeeded) {
    // Keep rendering modal based on formState, control with isSuccessModalOpen
    return (
      <Transition appear show={isSuccessModalOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-50 overflow-y-auto" // Higher z-index for modal
          onClose={closeSuccessModal}
        >
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/50" />{" "}
              {/* Darker overlay */}
            </Transition.Child>

            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              ​ {/* Vertical centering trick */}
            </span>

            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 sm:p-8 my-8 overflow-hidden text-center align-middle transition-all transform bg-white shadow-2xl rounded-2xl">
                <Dialog.Title
                  as="div"
                  className="flex flex-col items-center mb-5"
                >
                  <CheckCircleIcon className="h-16 w-16 sm:h-20 sm:w-20 text-green-500 mb-4" />
                  <h2 className="text-2xl sm:text-3xl font-bold text-slate-800">
                    Thank You!
                  </h2>
                </Dialog.Title>
                <p className="text-md sm:text-lg text-slate-600 mb-8">
                  Your message has been successfully sent. We will get back to
                  you shortly.
                </p>
                <Link href="/">
                  <button
                    type="button"
                    onClick={closeSuccessModal}
                    className="w-full sm:w-auto inline-flex justify-center px-8 py-3 text-base font-semibold text-white bg-blue-600 rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-blue-500 transition-colors"
                  >
                    Return to Home
                  </button>
                </Link>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    );
  }

  // Main Contact Form and Card Layout
  return (
    <motion.div
      className="flex flex-col lg:flex-row min-h-screen w-full items-center lg:items-start justify-center bg-slate-100 py-12 px-4 sm:px-6 lg:px-8 gap-8 lg:gap-12"
      variants={pageContainerVariants}
      initial="hidden"
      animate="visible"
    >
      <ContactInfoCard />

      <motion.form
        onSubmit={handleFormSubmit}
        className="w-full max-w-lg bg-white p-8 sm:p-10 rounded-xl shadow-2xl"
        variants={cardItemVariants} // Animate the form card as an item
      >
        <motion.h2
          className="text-2xl sm:text-3xl font-bold mb-8 text-center text-slate-800"
          variants={formItemVariants} // Animate heading
        >
          Send Us a Message
        </motion.h2>

        {[
          {
            id: "name",
            label: "Full Name",
            type: "text",
            placeholder: "e.g., John Doe",
          },
          {
            id: "email",
            label: "Email Address",
            type: "email",
            placeholder: "e.g., you@example.com",
          },
          {
            id: "phone",
            label: "Phone Number",
            type: "tel",
            placeholder: "e.g., (555) 123-4567",
          },
        ].map((field) => (
          <motion.div
            className="mb-5"
            variants={formItemVariants}
            key={field.id}
          >
            <label
              htmlFor={field.id}
              className="block text-sm font-medium text-slate-700 mb-1.5"
            >
              {field.label}
            </label>
            <input
              id={field.id}
              type={field.type}
              name={field.id}
              className="w-full px-4 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-slate-400 transition-colors"
              placeholder={field.placeholder}
              required
            />
            <ValidationError
              prefix={field.label}
              field={field.id}
              errors={formState.errors}
              className="text-red-600 text-xs mt-1.5" // Slightly darker red for better contrast
            />
          </motion.div>
        ))}

        <motion.div className="mb-6" variants={formItemVariants}>
          <label
            htmlFor="message"
            className="block text-sm font-medium text-slate-700 mb-1.5"
          >
            Services Needed / Your Message
          </label>
          <textarea
            id="message"
            name="message"
            rows={5} // Increased rows for more space
            className="w-full px-4 py-2.5 border border-slate-300 rounded-lg shadow-sm focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500 placeholder-slate-400 transition-colors"
            placeholder="Briefly describe what you're looking for or any questions you have..."
            required
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={formState.errors}
            className="text-red-600 text-xs mt-1.5"
          />
        </motion.div>

        <motion.div
          className="mb-8 flex justify-center"
          variants={formItemVariants}
        >
          <ReCAPTCHA
            sitekey={RECAPTCHA_SITE_KEY} // Ensure this key is correctly configured
            onChange={handleRecaptchaChange}
            // You can add size="normal" or "compact" if needed, or theme="light" / "dark"
          />
        </motion.div>

        <motion.button
          type="submit"
          disabled={formState.submitting || !recaptchaToken}
          className="w-full py-3.5 px-4 bg-blue-600 text-white font-semibold text-lg rounded-lg shadow-md hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 focus:ring-offset-white transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed"
          variants={formItemVariants}
          whileHover={{
            scale: formState.submitting || !recaptchaToken ? 1 : 1.03,
          }}
          whileTap={{
            scale: formState.submitting || !recaptchaToken ? 1 : 0.98,
          }}
        >
          {formState.submitting ? "Sending..." : "Send Message"}
        </motion.button>
      </motion.form>
    </motion.div>
  );
}

export default ContactForm;
