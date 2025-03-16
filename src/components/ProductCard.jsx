import Image from "next/image";

const ProductCard = ({ product }) => {
  return (
    <div className="sm:max-w-sm bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden flex flex-col h-[450px]">
      {/* Top Section */}
      <div className="relative h-72 flex justify-center items-center border-b border-gray-300">
        <Image
          src={product.image}
          alt="Nike Running Shoe"
          layout="fill"
          // objectFit="cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-orange-500 truncate">{product.title}</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3">
          {product.description
            .split(" ")
            .slice(0, 15)
            .join(" ")}
        </p>

        {/* Price & Button */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-gray-900">${product.price}</p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-500 cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
