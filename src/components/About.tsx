import Image from "next/image";
// import Link from "next/link";
import React from "react";
import { Brands } from "./Brands";

const About = async () => {
  const aboutUrl = `https://cdn.sanity.io/images/m0k79prg/production/d62af99be61ead800a3cc614aa513ba12371e966-1869x2792.jpg`;

  return (
    <section className="bg-black w-full flex flex-col items-center justify-center gap-2 text-white pt-7 pb-28">
      {aboutUrl && (
        <div className="w-[134px] md:w-[125px] flex justify-center items-center h-[134px] md:h-[125px] rounded-full overflow-hidden mb-6">
          <Image
            src={aboutUrl}
            alt="Olamide Famojuro Profile Picture"
            width={125}
            height={125}
            className="w-full h-auto object-cover object-center"
          />
        </div>
      )}

      <h2 className="text-2xl text-center mt-0 font-medium mb-0">
        Olamide Famojuro
      </h2>
      <h2 className="text-xl mb-0">3D Character Artist/Tutor</h2>
      <p className="max-w-4xl mx-auto mt-3 px-6 md:text-center leading-[23px]">
        Famojuro Olamide is a multidisciplinary 3D artist with a strong
        foundation in both traditional and digital art. With a passion for
        storytelling and visual design, he has contributed to a variety of
        creative projects spanning games, animation, collectibles, and
        character-driven short films. <br />
        He began his journey as a 2D illustrator before transitioning into 3D
        character art, where he now specializes in modeling, sculpting,
        texturing, and shading. Known for his stylized yet grounded approach,
        Henry has collaborated with indie studios and creative teams to develop
        memorable characters and assets for both cinematic and interactive
        experiences. <br />
        In addition to production work, Olamide has mentored aspiring artists,
        sharing his knowledge of anatomy, design, and digital sculpting. He
        continues to expand his artistic reach—pursuing personal projects,
        exhibiting his work online, and exploring new ways to blend traditional
        influence with modern pipelines. <br /> Henry is currently focused on
        creating emotionally-driven character art that bridges stylization and
        realism, while building a body of work that reflects his love for form,
        storytelling, and visual impact
      </p>
      {/* <Link
        href={"/contact"}
        className="text-center my-5 mb-2 text mt-10 px-12 py-2 tracking-tighter text-white rounded-3xl border border-1"
      >
        Contact
      </Link> */}
      <div className="mt-10 w-full flex justify-center items-center">
        <Brands />
      </div>
    </section>
  );
};

export default About;
