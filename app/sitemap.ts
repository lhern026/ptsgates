import type { MetadataRoute } from "next";
import { productionUrl } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/installationsandservices",
    "/accesscontrol/kerisystems",
    "/accesscontrol/securekey",
    "/products/get-my-parking",
    "/products/ev-chargers",
    "/contact",
    "/contact-2",
  ].map((path) => ({ url: `${productionUrl}${path}` }));
}
