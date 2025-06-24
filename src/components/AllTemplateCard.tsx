import Image from "next/image";
import { Button } from "./ui/button";
import * as motion from "motion/react-client";

const AllTemplateCard = () => {
  return (
    <motion.div
      className="pt-4 xl:ml-20 xl:my-20 rounded-xl shadow-lg outline-gray-400"
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.2, ease: "easeOut" }}
      viewport={{ once: true, amount: 0.3 }}
      whileHover={{ scale: 0.98 }}
    >
      <div className="p-4 flex flex-col gap-4">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d879651220498425632aea_brix-templates-techpool-x-webflow-template.svg"
          alt="BRIX Templates - Techpool X Webflow Template"
          height={60}
          width={60}
          className="m-4 rounded-2xl   object-cover w-[60px] h-[60px]
    md:w-[100px] md:h-[100px]"
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
          className="m-4 rounded-2xl   object-cover w-11/12 h-[350px] sm:h-[400px] md:h-[450px] lg:h-[400px]"
        />
      </div>
    </motion.div>
  );
};

export default AllTemplateCard;
