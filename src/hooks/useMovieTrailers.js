import { useEffect } from "react";
import { API_OPTIONS } from "../components/utils/constants";
import { useDispatch, useSelector } from "react-redux";
import { addTrailerVideo } from "../components/utils/moviesSlice";

const useMovieTrailers = (movieId) => {
  const dispatch = useDispatch();
  const trailer = useSelector((store) => store.movies.trailer);

  //Fetch Trailer Video and update the store with same.
  const fetchMovie = async () => {
    const data = await fetch(
      `https://api.themoviedb.org/3/movie/${movieId}/videos`,
      API_OPTIONS
    );
    const json = await data.json();
    const filteredData = json.results.filter(
      (movies) => movies.type === "Trailer"
    );
    const trailer = filteredData.length ? filteredData[0] : json.results[0];
    dispatch(addTrailerVideo(trailer));
  };

  useEffect(() => {
    !trailer && fetchMovie();
  }, []);
};

export default useMovieTrailers;
