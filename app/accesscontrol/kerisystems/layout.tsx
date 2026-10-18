import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Keri Systems Access Control",
  "Explore Keri Systems access control hardware and software available through Parking Technical Services in Southern California.",
  "/accesscontrol/kerisystems",
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
