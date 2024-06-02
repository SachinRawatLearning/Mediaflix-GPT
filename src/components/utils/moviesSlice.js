import { createSlice } from "@reduxjs/toolkit";

const moviesSlice = createSlice({
  name: "movies",
  initialState: {
    nowPlayingMovies: null,
    popularMovies: null,
    topRatedMovies: null,
    onTheAirMovies: null,
    trailerVideo: null,
  },
  reducers: {
    addNowPlayingMovies: (state, action) => {
      state.nowPlayingMovies = action.payload;
    },
    addPopularMovies: (state, action) => {
      state.popularMovies = action.payload;
    },
    addTopRatedMovies: (state, action) => {
      state.topRatedMovies = action.payload;
    },
    addOnTheAirMovies: (state, action) => {
      state.onTheAirMovies = action.payload;
    },
    addTrailerVideo: (state, action) => {
      state.trailerVideo = action.payload;
    },
    removeMovies: (state) => {},
  },
});

export const {
  addNowPlayingMovies,
  removeMovies,
  addTrailerVideo,
  addPopularMovies,
  addOnTheAirMovies,
  addTopRatedMovies,
} = moviesSlice.actions;
export default moviesSlice.reducer;
