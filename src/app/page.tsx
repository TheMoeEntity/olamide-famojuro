import { ImageSection } from "@/components/ImageSection";
import TraditionalArt from "@/components/TraditionalArt";
import { VideoSection } from "@/components/VideoSection";
import mediaOne from "../../public/traditional_art.png";
import mediaTwo from "../../public/traditional_art_2.png";
import mediaThree from "../../public/traditional_art_3.png";
import About from "@/components/About";

export default function Home() {
  const youtubeUrl = `https://youtu.be/m2HrN-VhIHY`;
  const filmUrl =
    "https://cdn.sanity.io/files/m0k79prg/production/2303d63c2e089d2ae33d050473b1d31acd3fd323.mp4";
  const mainImageUrl = `https://cdn.sanity.io/images/m0k79prg/production/9074149689037e294d64038605f09b5397bc3e89-1920x1920.jpg`;
  return (
    <div className="w-full">
      <main className="min-h-screen">
        <VideoSection
          title="Films"
          description="Cinematic storytelling through 3D character animation and visual effects"
          videoUrl="https://youtu.be/m2HrN-VhIHY" // Replace with your actual video URL
          buttonText="View Portfolio"
          buttonHref="/films"
          height="h-[550px]"
          showContent={false}
          showOverlay={false}
        />
        <VideoSection
          title="Films"
          description="Some animated films Olamide has worked on over the years"
          videoUrl={filmUrl}
          buttonText="View Full Gallery"
          buttonHref="/films"
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
          buttonHref="/characters"
          height="h-[600px]"
          overlayOpacity="bg-black/50"
        />
        <TraditionalArt
          media={{
            mediaOne: mediaOne,
            mediaTwo: mediaTwo,
            mediaThree: mediaThree,
          }}
          caption={`Olamide is also known for blending traditional and digital mediums. His work explores modernism through bold forms and experimental techniques `}
          link="https://www.instagram.com/olamide_famojuro"
          ctaName="View Instagram"
          title="Traditional Art"
        />
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
        <TraditionalArt
          media={{
            mediaOne: mediaOne,
            mediaTwo: mediaTwo,
            mediaThree: mediaThree,
          }}
          caption={`Check out Olamide's Store for limited edition items`}
          link="https://olamidefamojuro.gumroad.com/"
          ctaName="View Store"
          title=""
        />
        <About />
      </main>
    </div>
  );
}
