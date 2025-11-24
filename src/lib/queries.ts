import { HomePage } from "@/types/home.types";
import { client } from "./sanity";

export async function getHomepage(): Promise<HomePage> {
  return await client.fetch(`
    *[_type == "homepage"][0]{
      logo{asset->{url}},
      resume{asset->{url}},
      introVideo{
        videoUrl,
        uploadedVideo{
          asset->{url}
        },
        videoHeight
      },
      films{..., media[]{..., asset->{url}}},
      characters{..., media[]{..., asset->{url}}},
      traditionalArt{..., media[]{..., asset->{url}}},
      learningCenter{..., media[]{..., asset->{url}}},
      onlineStore{..., media[]{..., asset->{url}}},
      about{bio, profilePicture{asset->{url}}},
      brands[]{name, picture{asset->{url}}},
      links
    }
  `);
}
