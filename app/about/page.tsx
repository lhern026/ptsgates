import { title } from "@/components/primitives";
import {
  FaHistory,
  FaBullseye,
  FaCogs,
  FaUsers,
  FaThumbsUp,
} from "react-icons/fa";
import Image from "next/image";

export default function AboutPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gray-50">
      <div className="relative">
        <div className="absolute inset-0 bg-gradient-to-r from-blue-500 via-blue-500 to-red-500 opacity-75"></div>
        <div className="relative py-24 px-6 md:px-12 lg:px-24 w-full text-white text-center">
          <h1
            className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold mb-4`}
          >
            About Us
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl max-w-3xl mx-auto">
            Learn more about Parking Technical Services and our commitment to
            excellence in the parking industry.
          </p>
        </div>
      </div>

      <div className="bg-white py-12 px-6 md:px-12 lg:px-24 w-full">
        <div className="max-w-6xl mx-auto text-gray-700 leading-loose">
          <section className="mb-16">
            <div className="flex items-center mb-6">
              <FaHistory className="text-4xl text-primary mr-4" />
              <h2 className="text-3xl font-semibold">
                History of Parking Technical Services
              </h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src="https://source.unsplash.com/random/400x400?parking"
                alt="Parking Technical Services"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg">
                Located in Santa Fe Springs, California, Parking Technical
                Services (PTS) was founded over twenty years ago, as a result of
                an increasing demand for qualified personnel in the booming
                parking industry. Today, it is a well-established company with
                an impressive record in terms of professionalism, reliability,
                and quality of services. Through the years, PTS has lived up to
                the goal set by its founder and current Chairman of the Board,
                Armando Castro.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center mb-6">
              <FaBullseye className="text-4xl text-primary mr-4" />
              <h2 className="text-3xl font-semibold">Our Goal</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src="https://source.unsplash.com/random/400x400?goal"
                alt="Our Goal"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg">
                Our goal is to provide excellent service at the most affordable
                prices, with a quick response to clients&apos; requests and
                versatility. PTS takes great pride in being one of the very few,
                if not the only company that services every type of parking
                equipment, regardless of make, model, date of manufacture, and
                time of installation. From Amano, Falcon Omnihost, and Keri
                Systems to the modern and more recent WPS parking systems, PTS
                installs and services them all.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center mb-6">
              <FaCogs className="text-4xl text-primary mr-4" />
              <h2 className="text-3xl font-semibold">Our Expertise</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src="https://source.unsplash.com/random/400x400?expertise"
                alt="Our Expertise"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg">
                What makes PTS your &quot;number one option&quot; whenever your
                parking facility needs either service or an upgrade, is our
                highly qualified workforce that consists of technicians and
                engineers ready to address and resolve any problem, no matter
                how complex it may be.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center mb-6">
              <FaUsers className="text-4xl text-primary mr-4" />
              <h2 className="text-3xl font-semibold">Our Services</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src="https://source.unsplash.com/random/400x400?services"
                alt="Our Services"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg">
                From electro-mechanical to sophisticated computerized equipment,
                PTS provides service, installation, and tech support in a manner
                unequaled by other companies in the parking industry.
              </p>
            </div>
          </section>

          <section className="mb-16">
            <div className="flex items-center mb-6">
              <FaThumbsUp className="text-4xl text-primary mr-4" />
              <h2 className="text-3xl font-semibold">Our Guarantee</h2>
            </div>
            <div className="flex flex-col lg:flex-row items-center gap-8 bg-gray-100 p-6 rounded-lg shadow-lg">
              <Image
                src="https://source.unsplash.com/random/400x400?guarantee"
                alt="Our Guarantee"
                width={400}
                height={400}
                className="rounded-lg shadow-lg"
              />
              <p className="text-lg">
                The concept is, in essence, quite simple: You need our service,
                you get it! Satisfaction guaranteed!
              </p>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
