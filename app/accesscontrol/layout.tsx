import { title } from "@/components/primitives";
import Image from "next/image";

export default function SecureKeyPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50">
      <div className="bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 py-12 px-6 md:px-12 lg:px-24 w-full text-white">
        <h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
        >
          Secure Key
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto">
          Data Protection on Demand: A cloud-based platform providing a wide
          range of cloud HSM and key management services through a simple online
          marketplace.
        </p>
      </div>

      <div className="py-12 px-6 md:px-12 lg:px-24 w-full text-gray-800">
        <div className="max-w-4xl mx-auto mb-16">
          <Image
            src="https://source.unsplash.com/random/800x400?cloud-security"
            alt="Secure Key"
            width={800}
            height={400}
            className="rounded-lg shadow-lg mb-6"
          />
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            About Secure Key
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            Secure Key is a leading cloud-based platform offering extensive data
            protection services. Our platform provides cloud HSM (Hardware
            Security Module) and key management services through a simple and
            user-friendly online marketplace. We ensure your data is protected
            with the highest standards of security, enabling you to manage your
            cryptographic keys with ease and confidence.
          </p>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Secure Key?
          </h2>
          <ul className="list-disc pl-6 text-lg md:text-xl lg:text-2xl text-gray-600">
            <li className="mb-4">Comprehensive cloud HSM services</li>
            <li className="mb-4">Simple and intuitive online marketplace</li>
            <li className="mb-4">Top-tier data protection standards</li>
            <li className="mb-4">Scalable solutions for all business sizes</li>
            <li className="mb-4">Dedicated support and customer service</li>
          </ul>
        </div>

        <div className="bg-white py-12 px-6 md:px-12 lg:px-24 mt-16 text-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Services
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Cloud HSM</h3>
                <p className="text-lg text-gray-600">
                  Our cloud-based HSM services provide secure, dedicated
                  hardware for cryptographic processing, ensuring your keys are
                  protected and managed with the highest level of security.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Key Management</h3>
                <p className="text-lg text-gray-600">
                  Simplify your key management processes with our intuitive
                  platform, offering centralized control and management of your
                  cryptographic keys.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">Scalable Solutions</h3>
                <p className="text-lg text-gray-600">
                  Our services are designed to scale with your business needs,
                  providing flexible and customizable solutions for
                  organizations of all sizes.
                </p>
              </div>
              <div className="bg-gray-100 p-6 rounded-lg shadow-lg">
                <h3 className="text-2xl font-bold mb-4">24/7 Support</h3>
                <p className="text-lg text-gray-600">
                  Our dedicated support team is available around the clock to
                  assist you with any issues or questions, ensuring your data
                  protection needs are always met.
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
            Ready to enhance your data protection with Secure Key? Get in touch
            with us today to learn more about our cloud HSM and key management
            services.
          </p>
          <a
            href="/contact"
            className="inline-block bg-primary text-white text-lg md:text-xl lg:text-2xl px-6 py-3 rounded-full shadow-lg hover:bg-primary-dark transition duration-300"
          >
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
}
