import axios from 'axios';

const KEY = '40b7484b6ec326f8fea3361b4d791f3d';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getMoviesTrending = async () => {
  const query = `/3/trending/movie/day?api_key=${KEY}`;
  const request = await axios.get(query);
  return request;
};
