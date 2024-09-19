import { useParams } from "react-router-dom";
import { albumsData, assets, songsData } from "../assets/assets";
import { useContext } from "react";
import { PlayerContext } from "../context/PlayerContext";

const DisplayAlbum = () => {
  const { id } = useParams();
  const albumData = albumsData[id];
  const { playWithId } = useContext(PlayerContext);

  return (
    <>
      <div className="mt-10 flex flex-col gap-8 md:flex-row md:items-end">
        <img
          className="w-48 rounded"
          src={albumData.image}
          alt="Albums Image"
        />
        <div className="flex flex-col">
          <span>Playlist</span>
          <h2 className="md;text-7xl mb-4 text-5xl font-bold">
            {albumData.name}
          </h2>
          <h4>{albumData.desc}</h4>
          <div className="mt-1 flex items-center gap-2">
            <img
              className="inline-block w-5"
              src={assets.spotify_logo}
              alt="Sotify Logo"
            />
            <b>Sotify</b>• 1,323,147 likes • <b>50 songs</b>
            about 2 hr 30 min
          </div>
        </div>
      </div>
      <div className="mb-4 mt-10 grid grid-cols-3 pl-2 text-[#a7a7a7] sm:grid-cols-4">
        <span>
          <span className="mr-4 font-bold">#</span>Title
        </span>
        <span>Album</span>
        <span className="hidden sm:block">Date Added</span>
        <img className="m-auto w-4" src={assets.clock_icon} alt="Clock Icon" />
      </div>
      <hr />
      {songsData.map((item, index) => (
        <div
          onClick={() => playWithId(item.id)}
          className="grid cursor-pointer grid-cols-3 items-center gap-2 p-2 text-[#a7a7a7] hover:bg-[#ffffff2b] sm:grid-cols-4"
          key={index}
        >
          <span className="text-white">
            <span className="mr-4 font-bold text-[#a7a7a7]">{index + 1}</span>
            <img
              className="mr-5 inline w-10"
              src={item.image}
              alt="Song Cover Image"
            />
            {item.name}
          </span>
          <span className="text-[15px]">{albumData.name}</span>
          <span className="hidden text-[15px] sm:block">5 days ago</span>
          <span className="text-center text-[15px]">{item.duration}</span>
        </div>
      ))}
    </>
  );
};

export default DisplayAlbum;
