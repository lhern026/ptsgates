import type { Metadata } from "next";

export const productionUrl = "https://www.parkingtechnicalservices.com";

export function pageMetadata(
  title: string,
  description: string,
  path: string,
): Metadata {
  return {
    title,
    description,
    alternates: { canonical: `${productionUrl}${path}` },
    openGraph: {
      title,
      description,
      url: `${productionUrl}${path}`,
      siteName: "Parking Technical Services",
      type: "website",
    },
  };
}
