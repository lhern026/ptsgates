import { title } from "@/components/primitives";
import {
  FaTools,
  FaCogs,
  FaClock,
  FaWrench,
  FaClipboardCheck,
} from "react-icons/fa";
import Image from "next/image";

export default function PricingPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50">
      <div className="bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 py-12 px-6 md:px-12 lg:px-24 w-full text-white">
        <h1
          className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
        >
          Installations and Services
        </h1>
        <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto">
          Comprehensive solutions for all your parking gate system needs.
        </p>
      </div>

      <div className="py-12 px-6 md:px-12 lg:px-24 w-full text-gray-800">
        <div className="max-w-4xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Our Services
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-6">
            We offer a range of services to ensure your parking gate systems are
            always operational and up-to-date. Our services include
            installation, maintenance, upgrades, and emergency repairs, all
            tailored to meet your specific needs.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaTools className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Installation Services</h3>
            <p className="text-lg text-gray-600">
              Our team of experienced technicians ensures seamless installation
              of parking gate systems tailored to your specific needs.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaCogs className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Maintenance and Support</h3>
            <p className="text-lg text-gray-600">
              Regular maintenance is crucial for the longevity and reliability
              of your parking gate systems. We offer comprehensive maintenance
              plans.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaClipboardCheck className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">System Upgrades</h3>
            <p className="text-lg text-gray-600">
              Keep your parking gate systems up-to-date with the latest
              technology advancements.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaClock className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">
              Emergency Repair Services
            </h3>
            <p className="text-lg text-gray-600">
              Our emergency repair services are available 24/7 to minimize
              downtime and inconvenience.
            </p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-lg">
            <FaWrench className="text-4xl text-primary mb-4" />
            <h3 className="text-2xl font-bold mb-4">Custom Solutions</h3>
            <p className="text-lg text-gray-600">
              Every parking facility has unique requirements. We offer custom
              solutions tailored to your specific needs.
            </p>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Why Choose Us?
          </h2>
          <ul className="list-disc pl-6 text-lg md:text-xl lg:text-2xl text-gray-600">
            <li className="mb-4">Experienced and professional technicians</li>
            <li className="mb-4">
              Comprehensive maintenance and support plans
            </li>
            <li className="mb-4">Rapid response to emergency repair needs</li>
            <li className="mb-4">
              Customized solutions to meet your specific requirements
            </li>
            <li className="mb-4">
              Up-to-date with the latest technology advancements
            </li>
          </ul>
        </div>

        <div className="bg-white py-12 px-6 md:px-12 lg:px-24 mt-16 text-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Client Testimonials
            </h2>
            <div className="flex flex-col md:flex-row gap-12">
              <div className="flex-1">
                <blockquote className="text-lg md:text-xl lg:text-2xl italic border-l-4 border-primary pl-4">
                  "PTS has been an invaluable partner in our journey. Their
                  expertise and dedication have transformed our operations,
                  allowing us to deliver superior service to our clients."
                  <br />
                  <span className="font-bold">- Scheidt-Bachmann</span>
                </blockquote>
              </div>
              <div className="flex-1">
                <Image
                  src="https://source.unsplash.com/random/400x400"
                  alt="Client Image"
                  width={400}
                  height={400}
                  className="rounded-lg shadow-lg"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="max-w-4xl mx-auto mt-16 text-center">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
            Ready to Get Started?
          </h2>
          <p className="text-lg md:text-xl lg:text-2xl mb-8">
            Contact us today to learn more about our services and how we can
            help you achieve your parking system goals.
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
