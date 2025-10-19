import { client } from "./sanity";

export async function getHomepage() {
  return await client.fetch(`
    *[_type == "homepage"][0]{
      title,
      sections[]{
        type,
        title,
        description,
        mediaType,
        media[]{
          ...,
          asset->{
            url,
            metadata { dimensions, lqip }
          }
        },
        buttonText,
        buttonHref
      }
    }
  `);
}
