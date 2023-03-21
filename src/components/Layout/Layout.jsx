import React from 'react';

import Header from 'components/Header';
import { Outlet, useNavigate } from 'react-router-dom';

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
      <div>
        <button onClick={handleClickBack}>Go back</button>
        <button onClick={handleClickNext}>Go next</button>
      </div>
      <div>
        <Outlet />
      </div>
    </>
  );
}

export default Layout;
