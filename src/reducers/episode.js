import {
    GET_EPISODE_BY_NUMBER_SUCCESS,
    GET_EPISODE_BY_NUMBER_FAIL
    } from 'src/actions/types';
  
  export default function (state = {}, action) {
    switch (action.type) {
      case GET_EPISODE_BY_NUMBER_SUCCESS:
        return { ...state, data: action.data };
      case GET_EPISODE_BY_NUMBER_FAIL:
        return { ...state };
      default:
        return state;
    }
  }