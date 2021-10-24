import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ACTIONS} from './actionTypes';
import { AppDispatch } from './store';

export const sort = (value: string) => (dispatch: AppDispatch) => {
    dispatch({type: ACTIONS.SORT, payload: value});
    dispatch(getMovies('', value));
}

export const getMovies = (genre: string, sort: string) => (dispatch: AppDispatch) => {
    dispatch({type: ACTIONS.GET_MOVIES_START});
    const url = new URL('http://localhost:4000/movies');

    const params = {
        genre: genre ? genre : '',
        sort: sort ? sort : 'title'}

    url.search = new URLSearchParams(params).toString();

    return fetch(url.toString())
        .then((response) => {
            return response.json();
        })
        .then((data) => {
            dispatch({type: ACTIONS.GET_MOVIES_SUCCESS, payload: data, error: null});
        })
        .catch((error) => {
            dispatch({type: ACTIONS.GET_MOVIES_ERROR, payload: null, error: error});
        });
}
