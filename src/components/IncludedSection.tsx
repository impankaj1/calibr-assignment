import Image from "next/image";

interface SectionProps {
  imgSrc: string;
  descNumber?: string;
  descText: string;
}

const IncludedSection = (props: SectionProps) => {
  const { imgSrc, descNumber, descText } = props;
  return (
    <div className="w-full shadow-lg outline bg-white not-last:outline-gray-200 rounded-2xl  flex flex-col hover: items-center">
      <Image
        width={400}
        height={400}
        src={imgSrc}
        alt={descText}
        className="rounded-t-2xl"
      />
      <h1 className="text-center  py-6 text-xl font-semibold">
        {descNumber && (
          <span className="text-primary">{`${descNumber}+ `}</span>
        )}{" "}
        {descText}
      </h1>
    </div>
  );
};

export default IncludedSection;
