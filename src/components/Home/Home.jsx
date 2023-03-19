import { useState } from 'react';
import { useEffect } from 'react';
import { Link } from 'react-router-dom';

import { getMoviesTrending } from '../fetch';
// import MoviesDetails from 'components/MoviesDetails';

function Home() {
  const [dataFilms, setDataFilms] = useState([]);
  useEffect(() => {
    const getData = async () => {
      try {
        const {
          data: { results },
        } = await getMoviesTrending();
        console.log(results);
        if (results.length === 0) return;
        setDataFilms(results);
        console.log();
      } catch (error) {
        throw new Error(error);
      }
    };
    getData();
  }, []);
  return (
    <ul>
      {dataFilms.map(film => {
        return (
          <li key={film.id}>
            <Link to={`/movies/${film.id}`}>{film.title}</Link>
          </li>
        );
      })}
    </ul>
  );
}
export default Home;
