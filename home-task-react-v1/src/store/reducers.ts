import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import { combineReducers } from 'redux';
import { ThunkAction } from 'redux-thunk'
import { ACTIONS } from './actionTypes';

const sort = (state = 'title', {type, payload}: PayloadAction<string>) => {
   return type === ACTIONS.SORT ? state = payload : state;
}

const movies = (state = {movies: [], loading: false, error: null}, {type, payload, error}: PayloadAction<CardPosterProp[]>) => {
    switch (type) {
        case ACTIONS.GET_MOVIES_START:
            return {
                ...state,
                loading: true,
            };
        case ACTIONS.GET_MOVIES_SUCCESS:
            return {
                movies: payload.data,
                loading: false,
                error: null,
            };
        case ACTIONS.GET_MOVIES_ERROR:
            return {
                ...state,
                error: error,
                loading: false,
            };
        default:
            return state;
    }
};

const rootReducer = combineReducers({
    sort,
    movies,
});

export default rootReducer;
