import reducer from './episode'
import {
    GET_EPISODE_BY_NUMBER_STARTED,
    GET_EPISODE_BY_NUMBER_SUCCESS,
    GET_EPISODE_BY_NUMBER_FAIL
} from 'src/actions/types';

const INITIAL_STATE = {
  data: {
    id: 3
  }
};

describe('episode reducer', () => {
  test('should return the initial state when fails', () => {
    expect(reducer(undefined, {
      type: GET_EPISODE_BY_NUMBER_FAIL,
    })).toEqual(INITIAL_STATE)
  })

  test('should handle GET_EPISODE_BY_NUMBER_STARTED', () => {
    expect(
      reducer([], {
        type: GET_EPISODE_BY_NUMBER_STARTED,
        pending: true,
      })
    ).toEqual(
      {
        pending: true
      }
    )
  })

  test('should handle GET_EPISODE_BY_NUMBER_SUCCESS', () => {
    expect(
      reducer([], {
        type: GET_EPISODE_BY_NUMBER_SUCCESS,
        data: { id: 1, name: 'test name' },
        pending: false,
      })
    ).toEqual(
      {
        data: { id: 1, name: 'test name' },
        pending: false
      }
    )
  })
})