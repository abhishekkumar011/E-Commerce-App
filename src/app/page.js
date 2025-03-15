import Image from "next/image";

export default function Home() {
  return (
    <div className="m-10 flex flex-col gap-8">
      <h1 className="text-center text-5xl font-medium bg-gradient-to-r from-red-200 via-orange-400 to-yellow-700 text-transparent bg-clip-text">
        StyleHive
      </h1>

      {/* Search Bar  */}
      <div className="px-10 py-4 rounded-full shadow-md flex items-center gap-4 md:gap-6 flex-col md:flex-row">
        <Image
          className="hidden md:flex"
          src="/shirt.jpg"
          alt="shirt logo"
          width={40}
          height={10}
        />

        <div className="border border-gray-300 flex px-4 py-2 bg-gray-200 rounded-lg w-full">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            x="0px"
            y="0px"
            width="25"
            height="25"
            viewBox="0 0 50 50"
            strokeWidth={2}
            stroke="black"
          >
            <path d="M 21 3 C 11.621094 3 4 10.621094 4 20 C 4 29.378906 11.621094 37 21 37 C 24.710938 37 28.140625 35.804688 30.9375 33.78125 L 44.09375 46.90625 L 46.90625 44.09375 L 33.90625 31.0625 C 36.460938 28.085938 38 24.222656 38 20 C 38 10.621094 30.378906 3 21 3 Z M 21 5 C 29.296875 5 36 11.703125 36 20 C 36 28.296875 29.296875 35 21 35 C 12.703125 35 6 28.296875 6 20 C 6 11.703125 12.703125 5 21 5 Z"></path>
          </svg>
          <input
            type="text"
            className="bg-gray-200 outline-none px-2 w-full"
            placeholder="Search ..."
          />
        </div>
        <button className="font-semibold bg-gray-900 text-white px-4 py-2 rounded-full cursor-pointer">
          Search
        </button>

        <div className="hidden gap-6 items-center md:flex">
          <h4 className="cursor-pointer text-gray-700">Explore</h4>
          <h4 className="cursor-pointer text-gray-700">Trending</h4>
        </div>
      </div>
    </div>
  );
}
