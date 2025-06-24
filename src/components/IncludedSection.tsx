"use client";

import Image from "next/image";
import { motion, scale } from "framer-motion";

interface SectionProps {
  imgSrc: string;
  descNumber?: string;
  descText: string;
}

const IncludedSection = (props: SectionProps) => {
  const { imgSrc, descNumber, descText } = props;
  return (
    <motion.div
      whileHover={{ scale: 0.96 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="w-full shadow-lg bg-white rounded-2xl  flex flex-col  ease-in-out items-center">
        <Image
          width={400}
          height={400}
          src={imgSrc}
          alt={descText}
          className="rounded-t-2xl"
        />
        <h1 className="text-center  py-6 text-xl md:text-2xl font-semibold">
          {descNumber && (
            <span className="text-primary">{`${descNumber}+ `}</span>
          )}{" "}
          {descText}
        </h1>
      </div>
    </motion.div>
  );
};

export default IncludedSection;
