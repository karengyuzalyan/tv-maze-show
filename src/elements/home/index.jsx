// Modules imports
import React from 'react';
import YouTube from 'react-youtube';
import { Link } from 'react-router-dom';
import { Container } from 'reactstrap';

// Internal imports.
// Configs imports
import { configs } from 'src/configs';

// Css imports 
import './styles.scss';

// Youtube video options
const OPTIONS = {
  height: '300',
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
    <Container className="home d-flex a-center f-column">
      <YouTube
        videoId="5lYZcIC6bqU"
        opts={OPTIONS}
        className="youtube-video"
        autoplay
        onReady={onReady}
      />
      <div className="Container d-flex f-column a-center">
        <h2 className="home-title">Welcome To</h2>
        <Link to={`/shows/${configs.SHOW_ID}/details`} title="Please click here to move to the Show Details page">
          <h2 className="show-title">The Powerpuff Girls</h2>
        </Link>
        <h2 className="home-title">Show</h2>
        <h2 className="home-title">Home Page</h2>
      </div>
    </Container>
  );
}
