import { connect } from 'react-redux';
import { getShowByID, getEpisodesByShow } from 'src/actions'
import { ShowDetails } from './../components/show-details';

const mapStateToProps = state => {
    const { showData, episodesList } = state;
    return {
      showData: showData.details,
      episodesList: episodesList.list,
      pending: showData.pending && episodesList.pending,
    }
  };
  
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
  
  export default connect(mapStateToProps, mapDispatchToProps)(ShowDetails);