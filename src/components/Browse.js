import Header from "./Header";
import useNowPlayingMovies from "../hooks/useNowPlayingMovies";
import MainContainer from "./MainContainer";
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovies from "../hooks/usePopularMovies";
import GPTSearch from "./GPTSearch";
import { useSelector } from "react-redux";

const Browse = () => {
  const isShowGptSearch = useSelector((store) => store.gpt.showGptSearch);

  //Fetch movies from TMDB in custom hooks and update the store.
  useNowPlayingMovies();
  usePopularMovies();

  return (
    <div>
      <Header />
      {isShowGptSearch ? (
        <GPTSearch />
      ) : (
        <>
          {" "}
          <MainContainer />
          <SecondaryContainer />
        </>
      )}

      {/*
        Main Container
          - Video Background
          - Video Title

        Secondary Container
          - Movie List * n
            - cards * n
      */}
    </div>
  );
};

export default Browse;
