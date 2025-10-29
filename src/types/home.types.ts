export type MediaAsset = {
  asset: {
    url: string;
    _id?: string;
    metadata?: {
      dimensions?: { width: number; height: number };
      lqip?: string;
    };
  };
};

export interface Button {
  caption: string;
  href: string;
}

export interface Section {
  mediaType: "picture" | "video";
  media: MediaAsset[];
  title: string;
  videoUrl?: string;
  sectionHeight?: string;
  description: string;
  button?: Button;
}

export interface TradArt extends Omit<Section, "media"> {
  media: MediaAsset[]; // max 3 enforced in schema, not here
}

export interface About {
  bio: string;
  profilePicture: MediaAsset;
}
export type SiteBrand = {
  name: string;
  logo: string;
  dimensions: {
    width: number;
    height: number;
  };
};

export interface Brand {
  name: string;
  picture: MediaAsset;
}

export interface SocialLinks {
  gumroad: string;
  artstation: string;
  linkedin: string;
  instagram: string;
  youtube: string;
  artstationFilms: string;
}

export interface HomePage {
  logo: MediaAsset;
  resume: MediaAsset;
  introVideo: {
    videoUrl: string;
    uploadedVideo?: MediaAsset;
    videoHeight?: string;
  };
  films: Section;
  characters: Section;
  traditionalArt: TradArt;
  learningCenter: Section;
  onlineStore: Section;
  about: About;
  brands: Brand[];
  links: SocialLinks;
}
