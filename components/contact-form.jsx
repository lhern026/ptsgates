"use client";

import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Footer from "../components/footer";
import { motion } from "framer-motion";

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnwdnb");

  if (state.succeeded) {
    return <p className="text-center text-green-500">We will be in touch with you!</p>;
  }

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="min-h-screen flex flex-col w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-16 px-6 md:px-12 lg:px-24 text-white"
      >
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8">
          Contact Us
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto mb-8">
          We'd love to hear from you! Please fill out the form below and we'll get back to you as soon as possible.
        </p>
        <motion.form
          onSubmit={handleSubmit}
          className="max-w-md mx-auto p-8 border border-gray-300 rounded-lg bg-white shadow-md"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          <div className="mb-4">
            <label htmlFor="email" className="block text-sm font-bold mb-2">
              Email Address
            </label>
            <input
              id="email"
              type="email"
              name="email"
              placeholder="Your email"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <ValidationError 
              prefix="Email" 
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="mb-4">
            <label htmlFor="message" className="block text-sm font-bold mb-2">
              Message
            </label>
            <textarea
              id="message"
              name="message"
              placeholder="Your message"
              required
              className="w-full px-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 min-h-[100px]"
            />
            <ValidationError 
              prefix="Message" 
              field="message"
              errors={state.errors}
              className="text-red-500 text-sm mt-1"
            />
          </div>
          <div className="flex justify-center">
            <button type="submit" disabled={state.submitting} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400 rounded-2xl border-2 border-dashed border-black bg-white px-6 py-3 font-semibold uppercase text-black transition-all duration-300 hover:translate-x-[-4px] hover:translate-y-[-4px] hover:rounded-md hover:shadow-[4px_4px_0px_black] active:translate-x-[0px] active:translate-y-[0px] active:rounded-2xl active:shadow-none">
              Submit
            </button>
          </div>
        </motion.form>
      </motion.div>
      <Footer />
    </>
  );
}

export default ContactForm;
