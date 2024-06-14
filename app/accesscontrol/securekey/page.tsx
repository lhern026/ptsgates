import { title } from "@/components/primitives";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50">
      <div className="bg-gradient-to-r from-purple-500 via-pink-500 to-red-500 py-16 px-6 md:px-12 lg:px-24 w-full text-white">
        <h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
        >
          SecureKey
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto">
          Leading provider of secure key management and access control systems,
          ensuring the highest level of security and convenience.
        </p>
      </div>

      <div className="py-16 px-6 md:px-12 lg:px-24 w-full text-gray-800">
        <div className="max-w-4xl mx-auto mb-16">
          <Image
            src="https://source.unsplash.com/random/800x400?security"
            alt="SecureKey"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mb-6"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About SecureKey
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            SecureKey is a pioneer in secure key management solutions. We
            provide advanced systems that cater to various industries, ensuring
            robust security and easy access management. Our solutions are
            designed to integrate seamlessly with your existing infrastructure
            and are scalable to meet the growing needs of your organization.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose SecureKey?
          </h2>
          <ul className="list-disc pl-6 text-lg md:text-xl lg:text-2xl text-gray-600">
            <li className="mb-4">State-of-the-art key management technology</li>
            <li className="mb-4">Customizable access control solutions</li>
            <li className="mb-4">Scalable and user-friendly systems</li>
            <li className="mb-4">Commitment to security and innovation</li>
            <li className="mb-4">Excellent customer support</li>
          </ul>
        </div>

        <div className="bg-white py-12 px-6 md:px-12 lg:px-24 mt-16 text-gray-800 rounded-lg shadow-lg">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Solutions
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Key Management</h3>
                <p className="text-lg text-gray-600">
                  Manage your keys securely and efficiently with our advanced
                  key management systems, designed to ensure complete control
                  over access and usage.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Access Control</h3>
                <p className="text-lg text-gray-600">
                  Our access control solutions provide comprehensive security,
                  integrating various technologies to offer a seamless and
                  secure experience.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
                <p className="text-lg text-gray-600">
                  Whether you need solutions for a small business or a large
                  enterprise, our systems are designed to scale with your needs.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">
                  User-Friendly Interfaces
                </h3>
                <p className="text-lg text-gray-600">
                  Our systems feature intuitive interfaces, making it easy to
                  manage security settings and monitor access in real-time.
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
            Ready to enhance your security with SecureKey? Get in touch with us
            today to learn more about our tailored solutions.
          </p>
          <a
            href="/contact"
            className="inline-block bg-purple-600 text-white text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-purple-700 transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
