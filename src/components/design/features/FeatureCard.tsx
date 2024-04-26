import Image from 'next/image';

type TFeatureProps = {
  title: string;
  description: string;
  image: string;
};

const FeatureCard = ({ title, description, image }: TFeatureProps) => {
  return (
    <div className="h-auto bg-card border rounded-xl shadow-md overflow-hidden">
      <Image
        src={image}
        alt="hero"
        width={804}
        height={452}
        className="rounded-t-md border bg-muted transition-colors"
      />

      <div className="my-4 p-4">
        <h2 className="text-xl font-bold">{title}</h2>
        <p className="paragraph mt-2">{description}</p>
      </div>
    </div>
  );
};

export default FeatureCard;
