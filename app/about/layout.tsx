import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "About Us",
  "Learn about Parking Technical Services, a Riverside-based provider of parking revenue and access control installations and service in Southern California.",
  "/about",
);

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="flex flex-col items-center justify-center gap-4 ">
      <div className="inline-block max-w-full text-center justify-center">
        {children}
      </div>
    </section>
  );
}
