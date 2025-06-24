import Image from "next/image";
import { Button } from "./ui/button";
import * as motion from "motion/react-client";

const AllTemplateCard = () => {
  return (
    <motion.div
      className="pt-4 outline rounded-xl shadow-lg outline-gray-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
    >
      <div className="p-4 flex flex-col gap-4">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d879651220498425632aea_brix-templates-techpool-x-webflow-template.svg"
          alt="BRIX Templates - Techpool X Webflow Template"
          height={60}
          width={60}
          className="m-4 rounded-2xl   object-cover w-[240px] h-[240px]
    sm:w-[300px] sm:h-[300px]
    md:w-[100px] md:h-[100px]
    lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]"
        />
        <div className="m-4 space-y-4">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Browse all templates
          </h2>
          <p className="my-4 text-lg md:text-xl">
            Looking for more templates? Browse our collection of 100+ Webflow
            Templates on BRIXTemplates.com
          </p>
          <Button className="w-full my-2 text-xl p-4 font-normal">
            Explore more template{" "}
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d87709819ca50f1d4a9590_webflow-templates-brix-templates-p-1600.png"
          alt="BRIX Templates - Techpool X Webflow Template"
          height={800}
          width={800}
          className="m-4 rounded-2xl   object-cover w-[330px] h-[350px]
    sm:w-[330px] sm:h-[400px]
    md:w-[330px] md:h-[450px]
    lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[500px]"
        />
      </div>
    </motion.div>
  );
};

export default AllTemplateCard;
