import { baseUrl } from "@/lib/constants";
import { MetadataRoute } from "next";

export default async function sitemap(): Promise<MetadataRoute.Sitemap> {
  // const baseUrl = `https://olamidefamojuro.com`;

  // Define static pages with their last modified dates
  const staticPages = [
    {
      url: `${baseUrl}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 1,
    },
  ];
  return [...staticPages];
}
