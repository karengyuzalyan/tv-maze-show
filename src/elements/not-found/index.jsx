// Modules imports
import React from 'react';
import { Link } from 'react-router-dom';

// Internal imports.
// Configs imports
import { configs } from 'src/configs';

// Css imports
import './styles.scss';

export function NotFound() {
    return (
    <div className="not-found d-flex f-column a-center">
      <img src={require('src/page-not-found.jpg')} className="m-b-1 hidden-sm-down" alt="Not Found" />
      <div className="hidden-sm-up m-y-2 t-center"><h1> Ooops!, The Page Not Found</h1></div>
      <h3 className="not-found-move-to-text">You Can Move To</h3>
      <Link to={`/shows/${configs.SHOW_ID}/details`} title="Please click here to move to the Show Details page">
        <h2 className="show-title">The Powerpuff Girls</h2>
      </Link>
      <h3 className="not-found-move-to-text">Show Details Page</h3>
    </div>
  );
}
