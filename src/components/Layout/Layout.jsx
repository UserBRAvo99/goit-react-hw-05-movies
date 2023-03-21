import React from 'react';

import Header from 'components/Header';
import { Outlet, useNavigate } from 'react-router-dom';

import style from './layout.module.scss';

function Layout() {
  const navigate = useNavigate();
  const handleClickBack = () => {
    navigate(-1);
  };
  const handleClickNext = () => {
    navigate(+1);
  };
  return (
    <>
      <Header />
      <div className={style.wrapperBtn}>
        <button className={style.btn} onClick={handleClickBack}>
          Go back
        </button>
        <button className={style.btn} onClick={handleClickNext}>
          Go next
        </button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
