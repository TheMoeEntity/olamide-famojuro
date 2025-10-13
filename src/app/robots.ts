import { Links } from "@/lib/constants";
import { MetadataRoute } from "next";

export default function robots(): MetadataRoute.Robots {
  const baseUrl = Links.BASEURL;

  return {
    rules: {
      userAgent: "*",
      allow: "/",
      // disallow: ["/private/", "/admin/"],
    },
    sitemap: `${baseUrl}/sitemap.xml`,
  };
}
