"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import british from "../../public/brands_british.png";
import omen from "../../public/Omen Logog.png";
import magicCarpet from "../../public/magic_carpet.png";
import threeFour from "../../public/343-logo.png";
import microsoft from "../../public/microsoft.png";

const brands = [
  { name: "British Council", logo: british },
  { name: "Omen Studio", logo: omen },
  { name: "Magic Carpet", logo: magicCarpet },
  { name: "343 Industries", logo: threeFour },
  { name: "Microsoft", logo: microsoft },
];

export const Brands = () => {
  return (
    <div className="w-full mt-10 flex flex-col justify-center">
      <h3 className="text-center px-3">
        Some of the companies I was fortunate to work with
      </h3>
      <div className="flex flex-wrap mt-7 md:flex-nowrap justify-center gap-8 max-w-7xl mx-auto">
        {brands.map((brand, index) => (
          <motion.div
            key={index}
            className="relative w-full flex items-center justify-center grayscale hover:grayscale-0 transition-all duration-300"
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
            {index === 2 || index === 0 ? (
              <div className="relative h-[150px] mt-5 w-[150px] flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt="Dove Hospital"
                  quality={100}
                  fill
                  sizes="100vw"
                  className="object-cover w-full h-auto"
                />
              </div>
            ) : (
              <div className="relative w-[150px] h-auto md:h-[150px] flex items-center justify-center">
                <Image
                  src={brand.logo}
                  alt="Dove Hospital"
                  quality={100}
                  sizes="100vw"
                  className="object-cover w-full h-auto"
                />
              </div>
            )}
          </motion.div>
        ))}
      </div>
    </div>
  );
};
