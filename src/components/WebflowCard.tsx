import Image from "next/image";
import { Button } from "./ui/button";

const WebflowCard = () => {
  return (
    <div className="pt-4 outline rounded-xl text-white bg-primary shadow-lg outline-gray-400">
      <Image
        src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/65283eca6bd8a4efebbadc9a_webflow-logo.svg"
        alt="figma icon"
        height={60}
        width={60}
        className="m-4 rounded-2xl"
      />
      <div className="m-4 space-y-4">
        <h2 className="text-2xl font-semibold">Buy now on Webflow</h2>
        <p className="my-4 text-lg">
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
      <div className="mt-10">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d87886aeb2f6c3c03c60a8_techpool-webflow-templates-brix-templates-p-1600.png"
          alt="Buy Template - Techpool X Webflow Template"
          height={800}
          width={800}
          className="h-80 w-96 object-cover"
        />
      </div>
    </div>
  );
};

export default WebflowCard;
