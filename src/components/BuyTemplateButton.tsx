import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const BuyTemplateButton = () => {
  return (
    <div className=" w-full md:flex justify-center items-center my-8">
      <Button className="p-4 md:p-6 text-xl w-full md:w-fit">
        Buy Template{" "}
        <span>
          <ArrowRight />
        </span>
      </Button>
    </div>
  );
};

export default BuyTemplateButton;
