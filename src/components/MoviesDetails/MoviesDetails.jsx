import shortid from 'shortid';

import { useState } from 'react';
import { useParams } from 'react-router-dom';
import { useEffect } from 'react';

import { getMovieId } from 'components/fetchId';

function MoviesDetails() {
  const [film, setFilm] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMovieId(moviesId);
        console.log(data);
        setFilm(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, [moviesId]);
  return (
    <div>
      {film && (
        <>
          <img
            src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
            alt="img"
          />
          <ul>
            <li>
              <h3>{film?.title}</h3>
              <p>User Score: {Math.round(film.vote_average * 10)}%</p>
            </li>
            <li>
              <h4>Overview</h4>
              <p>{film.overview}</p>
            </li>
            <li>
              <h5>Genres</h5>
              <div>
                {film?.genres?.length &&
                  film?.genres.map(item => {
                    return <p key={shortid()}>{item.name}</p>;
                  })}
              </div>
            </li>
          </ul>
          <div>
            <h5>Add</h5>
          </div>
        </>
      )}
    </div>
  );
}
export default MoviesDetails;
