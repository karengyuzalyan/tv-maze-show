// Modules imports
import React from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem  } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Css import
import './episodes-list.scss';

export function EpisodesList({ episodes, showID }) {

    return (
        <ListGroup>
            {episodes.map(episode => (
                <ListGroupItem key={episode.id}>
                    <Row>
                        <Col xs={6} sm={4}>
                            <div className="d-flex j-between">
                                <span className="episode-number" title="Number">{episode.number}</span>
                                <span className="episode-release" title="Date">{episode.airdate}</span>
                            </div>
                        </Col>
                        <Col xs={6} sm={8}>
                            <Link
                                to={`/shows/${showID}/episodebynumber?number=${episode.number}&season=${episode.season}`}
                                title="Move to Episode Page">
                                {episode.name}
                            </Link>
                        </Col>
                    </Row>
                </ListGroupItem>
            ))}
        </ListGroup>
    );
}

EpisodesList.propTypes = {
    episodes: PropTypes.arrayOf(PropTypes.shape({
        airstamp: PropTypes.string,
        image: PropTypes.shape({}),
        summary: PropTypes.string,
        airdate: PropTypes.string,
        runtime: PropTypes.number,
        airtime: PropTypes.string,
        number: PropTypes.number,
        season: PropTypes.number,
        name: PropTypes.string,
        url: PropTypes.string,
        id: PropTypes.number,
    })),
    showID: PropTypes.string,
}
