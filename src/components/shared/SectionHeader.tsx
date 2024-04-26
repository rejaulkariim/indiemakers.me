type THeaderProps = {
  title?: string;
  subtitle: string;
  description: string;
};

const SectionHeader = ({ headerInfo }: { headerInfo: THeaderProps }) => {
  const { title, subtitle, description } = headerInfo;

  return (
    <div className="max-w-3xl mx-auto text-center space-y-4">
      <div className="relative">
        {/* Gradient color */}
        <div className="footer-gradient z-0" />
        {title && (
          <span className="border rounded-full px-6 py-1 text-xs uppercase tracking-wider">
            {title}
          </span>
        )}
      </div>
      <h2 className="text-3xl font-bold text-foreground ">{subtitle}</h2>
      <p className="max-w-prose mx-auto paragraph">{description}</p>
    </div>
  );
};

export default SectionHeader;
