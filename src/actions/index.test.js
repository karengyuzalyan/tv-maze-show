import thunk from 'redux-thunk'
import { getShowByID, getEpisodesByShow, getEpisodeByNumber } from './index';
import {
    GET_SHOW_BY_ID_STARTED,
    GET_SHOW_BY_ID_SUCCESS,
    GET_EPISODE_BY_NUMBER_STARTED,
    GET_EPISODE_BY_NUMBER_SUCCESS,
    GET_EPISODES_BY_SHOW_STARTED,
    GET_EPISODES_BY_SHOW_SUCCESS,
  } from './types';

const create = () => {
    const store = {
      getState: jest.fn(() => ({})),
      dispatch: jest.fn()
    }
    const next = jest.fn()
  
    const invoke = action => thunk(store)(next)(action)
  
    return { store, next, invoke }
}

describe('src/actions/index.js', () => {
    describe('getShowByID()', () => {
        test('passes through non-function action', () => {
            const { next, invoke } = create()
            const action = { type: GET_SHOW_BY_ID_STARTED, pending: true }
            invoke(action)
            expect(next).toHaveBeenCalledWith(action)
        })
        
        test('passes dispatch and getState', () => {
            const { store, invoke } = create()
            invoke((dispatch, getState) => {
            dispatch({ type: GET_SHOW_BY_ID_SUCCESS, data: { id: 1 }, pending: false })
            getState()
            })
            expect(store.dispatch).toHaveBeenCalledWith({ type: GET_SHOW_BY_ID_SUCCESS, data: { id: 1 }, pending: false })
            expect(store.getState).toHaveBeenCalled()
        })
    })

    describe('getEpisodeByNumber()', () => {
        test('passes through non-function action', () => {
            const { next, invoke } = create()
            const action = { type: GET_EPISODE_BY_NUMBER_STARTED, pending: true }
            invoke(action)
            expect(next).toHaveBeenCalledWith(action)
        })
        
        test('passes dispatch and getState', () => {
            const { store, invoke } = create()
            invoke((dispatch, getState) => {
            dispatch({ type: GET_EPISODE_BY_NUMBER_SUCCESS, data: { id: 1 }, pending: false })
            getState()
            })
            expect(store.dispatch).toHaveBeenCalledWith({ type: GET_EPISODE_BY_NUMBER_SUCCESS, data: { id: 1 }, pending: false })
            expect(store.getState).toHaveBeenCalled()
        })
    })

    describe('getEpisodesByShow()', () => {
        test('passes through non-function action', () => {
            const { next, invoke } = create()
            const action = { type: GET_EPISODES_BY_SHOW_STARTED, pending: true }
            invoke(action)
            expect(next).toHaveBeenCalledWith(action)
        })
        
        test('passes dispatch and getState', () => {
            const { store, invoke } = create()
            invoke((dispatch, getState) => {
            dispatch({ type: GET_EPISODES_BY_SHOW_SUCCESS, data: { id: 1 }, pending: false })
            getState()
            })
            expect(store.dispatch).toHaveBeenCalledWith({ type: GET_EPISODES_BY_SHOW_SUCCESS, data: { id: 1 }, pending: false })
            expect(store.getState).toHaveBeenCalled()
        })
    })
})