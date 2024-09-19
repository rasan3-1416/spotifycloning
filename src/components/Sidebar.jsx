import { useNavigate } from "react-router-dom";
import { assets } from "../assets/assets.js";

const Sidebar = () => {
  const navigate = useNavigate();
  return (
    <div className="hidden h-full w-[25%] flex-col gap-2 p-2 text-white lg:flex">
      <div className="flex h-[15%] flex-col justify-around rounded bg-[#121212]">
        <div
          onClick={() => navigate("/")}
          className="flex cursor-pointer items-center gap-3 pl-8"
        >
          <img className="w-6" src={assets.home_icon} alt="Home Icon" />
          <span className="font-bold">Home</span>
        </div>
        <div className="flex cursor-pointer items-center gap-3 pl-8">
          <img className="w-6" src={assets.search_icon} alt="Home Icon" />
          <span className="font-bold">Home</span>
        </div>
      </div>
      <div className="h-[85%] rounded bg-[#121212]">
        <div className="flex items-center justify-between p-4">
          <div className="flex items-center gap-3">
            <img className="w-8" src={assets.stack_icon} alt="Stack Icon" />
            <span className="font-semibold">Your Library</span>
          </div>
          <div className="flex items-center gap-3">
            <img className="w-5" src={assets.arrow_icon} alt="Arrow Icon" />
            <img className="w-5" src={assets.plus_icon} alt="Plus Icon" />
          </div>
        </div>
        <div className="m-2 flex flex-col items-start justify-start gap-1 rounded bg-[#242424] p-4 pl-4 font-semibold">
          <h1>Create your first playlist</h1>
          <p className="font-light">It's easy we will help you.</p>
          <button className="mt-4 rounded-full bg-white px-4 py-1.5 text-[15px] text-black">
            Creat Playlist
          </button>
        </div>
        <div className="m-2 mt-4 flex flex-col items-start justify-start gap-1 rounded bg-[#242424] p-4 pl-4 font-semibold">
          <h1>Lets find podcasts for your</h1>
          <p className="font-light">We'll keep you updated on new episodes</p>
          <button className="mt-4 rounded-full bg-white px-4 py-1.5 text-[15px] text-black">
            Browse Podcasts
          </button>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;
