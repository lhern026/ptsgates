import type { MetadataRoute } from "next";
import { productionUrl } from "@/config/seo";

export default function sitemap(): MetadataRoute.Sitemap {
  return [
    "/",
    "/about",
    "/installationsandservices",
    "/accesscontrol/kerisystems",
    "/accesscontrol/securekey",
    "/products/scheidt-bachmann",
    "/products/ev-chargers",
    "/contact",
    "/contact-2",
  ].map((path) => ({ url: `${productionUrl}${path}` }));
}
