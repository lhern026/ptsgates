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
