"use client";
import ContactForm from "../../components/ContactForm-2";
import Image from "next/image";

const ContactPage: React.FC = () => (
  <div className="min-h-screen flex items-center justify-center bg-gray-100 relative">
    {/* Background Image */}
    <div className="absolute inset-0 z-0">
      <Image
        src="/background.jpg" // Make sure to have a suitable background image in your public folder
        alt="Background Image"
        layout="fill"
        objectFit="cover"
        quality={80}
        className="opacity-50"
      />
    </div>

    {/* Content */}
    <div className="relative z-10 max-w-3xl w-full p-8 bg-white bg-opacity-90 shadow-lg rounded-lg">
      <h1 className="text-4xl font-bold text-center mb-6 text-gray-800">
        Contact Us
      </h1>
      <p className="text-center text-lg mb-8 text-gray-600">
        We'd love to hear from you! Please fill out the form below and we'll get
        in touch as soon as possible.
      </p>
      <ContactForm />
    </div>
  </div>
);

export default ContactPage;
