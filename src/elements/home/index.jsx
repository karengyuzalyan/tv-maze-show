// Modules imports
import React from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';

// Internal imports.
// Configs imports
import { configs } from 'src/configs';

// Css imports 
import './styles.scss';

// Youtube video options
const OPTIONS = {
  height: '400',
  width: '100%',
  frameborder: "0",
};

/**
 * Function below sets the active tab.
 * @param {Event} event - Synthetic event
 */
function onReady(event) {
  event.target.pauseVideo();
}

export function Home() {
  return (
    <div className="home">
      <YouTube
        videoId="5lYZcIC6bqU"
        opts={OPTIONS}
        autoplay
        onReady={onReady}
      />
      <div className="content d-flex f-column a-center">
        <h2>Welcome To</h2>
        <Link to={`/shows/${configs.SHOW_ID}/details`} title="Please click here to move to the Show Details page">
          <h2 className="show-title">The Powerpuff Girls</h2>
        </Link>
        <h2>Show</h2>
        <h2>Home Page</h2>
      </div>
    </div>
  );
}
