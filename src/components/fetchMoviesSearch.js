import axios from 'axios';

const KEY = '40b7484b6ec326f8fea3361b4d791f3d';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getMoviesSearch = async (search = 'cat') => {
  const query = `3/search/movie?api_key=${KEY}&language=en-US&query=${search}&page=1&include_adult=false`;
  const request = await axios.get(query);
  return request;
};
