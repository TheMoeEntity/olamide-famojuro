import { ImageSection } from "@/components/ImageSection";
import TraditionalArt from "@/components/TraditionalArt";
import { VideoSection } from "@/components/VideoSection";
import mediaOne from "../../public/traditional_art.png";
import mediaTwo from "../../public/traditional_art_2.png";
import mediaThree from "../../public/traditional_art_3.png";
import About from "@/components/About";
import { Links } from "@/lib/constants";
import { getHomepage } from "@/lib/queries";
import { mapSanityBrands } from "@/lib/helpers";

export default async function Home() {
  const homePageData = await getHomepage();
  const youtubeUrl = homePageData.learningCenter.videoUrl;
  const firstSectionVideoLink = homePageData.introVideo;
  const filmUrl = homePageData.films.media[0].asset.url;
  const mainImageUrl = homePageData.characters.media[0].asset.url;
  const theBrands = mapSanityBrands(homePageData.brands);
  return (
    <div className="w-full mt-[70px] md:mt-0">
      <main className="min-h-screen">
        <VideoSection
          title="Films"
          description="Cinematic storytelling through 3D character animation and visual effects"
          videoUrl={firstSectionVideoLink} // Replace with your actual video URL
          buttonText="View Portfolio"
          buttonHref="/films"
          height="h-[650px]"
          showContent={false}
          showOverlay={false}
        />
        <VideoSection
          title="Films"
          description="Some animated films Olamide has worked on over the years"
          videoUrl={filmUrl}
          buttonText="View Full Gallery"
          buttonHref={Links.ARTSTATION_FILMS}
          height="h-[650px]"
          showContent
          showOverlay
        />
        <ImageSection
          title="Characters"
          description="Olamide Famojuro's immense contributions to Nigeria's animation and game industry are exemplified by his creation of excellent, visually appealing characters for several projects."
          imageUrl={mainImageUrl}
          imageAlt="3D Character Models"
          buttonText="View Portfolio"
          buttonHref={Links.ARTSTATION}
          height="h-[300px] md:h-[600px]"
          overlayOpacity="bg-black/50"
        />
        {homePageData.traditionalArt.media && (
          <TraditionalArt
            media={{
              mediaOne: homePageData.traditionalArt.media[0].asset.url,
              mediaTwo: homePageData.traditionalArt.media[1].asset.url,
              mediaThree: homePageData.traditionalArt.media[2].asset.url,
            }}
            caption={`Olamide is also known for blending traditional and digital mediums. His work explores modernism through bold forms and experimental techniques `}
            link="https://www.instagram.com/olamide_famojuro"
            ctaName="View Instagram"
            title="Traditional Art"
          />
        )}
        {youtubeUrl && (
          <VideoSection
            title="Learning Center"
            description="Some animated films Olamide has worked on over the years"
            videoUrl={youtubeUrl}
            buttonText="YouTube Channel"
            buttonHref="https://youtu.be/m2HrN-VhIHY"
            height="h-[608px]"
            showContent
            showOverlay
          />
        )}
        {homePageData.onlineStore.media && (
          <TraditionalArt
            media={{
              mediaOne: homePageData.onlineStore.media[0].asset.url,
              mediaTwo: homePageData.onlineStore.media[1].asset.url,
              mediaThree: homePageData.onlineStore.media[2].asset.url,
            }}
            caption={`Check out Olamide's Store for limited edition items`}
            link="https://olamidefamojuro.gumroad.com/"
            ctaName="View Store"
            title="Online Store"
          />
        )}
        <About
          bio={homePageData.about.bio}
          allBrands={theBrands || []}
          profilePicture={homePageData.about.profilePicture.asset.url}
        />
      </main>
    </div>
  );
}
