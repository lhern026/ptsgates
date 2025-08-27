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
  EnvelopeIcon,
  CheckCircleIcon,
} from "@heroicons/react/24/outline";

// Motion
const container = {
  hidden: { opacity: 0, y: 24 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      when: "beforeChildren",
      staggerChildren: 0.08,
    },
  },
};
const item = {
  hidden: { opacity: 0, y: 10 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.4 } },
};

const RECAPTCHA_SITE_KEY =
  process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY ||
  "6LexwP0pAAAAAPBAgK2GNn_XBW-_WTsJ9f6yrlva";

function ContactForm() {
  const [state, handleSubmit] = useForm("meojqgzk");
  const [recaptchaToken, setRecaptchaToken] = useState<string | null>(null);
  const [open, setOpen] = useState(false);
  const [botField, setBotField] = useState(""); // honeypot

  useEffect(() => {
    if (state.succeeded) setOpen(true);
  }, [state.succeeded]);

  const onVerify = (token: string | null) => setRecaptchaToken(token);
  const closeModal = () => setOpen(false);

  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (botField) return;
    if (!recaptchaToken) return alert("Complete reCAPTCHA.");
    await handleSubmit(e);
  };

  return (
    <>
      {/* Success modal */}
      <Transition appear show={open} as={Fragment}>
        <Dialog as="div" className="fixed inset-0 z-50" onClose={closeModal}>
          <div className="min-h-screen px-4 text-center">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0 bg-black/40" />
            </Transition.Child>
            <span className="inline-block h-screen align-middle" aria-hidden>
              &#8203;
            </span>
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-200"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-150"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-8 my-8 text-left align-middle bg-white border border-neutral-200 rounded-[6px]">
                <div className="flex flex-col items-center text-center">
                  <CheckCircleIcon className="h-14 w-14 text-green-600 mb-3" />
                  <Dialog.Title className="text-2xl font-bold text-neutral-900 uppercase tracking-wide">
                    Thank You
                  </Dialog.Title>
                  <p className="mt-3 text-neutral-600">
                    Your message was sent. We will respond shortly.
                  </p>
                  <Link
                    href="/"
                    className="mt-6 inline-block px-5 py-2.5 text-sm font-semibold bg-blue-600 text-white rounded-[4px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300"
                    onClick={closeModal}
                  >
                    Go to Home
                  </Link>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>

      {/* Page */}
      <motion.div
        className="min-h-screen w-full bg-neutral-50 py-14 px-4 sm:px-6"
        initial="hidden"
        animate="visible"
        variants={container}
      >
        {/* Header */}
        <div className="max-w-4xl mx-auto text-center">
          <motion.h1
            className="text-3xl sm:text-4xl font-extrabold uppercase tracking-tight text-neutral-900"
            variants={item}
          >
            Contact Us
          </motion.h1>
          <div className="mx-auto mt-3 h-[2px] w-12 bg-blue-700" />
          <motion.p
            className="mt-4 text-neutral-700"
            variants={item}
            aria-live="polite"
          >
            Get a response within one business day.
          </motion.p>
        </div>

        {/* Grid */}
        <div className="mt-12 max-w-6xl mx-auto grid gap-8 lg:gap-12 justify-items-center lg:justify-items-stretch lg:grid-cols-[minmax(0,1fr)_minmax(0,1fr)]">
          {/* Info card */}
          <motion.section
            className="bg-white border border-neutral-200 rounded-[6px] p-8 text-center w-full max-w-lg"
            variants={item}
          >
            <h2 className="text-xl font-bold uppercase tracking-wide text-neutral-900">
              Contact Information
            </h2>
            <div className="mt-4 h-px w-full bg-neutral-200" />
            <ul className="mt-6 space-y-5 text-neutral-700">
              <li className="flex items-start justify-center gap-3">
                <MapPinIcon className="h-6 w-6 text-blue-700 mt-0.5 shrink-0" />
                <div className="text-center">
                  <div className="font-semibold">Address</div>
                  <div>16226 Suttles Drive</div>
                  <div>Riverside, CA 92504</div>
                </div>
              </li>
              <li className="flex items-start justify-center gap-3">
                <PhoneIcon className="h-6 w-6 text-blue-700 mt-0.5 shrink-0" />
                <div className="text-center">
                  <div className="font-semibold">Phone</div>
                  <div>
                    Toll Free:{" "}
                    <a
                      href="tel:8882824506"
                      className="hover:text-blue-700 underline-offset-2 hover:underline"
                    >
                      888-282-4506
                    </a>
                  </div>
                  <div>
                    Main Office:{" "}
                    <a
                      href="tel:9518404324"
                      className="hover:text-blue-700 underline-offset-2 hover:underline"
                    >
                      (951) 840-4324
                    </a>
                  </div>
                </div>
              </li>
              <li className="flex items-start justify-center gap-3">
                <EnvelopeIcon className="h-6 w-6 text-blue-700 mt-0.5 shrink-0" />
                <div className="text-center">
                  <div className="font-semibold">Email</div>
                  <a
                    href="mailto:info@parkingtechnicalservices.com"
                    className="hover:text-blue-700 underline-offset-2 hover:underline"
                  >
                    info@parkingtechnicalservices.com
                  </a>
                </div>
              </li>
            </ul>

            <Link
              href="/"
              className="mt-8 inline-flex w-full sm:w-auto justify-center px-5 py-2.5 text-sm font-semibold bg-neutral-900 text-white rounded-[4px] hover:bg-neutral-800 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-neutral-400"
            >
              Home
            </Link>
          </motion.section>

          {/* Form */}
          <motion.form
            onSubmit={onSubmit}
            className="bg-white border border-neutral-200 rounded-[6px] p-8 w-full max-w-lg"
            variants={item}
          >
            <h2 className="text-xl font-bold uppercase tracking-wide text-neutral-900 text-center">
              Send a Message
            </h2>
            <div className="mx-auto mt-3 h-[2px] w-10 bg-blue-700" />

            {/* Honeypot */}
            <input
              type="text"
              name="company"
              value={botField}
              onChange={(e) => setBotField(e.target.value)}
              className="hidden"
              tabIndex={-1}
              autoComplete="off"
            />

            <div className="mt-8 grid grid-cols-1 gap-5">
              {[
                {
                  id: "name",
                  label: "Full Name",
                  type: "text",
                  placeholder: "John Doe",
                },
                {
                  id: "email",
                  label: "Email Address",
                  type: "email",
                  placeholder: "you@example.com",
                },
                {
                  id: "phone",
                  label: "Phone Number",
                  type: "tel",
                  placeholder: "(555) 123-4567",
                },
              ].map((f) => (
                <div key={f.id}>
                  <label
                    htmlFor={f.id}
                    className="block text-sm font-medium text-neutral-800 mb-1"
                  >
                    {f.label}
                  </label>
                  <input
                    id={f.id}
                    name={f.id}
                    type={f.type}
                    placeholder={f.placeholder}
                    required
                    className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-neutral-400"
                    aria-required="true"
                  />
                  <ValidationError
                    prefix={f.label}
                    field={f.id}
                    errors={state.errors}
                    className="text-red-600 text-xs mt-1"
                  />
                </div>
              ))}

              <div>
                <label
                  htmlFor="message"
                  className="block text-sm font-medium text-neutral-800 mb-1"
                >
                  Services Needed / Message
                </label>
                <textarea
                  id="message"
                  name="message"
                  rows={4}
                  required
                  placeholder="Briefly describe what you need…"
                  className="w-full px-3.5 py-2.5 border border-neutral-300 rounded-[4px] focus:outline-none focus:ring-2 focus:ring-blue-600 focus:border-blue-600 placeholder-neutral-400"
                />
                <ValidationError
                  prefix="Message"
                  field="message"
                  errors={state.errors}
                  className="text-red-600 text-xs mt-1"
                />
              </div>

              <div className="flex justify-center">
                <ReCAPTCHA sitekey={RECAPTCHA_SITE_KEY} onChange={onVerify} />
              </div>

              <button
                type="submit"
                disabled={state.submitting || !recaptchaToken}
                className="w-full py-3 px-4 text-sm font-semibold bg-blue-600 text-white rounded-[4px] hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-300 disabled:opacity-50 disabled:cursor-not-allowed"
                aria-live="polite"
              >
                {state.submitting ? "Submitting…" : "Send Message"}
              </button>

              {state.errors?.length ? (
                <p className="text-sm text-red-600" role="status">
                  Please fix the errors above and try again.
                </p>
              ) : null}
            </div>
          </motion.form>
        </div>
      </motion.div>
    </>
  );
}

export default ContactForm;
