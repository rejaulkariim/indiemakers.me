import Image from 'next/image';
import Link from 'next/link';

interface MetricProps {
  imgUrl: string;
  alt: string;
  value: string | number;
  title: string;
  href?: string;
  textStyles?: string;
  isAuthor?: boolean;
}

const Metric = ({
  imgUrl,
  alt,
  value,
  title,
  href,
  textStyles,
  isAuthor,
}: MetricProps) => {
  const metricContent = (
    <>
      <Image
        src={imgUrl}
        width={16}
        height={16}
        alt={alt}
        className={`object-contain ${href ? 'rounded-full' : ''}`}
      />

      <p className={`${textStyles}`}>
        {value}
        <span className={` ${isAuthor ? 'max-sm:hidden' : 'hidden'}`}>
          {title}
        </span>
      </p>
    </>
  );

  if (href) {
    return (
      <Link href={href} className="">
        {metricContent}
      </Link>
    );
  }

  return <div className="flex items-center gap-1">{metricContent}</div>;
};

export default Metric;
