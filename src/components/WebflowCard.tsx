import Image from "next/image";
import { Button } from "./ui/button";

const WebflowCard = () => {
  return (
    <div className="pt-4 outline rounded-xl text-white bg-primary shadow-lg outline-gray-400">
      <div className="p-4 flex flex-col gap-4">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/65283eca6bd8a4efebbadc9a_webflow-logo.svg"
          alt="figma icon"
          height={60}
          width={60}
          className="m-4 rounded-2xl   object-cover w-[240px] h-[240px]
    sm:w-[300px] sm:h-[300px]
    md:w-[100px] md:h-[100px]
    lg:w-[350px] lg:h-[350px] xl:w-[400px] xl:h-[400px]"
        />
        <div className="m-4 space-y-4">
          <h2 className="text-2xl md:text-4xl font-semibold">
            Buy now on Webflow
          </h2>
          <p className="my-4 text-lg md:text-xl">
            Get the Techpool X Webflow Template today, and take your website
            design to the next level.
          </p>
          <Button
            className="w-full my-2 text-xl p-4 font-semibold text-primary"
            variant={"outline"}
          >
            Buy Template
          </Button>
        </div>
      </div>
      <div className="mt-10">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d87886aeb2f6c3c03c60a8_techpool-webflow-templates-brix-templates-p-1600.png"
          alt="Buy Template - Techpool X Webflow Template"
          height={800}
          width={800}
          className="m-4 rounded-2xl   object-cover w-[330px] h-[350px]
    sm:w-[330px] sm:h-[400px]
    md:w-[330px] md:h-[450px]
    lg:w-[500px] lg:h-[500px] xl:w-[550px] xl:h-[500px]"
        />
      </div>
    </div>
  );
};

export default WebflowCard;
