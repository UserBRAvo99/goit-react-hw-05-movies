import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';

import { getMovieReviews } from 'components/fetchReviews';

function Reviews() {
  const [filmReviews, setFilmReviews] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMovieReviews(moviesId);
        console.log(data);
        setFilmReviews(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, [moviesId]);
  return (
    <ul>
      {filmReviews?.results?.length &&
        filmReviews?.results?.map(item => {
          return (
            <li key={shortid()}>
              <p>{item.author}</p>
              <p>{item.content}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Reviews;
