import axios from 'axios';

const KEY = '40b7484b6ec326f8fea3361b4d791f3d';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getMovieId = async id => {
  const query = `/3/movie/${id}?api_key=${KEY}&language=en-US`;
  const request = await axios.get(query);
  return request;
};
