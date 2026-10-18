import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Scheidt & Bachmann Parking Systems",
  "Explore Scheidt & Bachmann barrier gates, pay stations, entry and exit devices, and parking software with Parking Technical Services in Southern California.",
  "/products/scheidt-bachmann",
);

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section>
      <div>{children}</div>
    </section>
  );
}
