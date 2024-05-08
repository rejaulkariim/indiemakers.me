import { getHotProduct } from '@/lib/actions/product.action';
import Image from 'next/image';
import Link from 'next/link';

const RightSidebar = async () => {
  const hotProducts = await getHotProduct();

  return (
    <div className="flex flex-col gap-2 mt-4 sm:sticky top-24">
      <h4 className="font-bold">Recommended</h4>
      {hotProducts.map((product) => (
        <Link
          href={`/product/${product.slug}`}
          key={product._id}
          className="p-1.5 hover:bg-accent transition-all rounded-lg duration-300"
        >
          <div className="flex gap-x-2 items-center">
            <Image
              src={product.image}
              alt={product.name}
              height={100}
              width={100}
              priority
              className="aspect-square h-8 w-8 object-contain border rounded-md"
            />
            <p className="font-semibold">{product.name}</p>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RightSidebar;
