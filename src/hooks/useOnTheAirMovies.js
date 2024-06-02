import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../components/utils/constants";
import { addOnTheAirMovies } from "../components/utils/moviesSlice";

const useOnTheAirMovies = () => {
  //Fetch data from TMDB API and update store
  const dispatch = useDispatch();
  const onTheAirMovies = useSelector((store) => store.movies.onTheAirMovies);

  const getOnTheAirMovies = async () => {
    const data = await fetch(
      "https://api.themoviedb.org/3/tv/on_the_air?&page=1",
      API_OPTIONS
    );
    const json = await data.json();

    dispatch(addOnTheAirMovies(json.results));
  };

  useEffect(() => {
    !onTheAirMovies && getOnTheAirMovies();
  }, []);
};

export default useOnTheAirMovies;
