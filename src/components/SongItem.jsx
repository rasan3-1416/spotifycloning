import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const SongItem = ({ song }) => {
  const { id, image, name, desc } = song;
  const { playWithId } = useContext(PlayerContext);

  return (
    <div
      onClick={() => playWithId(id)}
      className="min-w-[180px] cursor-pointer rounded px-3 py-2 hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="Song Image" />
      <p className="mb-1 mt-2 font-bold">{name}</p>
      <p className="font-sm text-slate-200">{desc}</p>
    </div>
  );
};

export default SongItem;
