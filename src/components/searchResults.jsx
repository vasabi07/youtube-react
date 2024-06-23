/* eslint-disable react/prop-types */


const SearchResults = ({results,onSuggestionClick}) => {
  const HandleClick = (res)=>{
    onSuggestionClick(res);
  }
  return (
    <div className="bg-absolute top-0 left-0 z-10 bg-white shadow-lg rounded-lg  w-[80%] flex flex-col justify-start items-start text-black">{results.map((result,id)=>(
        <button onClick={()=>HandleClick(result)} className="py-1 px-2 border-b last:border-none" key={id}>{result}</button>
    ))}</div>
  )
}

export default SearchResults