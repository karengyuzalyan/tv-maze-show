import reducer from './show-details'
import {
    GET_SHOW_BY_ID_STARTED,
    GET_SHOW_BY_ID_SUCCESS,
    GET_SHOW_BY_ID_FAIL,
  } from 'src/actions/types';

const INITIAL_STATE = {
  data: {
      id: 1
  }
};

describe('show-details reducer', () => {
  test('should return the initial state when fails', () => {
    expect(reducer(undefined, {
      type: GET_SHOW_BY_ID_FAIL,
    })).toEqual(INITIAL_STATE)
  })

  test('should handle GET_SHOW_BY_ID_STARTED', () => {
    expect(
      reducer([], {
        type: GET_SHOW_BY_ID_STARTED,
        pending: true,
      })
    ).toEqual(
      {
        pending: true
      }
    )
  })

  test('should handle GET_SHOW_BY_ID_SUCCESS', () => {
    expect(
      reducer([], {
        type: GET_SHOW_BY_ID_SUCCESS,
        data: { id: 1, name: 'test name' },
        pending: false,
      })
    ).toEqual(
      {
        details: { id: 1, name: 'test name' },
        pending: false
      }
    )
  })
})