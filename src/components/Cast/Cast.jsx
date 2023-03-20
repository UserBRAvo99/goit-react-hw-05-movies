import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';

import { getCastId } from 'components/fetchCast';

function Cast() {
  const [castMovies, setCastMovies] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getCastId(moviesId);
        setCastMovies(data.cast);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, [moviesId]);
  return (
    <ul>
      {castMovies?.length &&
        castMovies?.map(item => {
          return <li key={shortid()}>{item.name}</li>;
        })}
    </ul>
  );
}

export default Cast;
