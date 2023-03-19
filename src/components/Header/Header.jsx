import { NavLink } from 'react-router-dom';

import style from '../Header/header.module.css';

function Header() {
  return (
    <header className={style.Header}>
      <div className={style.wrapperLink}>
        <NavLink to="/" className={style.title}>
          Home
        </NavLink>
        <NavLink to="/movies" className={style.title}>
          Movies
        </NavLink>
      </div>
    </header>
  );
}
export default Header;
