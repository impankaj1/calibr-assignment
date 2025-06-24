import { cn } from "@/lib/utils";
import BuyTemplateButton from "./BuyTemplateButton";
import Template from "./Template";
import { Button } from "./ui/button";

interface TemplateCardProps {
  header: string;
  description: string;
  idx: number;
}

const TemplateCard = (props: TemplateCardProps) => {
  const { header, description, idx } = props;

  console.log("idx", idx);
  return (
    <div
      className={cn("w-full ", idx % 2 !== 0 ? "lg:flex lg:justify-end" : "")}
    >
      <div className={cn("space-y-6 lg:w-[30rem] ")}>
        <Template header={header} description={description} />
        {header === "Custom Icon Set" ? (
          <div className="mt-6 mb-12 md:flex items-center justify-between ">
            <BuyTemplateButton />
            <div className=" w-full md:flex items-center">
              <Button
                className="p-4 md:p-6 text-xl my-8 w-full md:w-fit "
                variant={"outline"}
              >
                View icon font
              </Button>
            </div>
          </div>
        ) : (
          <div className="mt-6 mb-12 md:flex ">
            <BuyTemplateButton />
          </div>
        )}
      </div>
    </div>
  );
};

export default TemplateCard;
