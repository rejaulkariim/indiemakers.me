type THeaderInfo = {
  title: string | JSX.Element;
  subtitle: string;
};

const SectionHeader = ({ title, subtitle }: THeaderInfo) => {
  return (
    <div className="max-w-2xl mx-auto text-center space-y-2">
      <h3 className="text-xl sm:text-3xl text-foreground">{title}</h3>
      <p className="paragraph">{subtitle}</p>
    </div>
  );
};

export default SectionHeader;
