// Modules imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { ListGroup, ListGroupItem  } from 'reactstrap';
import { Row, Col } from 'reactstrap';
import { Link } from 'react-router-dom';

// Internal imports
import { EpisodePropTypes } from 'src/prop-types';
// Css import
import './episodes-list.scss';

export class EpisodesList extends Component {
    static propTypes = {
        episodes: PropTypes.arrayOf(EpisodePropTypes),
        showID: PropTypes.string,
    }

    render() {
        const { episodes, showID } = this.props;

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
}
