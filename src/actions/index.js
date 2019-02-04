import base from 'axios';
import { configs } from 'src/configs';
import {
    GET_SHOW_BY_ID_SUCCESS,
    GET_SHOW_BY_ID_FAIL,
    GET_EPISODE_BY_NUMBER_SUCCESS,
    GET_EPISODE_BY_NUMBER_FAIL,
    GET_EPISODES_BY_SHOW_SUCCESS,
    GET_EPISODES_BY_SHOW_FAIL,
  } from './types';

const axios = base.create({
  baseURL: configs.apiUrl
});
  
export function getShowByID(id) {
    console.log(id, 'ID')
    return dispatch => {
        axios.get(`/shows/${id}`)
        .then(res => {
            dispatch({ type: GET_SHOW_BY_ID_SUCCESS, data: res });
        })
        .catch(err => {
            dispatch({ type: GET_SHOW_BY_ID_FAIL, payload: err });
        });
    };
}

export function getEpisodeByNumber(query) {
    return dispatch => {
        axios.get(`${query}`)
        .then(res => {
            dispatch({ type: GET_EPISODE_BY_NUMBER_SUCCESS, data: res });
        })
        .catch(err => {
            dispatch({ type: GET_EPISODE_BY_NUMBER_FAIL, payload: err });
        });
    };
}

export function getEpisodesByShow(id) {
    return dispatch => {
        axios.get(`/shows/${id}/episodes`)
        .then(res => {
            dispatch({ type: GET_EPISODES_BY_SHOW_SUCCESS, data: res });
        })
        .catch(err => {
            dispatch({ type: GET_EPISODES_BY_SHOW_FAIL, payload: err });
        });
    };
}