import React, { useEffect, useState } from "react";
import { useErrorHandler } from "react-error-boundary";

const SearchComponent = ({ searchInput }) => {
  let movie = {
    Title: "Into The Badlands",
    Year: "2015",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGUzMmNkMWMtNTI4OC00ZGY1LThlZmUtMDI5YjYyZDE2MzE2XkEyXkFqcGdeQXVyMzY0MTE3NzU@._V1_SX300.jpg",
  };

  let movieTwo = {
    Title: "Vikings",
    Year: "2013",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BODk4ZjU0NDUtYjdlOS00OTljLTgwZTUtYjkyZjk1NzExZGIzXkEyXkFqcGdeQXVyMDM2NDM2MQ@@._V1_SX300.jpg",
  };
  let movieThree = {
    Title: "Boyka",
    Year: "2016",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BNGQ4YjhmNzUtZTI1MC00OTQ3LTk4MTItYWJhNDdmNGZjOWU2XkEyXkFqcGdeQXVyMTA2NjI0MQ@@._V1_SX300.jpg",
  };
  let movieFour = {
    Title: "Money Heist",
    Year: "2017",
    Poster:
      "https://m.media-amazon.com/images/M/MV5BZDdjYmZlMzQtN2JmZS00N2JkLTg4MGYtMGI3OGVhMWQ1MzMyXkEyXkFqcGdeQXVyMTEzMTI1Mjk3._V1_SX300.jpg",
  };
  const [movieItem, setMovieItem] = useState([
    movie,
    movieTwo,
    movieThree,
    movieFour,
  ]);
  const [OptionValue, setOptionValue] = useState("");

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(
          `https://www.omdbapi.com/?s=${searchInput}&apikey=2dd35d36`
        );
        const movieData = await res.json();

        if (movieData.Search) {
          setMovieItem(movieData.Search);
          console.log(movieData);
        }
      } catch (err) {
        //Errorhandler(err)

        console.log("Encountered problem");
      }
    };

    fetchData();
  }, [searchInput]);

  const filterYear = () => {
    const releaseDate = movieItem.filter((item) => item.Year === OptionValue);
    console.log(releaseDate);
    if (releaseDate.length > 0) {
      setMovieItem(releaseDate);
    }
    console.log(OptionValue);
  };

  const optionHandler = (event) => {
    setOptionValue(event.target.value);
  };

  return (
    <>
      <div>
        <button className="buttonfilter" onClick={filterYear}>
          fil:Year
        </button>
        <select onChange={optionHandler}>
          <option>Select Year</option>
          {movieItem.map((item) => (
            <>
              <option className="buttonyear" value={item.Year}>
                {item.Year}
              </option>
            </>
          ))}
        </select>
        <div className="movies">
          {movieItem.map((item) => {
            return (
              <div className="movie">
                <h4>{item.Title}</h4>

                <img
                  className="image"
                  src={item.Poster}
                  alt={item.Title + " image"}
                ></img>

                <p>{item.Year}</p>
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};
export default SearchComponent;
