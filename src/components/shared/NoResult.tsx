import Image from 'next/image';

interface Props {
  title: string;
  description: string;
}

const NoResult = ({ title, description }: Props) => {
  return (
    <div className="flex w-full flex-col space-y-2">
      <Image
        src="/assets/logo.png"
        height={100}
        width={100}
        alt="logo"
        className="rounded-lg border object-contain h-10 w-10 "
      />
      <h2 className="font-bold bg-gradient-to-r from-purple-500 to-pink-500 bg-clip-text text-transparent">
        {title}
      </h2>
      <p className="paragraph">{description}</p>
    </div>
  );
};

export default NoResult;
