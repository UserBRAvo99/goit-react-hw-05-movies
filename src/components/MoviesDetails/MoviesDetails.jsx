import { useEffect } from 'react';
import { useState } from 'react';
import { json, useParams } from 'react-router-dom';

const KEY = '40b7484b6ec326f8fea3361b4d791f3d';

function MoviesDetails() {
  const [film, setFilm] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/550?api_key=40b7484b6ec326f8fea3361b4d791f3d`
    ).then(response => {
      console.log(response);
    });
  }, [id]);
  return (
    <div>
      <p>{id}</p>
    </div>
  );
}
export default MoviesDetails;

// https://api.themoviedb.org/3/movie/{movie_id}?api_key=<<api_key>>&language=en-US
