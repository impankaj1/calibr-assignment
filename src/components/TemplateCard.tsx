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
        <div className="mt-6 mb-12">
          <BuyTemplateButton />
          <Button
            className="p-4 text-xl w-full font-normal"
            variant={"outline"}
          >
            View icon font
          </Button>
        </div>
      ) : (
        <div className="mt-6 mb-12">
          <BuyTemplateButton />
        </div>
      )}
    </div>
  );
};

export default TemplateCard;
