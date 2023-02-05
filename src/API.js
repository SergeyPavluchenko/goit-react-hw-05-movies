import axios from 'axios';
axios.defaults.baseURL = 'https://api.themoviedb.org/3';

const key = '79c27b95cee402d8dc106d8509c1b5f2';

export async function getTrending() {
  const { data } = await axios.get(`/trending/movie/day?api_key=${key}`);
  const response = data.results;
  return response;
}

export async function getMovies(searchQuery) {
  const { data } = await axios.get(
    `/search/movie?api_key=${key}&language=en-US&page=1&query=${searchQuery}`
  );
  // const { results } = data;
  // return { results };
  return data.results;
}

export async function getMovieDeteils(id) {
  const { data } = await axios.get(
    `/movie/${id}?api_key=${key}&language=en-US`
  );
  return data;
}

export async function getMovieCredits(id) {
  const { data } = await axios.get(
    `/movie/${id}/credits?api_key=${key}&language=en-US`
  );
  return data.cast;
}

export async function getMovieReviews(id) {
  const { data } = await axios.get(
    `/movie/${id}/reviews?api_key=${key}&language=en-US&page=1`
  );
  return data.results;
}
