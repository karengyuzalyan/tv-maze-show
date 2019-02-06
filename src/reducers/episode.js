import {
  GET_EPISODE_BY_NUMBER_STARTED,
  GET_EPISODE_BY_NUMBER_SUCCESS,
  GET_EPISODE_BY_NUMBER_FAIL
  } from 'src/actions/types';

const INITIAL_STATE = {
  data: {
    id: 3
  },
  status: 200,
  headers: {},
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_EPISODE_BY_NUMBER_STARTED:
      return { ...state, pending: action.pending };
    case GET_EPISODE_BY_NUMBER_SUCCESS:
      return { ...state, data: action.data, pending: action.pending };
    case GET_EPISODE_BY_NUMBER_FAIL:
      return { ...state };
    default:
      return state;
  }
}