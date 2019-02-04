import {
  GET_EPISODES_BY_SHOW_SUCCESS,
  GET_EPISODES_BY_SHOW_FAIL
  } from 'src/actions/types';

export default function (state = {}, action) {
  switch (action.type) {
    case GET_EPISODES_BY_SHOW_SUCCESS:
      return { ...state, list: action.data };
    case GET_EPISODES_BY_SHOW_FAIL:
      return { ...state };
    default:
      return state;
  }
}