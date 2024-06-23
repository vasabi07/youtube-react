
import Videocard from "./Videocard";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

const SearchVideos = () => {
 const videos = useSelector((store)=> store.search.results);
 if (!videos || videos.length === 0) {
    return <div>No results found</div>;
  }
 console.log(videos);
  return (
    <div className="flex flex-wrap ">
      {videos?.map((video) => (
        <Link key={video.id.videoId} to={"/watch?v=" + (video.id.videoId || video.id.channelId)}>
          <Videocard  video={video} />
        </Link>
      ))}
    </div>
  );
};

export default SearchVideos;