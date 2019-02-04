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

// The Function bellow received the ID argument for getting the Show information.
export function getShowByID(ID) {
    return dispatch => {
        axios.get(`/shows/${ID}`)
        .then(res => {
            dispatch({ type: GET_SHOW_BY_ID_SUCCESS, data: res });
        })
        .catch(err => {
            dispatch({ type: GET_SHOW_BY_ID_FAIL, payload: err });
        });
    };
}

// The Function bellow received the query for getting the Episode information by Show, Season and Number of episode.
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

// The Function bellow received the ID argument for getting the Episodes list by Show ID.
export function getEpisodesByShow(ID) {
    return dispatch => {
        axios.get(`/shows/${ID}/episodes`)
        .then(res => {
            dispatch({ type: GET_EPISODES_BY_SHOW_SUCCESS, data: res });
        })
        .catch(err => {
            dispatch({ type: GET_EPISODES_BY_SHOW_FAIL, payload: err });
        });
    };
}