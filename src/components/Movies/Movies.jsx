import { getMoviesSearch } from 'components/fetchMoviesSearch';
import { useEffect } from 'react';
import { useState } from 'react';
import { Link, useSearchParams } from 'react-router-dom';

function Movies() {
  const [films, setFilms] = useState([]);
  const [search, setSearch] = useState('');
  const [searchParams, setSearchParams] = useSearchParams();

  const query = searchParams.get('query');

  const handleSearchFilm = event => {
    event.preventDefault();
    const formEvent = event.currentTarget;
    const inputValue = formEvent.elements.search.value.toLowerCase().trim();

    if (inputValue.length === 0) {
      setFilms([]);

      return;
    }

    if (search === inputValue) return;
    setSearchParams({ query: inputValue });
    setSearch(inputValue);
    setFilms([]);

    formEvent.elements.search.value = '';
  };
  useEffect(() => {
    const getData = async () => {
      try {
        const { data } = await getMoviesSearch(query);
        setFilms(data.results);
      } catch (error) {
        throw new Error(error);
      }
    };

    if (query) {
      getData();
    }
  }, [query]);

  return (
    <div>
      <div>
        <form onSubmit={handleSearchFilm}>
          <label>
            <input name="search" type="text" />
            <button type="submit">Search</button>
          </label>
        </form>
      </div>
      <ul>
        {films.map(film => {
          return (
            <li key={film.id}>
              <Link to={`/movies/${film.id}`}>{film.title}</Link>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default Movies;
