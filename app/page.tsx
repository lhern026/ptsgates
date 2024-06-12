"use client";

import { Link } from "@nextui-org/link";
import { button as buttonStyles } from "@nextui-org/theme";
import Footer from "../components/footer";
import Image from "next/image";
import Slider from "react-slick";
import { FaCheckCircle, FaLock, FaClock, FaQuoteLeft } from "react-icons/fa";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Home() {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    arrows: false,
  };

  const images = [
    "https://i.imgur.com/PA7Jl6K.jpeg",
    "https://i.imgur.com/XULqRUX.jpeg",
    "https://i.imgur.com/LVRajBQ_d.webp?maxwidth=760&fidelity=grand",
  ];

  return (
    <div className="min-h-screen bg-gray-100 flex flex-col">
      <main className="flex-grow">
        {/* Hero Section */}
        <section className="h-screen text-white relative">
          <Slider {...settings}>
            {images.map((image, index) => (
              <div key={index}>
                <div
                  className="bg-cover bg-center h-screen flex items-center justify-center"
                  style={{
                    backgroundImage: `url(${image})`,
                  }}
                >
                  <div className="bg-gray-900 bg-opacity-50 p-8 rounded-lg text-center">
                    <h1 className="text-4xl md:text-6xl font-bold mb-4">
                      Revolutionary Parking Gates
                    </h1>
                    <p className="text-lg md:text-xl mb-6">
                      Innovative solutions for modern parking needs.
                    </p>
                    <Link
                      href="/contact"
                      className={buttonStyles({
                        color: "primary",
                        radius: "full",
                        variant: "shadow",
                        className: "px-6 py-3 text-lg font-semibold",
                      })}
                    >
                      Get Started
                    </Link>
                  </div>
                </div>
              </div>
            ))}
          </Slider>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Parking Gates?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <FaCheckCircle className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Reliable Performance
                </h3>
                <p className="text-gray-600">
                  Our parking gates are designed for durability and consistent
                  performance, ensuring smooth operation at all times.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <FaLock className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Enhanced Security
                </h3>
                <p className="text-gray-600">
                  Advanced security features to prevent unauthorized access and
                  ensure the safety of parked vehicles.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <FaClock className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">Cost-Effective</h3>
                <p className="text-gray-600">
                  Optimize your parking management and reduce costs with our
                  efficient and scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Step 1: Entry"
                  width={403}
                  height={303}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Step 1: Entry</h3>
                <p className="text-gray-600">
                  Vehicles approach the gate and input their details to gain
                  access.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Step 2: Processing"
                  width={404}
                  height={304}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">
                  Step 2: Processing
                </h3>
                <p className="text-gray-600">
                  Our system verifies the details and processes the entry
                  request.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Step 3: Park"
                  width={405}
                  height={305}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Step 3: Park</h3>
                <p className="text-gray-600">
                  The gate opens, allowing the vehicle to enter and park
                  securely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits of Our Parking Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Convenience"
                  width={406}
                  height={306}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Convenience</h3>
                <p className="text-gray-600">
                  Our systems provide unparalleled convenience for both
                  operators and users, streamlining parking operations.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Safety"
                  width={407}
                  height={307}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Safety</h3>
                <p className="text-gray-600">
                  Advanced safety features ensure that both vehicles and
                  pedestrians are protected at all times.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Efficiency"
                  width={408}
                  height={308}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Efficiency</h3>
                <p className="text-gray-600">
                  Our systems maximize efficiency, reducing wait times and
                  optimizing space usage.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Features Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Why Choose Our Parking Gates?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <FaCheckCircle className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Reliable Performance
                </h3>
                <p className="text-gray-600">
                  Our parking gates are designed for durability and consistent
                  performance, ensuring smooth operation at all times.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <FaLock className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">
                  Enhanced Security
                </h3>
                <p className="text-gray-600">
                  Advanced security features to prevent unauthorized access and
                  ensure the safety of parked vehicles.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <FaClock className="text-4xl text-primary mb-4 mx-auto" />
                <h3 className="text-2xl font-semibold mb-2">Cost-Effective</h3>
                <p className="text-gray-600">
                  Optimize your parking management and reduce costs with our
                  efficient and scalable solutions.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="py-16 bg-gray-100">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              How It Works
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Step 1: Entry"
                  width={403}
                  height={303}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Step 1: Entry</h3>
                <p className="text-gray-600">
                  Vehicles approach the gate and input their details to gain
                  access.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Step 2: Processing"
                  width={404}
                  height={304}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">
                  Step 2: Processing
                </h3>
                <p className="text-gray-600">
                  Our system verifies the details and processes the entry
                  request.
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Step 3: Park"
                  width={405}
                  height={305}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Step 3: Park</h3>
                <p className="text-gray-600">
                  The gate opens, allowing the vehicle to enter and park
                  securely.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits Section */}
        <section className="py-16 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Benefits of Our Parking Systems
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Convenience"
                  width={406}
                  height={306}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Convenience</h3>
                <p className="text-gray-600">
                  Our systems provide unparalleled convenience for both
                  operators and users, streamlining parking operations.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Safety"
                  width={407}
                  height={307}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Safety</h3>
                <p className="text-gray-600">
                  Advanced safety features ensure that both vehicles and
                  pedestrians are protected at all times.
                </p>
              </div>
              <div className="p-6 bg-gray-100 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://i.imgur.com/NJO8gUO.png"
                  alt="Efficiency"
                  width={408}
                  height={308}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-2xl font-semibold mb-2">Efficiency</h3>
                <p className="text-gray-600">
                  Our systems maximize efficiency, reducing wait times and
                  optimizing space usage.
                </p>
              </div>
            </div>
          </div>
        </section>
        {/* Testimonials Section */}
        <section className="py-16 bg-gray-50">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              What Our Clients Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://source.unsplash.com/random/406x306?client1"
                  alt="Client Testimonial 1"
                  width={406}
                  height={306}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">John Doe</h3>
                <p className="text-gray-600 italic">
                  &quot;The best parking system we&#39;ve ever used. Efficient
                  and reliable!&quot;
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://source.unsplash.com/random/407x307?client2"
                  alt="Client Testimonial 2"
                  width={407}
                  height={307}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">Jane Smith</h3>
                <p className="text-gray-600 italic">
                  &quot;Highly recommend these parking gates. Great for security
                  and cost-effective.&quot;
                </p>
              </div>
              <div className="p-6 bg-white rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300">
                <Image
                  src="https://source.unsplash.com/random/408x308?client3"
                  alt="Client Testimonial 3"
                  width={408}
                  height={308}
                  className="w-full h-48 object-cover mb-4 rounded"
                />
                <h3 className="text-xl font-semibold mb-2">Emily Johnson</h3>
                <p className="text-gray-600 italic">
                  &quot;A seamless experience from start to finish. Our
                  customers love it!&quot;
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Call-to-Action Section */}
        <section className="py-16 bg-primary text-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Ready to Upgrade Your Parking?
            </h2>
            <p className="text-lg md:text-xl mb-6">
              Contact us today to learn more about our advanced parking gate
              solutions.
            </p>
            <Link
              href="/contact"
              className={buttonStyles({
                color: "primary",
                radius: "full",
                variant: "shadow",
                className:
                  "px-6 py-3 text-lg font-semibold bg-white text-primary",
              })}
            >
              Contact Us
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
}
