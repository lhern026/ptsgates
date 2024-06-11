import { title } from "@/components/primitives";
import Footer from "@/components/footer";

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <div className="bg-gray-50 py-12 px-6 md:px-12 lg:px-24">
        <h1
          className={`${title()} text-4xl font-extrabold text-gray-900 mb-8 text-center`}
        >
          About Us
        </h1>
        <div className="max-w-3xl mx-auto text-gray-700 leading-loose">
          <p className="text-xl font-semibold mb-4">
            <strong>History of Parking Technical Services</strong>
          </p>
          <p className="mb-6">
            Located in Santa Fe Springs, California, Parking Technical Services
            (PTS) was founded over twenty years ago, as a result of an
            increasing demand for qualified personnel in the booming parking
            industry. Today, it is a well-established company with an impressive
            record in terms of professionalism, reliability, and quality of
            services. Through the years, PTS has lived up to the goal set by its
            founder and current Chairman of the Board, Armando Castro.
          </p>
          <p className="mb-6">
            That goal was to provide excellent service at the most affordable
            prices, with a quick response to clients&apos; requests and
            versatility. PTS takes great pride in being one of the very few, if
            not the only company that services every type of parking equipment,
            regardless of make, model, date of manufacture, and time of
            installation. From Amano, Falcon Omnihost, and Keri Systems to the
            modern and more recent WPS parking systems, PTS installs and
            services them all.
          </p>
          <p className="mb-6">
            What makes PTS your &quot;number one option&quot; whenever your
            parking facility needs either service or an upgrade, is our highly
            qualified workforce that consists of technicians and engineers ready
            to address and resolve any problem, no matter how complex it may be.
          </p>
          <p className="mb-6">
            From electro-mechanical to sophisticated computerized equipment, PTS
            provides service, installation, and tech support in a manner
            unequaled by other companies in the parking industry.
          </p>
          <p className="mb-6">
            The concept is, in essence, quite simple: You need our service, you
            get it! Satisfaction guaranteed!s
          </p>
        </div>
      </div>
      <Footer />
    </div>
  );
}
