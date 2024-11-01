import { useDispatch } from "react-redux";
import { toggleMenu } from "../utils/appSlice";
import { useEffect, useState } from "react";
import SearchResults from "./searchResults";
import { GOOGLE_API_KEY } from "../utils/constants";
import { searchResults } from "../utils/searchSlice";
import { Link, useNavigate } from "react-router-dom";

const Navbar = () => {
  const [searchTerm, setSearchTerm] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const HandleToggleMenu = () => {
    dispatch(toggleMenu());
  };
  const fetchingSearch = async () => {
    const response = await fetch(
      "http://suggestqueries.google.com/complete/search?client=youtube&ds=yt&client=firefox&q=" +
        searchTerm
    );
    const resp = await response.json();
    // console.log(resp[1]);
    setSuggestions(resp[1]);
  };
  const HandleSearch = async (term) => {
    const response = await fetch(
      "https://youtube.googleapis.com/youtube/v3/search?part=snippet&maxResults=25&q=" +
        term +
        "&key=" +
        GOOGLE_API_KEY
    );
    const resp = await response.json();
    dispatch(searchResults(resp.items));
    navigate("/search-videos");
    setSearchTerm("");
    console.log(resp.items);
  };
  const HandleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    HandleSearch(suggestion);
  };
  useEffect(() => {
    fetchingSearch();
  }, [searchTerm]);
  return (
    <div className=" grid grid-flow-col p-4 shadow-md border-slate-400">
      <div className="h-10 flex grid-cols-1">
        <img
          className="cursor-pointer bg-gray-300 rounded-lg mr-2"
          onClick={() => HandleToggleMenu()}
          src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b2/Hamburger_icon.svg/1200px-Hamburger_icon.svg.png"
          alt="menu"
        />
       <Link className="flex-shrink-0"  to="/"> <img 
       className="w-[100px] rounded-lg h-[40px] "
          src="logo.png"
        /></Link>
      </div>
      <div className="h-8 grid-cols-10 relative text-black">
        <input
          onChange={(e) => setSearchTerm(e.target.value)}
          value={searchTerm}
          className="w-[80%] bg-gray-200 p-2 rounded-l-full border border-gray-800 placeholder-black"
          type="text"
          placeholder="Search..."
        />
        <button
          onClick={()=>HandleSearch(searchTerm)}
          className="bg-gray-200 p-2 rounded-r-full border border-gray-800"
        >
          Search
        </button>
        {searchTerm && (
          <SearchResults
            results={suggestions}
            onSuggestionClick={HandleSuggestionClick}
          />
        )}
      </div>

      <div className="h-10 grid-cols-1">
        <img
          className="h-10"
          src="https://icons.veryicon.com/png/o/internet--web/prejudice/user-128.png"
          alt="user-img"
        />
      </div>
    </div>
  );
};

export default Navbar;
