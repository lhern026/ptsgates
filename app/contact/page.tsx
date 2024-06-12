"use client";

import React from "react";
import Link from "next/link"; // Importing Link from next/link
import { button as buttonStyles } from "@nextui-org/theme";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("xqkrrkro");

  if (state.succeeded) {
    return (
      <div className="max-w-lg mx-auto bg-white p-8 rounded-lg shadow-md text-center">
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
      </div>
    );
  }

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-full top-1 mx-full bg-white p-9 rounded-lg shadow-md"
    >
      <h2 className="text-2xl font-bold mb-6 text-center text-gray-700">
        Contact Us
      </h2>

      <div className="mb-4">
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
      </div>

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

      <div className="mb-4">
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
