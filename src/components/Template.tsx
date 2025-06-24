interface TemplateProps {
  header: string;
  description: string;
}

const Template = (props: TemplateProps) => {
  const { header, description } = props;
  return (
    <div className="space-y-4 my-6">
      <h2 className="text-2xl font-semibold md:text-4xl">{header}</h2>
      <h3 className="text-xl space-y-4 text-gray-600">
        {description.split("/n").map((line, idx) => (
          <p key={idx}>{line}</p>
        ))}
      </h3>
    </div>
  );
};

export default Template;
