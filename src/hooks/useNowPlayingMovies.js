import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addNowPlayingMovies } from "../components/utils/moviesSlice";

const useNowPlayingMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();

  const nowPlayingMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/movie/now_playing?&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addNowPlayingMovies(json.results));
  };

  useEffect(() => {
    nowPlayingMovies();
  }, []);
};

export default useNowPlayingMovies;
