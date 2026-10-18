import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Contact PTS for Parking & Access Control Service",
  "Contact Parking Technical Services in Riverside, California, for parking equipment and access control service inquiries.",
  "/contact",
);

import React from "react";

export default function PricingLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <section className="w-full flex flex-col justify-center gap-4 py-0">
      <div className="w-full text-center">{children}</div>
    </section>
  );
}
