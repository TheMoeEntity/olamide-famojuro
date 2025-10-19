import { createClient } from "@sanity/client";
import imageUrlBuilder from "@sanity/image-url";

const projectId = process.env.NEXT_PUBLIC_SANITY_PROJECT_ID;
export const client = createClient({
  projectId,
  dataset: "production",
  apiVersion: "2025-10-19",
  useCdn: true,
});
// Helper function for generating image URLs with the Sanity Image Pipeline
const builder = imageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source);
}
