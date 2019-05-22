import { connect } from 'react-redux';
import { getEpisodeByNumber } from 'src/actions/index'
import { Episode } from './../components/episode'

const mapStateToProps = state => {
    const { episode: { data, pending } } = state
    return { 
      episode: data,
      pending
    }
  };
  
  const mapDispatchToProps = dispatch => {
    return {
      getEpisode: (query) => {
        dispatch(getEpisodeByNumber(query));
      },
    };
  };
  
  export default connect(mapStateToProps, mapDispatchToProps)(Episode);