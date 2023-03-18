// import style from '../components/app.module.scss';

import { Route, Routes, Link } from 'react-router-dom';

import Home from './Home';
import Movies from './Movies';

export const App = () => {
  return (
    <div className="App">
      <header>
        <div>
          <Link to="/">Home</Link>
          <Link to="/movies">Movies</Link>
        </div>
      </header>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/movies" element={<Movies />}></Route>
      </Routes>
    </div>
  );
};
