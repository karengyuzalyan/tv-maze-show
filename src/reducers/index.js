import { combineReducers } from 'redux'
import showData from './show-details';
import episodesList from './episodes-list';
import episode from './episode';

export default combineReducers({
  episode,
  showData,
  episodesList,
})