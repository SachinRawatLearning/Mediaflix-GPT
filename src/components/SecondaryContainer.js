import React from "react";
import MovieList from "./MovieList";
import { useSelector } from "react-redux";

const SecondaryContainer = () => {
  const movies = useSelector((store) => store.movies);
  return (
    <div className="bg-black pb-10 w-screen">
      <div className="mt-0 md:-mt-56 relative z-20 pl-4 md:pl-12">
        <MovieList title="Now Playing" movies={movies.nowPlayingMovies} />
        <MovieList title="Top Rated Movies" movies={movies.topRatedMovies} />
        <MovieList title="Popular" movies={movies.popularMovies} />
        <MovieList title="On The Air" movies={movies.onTheAirMovies} />
      </div>
    </div>
  );
};

export default SecondaryContainer;
