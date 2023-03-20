/* eslint-disable array-callback-return */
import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { getMovieId } from 'components/fetchId';

function MoviesDetails() {
  const [film, setFilm] = useState(null);
  //   const [srcImg, setSrcImg] = useState('');
  const { moviesId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMovieId(moviesId);
        console.log(data);
        setFilm(data);
        // setSrcImg(data.poster_path);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, [moviesId]);
  //   const src = `https://image.tmdb.org/t/p/w500${film.profile_path}`;
  return (
    <div>
      {' '}
      {film && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt="img"
          />
          <ul>
            <li>
              <h3>{film?.title}</h3>
              <p></p>
            </li>
            <li>
              <h4>Overview</h4>
              <p></p>
            </li>
            <li>
              <h5>Genres</h5>
              {film?.genres?.length &&
                console.log(film?.genres.map(item => item.name))}
            </li>
          </ul>
        </>
      )}
    </div>
  );
}
export default MoviesDetails;
