export const API_KEY = "1cf50e6248dc270629e802686245c2c8";
export const BASE_URL = "https://api.themoviedb.org/3";
// shows popular movies
const API_URL = BASE_URL + "/discover/movie?sort_by=popularity.desc&" + API_KEY;
const IMG_URL = "https://image.tmdb.org/t/p/w500";
//for searching
const searchURL = BASE_URL + "/search/movie?" + API_KEY;
