import { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import shortid from 'shortid';

import { getCastId } from 'components/fetchCast';

import style from './cast.module.scss';

function Cast() {
  const [castMovies, setCastMovies] = useState(null);
  const { moviesId } = useParams();

  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getCastId(moviesId);
        console.log(data);
        setCastMovies(data);
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, [moviesId]);
  return (
    <ul>
      {castMovies?.cast?.length &&
        castMovies?.cast?.map(item => {
          return (
            <li key={shortid()} className={style.item}>
              <img
                className={style.img}
                src={`https://image.tmdb.org/t/p/w500${item.profile_path}`}
                alt={item.name}
              />
              <p>{item.name}</p>
            </li>
          );
        })}
    </ul>
  );
}

export default Cast;
