import { Route, Routes } from 'react-router-dom';

import Layout from './Layout';
import Home from './Home';
import Movies from './Movies';
import MoviesDetails from './MoviesDetails';
import Cast from './Cast';

export const App = () => {
  return (
    <div className="App">
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />}></Route>
          <Route path="/movies" element={<Movies />}></Route>
          <Route path="/movies/:moviesId" element={<MoviesDetails />}>
            <Route path="cast" element={<Cast />}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};
