"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import british from "../../public/brands_british.png";
import omen from "../../public/Omen Logog.png";
import magicCarpet from "../../public/magic_carpet.png";
import threeFour from "../../public/343-logo.png";
import microsoft from "../../public/microsoft.png";
import { useClientMediaQuery } from "@/hooks/useClientMediaQuery";

export const Brands = () => {
  const isMobile = useClientMediaQuery("(max-width: 768px)");
  const brands = [
    {
      name: "British Council",
      logo: british,
      dimensions: { width: 95, height: 95 },
    },
    {
      name: "Omen Studio",
      logo: omen,
      dimensions: { width: 77.77, height: 27 },
    },
    {
      name: "Magic Carpet",
      logo: magicCarpet,
      dimensions: { width: 85.13, height: 64 },
    },
    {
      name: "343 Industries",
      logo: threeFour,
      dimensions: { width: 137.14, height: 72 },
    },
    {
      name: "Microsoft",
      logo: microsoft,
      dimensions: { width: 107.75, height: 23 },
    },
  ];
  return (
    <div className="w-full mt-10 flex flex-col justify-center">
      <h3 className="text-center px-3 text-xs">
        Some of the companies I was fortunate to work with
      </h3>
      <div className="grid overflow-x-hidden gap-y-6 p-4 grid-cols-4 place-items-center justify-center items-center">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            style={{
              width: `${isMobile ? brand.dimensions.width : brand.dimensions.width * 2}px`,
              height: `${isMobile ? brand.dimensions.height : brand.dimensions.height * 2}px`,
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
            <Image src={brand.logo} alt={brand.name} fill className="w-full" />
          </motion.div>
        ))}
      </div>
    </div>
  );
};
