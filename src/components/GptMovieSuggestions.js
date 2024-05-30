import React from "react";
import { useSelector } from "react-redux";
import MovieList from "./MovieList";

const GptMovieSuggestions = () => {
  const { movieNames, movieResults } = useSelector((store) => store.gpt);

  if (!movieNames) return null; //Can show Shimmer UI or Error Component

  return (
    <div className="p-4 m-4 bg-black text-white">
      <div>
        <h1>}</h1>
        <MovieList title={movieNames[0]} movies={movieResults[0]}></MovieList>
      </div>
    </div>
  );
};

export default GptMovieSuggestions;
