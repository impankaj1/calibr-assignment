import Image from "next/image";
import { Button } from "./ui/button";

const FigmaIncludedCard = () => {
  return (
    <div className=" rounded-xl shadow-lg flex flex-col lg:flex-row ">
      <div className="p-8">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/62d8570c330928d93d285dec_figma-file-included-logo-techpool-x-webflow-template.svg"
          alt="figma icon"
          height={40}
          width={40}
          className="m-4"
        />
        <div className="m-4 space-y-4">
          <h2 className="text-2xl md:text-3xl font-semibold">
            {" "}
            Figma file included
          </h2>
          <p className="my-4 text-lg md:text-xl text-gray-600">
            Send us an email to{" "}
            <a href="" className="text-primary">
              techpoolx@brixtemplates.com
            </a>{" "}
            with your purchase receipt, and we will send you the editable Figma
            file for the Techpool X template.
          </p>
          <Button
            className="w-full my-2 text-xl p-4 font-normal md:w-fit md:p-6"
            variant={"outline"}
          >
            Request Figma File
          </Button>
        </div>
      </div>
      <div className="mt-10 w-full">
        <Image
          src="https://cdn.prod.website-files.com/61800161ed9edf6bdd5c6c4d/655b9a3ce78d423b4a8800d5_figma-file-included-techpool-x-webflow-template.jpg"
          alt="figma icon"
          height={500}
          width={500}
          className="object-cover w-[500px] h-[500px]
    sm:w-[600px] sm:h-[600px]
    md:w-[800px] md:h-[600px]
    lg:w-[650px] lg:h-[650px] xl:w-[700px] xl:h-[400px]"
        />
      </div>
    </div>
  );
};

export default FigmaIncludedCard;
