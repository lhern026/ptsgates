import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "SecuraKey Access Control",
  "Explore SecuraKey access control and RFID solutions from Parking Technical Services, serving Southern California.",
  "/accesscontrol/securekey",
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
