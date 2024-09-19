import { useNavigate } from "react-router-dom";

const AlbumItem = ({ album }) => {
  const { id, image, name, desc } = album;
  const navigate = useNavigate();

  return (
    <div
      onClick={() => navigate(`/album/${id}`)}
      className="min-w-[180px] cursor-pointer rounded px-3 py-2 hover:bg-[#ffffff26]"
    >
      <img className="rounded" src={image} alt="Album Image" />
      <p className="mb-1 mt-2 font-bold">{name}</p>
      <p className="text-sm text-slate-200">{desc}</p>
    </div>
  );
};

export default AlbumItem;
