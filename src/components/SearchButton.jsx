import React, { useEffect, useState } from "react";
import {useErrorHandler} from 'react-error-boundary'
const SearchComponent = ({
  searchInput,
  displayfilter,
  setDisplayfilter,}) => {

  const [movieItem, setMovieItem] = useState([]);
  const [displayItem, setDisplayItem] = useState();
  const [OptionValue, setOptionValue] = useState("");
   const[loading, setLoading]=useState("")
  const Errorhandler=useErrorHandler()
   useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `http://www.omdbapi.com/?s=${searchInput}&apikey=2dd35d36`
        );
        const movieData = await res.json();
        if (movieData.Search) {
          setMovieItem(movieData.Search);
          setLoading("");
          console.log(movieData.Search);
        }
      } catch (err) {
        //Errorhandler(err)
        //ErrorHandle()
        console.log("Encountered problem");
      }
    };

    fetchData();
  }, [searchInput]);
/*const ErrorHandle=()=>{
  return(<div>Pls Enter</div>)
}*/
  const filterYear = () => {
    const releaseDate = movieItem.filter((item) => item.Year === OptionValue);
    console.log(releaseDate);
    const abb = releaseDate.map((item) => {
      return <>{item.Title}</>;
    });
    setDisplayfilter(abb);
    setDisplayItem("");
    console.log(OptionValue);
  };

  const MovieList = () => {
    const itemList = movieItem.map((item) => {
      return ( <div className="movie"><h4>
          {item.Title}</h4><div>
          <img  src={item.Poster}></img></div>
          <p>
          {item.Year}
        </p></div>
      );
    });
    setLoading("Loading...")
    setDisplayItem(itemList);
    setDisplayfilter("");
  };

  const optionHandler = (event) => {
    setOptionValue(event.target.value);
  };

  return (
    < >
      <button className="buttonsearch" onClick={MovieList}>
        SEARCH
      </button><div >
      <button className="buttonfilter"onClick={filterYear}>fil:Year</button>
      <select>
        {movieItem.map((item) => (
          <>
            <option className="buttonyear"value={item.Year} onChange={(e)=>setOptionValue(e.target.value)}>
              {item.Year}
            </option>
          </>
        ))}
      </select>
      < div className="movies">
        {displayItem}
        {displayfilter}
      </div>
    </div>
  </>);
};
export default SearchComponent;

