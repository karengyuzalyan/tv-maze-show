import {
    GET_SHOW_BY_ID_SUCCESS,
    GET_SHOW_BY_ID_FAIL,
  } from 'src/actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_SHOW_BY_ID_SUCCESS:
      return { ...state, details: action.data };
    case GET_SHOW_BY_ID_FAIL:
      return { ...state };
    default:
      return state;
  }
}