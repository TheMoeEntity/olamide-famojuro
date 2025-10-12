import Image from "next/image";
import logo from "../../../public/olamide_logo_white.png";

export const Footer = () => {
  return (
    <footer className="bg-black w-full flex flex-col gap-5 text-gray-300 pt-8 pb-8">
      <div
        title={"Henry Fame Logo"}
        className={`flex items-center justify-center w-[60px] h-[60px] opacity-70 mx-auto`}
      >
        <Image
          src={logo}
          alt={"Henry Fame Logo"}
          className="w-full h-auto object-cover"
        />
      </div>
      <hr className="h-[0.25px] my-5 opacity-60 border-0 bg-[#ffffffa4]" />
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-sm text-white">
          © {new Date().getFullYear()} Olamide Famojuro. All rights reserved.
        </p>
      </div>
    </footer>
  );
};

export default Footer;
