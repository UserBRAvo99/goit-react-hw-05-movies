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
        console.log(data.genres);
        setFilm(data);
        console.log(film.genres);
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
          <p></p>
        </li>
      </ul>
    </div>
  );
}
export default MoviesDetails;
