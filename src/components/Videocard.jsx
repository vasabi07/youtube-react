/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const Videocard = ({video}) => {
  if(!video){
    return null;
  }
    const {snippet,statistics} = video;

   const {thumbnails,title,channelTitle} = snippet
  
  return (
    <div className="h-[300px] bg-slate-800  m-2 shadow-lg rounded-md w-72">
        <img className="rounded-md" src={thumbnails?.medium.url} alt="thumbnail" />
        <ul className="p-2">
        <li className="font-bold">{channelTitle}</li>
          <li>{title}</li> 
          {statistics && <li>{statistics?.viewCount} views</li>}
        </ul>
    </div>
  )
}

export default Videocard