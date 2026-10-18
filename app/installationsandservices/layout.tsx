import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Parking Equipment Installation & Service",
  "Parking equipment installation, maintenance, and service across Southern California. Explore Parking Technical Services capabilities and request assistance.",
  "/installationsandservices",
);

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className=" max-w-full text-center justify-center">{children}</div>
    </section>
  );
}
