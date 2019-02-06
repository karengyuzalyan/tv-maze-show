import {
    GET_SHOW_BY_ID_STARTED,
    GET_SHOW_BY_ID_SUCCESS,
    GET_SHOW_BY_ID_FAIL,
  } from 'src/actions/types';

const INITIAL_STATE = {
  data: {
    id: 1
  },
  status: 200,
  headers: {}
};

export default function (state = INITIAL_STATE, action) {
  switch (action.type) {
    case GET_SHOW_BY_ID_STARTED:
      return { ...state, pending: action.pending };
    case GET_SHOW_BY_ID_SUCCESS:
      return { ...state, details: action.data, pending: action.pending };
    case GET_SHOW_BY_ID_FAIL:
      return { ...state };
    default:
      return state;
  }
}