import { title } from "@/components/primitives";
import Footer from "@/components/footer";

export default function DocsPage() {
  return (
    <div>
      <div>
        <h1 className={title()}>About Us</h1>
        <p>
          <strong>History of Parking Technical Services</strong>
        </p>
        <p>
          Located in Santa Fe Springs, California, Parking Technical Services
          (PTS) was founded over twenty years ago, as a result of an increasing
          demand for qualified personnel in the booming parking industry. Today,
          it is a well-established company with an impressive record in terms of
          professionalism, reliability, and quality of services. Through the
          years, PTS has lived up to the goal set by its founder and current
          Chairman of the Board, Armando Castro.
        </p>
        <p>
          That goal was to provide excellent service at the most affordable
          prices, with a quick response to clients' requests and versatility.
          PTS takes great pride in being one of the very few, if not the only
          company that services every type of parking equipment, regardless of
          make, model, date of manufacture, and time of installation. From
          Amano, Falcon Omnihost, and Keri Systems to the modern and more recent
          WPS parking systems, PTS installs and services them all.
        </p>
        <p>
          What makes PTS your "number one option" whenever your parking facility
          needs either service or an upgrade, is our highly qualified workforce
          that consists of technicians and engineers ready to address and
          resolve any problem, no matter how complex it may be.
        </p>
        <p>
          From electro-mechanical to sophisticated computerized equipment, PTS
          provides service, installation, and tech support in a manner unequaled
          by other companies in the parking industry.
        </p>
        <p>
          The concept is, in essence, quite simple: You need our service, you
          get it! Satisfaction guaranteed!
        </p>
      </div>
      <Footer />
    </div>
  );
}
