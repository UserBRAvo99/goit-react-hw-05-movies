import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';

import { getMovieReviews } from 'components/fetchReviews';

import style from './reviews.module.scss';

function Reviews() {
  const [filmReviews, setFilmReviews] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMovieReviews(moviesId);
        setFilmReviews(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, [moviesId]);
  return (
    <ul className={style.list}>
      {filmReviews?.results?.length &&
        filmReviews?.results?.map(item => {
          return (
            <li key={shortid()}>
              <p className={style.author}>{item.author}</p>
              <p className={style.content}>{item.content}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Reviews;
