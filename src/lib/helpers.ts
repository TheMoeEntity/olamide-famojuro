import { SiteBrand } from "@/types/home.types";
import { SanityImageSource } from "@sanity/image-url/lib/types/types";
import imageUrlBuilder from "@sanity/image-url";
import { client } from "./sanity";

const builder = imageUrlBuilder(client);
export type Brand = {
  name: string;
  logo: string;
  dimensions: {
    width: number;
    height: number;
  };
};

// eslint-disable-next-line @typescript-eslint/no-explicit-any
export const mapSanityBrands = (brands: any[]): SiteBrand[] => {
  if (!brands || !Array.isArray(brands)) return [];

  return brands.map((brand) => {
    const logoUrl: string = brand.picture?.asset?.url || "";

    // extract dimensions from filename pattern e.g. "-269x269."
    const match = logoUrl.match(/-(\d+)x(\d+)\./);
    const width = match ? parseInt(match[1]) : 100;
    const height = match ? parseInt(match[2]) : 100;

    return {
      name: brand.name || "Untitled Brand",
      logo: logoUrl,
      dimensions: { width, height },
    };
  });
};

export const sanitizeHtmlForMetaDescription = (
  html: string,
  maxLength: number = 160
): string => {
  // Remove script and style tags and their content
  let text = html.replace(
    /<script\b[^<]*(?:(?!<\/script>)<[^<]*)*<\/script>/gi,
    ""
  );
  text = text.replace(/<style\b[^<]*(?:(?!<\/style>)<[^<]*)*<\/style>/gi, "");

  // Replace block-level elements with newlines
  text = text.replace(
    /<\/(div|p|br|h[1-6]|li|tr|td|th|blockquote|pre)>/gi,
    "\n"
  );
  text = text.replace(/<br\s*\/?>/gi, "\n");

  // Remove all remaining HTML tags
  text = text.replace(/<[^>]+>/g, "");

  // Decode HTML entities
  text = text
    .replace(/&nbsp;/g, " ")
    .replace(/&amp;/g, "&")
    .replace(/&lt;/g, "<")
    .replace(/&gt;/g, ">")
    .replace(/&quot;/g, '"')
    .replace(/&#039;/g, "'")
    .replace(/&apos;/g, "'");

  // Replace multiple whitespace/newlines with single space
  text = text.replace(/\s+/g, " ");

  // Trim whitespace
  text = text.trim();

  // Truncate to maxLength if needed (for meta description)
  if (text.length > maxLength) {
    text = text.substring(0, maxLength - 3).trim() + "...";
  }

  return text;
};
