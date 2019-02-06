import {
  GET_EPISODES_BY_SHOW_STARTED,
  GET_EPISODES_BY_SHOW_SUCCESS,
  GET_EPISODES_BY_SHOW_FAIL
  } from 'src/actions/types';

const INITIAL_STATE = {
  data: [],
  status: 200,
  headers: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_EPISODES_BY_SHOW_STARTED:
      return { ...state, pending: action.pending };
    case GET_EPISODES_BY_SHOW_SUCCESS:
      return { ...state, list: action.data, pending: action.pending };
    case GET_EPISODES_BY_SHOW_FAIL:
      return { ...state };
    default:
      return state;
  }
}