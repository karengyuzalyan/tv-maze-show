// Module imports.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux';
import {
  Col,
  Row,
  Container,
  Breadcrumb,
  BreadcrumbItem,
} from 'reactstrap';
import parser from 'html-react-parser';
import { Link } from 'react-router-dom';
import isEqual from 'lodash/isEqual';
import moment from 'moment';

// Internal imports
import { EpisodePropTypes } from 'src/prop-types';
import { configs } from 'src/configs';
import { getEpisodeByNumber } from 'src/actions'
import { InfoWrapper } from 'src/components/info-wrapper/index';

export class EpisodeUI extends Component {
  static propTypes = {
    episode: EpisodePropTypes,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
    })
  };

  static defaultProps = {
    episode: {
      data: {
        summary: '',
      }
    },
    location: {},
  };

  componentDidMount() {
    const { getEpisode, location } = this.props;
    const { pathname, search } = location;
    const query = pathname + search;

    getEpisode(query);
  }

  shouldComponentUpdate(nextProps){
    const { episode } = nextProps;

    return episode ? !isEqual(episode, this.props.episode) : true;
  }

  render() {
    const { episode } = this.props;
    if(!episode) return null;

    const {
      data: {
        url,
        name,
        image,
        season,
        number,
        airdate,
        airtime,
        summary,
      }
    } = episode;
    const imageSrc = image ? image.original : require('src/no-image-available.jpg');
    const airdateFormat = moment(airdate).format('MMM DD, YYYY');

    return (
      <div>
        <Breadcrumb className="breadcrumbs-wrapper">
          <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
          <BreadcrumbItem><Link to={`/shows/${configs.SHOW_ID}/details`}>The Powerpuff Girls</Link></BreadcrumbItem>
          <BreadcrumbItem active>{name}</BreadcrumbItem>
        </Breadcrumb>
        <Container>
          <h2 className="m-y-2 show-favorite-color">{name}</h2>
          <Row>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={4}>
                    <a href={url} title={`Click to move to ${name} Episode original Page`}>
                        <img className="episode-image" width="100%" src={imageSrc} alt="The Powerpuff Girls" />
                    </a>
                </Col>
                <Col xs={12} md={8}>
                  {parser(summary)}
                </Col>
              </Row>
            </Col>
            <Col xs={12} md={4}>
              <InfoWrapper
                title="Episode Info"
                info={[
                  { name: 'Show', data: 'The Powerpuff Girls' },
                  { name: 'Number', data: `Season: ${season}, Number: ${number}` },
                  { name: 'Airdate', data: `${airdateFormat} at ${airtime}` },
                ]}
              />
            </Col>
          </Row>
        </Container>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  episode: state.episode.data
});

const mapDispatchToProps = dispatch => {
  return {
    getEpisode: (query) => {
      dispatch(getEpisodeByNumber(query));
    },
  };
};

export const Episode = connect(mapStateToProps, mapDispatchToProps)(EpisodeUI);
