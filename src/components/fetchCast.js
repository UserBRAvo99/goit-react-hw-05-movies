import axios from 'axios';

const KEY = '40b7484b6ec326f8fea3361b4d791f3d';
axios.defaults.baseURL = 'https://api.themoviedb.org';

export const getCastId = async id => {
  const query = `/3/movie/${id}/credits?api_key=${KEY}&language=en-US`;
  const request = await axios.get(query);
  console.log(request);
  return request;
};

// tps://api.themoviedb.org/3/movie/{movie_id}/credits?api_key=<<api_key>>&language=en-US
