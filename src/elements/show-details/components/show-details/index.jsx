// Module imports
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import get from 'lodash/get';
import parser from 'html-react-parser';
import { Container, Row, Col } from 'reactstrap';

// Internal imports
import { ShowDetailsPropTypes, EpisodesListPropTypes } from 'src/prop-types';
import { InfoWrapper } from 'src/components/info-wrapper/index';
import { BreadCrumbs } from 'src/components/breadcrumbs/index';
import { Loader } from 'src/components/loader/index';
import { Episodes } from './../episodes';

// Css imports
import './index.scss';

export class ShowDetails extends Component {
  static propTypes = {
    showData: ShowDetailsPropTypes,
    episodesList: EpisodesListPropTypes,
    pending: PropTypes.number,
  };

  static defaultProps = {
    pending: 0,
    showData: {
      data: {
        image: {},
        summary: '',
        rating: {}
      }
    },
    episodesList: {
      data: []
    }
  }

  componentDidMount(){
    const {
      match,
      getEpisodes,
      getShowDetails,
    } = this.props;
    const { id } = match.params;

    getShowDetails(id);
    getEpisodes(id);
  }

  render() {
    const { pending, showData, episodesList, match: { params: { id } } } = this.props;
    const data = get(showData, 'data', {});
    const {
      type,
      name,
      image,
      status,
      rating,
      summary,
    } = data;

    return (
        <Loader status={pending}>
          <BreadCrumbs
            breadCrumbs={[
              { active: false, name: 'Home', url: '/' },
              { active: true, name },
            ]}
          />
          <Container>
            <h2 className="m-y-2 show-title-color">{name}</h2>
            <Row>
              <Col xs={12} md={8}>
                <Row>
                  <Col xs={12} md={4}>
                    <img className="cover-image" width="100%" src={image.original} alt="The Powerpuff Girls" />
                  </Col>
                  <Col xs={12} md={8}>
                    {parser(summary)}
                  </Col>
                </Row>
              </Col>
              <Col xs={12} md={4}>
                <InfoWrapper
                  title="Show Info"
                  info={[
                    { name: 'Rating', data: rating.average },
                    { name: 'Show Status', data: status },
                    { name: 'Show Type', data: type },
                  ]}
                />
              </Col>
              <Col xs={12} md={8} className="m-y-2">
                <Episodes episodesList={episodesList.data} showID={id} />
              </Col>
            </Row>
          </Container>
        </Loader>
    );
  }
}

