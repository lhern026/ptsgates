import type { ReactNode } from "react";
import { pageMetadata } from "@/config/seo";

export const metadata = pageMetadata(
  "Request a Parking & Access Control Quote",
  "Contact Parking Technical Services about parking revenue control equipment, access control, and project quotes in Southern California.",
  "/contact-2",
);

export default function QuoteLayout({ children }: { children: ReactNode }) {
  return children;
}
