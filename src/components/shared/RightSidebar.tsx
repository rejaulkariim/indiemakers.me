import { getHotProduct } from '@/lib/actions/product.action';
import Image from 'next/image';
import Link from 'next/link';

const RightSidebar = async () => {
  const hotProducts = await getHotProduct();

  return (
    <div className="flex flex-col gap-4 mt-4 sm:sticky top-24">
      <h4 className="font-bold">Recommended</h4>
      {hotProducts.map((product) => (
        <Link
          href={`/product/${product.slug}`}
          key={product._id}
          className="border p-2 border-muted/50 hover:bg-accent transition-all rounded-lg duration-300"
        >
          <div className="flex gap-4 items-center">
            <Image
              src={product.image}
              alt={product.name}
              height={100}
              width={100}
              className="h-10 w-10 object-contain rounded-lg"
            />
            <div>
              <h1 className="font-semibold">{product.name}</h1>
              <p className="text-sm paragraph">
                {product.title.substring(0, 25)}...
              </p>
            </div>
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RightSidebar;
