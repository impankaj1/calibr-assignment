import BuyTemplateButton from "./BuyTemplateButton";
import Template from "./Template";
import { Button } from "./ui/button";

interface TemplateCardProps {
  header: string;
  description: string;
}

const TemplateCard = (props: TemplateCardProps) => {
  const { header, description } = props;
  return (
    <div className="space-y-6 ">
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
  );
};

export default TemplateCard;
