import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50">
      <div className="bg-gradient-to-r from-blue-600 via-teal-600 to-green-600 py-16 px-6 md:px-12 lg:px-24 w-full text-white">
        <h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
        >
          Keri Systems
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto">
          Leading provider of access control and integrated security systems,
          offering tailored solutions to all our clients.
        </p>
      </div>

      <div className="py-16 px-6 md:px-12 lg:px-24 w-full text-gray-800">
        <div className="max-w-4xl mx-auto mb-16">
          <Image
            src="https://source.unsplash.com/random/800x400?security"
            alt="Keri Systems"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mb-6"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About Keri Systems
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Keri Systems is renowned for its expertise in access control and
            integrated security solutions. With a commitment to innovation and
            quality, we provide customized security solutions that cater to the
            unique needs of each client. Our systems are designed to be robust,
            scalable, and user-friendly, ensuring maximum security and ease of
            use.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Keri Systems?
          </h2>
          <ul className="list-disc pl-6 text-lg md:text-xl lg:text-2xl text-gray-600">
            <li className="mb-4">Advanced access control technology</li>
            <li className="mb-4">Customizable security solutions</li>
            <li className="mb-4">User-friendly and scalable systems</li>
            <li className="mb-4">Commitment to innovation and quality</li>
            <li className="mb-4">Dedicated customer support</li>
          </ul>
        </div>

        <div className="bg-white py-12 px-6 md:px-12 lg:px-24 mt-16 text-gray-800 rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Access Control</h3>
                <p className="text-lg text-gray-600">
                  Secure and manage access to your premises with our
                  state-of-the-art access control systems, designed for
                  efficiency and reliability.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Integrated Security</h3>
                <p className="text-lg text-gray-600">
                  Our integrated security solutions combine various security
                  measures into a cohesive system, providing comprehensive
                  protection for your facility.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
                <p className="text-lg text-gray-600">
                  Whether you need security for a small office or a large
                  enterprise, our scalable solutions can grow with your
                  business.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  User-Friendly Interfaces
                </h3>
                <p className="text-lg text-gray-600">
                  Our systems feature intuitive interfaces, making it easy for
                  users to manage security settings and monitor access.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Contact Us
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Ready to enhance your security with Keri Systems? Get in touch with
            us today to learn more about our tailored solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-blue-600 text-white text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-blue-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
