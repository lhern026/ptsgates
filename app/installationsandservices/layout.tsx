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
