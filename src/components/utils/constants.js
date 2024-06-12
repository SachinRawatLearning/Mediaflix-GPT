export const MEDIAFLIX_LOGO =
  "https://play-lh.googleusercontent.com/QEIN01PVrB-wLu-GQVHrIqHFypJyBG8757fdHjGl4bwt77sNHSecmhSg5Fsu2Bhi8pk";

export const BACKGROUND_IMG =
  "https://www.hdwallpapers.in/download/thor_movie_2011-1366x768.jpg";

export const USER_AVATAR_IMG =
  "https://occ-0-3365-2186.1.nflxso.net/dnm/api/v6/vN7bi_My87NPKvsBoib006Llxzg/AAAABYOhzCUj6pGm1zruz-Q4YzX78W3Cienb1j0sf4w_5-F5ZRtbZpAQu0F8WYGb3FFSV-t5OJuWYr-63sPLbA1CfigbGUosCJ4.png?r=0a4";

export const API_OPTIONS = {
  method: "GET",
  headers: {
    accept: "application/json",
    Authorization: "Bearer " + process.env.REACT_APP_TMDB_KEY,
  },
};

export const IMG_CDN_URL = "https://image.tmdb.org/t/p/original";

export const SUPPORTED_LANGUAGES = [
  { identifier: "en", name: "English" },
  { identifier: "hindi", name: "Hindi" },
  { identifier: "spanish", name: "Spanish" },
];

export const OPEN_AI_KEY = process.env.REACT_APP_OPEN_AI_KEY;
