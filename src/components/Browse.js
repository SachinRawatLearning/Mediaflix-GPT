import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";

const Browse = () => {
  //Fetch movies from TMDB in custom hooks and update the store.
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {/*
        Main Container
          - Video Background
          - Video Title

        Secondary Container
          - Movie List * n
            - cards * n
      */}
      <MainContainer />
      <SecondaryContainer />
    </div>
  );
};

export default Browse;
