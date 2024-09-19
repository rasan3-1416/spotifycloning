import { useContext } from "react";
import { assets, songsData } from "../assets/assets";
import { PlayerContext } from "../context/PlayerContext";

const Player = () => {
  const {
    track,
    seekBar,
    seekBg,
    playStatus,
    play,
    pause,
    time,
    prevSong,
    nextSong,
    seekSong,
  } = useContext(PlayerContext);

  return (
    <div className="flex h-[10%] items-center justify-between bg-black px-4 text-white">
      <div className="hidden items-center gap-4 lg:flex">
        <img className="w-12" src={track.image} alt="Song Cover" />
        <div className="flex flex-col">
          <span>{track.name}</span>
          <span>{track.desc.slice(0, 12)}</span>
        </div>
      </div>
      <div className="m-auto flex flex-col items-center gap-1">
        <div className="flex gap-4">
          <img
            className="w-4 cursor-pointer"
            src={assets.shuffle_icon}
            alt="Shuffle Icon"
          />
          <img
            onClick={prevSong}
            className="w-4 cursor-pointer"
            src={assets.prev_icon}
            alt="Previous Icon"
          />
          <img
            onClick={playStatus ? pause : play}
            className="w-4 cursor-pointer"
            src={playStatus ? assets.pause_icon : assets.play_icon}
            alt="Play Icon"
          />
          <img
            onClick={nextSong}
            className="w-4 cursor-pointer"
            src={assets.next_icon}
            alt="Next Icon"
          />
          <img
            className="w-4 cursor-pointer"
            src={assets.loop_icon}
            alt="Loop Icon"
          />
        </div>
        <div className="flex items-center gap-5">
          <span>
            {time.currentTime.min}:{time.currentTime.sec}
          </span>
          <div
            ref={seekBg}
            onClick={seekSong}
            className="w-[50vw] max-w-[500px] cursor-pointer rounded-full bg-gray-300"
          >
            <hr
              ref={seekBar}
              className="h-1 w-0 rounded-full border-none bg-green-800"
            />
          </div>
          <span>
            {time.totalTime.min}:{time.totalTime.sec}
          </span>
        </div>
      </div>
      <div className="hidden items-center gap-2 opacity-75 lg:flex">
        <img className="w-4" src={assets.plays_icon} alt="Plays Icon" />
        <img className="w-4" src={assets.mic_icon} alt="Mic Icon" />
        <img className="w-4" src={assets.queue_icon} alt="Queue Icon" />
        <img className="w-4" src={assets.speaker_icon} alt="Speaker Icon" />
        <img className="w-4" src={assets.volume_icon} alt="Volume Icon" />
        <div className="h-1 w-20 rounded bg-slate-50"></div>
        <img
          className="w-4"
          src={assets.mini_player_icon}
          alt="Mini Player Icon"
        />
        <img className="w-4" src={assets.zoom_icon} alt="Zoom Icon" />
      </div>
    </div>
  );
};

export default Player;
