import React from 'react';
import { useForm, ValidationError } from '@formspree/react';
import Footer from "../components/footer"

function ContactForm() {
  const [state, handleSubmit] = useForm("xrgnwdnb");

  if (state.succeeded) {
    return <p className="text-center text-green-500">We will be in touch with you!</p>;
  }

  return (<>
    <form onSubmit={handleSubmit} className="max-w-md mx-auto p-8 border border-gray-300 rounded-lg bg-white shadow-md">
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
        <button type="submit" disabled={state.submitting} className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 disabled:bg-gray-400">
          Submit
        </button>
      </div>
    </form>
    <Footer/></>
  );
}

export default ContactForm;
