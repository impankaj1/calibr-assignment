import Image from "next/image";
import { Button } from "./ui/button";

const FigmaIncludedCard = () => {
  return (
    <div className="pt-4 outline rounded-xl shadow-lg outline-gray-400">
      <Image
        src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8570c330928d93d285dec_figma-file-included-logo-techpool-x-webflow-template.svg"
        alt="figma icon"
        height={40}
        width={40}
        className="m-4"
      />
      <div className="m-4 space-y-4">
        <h2 className="text-xl font-semibold"> Figma file included</h2>
        <p className="my-4 text-lg">
          Send us an email to{" "}
          <a href="" className="text-primary">
            techpoolx@brixtemplates.com
          </a>{" "}
          with your purchase receipt, and we will send you the editable Figma
          file for the Techpool X template.
        </p>
        <Button
          className="w-full my-2 text-xl p-4 font-normal"
          variant={"outline"}
        >
          Request Figma File
        </Button>
      </div>
      <div className="mt-10">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9a3ce78d423b4a8800d5_figma-file-included-techpool-x-webflow-template.jpg"
          alt="figma icon"
          height={500}
          width={500}
        />
      </div>
    </div>
  );
};

export default FigmaIncludedCard;
