"use client";

import React from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("YOUR_FORMSPREE_ID");

  if (state.succeeded) {
    return <p className="text-center text-green-500">Thanks for joining!</p>;
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Contact Us
      </h2>

      <div className="mb-4">
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
      </div>

      <div className="mb-6">
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
      </div>

      <button
        type="submit"
        disabled={state.submitting}
        className="w-full py-3 bg-primary text-white font-semibold rounded-lg shadow-md hover:bg-primary-dark focus:outline-none focus:ring-2 focus:ring-primary"
      >
        Submit
      </button>
    </form>
  );
}

export default ContactForm;
