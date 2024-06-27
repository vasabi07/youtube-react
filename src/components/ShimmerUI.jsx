import Videocard from "./Videocard";

const ShimmerUI = () => {
  const videocards = [];


  for (let i = 0; i < 20; i++) {
    videocards.push(<Videocard key={i} />);
  }

  return (
    <div className="bg-gray-400">
      {videocards}
    </div>
  );
}

export default ShimmerUI;
