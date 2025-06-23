import { ArrowRight } from "lucide-react";
import { Button } from "./ui/button";

const BuyTemplateButton = () => {
  return (
    <Button className="p-4 text-xl w-full my-8">
      Buy Template{" "}
      <span>
        <ArrowRight />
      </span>
    </Button>
  );
};

export default BuyTemplateButton;
