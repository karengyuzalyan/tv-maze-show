// Module imports.
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Col,
  Row,
  Container,
} from 'reactstrap';
import parser from 'html-react-parser';
import get from 'lodash/get';
import moment from 'moment';

// Internal imports
import { BreadCrumbs } from 'src/components/breadcrumbs/index';
import { InfoWrapper } from 'src/components/info-wrapper/index';
import { Loader } from 'src/components/loader/index';
import { EpisodePropTypes } from 'src/prop-types';
import { configs } from 'src/configs';

export class Episode extends Component {
  static propTypes = {
    episode: EpisodePropTypes,
    location: PropTypes.shape({
      pathname: PropTypes.string,
      search: PropTypes.string,
    }),
    pending: PropTypes.number,
  };

  static defaultProps = {
    episode: {
      data: {
        summary: '',
      }
    },
    location: {},
    pending: 0,
  };

  componentDidMount() {
    const { getEpisode, location } = this.props;
    const { pathname, search } = location;
    const query = pathname + search;

    getEpisode(query);
  }

  shouldComponentUpdate(nextProps){
    const { episode } = nextProps;
    const currentEpisodeID = get(episode, 'data.id', 0);
    const nextEpisodeID = get(episode, 'data.id', 0);

    return episode && nextEpisodeID ? nextEpisodeID === currentEpisodeID : true;
  }

  render() {
    const { episode, pending } = this.props;

    const data = get(episode, 'data', {});
    const {
        url,
        name,
        image,
        season,
        number,
        airdate,
        airtime,
        summary,
    } = data;
    const imageSrc = image ? image.original : `${configs.BASE_URL}/images/no-image-available.jpg`;
    const airdateFormat = moment(airdate).format('MMM DD, YYYY');

    return (
      <Loader status={pending}>
        <BreadCrumbs
          breadCrumbs={[
            { active: false, name: 'Home', url: '/' },
            { active: false, name: 'The Powerpuff Girls', url: `/shows/${configs.SHOW_ID}/details` },
            { active: true, name },
          ]}
        />
        <Container>
          <h2 className="m-y-2 show-title-color">{name}</h2>
          <Row>
            <Col xs={12} md={8}>
              <Row>
                <Col xs={12} md={4}>
                    <a href={url} title={`Click to move to ${name} Episode original Page`}>
                        <img className="episode-image" width="100%" src={imageSrc} alt="The Powerpuff Girls" />
                    </a>
                </Col>
                <Col xs={12} md={8}>
                  {summary ? parser(summary) : 'We don`t have a summary for Green Wing yet. Hang in there, or go ahead and contribute one.'}
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
      </Loader>
    );
  }
}

