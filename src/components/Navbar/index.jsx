import React from "react";
import { assets } from "../../assets/assets";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const navigate = useNavigate();
  return (
    <>
      <div className="flex w-full items-center justify-between font-semibold">
        <div className="flex items-center gap-2">
          <img
            onClick={() => navigate(-1)}
            className="w-8 cursor-pointer rounded-2xl bg-black p-2"
            src={assets.arrow_left}
            alt="Arrow Right"
          />
          <img
            onClick={() => navigate(1)}
            className="w-8 cursor-pointer rounded-2xl bg-black p-2"
            src={assets.arrow_right}
            alt="Arrow Left"
          />
        </div>
        <div className="flex items-center gap-4">
          <button className="hidden rounded-2xl bg-white px-4 py-1 text-[15px] text-black md:block">
            Explore Premium
          </button>
          <button className="rounded-2xl bg-black px-3 py-1 text-[15px]">
            Install App
          </button>
          <button className="flex h-7 w-7 items-center justify-center rounded-full bg-purple-500 text-black">
            G
          </button>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2">
        <button className="rounded-2xl bg-white px-4 py-1 text-black">
          All
        </button>
        <button className="rounded-2xl bg-black px-4 py-1">Music</button>
        <button className="rounded-2xl bg-black px-4 py-1">Podcasts</button>
      </div>
    </>
  );
};

export default Navbar;
