import shortid from 'shortid';

import { useState } from 'react';
import { Link, useParams, Outlet } from 'react-router-dom';
import { useEffect } from 'react';

import { getMovieId } from 'components/fetchId';

import style from './moviesDetails.module.scss';

function MoviesDetails() {
  const [film, setFilm] = useState(null);
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
    <div className={style.wrapper}>
      {film && (
        <>
          <div className={style.wrapperMovie}>
            <img
              className={style.img}
              src={`https://image.tmdb.org/t/p/w500${film.poster_path}`}
              alt="img"
            />
            <ul className={style.list}>
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
                <ul className={(style.list, style.genresList)}>
                  {film?.genres?.length &&
                    film?.genres.map(item => {
                      return (
                        <li className={style.genresItem} key={shortid()}>
                          {item.name}
                        </li>
                      );
                    })}
                </ul>
              </li>
            </ul>
          </div>
          <div>
            <h5>Additional information</h5>
            <ul className={style.list}>
              <li>
                <Link to={`cast`}>Cast</Link>
              </li>
              <li>
                <Link to={`reviews`}>Reviews</Link>
              </li>
            </ul>
          </div>
          <div>
            <Outlet />
          </div>
        </>
      )}
    </div>
  );
}
export default MoviesDetails;
