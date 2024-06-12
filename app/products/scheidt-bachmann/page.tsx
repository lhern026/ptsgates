import { title } from "@/components/primitives";
import Footer from "@/components/footer";

export default function DocsPage() {
  return (
    <div className="min-h-screen flex flex-col w-full bg-gradient-to-r from-purple-400 via-pink-500 to-red-500">
      <div className="flex-grow">
        <div className="py-16 px-6 md:px-12 lg:px-24 w-full text-white">
          <h1
            className={`${title()} text-4xl md:text-5xl lg:text-6xl font-extrabold text-center mb-8`}
          >
            Client Success Story: Scheidt-Bachmann
          </h1>
          <p className="text-xl md:text-2xl lg:text-3xl text-center max-w-3xl mx-auto mb-8">
            Discover how Scheidt-Bachmann revolutionized their parking solutions
            with the help of PTS.
          </p>
        </div>

        <div className="bg-white py-12 px-6 md:px-12 lg:px-24 text-gray-800">
          <div className="max-w-4xl mx-auto">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Background
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Scheidt-Bachmann, a leading provider of innovative parking
              solutions, faced challenges in managing and maintaining their
              diverse parking systems. They needed a reliable partner to enhance
              their operational efficiency and customer satisfaction.
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Challenge
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              With an extensive range of parking equipment and a growing number
              of installations, Scheidt-Bachmann required a partner capable of
              servicing various systems, ensuring minimal downtime, and
              providing exceptional support.
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Our Solution
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              PTS stepped in with a comprehensive service plan tailored to
              Scheidt-Bachmann's needs. Our team of expert technicians and
              engineers provided round-the-clock support, regular maintenance,
              and rapid response to any issues, ensuring seamless operations.
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              The Results
            </h2>
            <p className="text-lg md:text-xl lg:text-2xl mb-6">
              Thanks to PTS's dedicated service, Scheidt-Bachmann experienced a
              significant reduction in system downtime, enhanced customer
              satisfaction, and improved operational efficiency. Our partnership
              has enabled them to focus on their core business while we handle
              their parking solutions.
            </p>

            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
              Client Testimonial
            </h2>
            <blockquote className="text-lg md:text-xl lg:text-2xl italic border-l-4 border-primary pl-4">
              "PTS has been an invaluable partner in our journey. Their
              expertise and dedication have transformed our operations, allowing
              us to deliver superior service to our clients. We couldn't have
              asked for a better partner." - Scheidt-Bachmann
            </blockquote>
          </div>
        </div>
      </div>
    </div>
  );
}
