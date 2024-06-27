import { useEffect, useState } from "react";
import { YOUTUBE_API } from "../utils/constants";
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
import ShimmerUI from "./ShimmerUI";

const Videocontainer = () => {
  const [videos, setVideos] = useState([]);
  const [loading, setLoading] = useState(true);

  const fetchVideos = async () => {
    try {
      const response = await fetch(YOUTUBE_API);
      const resp = await response.json();
      if (resp.items) {
        setVideos(resp.items);
      } else {
        console.error("Response does not contain items");
      }
    } catch (error) {
      console.error("Failed to fetch videos:", error);
    } finally {
      setLoading(false); // Set loading to false once fetching is done
    }
  };

  useEffect(() => {
    fetchVideos() // Delay the fetch by 5 seconds
  }, []);

  return (
    <div className="flex flex-wrap justify-center items-center mt-4 ">
      {loading ? (
        <ShimmerUI />
      ) : (
        videos.map((video) => (
          <Link key={video.id} to={"/watch?v=" + video.id}>
            <Videocard video={video} />
          </Link>
        ))
      )}
    </div>
  );
};

export default Videocontainer;
