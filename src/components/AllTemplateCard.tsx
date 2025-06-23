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
      <Image
        src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d879651220498425632aea_brix-templates-techpool-x-webflow-template.svg"
        alt="BRIX Templates - Techpool X Webflow Template"
        height={60}
        width={60}
        className="m-4"
      />
      <div className="m-4 space-y-4">
        <h2 className="text-xl font-semibold">Browse all templates</h2>
        <p className="my-4 text-lg">
          Looking for more templates? Browse our collection of 100+ Webflow
          Templates on BRIXTemplates.com
        </p>
        <Button className="w-full my-2 text-xl p-4 font-normal">
          Explore more template{" "}
        </Button>
      </div>
      <div className="mt-10">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d87709819ca50f1d4a9590_webflow-templates-brix-templates-p-1600.png"
          alt="BRIX Templates - Techpool X Webflow Template"
          height={800}
          width={800}
          className="h-80 w-96 object-cover"
        />
      </div>
    </motion.div>
  );
};

export default AllTemplateCard;
