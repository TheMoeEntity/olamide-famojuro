import { ImageSection } from "@/components/ImageSection";
import TraditionalArt from "@/components/TraditionalArt";
import { VideoSection } from "@/components/VideoSection";
import About from "@/components/About";
import { Links } from "@/lib/constants";
import { getHomepage } from "@/lib/queries";
import { mapSanityBrands } from "@/lib/helpers";
export const revalidate = 3600;
export default async function Home() {
  const homePageData = await getHomepage();
  const youtubeUrl = homePageData.learningCenter.videoUrl;
  const firstSectionVideoLink = homePageData.introVideo;
  const filmUrl = homePageData.films.media[0].asset.url;
  const images = homePageData.characters.media.map((item) => ({
    imageUrl: item.asset.url,
    imageAlt: homePageData.characters.title,
  }));
  // const mainImageUrl = homePageData.characters.media;
  const theBrands = mapSanityBrands(homePageData.brands);
  console.log(homePageData);
  const firstSectionVideoLinkHasUrl =
    firstSectionVideoLink.videoUrl ||
    firstSectionVideoLink.uploadedVideo?.asset.url;
  return (
    <div className="w-full mt-[70px] md:mt-0">
      <main className="min-h-screen">
        {firstSectionVideoLinkHasUrl && (
          <VideoSection
            title={""}
            description={""}
            buttonText=""
            buttonHref=""
            height={`${firstSectionVideoLink?.videoHeight || "h-[480px]"}`}
            showContent={false}
            showOverlay={false}
            videoUrl={firstSectionVideoLinkHasUrl}
          />
        )}
        <VideoSection
          title={homePageData?.films.title || "Films"}
          description={
            homePageData?.films.description ||
            "Some animated films Olamide has worked on over the years"
          }
          videoUrl={filmUrl}
          buttonText={
            homePageData?.films.button?.caption || "View Full Gallery"
          }
          buttonHref={
            homePageData?.films.button?.href || Links.ARTSTATION_FILMS
          }
          height={`${homePageData?.films.sectionHeight || "h-[650px]"}`}
          showContent
          showOverlay
        />
        <ImageSection
          title={homePageData?.characters.title || "Characters"}
          description={homePageData?.characters.description}
          images={images}
          // imageAlt="3D Character Models"
          buttonText={
            homePageData?.characters.button?.caption || "View Characters"
          }
          buttonHref={homePageData.characters.button?.href || "#"}
          height={`${homePageData?.characters.sectionHeight || "h-[450px] md:h-[600px]"} `}
          overlayOpacity="bg-black/50"
        />
        {homePageData.traditionalArt.media && (
          <ImageSection
            title={homePageData?.traditionalArt.title || "Traditional Art"}
            description={homePageData?.traditionalArt.description}
            images={homePageData.traditionalArt.media.map((item) => ({
              imageUrl: item.asset.url,
              imageAlt: homePageData.traditionalArt.title,
            }))}
            buttonText={
              homePageData?.traditionalArt.button?.caption || "View Instagram"
            }
            buttonHref={homePageData.traditionalArt.button?.href || "#"}
            height={`${homePageData?.traditionalArt.sectionHeight || "h-[300px] md:h-[600px]"} `}
            overlayOpacity="bg-black/50"
          />
        )}
        {homePageData.learningCenter.mediaType === "picture" &&
          homePageData.learningCenter.media && (
            <ImageSection
              title={homePageData?.learningCenter.title || "Learning Center"}
              description={homePageData?.learningCenter.description}
              images={homePageData.learningCenter.media.map((item) => ({
                imageUrl: item.asset.url,
                imageAlt: homePageData.learningCenter.title,
              }))}
              buttonText={
                homePageData?.learningCenter.button?.caption || "View Gallery"
              }
              buttonHref={homePageData.learningCenter.button?.href || "#"}
              height={`${homePageData?.learningCenter.sectionHeight || "h-[300px] md:h-[600px]"} `}
              overlayOpacity="bg-black/50"
            />
          )}
        {youtubeUrl && (
          <VideoSection
            title={homePageData?.learningCenter.title || "Learning Center"}
            description={
              homePageData?.learningCenter.description ||
              "Some animated films Olamide has worked on over the years"
            }
            videoUrl={youtubeUrl}
            buttonText={
              homePageData?.learningCenter.button?.caption || "YouTube Channel"
            }
            buttonHref={
              homePageData?.learningCenter.button?.href ||
              "https://youtu.be/m2HrN-VhIHY"
            }
            height={`${homePageData?.learningCenter.sectionHeight || "h-[608px]"} `}
            showContent
            showOverlay
          />
        )}
        {homePageData.onlineStore.media && (
          <ImageSection
            title={homePageData?.onlineStore.title || "Online Store"}
            description={homePageData?.onlineStore.description}
            images={homePageData.onlineStore.media.map((item) => ({
              imageUrl: item.asset.url,
              imageAlt: homePageData.onlineStore.title,
            }))}
            buttonText={
              homePageData?.onlineStore.button?.caption || "View Store"
            }
            buttonHref={
              homePageData.onlineStore.button?.href ||
              "https://olamidefamojuro.gumroad.com/"
            }
            height={`${homePageData?.onlineStore.sectionHeight || "h-[300px] md:h-[600px]"} `}
            overlayOpacity="bg-black/50"
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
