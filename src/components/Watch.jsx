import { useSearchParams } from "react-router-dom";
import { GOOGLE_API_KEY } from "../utils/constants";
import { useEffect, useState } from "react";

const Watch = () => {
  const [searchParams] = useSearchParams();
  const [comments, setComments] = useState([]);
  const [toggleComments,setToggleComments] = useState(false)
  const videoId = searchParams.get("v");
  const YOUTUBE_COMMENTS_API =
    "https://youtube.googleapis.com/youtube/v3/commentThreads?part=snippet%2Creplies&videoId=" +
    videoId +
    "&key=" +
    GOOGLE_API_KEY;

  const fetchComments = async () => {
    const response = await fetch(YOUTUBE_COMMENTS_API);
    const resp = await response.json();
    // console.log("response:", resp);
    setComments(resp.items || []);
  };

  useEffect(() => {
    if (videoId) {
      fetchComments();
    }
  }, [videoId]);

  return (
    <div>
      <iframe
        width="1250"
        height="600"
        src={"https://www.youtube.com/embed/" + videoId}
        title="YouTube video player"
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
        referrerPolicy="strict-origin-when-cross-origin"
        allowFullScreen
      ></iframe>
      <button className="w-full p-4 text-2xl bg-slate-700 mt-4" onClick={()=> setToggleComments(!toggleComments)}>Comments</button>
      {toggleComments && <div className="mt-4">
        {comments.map((comment) => (
          <div className="p-2 shadow-md border border-gray" key={comment.id}>
            <div>
              <p className="font-bold">{comment.snippet.topLevelComment.snippet.authorDisplayName}</p>
            <p>{comment.snippet.topLevelComment.snippet.textOriginal}</p>
            </div>
            
          </div>
        ))}
      </div>}
    </div>
  );
};

export default Watch;
