import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  const fetchVideos = async () => {
    const response = await fetch(YOUTUBE_API);
    const resp = await response.json();
    setVideos(resp.items);
  };
  useEffect(() => {
    fetchVideos();
  }, []);
  return (
    <div className="flex flex-wrap  justify-center items-center mt-4 ">
      {videos?.map((video) => (
        <Link key={video.id} to={"/watch?v=" + video.id}>
          <Videocard  video={video} />
        </Link>
      ))}
    </div>
  );
};

export default Videocontainer;
