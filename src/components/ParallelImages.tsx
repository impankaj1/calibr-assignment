"use client";

import Image from "next/image";
import {
  motion,
  useScroll,
  useTransform,
  useSpring,
} from "framer-motion";
import React from "react";

const imagesRow1 = [
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9a3c93d01422113e04df_home-main-page-techpool-x-webflow-template.jpg",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621ad09281ff43f2b656_about-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621a15788defeeafd02b_author-single-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d862197b4f9ea4d6d427b7_blog-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621a98654dc26cbb8e8d_blog-post-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621b819ca55716495264_pricing-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621a189b553023310df1_careers-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621a4a846304615aa35c_features-techpool-x-webflow-template.png",
];

const imagesRow2 = [
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621a98654dc26cbb8e8d_blog-post-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621b819ca55716495264_pricing-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621a189b553023310df1_careers-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621a4a846304615aa35c_features-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9a3c93d01422113e04df_home-main-page-techpool-x-webflow-template.jpg",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621ad09281ff43f2b656_about-techpool-x-webflow-template.png",
  "https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8621a15788defeeafd02b_author-single-techpool-x-webflow-template.png",
];

const ParallaxImageRows: React.FC = () => {
  const { scrollYProgress } = useScroll();

  const smoothProgress = useSpring(scrollYProgress, {
    stiffness: 50,
    damping: 20,
  });

  // Infinite horizontal scroll simulation: map to really large distances
  const firstRowX = useTransform(smoothProgress, [0, 1], ["0%", "-200%"]);
  const secondRowX = useTransform(smoothProgress, [0, 1], ["0%", "100%"]);

  return (
    <div className="relative  h-[50vh] sm:h-[60vh] md:h-[70vh] lg:h-[80vh] xl:h-[90h] 2xl:h-[100vh] my-5 overflow-hidden">
      {/* First Row - Moving Left */}
      <div className="absolute inset-0 flex flex-col z-0">
        <div className="h-2/6 md:h-1/6 bg-white" />
        <div className="h-4/6 md:h-5/6 bg-blue-500" />
      </div>

      <motion.div
        style={{ x: firstRowX }}
        className="absolute top-0 flex gap-6 w-max"
      >
        {[...imagesRow1, ...imagesRow1].map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, rotate: 2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Image ${index + 1}`}
              width={200}
              height={200}
              className="object-cover w-[200px] h-[200px]
    sm:w-[250px] sm:h-[2500px]
    md:w-[300px] md:h-[300px]
    lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]"
              priority
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Second Row - Moving Right */}
      <motion.div
        style={{ x: secondRowX }}
        className="absolute top-3/6 flex gap-6 w-max"
      >
        {[...imagesRow2, ...imagesRow2].map((src, index) => (
          <motion.div
            key={index}
            whileHover={{ scale: 1.02, rotate: -2 }}
            transition={{ type: "spring", stiffness: 300 }}
            className="rounded-xl overflow-hidden shadow-lg"
          >
            <Image
              src={src}
              alt={`Image ${index + 5}`}
              width={200}
              height={200}
              className="object-cover w-[200px] h-[200px]
    sm:w-[250px] sm:h-[2500px]
    md:w-[300px] md:h-[300px]
    lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]"
              priority
            />
          </motion.div>
        ))}
      </motion.div>
    </div>
  );
};

export default ParallaxImageRows;
