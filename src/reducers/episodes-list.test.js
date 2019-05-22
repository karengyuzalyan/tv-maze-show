import reducer from './episodes-list'
import {
    GET_EPISODES_BY_SHOW_STARTED,
    GET_EPISODES_BY_SHOW_SUCCESS,
    GET_EPISODES_BY_SHOW_FAIL
} from 'src/actions/types';

const INITIAL_STATE = {
  data: []
};

describe('episodes-list reducer', () => {
  test('should return the initial state when fails', () => {
    expect(reducer(undefined, {
      type: GET_EPISODES_BY_SHOW_FAIL,
    })).toEqual(INITIAL_STATE)
  })

  test('should handle GET_EPISODES_BY_SHOW_STARTED', () => {
    expect(
      reducer([], {
        type: GET_EPISODES_BY_SHOW_STARTED,
        pending: true,
      })
    ).toEqual(
      {
        pending: true
      }
    )
  })

  test('should handle GET_EPISODES_BY_SHOW_SUCCESS', () => {
    expect(
      reducer([], {
        type: GET_EPISODES_BY_SHOW_SUCCESS,
        data: [{ id: 1, name: 'test name' }],
        pending: false,
      })
    ).toEqual(
      {
        list: [{ id: 1, name: 'test name' }],
        pending: false
      }
    )
  })
})