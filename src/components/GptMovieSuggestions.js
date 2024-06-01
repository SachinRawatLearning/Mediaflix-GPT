import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null; //Can show Shimmer UI or Error Component

  return (
    <div className="p-4 m-4 bg-black text-white bg-opacity-85">
      <div>
        {movieNames.map((movie, index) => (
          <MovieList
            key={movie}
            title={movie}
            movies={movieResults[index]}
          ></MovieList>
        ))}
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
