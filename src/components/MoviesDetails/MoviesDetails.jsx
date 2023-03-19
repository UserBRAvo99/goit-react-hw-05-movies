/* eslint-disable array-callback-return */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { getMovieId } from 'components/fetchId';

function MoviesDetails() {
  const [film, setFilm] = useState([]);
  const { moviesId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMovieId(moviesId);
        setFilm(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, [moviesId]);

  return (
    <div>
      <ul>
        <li>
          <h3>{film.title}</h3>
          <p></p>
        </li>
        <li>
          <h4>Overview</h4>
          <p></p>
        </li>
        <li>
          <h5>Genres</h5>
          {film === [] && console.log(film.genres.map(e => console.log(e)))}
        </li>
      </ul>
    </div>
  );
}
export default MoviesDetails;
