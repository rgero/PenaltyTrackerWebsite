import React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

const NotFoundPage = () => (
  <div>
    <Header/>

    <div className="content-container">
      <div className="content-container__title">
        Page Not Found
      </div>
      <div>
      The page you are trying to access does not exist, please return <Link to="/">home</Link>
      </div>
    </div>
  </div>
);

export default NotFoundPage;
