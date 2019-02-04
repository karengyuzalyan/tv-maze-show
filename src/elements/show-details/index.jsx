// Module imports
import React, { Component } from 'react';
import parser from 'html-react-parser';
import { Container, Row, Col } from 'reactstrap';
import { connect } from 'react-redux';
import { Breadcrumb, BreadcrumbItem } from 'reactstrap';
import { Link } from 'react-router-dom';

// Internal imports
import { ShowDetailsPropTypes, EsisodesListPropTypes } from 'src/prop-types';
import { InfoWrapper } from 'src/components/info-wrapper/index';
import { getShowByID, getEpisodesByShow } from 'src/actions'
import { Episodes } from './episodes';

// Css imports
import './index.scss';

export class ShowDetailsUI extends Component {
  static propTypes = {
    showData: ShowDetailsPropTypes,
    episodesList: EsisodesListPropTypes,
  }.isRequired;

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
    const { showData, episodesList, match: { params: { id } } } = this.props;

    if(!(showData && episodesList)) return null;

    const {
      type,
      name,
      image,
      status,
      rating,
      summary,
    } = showData.data;

    return (
      <div>
        <Breadcrumb className="breadcrumbs-wrapper">
          <BreadcrumbItem><Link to="/">Home</Link></BreadcrumbItem>
          <BreadcrumbItem active>{name}</BreadcrumbItem>
        </Breadcrumb>
        <Container>
          <h2 className="m-y-2 show-favorite-color">{name}</h2>
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
      </div>
    );
  }
}

const mapStateToProps = state => ({
  showData: state.showData.details,
  episodesList: state.episodesList.list,
});

const mapDispatchToProps = dispatch => {
  return {
    getShowDetails: (id) => {
      dispatch(getShowByID(id));
    },
    getEpisodes: (id) => {
      dispatch(getEpisodesByShow(id));
    },
  };
};

export const ShowDetails = connect(mapStateToProps, mapDispatchToProps)(ShowDetailsUI);
