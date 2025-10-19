import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { Brands } from "./Brands";
import { Brand, SiteBrand } from "@/types/home.types";

const About: React.FC<{
  bio: string;
  profilePicture: string;
  allBrands: SiteBrand[];
}> = async ({ bio, profilePicture, allBrands }) => {
  return (
    <section className="bg-black w-full flex flex-col items-center justify-center text-white pt-16 pb-28">
      {profilePicture && (
        <div className="w-[124px] md:w-[125px] flex justify-center items-center h-[124px] md:h-[125px] rounded-full overflow-hidden mb-1">
          <Image
            src={profilePicture}
            alt="Olamide Famojuro Profile Picture"
            width={125}
            height={125}
            className="w-full h-auto object-cover object-center"
          />
        </div>
      )}

      <h2 className="md:text-2xl text-center text-lg mt-0 mb-0">
        Olamide Famojuro
      </h2>
      <h2 className="md:text-xl -mt-1 mb-0 text-xs font-light">
        3D Character Artist/Tutor
      </h2>
      <p
        dangerouslySetInnerHTML={{ __html: bio }}
        className="max-w-4xl text-xs md:text-base  mx-auto mt-2 px-6 text-center leading-4 opacity-90 md:leading-[23px]"
      />
      {/* <Link
        href={"/contact"}
        className="text-center my-5 mb-2 text mt-10 px-12 py-2 tracking-tighter text-white rounded-3xl border border-1"
      >
        Contact
      </Link> */}
      <div className="mt-10 w-full flex justify-center items-center">
        <Brands allBrands={allBrands || []} />
      </div>
    </section>
  );
};

export default About;
