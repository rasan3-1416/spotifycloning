import { Route, Routes, useLocation } from "react-router-dom";
import DisplayHome from "./DisplayHome";
import RootLayout from "../RootLayout/RootLayout";
import DisplayAlbum from "./DisplayAlbum";
import { useEffect, useRef } from "react";
import { albumsData } from "../assets/assets";

const Display = () => {
  const displayRef = useRef();
  const location = useLocation();
  const albumStatus = location.pathname.includes("album");
  const albumId = albumStatus && location.pathname.slice(-1);
  const albumBackground = albumsData[Number(albumId)].bgColor;

  useEffect(() => {
    if (albumStatus) {
      displayRef.current.style.background = `linear-gradient(${albumBackground}, #121212)`;
    } else {
      displayRef.current.style.background = `#121212`;
    }
  });

  return (
    <div
      ref={displayRef}
      className="m-2 w-full overflow-auto rounded bg-[#121212] px-6 pt-4 text-white lg:ml-0 lg:w-[75%]"
    >
      <Routes>
        <Route element={<RootLayout />}>
          <Route path="/" element={<DisplayHome />}></Route>
          <Route path="/album/:id" element={<DisplayAlbum />}></Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Display;
