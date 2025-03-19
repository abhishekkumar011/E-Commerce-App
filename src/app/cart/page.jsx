import Image from "next/image";
import React from "react";

const page = () => {
  return (
    <div className="m-10">
      <h1 className="text-center text-5xl font-medium bg-gradient-to-r from-red-200 via-orange-400 to-yellow-700 text-transparent bg-clip-text">
        Shop Cart
      </h1>

      <div className="sm:flex items-center justify-between border-gray-300 border w-full py-5 px-10 rounded-lg shadow-md mt-10">
        <div className="flex items-center gap-8">
          {/* Image */}
          <div className="h-20 w-20 relative rounded-md border-2 border-gray-400">
            <Image src="/shoe.jpg" alt="Nike Running Shoe" fill />
          </div>

          {/* Title and price */}
          <div>
            <h3 className="text-orange-600 text-xl">Nike Shoe by Air</h3>
            <p className="text-gray-700 font-bold text-lg">$2500</p>
          </div>
        </div>

        {/* Delete Button  */}
        <button className="bg-orange-500 text-white px-4 py-2 rounded-md cursor-pointer hover:bg-orange-400">
          Remove
        </button>
      </div>
    </div>
  );
};

export default page;
