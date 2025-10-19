"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import british from "../../public/brands_british.png";
import omen from "../../public/Omen Logog.png";
import magicCarpet from "../../public/magic_carpet.png";
import threeFour from "../../public/343-logo.png";
import microsoft from "../../public/microsoft.png";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";
import { SiteBrand } from "@/types/home.types";

export const Brands: React.FC<{ allBrands: SiteBrand[] }> = ({ allBrands }) => {
  const isMobile = useClientMediaQuery("(max-width: 768px)");
  const brands = allBrands;
  return (
    <div className="w-full mt-10 flex flex-col justify-center">
      <h3 className="text-center px-3 md:text-2xl">
        Some of the companies I was fortunate to work with
      </h3>
      <div className="grid max-w-6xl gap-x-4 mx-auto overflow-x-hidden gap-y-6 p-4 grid-cols-4 place-items-center justify-center items-center">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            style={{
              width: `${isMobile ? brand.dimensions.width * 0.3 : brand.dimensions.width * 0.7}px`,
              height: `${isMobile ? brand.dimensions.height * 0.3 : brand.dimensions.height * 0.7}px`,
            }}
            className={`relative w-full flex items-center justify-center md:grayscale hover:grayscale-0 transition-all duration-300 ${
              index === brands.length - 1 && brands.length % 4 !== 0
                ? "col-span-4"
                : ""
            }`}
            whileHover={{
              scale: 1.1,
              rotate: [0, -5, 5, -5, 5, 0],
              transition: { duration: 0.5, ease: "easeInOut" },
            }}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1, duration: 0.5 }}
          >
            <Image
              src={brand.logo}
              alt={brand.name}
              fill
              quality={100}
              className="w-full object-cover object-center"
            />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
