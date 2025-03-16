import Image from "next/image";

const ProductCard = () => {
  return (
    <div className="w-80 bg-white rounded-2xl shadow-lg border border-gray-300 overflow-hidden">
      {/* Top Section */}
      <div className="relative bg-gradient-to-b from-purple-300 to-purple-500 h-72 flex justify-center items-center">
        <Image
          src="/shoe.jpg"
          alt="Nike Running Shoe"
          layout="fill"
          objectFit="cover"
        />
      </div>

      {/* Bottom Section */}
      <div className="p-5">
        <h2 className="text-lg font-bold text-orange-500">Nike Running Shoe</h2>

        {/* Description */}
        <p className="text-sm text-gray-600 mt-3">
          {`Crossing hardwood comfort with off-court flair. '80s-inspired construction, bold details, and nothing but net style.`
            .split(" ")
            .slice(0, 30)
            .join(" ")}
        </p>

        {/* Price & Button */}
        <div className="mt-4 flex justify-between items-center">
          <p className="text-xl font-bold text-gray-900">$69.99</p>
          <button className="bg-orange-600 text-white px-4 py-2 rounded-lg font-semibold shadow-md hover:bg-orange-500 cursor-pointer">
            Add to cart
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductCard;
