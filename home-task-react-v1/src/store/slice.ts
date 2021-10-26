import { createSelector, createSlice } from '@reduxjs/toolkit';
import initialState from './initialState.json';
import { CardPosterProp } from "../components/EditButton";

type StateData = {
   movie: CardPosterProp,
   id: number,
}

export const selector = createSelector(
    state => state,
    ({initialState, isVisibledDetailsMovie}) => ({
        isVisibledDetailsMovie,
        movieList: movieList.filter(({id}) => (
            !isVisibledDetailsMovie || (isVisibledDetailsMovie && id)
        )),
    }),
);
// element.id, action.payload
const slice = createSlice({
    name: 'netflix',
    initialState: {
        movieList: initialState.data,
        isVisibleDetailsMovie: false,
    },
    reducers: {
        setVisibleDetailsMovie: (state, action) => {
            state.isVisibleDetailsMovie = action.payload;
        },
        getMoviesStart: (state, action) => {},
        getMoviesSuccess: (state, action) => {},
        getMoviesError: (state, action) => {},
    },
    // extraReducers: {},
})

export default slice.reducer;

export const {
    setVisibleDetailsMovie,
    getMoviesStart,
    getMoviesSuccess,
    getMoviesError,
} = slice.actions;
/*
REDUCER!!!
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
*/

/*
ACTION!!!
import { createAsyncThunk, createSlice, PayloadAction } from '@reduxjs/toolkit';
import {ACTIONS} from './actionTypes';
import { AppDispatch, AppThunk } from './index';

export const sort = (value: string) => (dispatch: AppThunk) => {
    dispatch({type: ACTIONS.SORT, payload: value}, null, null);
    dispatch(getMovies('', value));
}

export const getMovies = (genre: string, sort: string) => (dispatch: AppDispatch) => {
    dispatch({type: ACTIONS.GET_MOVIES_START, payload: []});
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
            dispatch({type: ACTIONS.GET_MOVIES_ERROR, payload: [], error: error});
        });
}
*/
