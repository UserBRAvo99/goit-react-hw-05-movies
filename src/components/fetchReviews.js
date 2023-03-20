import axios from 'axios';

const KEY = '40b7484b6ec326f8fea3361b4d791f3d';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getMovieReviews = async id => {
  const query = `/3/movie/${id}/reviews?api_key=${KEY}&language=en-US&page=1`;
  const request = await axios.get(query);
  return request;
};
