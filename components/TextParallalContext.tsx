import type { ReactNode } from "react";
import Image from "next/image";

interface TextParallaxContentProps {
  imgUrl: string;
  subheading: string;
  heading: string;
  children?: ReactNode;
}

export function TextParallaxContent({
  imgUrl,
  subheading,
  heading,
  children,
}: TextParallaxContentProps) {
  return (
    <div>
      <section className="relative mx-3 h-[320px] overflow-hidden rounded-sm sm:mx-6 sm:h-[400px] lg:h-[440px]">
        <Image
          src={imgUrl}
          alt=""
          fill
          sizes="100vw"
          quality={90}
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60" aria-hidden="true" />
        <div className="relative flex h-full flex-col items-center justify-center gap-4 px-6 py-10 text-center text-white">
          {subheading ? <p className="max-w-3xl text-lg leading-relaxed sm:text-xl">{subheading}</p> : null}
          <h2 className="max-w-4xl text-3xl font-bold leading-tight tracking-tight sm:text-4xl lg:text-5xl">{heading}</h2>
        </div>
      </section>
      {children}
    </div>
  );
}
